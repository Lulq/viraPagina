const express = require('express');
const router = express.Router();
const usuariosController = require('../controllers/usuariosController');

/* GET - Lista todos os usuários */
router.get('/', usuariosController.index);

module.exports = router;
