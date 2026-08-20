const router = require('express').Router()
const ctrl = require('../controllers/tour.controller')
const { protect, adminOnly } = require('../middleware/auth')

router.get('/', ctrl.getTours)
router.get('/:id', ctrl.getTour)
router.post('/', protect, adminOnly, ctrl.createTour)
router.put('/:id', protect, adminOnly, ctrl.updateTour)
router.delete('/:id', protect, adminOnly, ctrl.deleteTour)

module.exports = router
