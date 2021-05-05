const express = require('express');
const router = express.Router();
const livrosController = require('../controllers/livrosController')
const ValidarLivro = require('../middlewares/ValidarLivro')
const ValidarModificacaoLivro = require('../middlewares/ValidarModificacaoLivro')


router.get('/', livrosController.index)

//renderiza a view buscar livros
router.get('/buscar', livrosController.buscar)

//renderiza a view do resultado da busca
router.get('/encontrados', livrosController.found)

// renderiza a view dos livros de um usuário (falta criar a função de buscar livros por usuário)
router.get('/seus_livros', livrosController.yourbooks)

// buscar um livro específico
router.get('/:id', livrosController.livro)  // buscar um livro específico

// modal de ir pro whatsapp
router.get('/go/wpp', livrosController.gowpp)

// renderizar a view de adicionar livro
router.get('/novo/livro', livrosController.addBook)

router.post('/', ValidarLivro, livrosController.create)
router.put('/:id', ValidarModificacaoLivro, livrosController.update)

router.delete('/', livrosController.delete)

//rota da busca
router.post('/pesquisa', livrosController.pesquisa)


module.exports = router