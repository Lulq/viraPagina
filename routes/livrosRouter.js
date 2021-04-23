const express = require('express');
const router = express.Router();
const livrosController = require('../controllers/livrosController')
const ValidarLivro = require('../middlewares/ValidarLivro')

router.get('/', livrosController.index)
router.post('/', ValidarLivro, livrosController.create)
router.put('/:id', livrosController.update)
router.delete('/:id', livrosController.delete)


module.exports = router