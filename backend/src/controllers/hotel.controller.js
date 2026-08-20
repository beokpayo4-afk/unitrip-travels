const prisma = require('../config/db')
const { searchHotelOffers } = require('../services/amadeus.service')

function mapCatalogueHotel(hotel) {
  return {
    id: hotel.id,
    name: hotel.name,
    city: hotel.city,
    address: hotel.address,
    image: hotel.image,
    pricePerNight: hotel.pricePerNight != null ? Number(hotel.pricePerNight) : null,
    rating: hotel.rating,
    currency: 'INR',
  }
}

async function searchLocalHotels(destination) {
  const where = destination
    ? {
        OR: [
          { city: { contains: destination, mode: 'insensitive' } },
          { name: { contains: destination, mode: 'insensitive' } },
        ],
      }
    : {}
  const hotels = await prisma.hotel.findMany({ where, take: 40, orderBy: { rating: 'desc' } })
  return hotels.map(mapCatalogueHotel)
}

async function searchHotels(req, res, next) {
  try {
    const { destination, checkIn, checkOut, guests } = req.query
    if (!destination) {
      return res.status(400).json({ message: 'destination is required' })
    }

    const local = await searchLocalHotels(destination)
    try {
      const live = await searchHotelOffers({
        destination,
        checkIn,
        checkOut,
        adults: Number(guests) || 2,
      })
      if (live.length) {
        const seen = new Set(live.map((h) => `${String(h.name || '').toLowerCase()}|${String(h.city || '').toLowerCase()}`))
        const extra = local.filter((h) => !seen.has(`${String(h.name || '').toLowerCase()}|${String(h.city || '').toLowerCase()}`))
        return res.json([...live, ...extra])
      }
    } catch (err) {
      console.error('Live hotel search unavailable:', err.message)
    }

    res.json(local)
  } catch (err) { next(err) }
}

module.exports = { searchHotels }
