const express = require('express');
const categoriasController = require('../controllers/categoriasController');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

router.post('/categorias', authMiddleware, categoriasController.postCategory);
router.get('/categorias', authMiddleware, categoriasController.getCategories);
router.get('/categorias/:id', authMiddleware, categoriasController.getCategoryById);
router.delete('/categorias/:id', authMiddleware, categoriasController.deleteCategory);
router.put('/categorias/name', authMiddleware, categoriasController.putCategoryName);

module.exports = router;