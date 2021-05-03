var express = require('express');
var router = express.Router();
const usuariosController = require('../controllers/usuariosController')

/* GET home page. */
router.get('/', usuariosController.homePage);

// rota para a view "sobre"
router.get('/sobre', usuariosController.about);

module.exports = router;
