const express = require('express');
const router = express.Router();
const generosController = require('../controllers/generosController')

router.get('/', generosController.index)
router.post('/', generosController.create)
router.put('/:id', generosController.update)
router.delete('/:id', generosController.delete)

module.exports = router