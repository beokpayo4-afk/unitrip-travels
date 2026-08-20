const prisma = require('../config/db')

async function createBooking(req, res, next) {
  try {
    const { tourId, travelDate, travelers, name, email, phone, total } = req.body
    if (!tourId || !travelDate || !travelers) {
      return res.status(400).json({ message: 'tourId, travelDate and travelers are required' })
    }
    const booking = await prisma.booking.create({
      data: {
        userId: req.user.id,
        tourId,
        travelDate: new Date(travelDate),
        travelers: Number(travelers),
        totalPrice: total,
        contactName: name,
        contactEmail: email,
        contactPhone: phone,
        status: 'PENDING',
      },
    })
    res.status(201).json(booking)
  } catch (err) { next(err) }
}

async function getMyBookings(req, res, next) {
  try {
    const bookings = await prisma.booking.findMany({
      where: { userId: req.user.id },
      include: { tour: true },
      orderBy: { createdAt: 'desc' },
    })
    res.json(bookings)
  } catch (err) { next(err) }
}

async function getBooking(req, res, next) {
  try {
    const booking = await prisma.booking.findUnique({ where: { id: req.params.id }, include: { tour: true, bookingTravelers: true } })
    if (!booking) return res.status(404).json({ message: 'Booking not found' })
    res.json(booking)
  } catch (err) { next(err) }
}

async function updateBookingStatus(req, res, next) {
  try {
    const { status } = req.body
    const valid = ['PENDING', 'CONFIRMED', 'CANCELLED', 'COMPLETED']
    if (!valid.includes(status)) return res.status(400).json({ message: 'Invalid status' })
    const booking = await prisma.booking.update({ where: { id: req.params.id }, data: { status } })
    res.json(booking)
  } catch (err) { next(err) }
}

module.exports = { createBooking, getMyBookings, getBooking, updateBookingStatus }
