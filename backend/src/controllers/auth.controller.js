const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const prisma = require('../config/db')
const { JWT_SECRET, JWT_EXPIRES_IN } = require('../config/env')

function signToken(user) {
  return jwt.sign({ id: user.id, role: user.role }, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN })
}

function sanitize(user) {
  const { password, ...rest } = user
  return rest
}

async function register(req, res, next) {
  try {
    const { name, email, phone, password } = req.body
    if (!name || !email || !password) {
      return res.status(400).json({ message: 'Name, email and password are required' })
    }
    const existing = await prisma.user.findUnique({ where: { email } })
    if (existing) return res.status(409).json({ message: 'An account with this email already exists' })

    const hashed = await bcrypt.hash(password, 10)
    const user = await prisma.user.create({ data: { name, email, phone, password: hashed } })
    const token = signToken(user)
    res.status(201).json({ token, user: sanitize(user) })
  } catch (err) {
    next(err)
  }
}

async function login(req, res, next) {
  try {
    const { email, password } = req.body
    if (!email || !password) return res.status(400).json({ message: 'Email and password are required' })

    const user = await prisma.user.findUnique({ where: { email } })
    if (!user) return res.status(401).json({ message: 'Invalid email or password' })

    const match = await bcrypt.compare(password, user.password)
    if (!match) return res.status(401).json({ message: 'Invalid email or password' })

    const token = signToken(user)
    res.json({ token, user: sanitize(user) })
  } catch (err) {
    next(err)
  }
}

async function getMe(req, res, next) {
  try {
    res.json(sanitize(req.user))
  } catch (err) {
    next(err)
  }
}

module.exports = { register, login, getMe }
