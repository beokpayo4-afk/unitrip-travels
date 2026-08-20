const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const { CLIENT_URL } = require('./config/env')

const authRoutes = require('./routes/auth.routes')
const destinationRoutes = require('./routes/destination.routes')
const tourRoutes = require('./routes/tour.routes')
const bookingRoutes = require('./routes/booking.routes')
const hotelRoutes = require('./routes/hotel.routes')
const flightRoutes = require('./routes/flight.routes')
const customTripRoutes = require('./routes/customTrip.routes')
const contactRoutes = require('./routes/contact.routes')

const notFound = require('./middleware/notFound')
const errorHandler = require('./middleware/errorHandler')

const app = express()

app.use(cors({ origin: CLIENT_URL, credentials: true }))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(morgan('dev'))

app.get('/api/health', (req, res) => res.json({ status: 'ok', service: 'Unitrip Travels API' }))

app.use('/api/auth', authRoutes)
app.use('/api/destinations', destinationRoutes)
app.use('/api/tours', tourRoutes)
app.use('/api/bookings', bookingRoutes)
app.use('/api/hotels', hotelRoutes)
app.use('/api/flights', flightRoutes)
app.use('/api/custom-trips', customTripRoutes)
app.use('/api/contact', contactRoutes)

app.use(notFound)
app.use(errorHandler)

module.exports = app
