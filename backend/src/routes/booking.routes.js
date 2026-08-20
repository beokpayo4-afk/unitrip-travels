const router = require('express').Router()
const ctrl = require('../controllers/booking.controller')
const { protect, adminOnly } = require('../middleware/auth')

router.post('/', protect, ctrl.createBooking)
router.get('/my', protect, ctrl.getMyBookings)
router.get('/:id', protect, ctrl.getBooking)
router.put('/:id/status', protect, adminOnly, ctrl.updateBookingStatus)

module.exports = router
