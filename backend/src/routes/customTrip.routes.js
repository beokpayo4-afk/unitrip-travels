const router = require('express').Router()
const { submitCustomTrip, getCustomTrips } = require('../controllers/customTrip.controller')
const { protect, adminOnly } = require('../middleware/auth')

router.post('/', submitCustomTrip)
router.get('/', protect, adminOnly, getCustomTrips)

module.exports = router
