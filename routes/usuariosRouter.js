const express = require('express');
const router = express.Router();
const usuariosController = require('../controllers/usuariosController');
const ValidarCadastro = require("../middlewares/ValidarCadastro")
const ValidarModificacaoUsuario = require("../middlewares/ValidarModificacaoUsuario")
const loginAuthenticate = require("../middlewares/loginAuthenticate")


/* GET - Lista todos os usuários */
router.get('/', usuariosController.index);

router.post('/', ValidarCadastro ,usuariosController.create);


// rota para a view cadastrar usuário
router.get('/cadastro', usuariosController.cadastro_usuario)



// login
router.get('/login', usuariosController.login)
router.post('/login', usuariosController.auth)

//logout
router.get('/logout', usuariosController.logout)

// renderizar a view perfil do usuário
router.get('/perfil', loginAuthenticate, usuariosController.user)

router.put('/:id', usuariosController.update);

router.delete('/:id', usuariosController.delete);


module.exports = router;
