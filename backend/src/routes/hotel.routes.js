const router = require('express').Router()
const { searchHotels } = require('../controllers/hotel.controller')

router.get('/search', searchHotels)

module.exports = router
