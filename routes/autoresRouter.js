const express = require('express')
const router = express.Router()
const autoresController = require('../controllers/autoresController')


// renderizar a view add autor
router.get('/add', autoresController.addAutor)
// renderizar view autor criado
router.get('/autor_adicionado', autoresController.added)


router.get('/', autoresController.index)
router.post('/', autoresController.create)
router.put('/:id', autoresController.update)
router.delete('/:id', autoresController.delete)

module.exports = router