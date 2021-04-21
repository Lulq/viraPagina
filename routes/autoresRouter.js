const express = require('express')
const router = express.Router()
const autoresController = require('../controllers/autoresController')

router.get('/', autoresController.index)
router.post('/', autoresController.create)
router.put('/:id', autoresController.update)
router.delete('/:id', autoresController.delete)

module.exports = router