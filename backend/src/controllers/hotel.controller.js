const prisma = require('../config/db')

// Placeholder search: queries locally seeded hotels.
// Swap this for a live supplier API (e.g. Booking.com/Expedia partner API) in production.
async function searchHotels(req, res, next) {
  try {
    const { destination } = req.query
    const where = destination ? { city: { contains: destination, mode: 'insensitive' } } : {}
    const hotels = await prisma.hotel.findMany({ where, take: 20 })
    res.json(hotels)
  } catch (err) { next(err) }
}

module.exports = { searchHotels }
