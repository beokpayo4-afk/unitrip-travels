const prisma = require('../config/db')

async function getDestinations(req, res, next) {
  try {
    const { region, popular } = req.query
    const where = {}
    if (region) where.region = region.toUpperCase()
    if (popular) where.isPopular = popular === 'true'
    const destinations = await prisma.destination.findMany({ where, orderBy: { createdAt: 'desc' } })
    res.json(destinations)
  } catch (err) { next(err) }
}

async function getDestination(req, res, next) {
  try {
    const destination = await prisma.destination.findUnique({ where: { id: req.params.id }, include: { tours: true } })
    if (!destination) return res.status(404).json({ message: 'Destination not found' })
    res.json(destination)
  } catch (err) { next(err) }
}

async function createDestination(req, res, next) {
  try {
    const destination = await prisma.destination.create({ data: req.body })
    res.status(201).json(destination)
  } catch (err) { next(err) }
}

async function updateDestination(req, res, next) {
  try {
    const destination = await prisma.destination.update({ where: { id: req.params.id }, data: req.body })
    res.json(destination)
  } catch (err) { next(err) }
}

async function deleteDestination(req, res, next) {
  try {
    await prisma.destination.delete({ where: { id: req.params.id } })
    res.json({ message: 'Destination deleted' })
  } catch (err) { next(err) }
}

module.exports = { getDestinations, getDestination, createDestination, updateDestination, deleteDestination }
