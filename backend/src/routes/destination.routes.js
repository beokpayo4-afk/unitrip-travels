const router = require('express').Router()
const ctrl = require('../controllers/destination.controller')
const { protect, adminOnly } = require('../middleware/auth')

router.get('/', ctrl.getDestinations)
router.get('/:id', ctrl.getDestination)
router.post('/', protect, adminOnly, ctrl.createDestination)
router.put('/:id', protect, adminOnly, ctrl.updateDestination)
router.delete('/:id', protect, adminOnly, ctrl.deleteDestination)

module.exports = router
