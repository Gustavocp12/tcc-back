const express = require('express');
const categoriasController = require('../controllers/categoriasController');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

router.post('/categorias', authMiddleware, categoriasController.postCategory);

module.exports = router;