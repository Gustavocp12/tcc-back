const express = require('express');
const userController = require('../controllers/userController');
const authMiddleware = require('../middlewares/authMiddleware');
// const userMiddleware = require('../middlewares/userMiddleware');

const router = express.Router();

router.post('/login', userController.login);

module.exports = router;