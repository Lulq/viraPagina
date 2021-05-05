const express = require('express')
const router = express.Router()
const enderecosController = require('../controllers/enderecosController')


//view adicionar endereço
router.get('/cadastro_endereco', enderecosController.cadastro_endereco)

router.get('/', enderecosController.index)
router.post('/', enderecosController.create)
router.put('/:id', enderecosController.update)
router.delete('/:id', enderecosController.delete)

module.exports = router