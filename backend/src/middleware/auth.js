const jwt = require('jsonwebtoken')
const { JWT_SECRET } = require('../config/env')
const prisma = require('../config/db')

async function protect(req, res, next) {
  try {
    const header = req.headers.authorization
    if (!header || !header.startsWith('Bearer ')) {
      return res.status(401).json({ message: 'Not authorized, no token provided' })
    }
    const token = header.split(' ')[1]
    const decoded = jwt.verify(token, JWT_SECRET)
    const user = await prisma.user.findUnique({ where: { id: decoded.id } })
    if (!user) return res.status(401).json({ message: 'User not found' })
    req.user = user
    next()
  } catch (err) {
    return res.status(401).json({ message: 'Not authorized, invalid token' })
  }
}

function adminOnly(req, res, next) {
  if (req.user?.role !== 'ADMIN') {
    return res.status(403).json({ message: 'Admin access required' })
  }
  next()
}

module.exports = { protect, adminOnly }
