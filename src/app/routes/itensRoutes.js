const express = require('express');
const itensController = require('../controllers/itensController');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

router.post('/itens', authMiddleware, itensController.postItem);

module.exports = router;