const express = require('express');
const itensController = require('../controllers/itensController');
const authMiddleware = require('../middlewares/authMiddleware');
const multer = require("multer");

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'src/assets/uploads/photosItens/')
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

router.post('/itens', authMiddleware, upload.array("files"), itensController.postItem);
router.get('/itens', authMiddleware, itensController.getItens);
router.get('/itens/:id', authMiddleware, itensController.getItemById);

module.exports = router;