const express = require('express');
const cardapioController = require('../controllers/cardapioController');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

router.post('/cardapio', authMiddleware, cardapioController.postCardapio);

module.exports = router;