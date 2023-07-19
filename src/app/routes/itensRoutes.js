const express = require('express');
const itensController = require('../controllers/itensController');
const authMiddleware = require('../middlewares/authMiddleware');
const multer = require("multer");

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, '../tcc-web-front/src/assets/photoItens/')
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
router.get('/itens/categoria/:idCategoria', authMiddleware, itensController.getItensByCategory);
router.put('/itens', authMiddleware, itensController.putItemCategory);

module.exports = router;