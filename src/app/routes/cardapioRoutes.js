const express = require('express');
const cardapioController = require('../controllers/cardapioController');
const authMiddleware = require('../middlewares/authMiddleware');
const multer = require("multer");

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'src/assets/uploads/banner/')
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname)
    }
});

const upload = multer({ 
    storage: storage,
    limits: { fileSize: 1000000 }
});

const router = express.Router();

router.post('/cardapio', authMiddleware, upload.array("files"), cardapioController.postCardapio);
router.get('/cardapio', authMiddleware, cardapioController.getCardapio);

module.exports = router;
