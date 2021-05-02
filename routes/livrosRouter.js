const { getRounds } = require('bcryptjs');
const express = require('express');
const router = express.Router();
const livrosController = require('../controllers/livrosController')
const ValidarLivro = require('../middlewares/ValidarLivro')
const ValidarModificacaoLivro = require('../middlewares/ValidarModificacaoLivro')


router.get('/', livrosController.index)

router.get('/buscar', livrosController.buscar)

router.get('/encontrados', livrosController.found)

router.get('/seus_livros', livrosController.yourbooks)

router.get('/:id', livrosController.livro )

router.get('/go/wpp', livrosController.gowpp)

router.post('/', ValidarLivro, livrosController.create)
router.put('/:id', ValidarModificacaoLivro, livrosController.update)
router.delete('/:id', livrosController.delete)


module.exports = router