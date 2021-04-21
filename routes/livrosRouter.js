const express = require('express');
const router = express.Router();
const livrosController = require('../controllers/livrosController')

router.get('/', livrosController.index)
router.post('/', livrosController.create)
router.put('/:id', livrosController.update)
router.delete('/:id', livrosController.delete)


module.exports = router