const express = require('express');
const router = express.Router();
const idiomasController = require('../controllers/idiomasController')

router.get('/', idiomasController.index)
router.post('/', idiomasController.create)
router.put('/:id', idiomasController.update)
router.delete('/:id', idiomasController.delete)

module.exports = router