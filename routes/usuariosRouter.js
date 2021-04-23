const express = require('express');
const router = express.Router();
const usuariosController = require('../controllers/usuariosController');
const ValidarCadastro = require("../middlewares/ValidarCadastro")

/* GET - Lista todos os usuários */
router.get('/', usuariosController.index);
router.post('/', ValidarCadastro, usuariosController.create);


router.put('/:id', usuariosController.update);
router.delete('/:id', usuariosController.delete);

module.exports = router;
