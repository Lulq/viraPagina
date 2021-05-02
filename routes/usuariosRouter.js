const express = require('express');
const router = express.Router();
const usuariosController = require('../controllers/usuariosController');
const ValidarCadastro = require("../middlewares/ValidarCadastro")
const ValidarModificacaoUsuario = require("../middlewares/ValidarModificacaoUsuario")


/* GET - Lista todos os usuários */
router.get('/', usuariosController.index);
router.post('/', ValidarCadastro, usuariosController.create);


// rota para a view cadastrar usuário
router.get('/cadastro', usuariosController.cadastro_usuario)


router.put('/:id', ValidarModificacaoUsuario, usuariosController.update);
router.delete('/:id', usuariosController.delete);


module.exports = router;
