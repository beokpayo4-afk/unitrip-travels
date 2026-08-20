const prisma = require('../config/db')

async function submitContact(req, res, next) {
  try {
    const { name, email, subject, message } = req.body
    if (!name || !email || !message) {
      return res.status(400).json({ message: 'Name, email and message are required' })
    }
    const contact = await prisma.contact.create({ data: { name, email, subject, message } })
    res.status(201).json(contact)
  } catch (err) { next(err) }
}

module.exports = { submitContact }
