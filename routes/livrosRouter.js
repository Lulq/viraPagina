const express = require('express');
const router = express.Router();
const livrosController = require('../controllers/livrosController')
const ValidarLivro = require('../middlewares/ValidarLivro')
const ValidarModificacaoLivro = require('../middlewares/ValidarModificacaoLivro')

router.get('/', livrosController.index)
router.post('/', ValidarLivro, livrosController.create)
router.put('/:id', ValidarModificacaoLivro, livrosController.update)
router.delete('/:id', livrosController.delete)


module.exports = router