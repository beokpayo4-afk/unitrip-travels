const prisma = require('../config/db')
const { searchFlightOffers } = require('../services/amadeus.service')

// Live flight search backed by the Amadeus Flight Offers Search API.
// Requires AMADEUS_API_KEY / AMADEUS_API_SECRET in .env (see backend/.env.example).
async function searchFlights(req, res, next) {
  try {
    const { from, to, departure, passengers } = req.query

    if (!from || !to || !departure) {
      return res.status(400).json({ message: 'from, to and departure are required query params' })
    }

    // Log every search for demand analytics regardless of API outcome.
    prisma.flightSearch.create({
      data: { fromCity: from, toCity: to, departure: new Date(departure), passengers: Number(passengers) || 1 },
    }).catch((err) => console.error('Failed to log flight search:', err.message))

    const offers = await searchFlightOffers({
      from,
      to,
      departureDate: departure,
      adults: Number(passengers) || 1,
    })

    res.json(offers)
  } catch (err) {
    next(err)
  }
}

module.exports = { searchFlights }
