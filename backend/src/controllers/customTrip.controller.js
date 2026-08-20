const prisma = require('../config/db')

async function submitCustomTrip(req, res, next) {
  try {
    const { fullName, email, phone, destination, travelDate, travelers, budget, tripType, requirements } = req.body
    if (!fullName || !email || !phone || !destination || !travelDate || !travelers || !budget || !tripType) {
      return res.status(400).json({ message: 'Missing required fields' })
    }
    const request = await prisma.customTripRequest.create({
      data: {
        fullName, email, phone, destination,
        travelDate: new Date(travelDate),
        travelers: Number(travelers),
        budget,
        tripType: tripType.toUpperCase(),
        requirements,
      },
    })
    res.status(201).json(request)
  } catch (err) { next(err) }
}

async function getCustomTrips(req, res, next) {
  try {
    const requests = await prisma.customTripRequest.findMany({ orderBy: { createdAt: 'desc' } })
    res.json(requests)
  } catch (err) { next(err) }
}

module.exports = { submitCustomTrip, getCustomTrips }
