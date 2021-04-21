const express = require('express');
const router = express.Router();
const livrosController = require('../controllers/livrosController')

router.get('/', livrosController.index)


module.exports = router