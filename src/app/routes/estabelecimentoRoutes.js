const express = require('express');
const estabelecimentoController = require('../controllers/estabelecimentoController');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

router.post('/estabelecimento', authMiddleware, estabelecimentoController.postEstabelecimento);

module.exports = router;