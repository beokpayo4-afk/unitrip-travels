const prisma = require('../config/db')

async function getTours(req, res, next) {
  try {
    const { category, destination } = req.query
    const where = {}
    if (category) where.category = category.toUpperCase()
    if (destination) where.destinationLabel = { contains: destination, mode: 'insensitive' }
    const tours = await prisma.tourPackage.findMany({ where, orderBy: { createdAt: 'desc' } })
    res.json(tours)
  } catch (err) { next(err) }
}

async function getTour(req, res, next) {
  try {
    const tour = await prisma.tourPackage.findUnique({
      where: { id: req.params.id },
      include: { itinerary: { orderBy: { day: 'asc' } }, reviews: true },
    })
    if (!tour) return res.status(404).json({ message: 'Tour package not found' })
    res.json(tour)
  } catch (err) { next(err) }
}

async function createTour(req, res, next) {
  try {
    const tour = await prisma.tourPackage.create({ data: req.body })
    res.status(201).json(tour)
  } catch (err) { next(err) }
}

async function updateTour(req, res, next) {
  try {
    const tour = await prisma.tourPackage.update({ where: { id: req.params.id }, data: req.body })
    res.json(tour)
  } catch (err) { next(err) }
}

async function deleteTour(req, res, next) {
  try {
    await prisma.tourPackage.delete({ where: { id: req.params.id } })
    res.json({ message: 'Tour package deleted' })
  } catch (err) { next(err) }
}

module.exports = { getTours, getTour, createTour, updateTour, deleteTour }
