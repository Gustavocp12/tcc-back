const categoriasModel = require('../models/categoriasModel');

const postCategory = async (req, res) => {
    try{
        const { nome } = req.body;
        const result = await categoriasModel.postCategory(nome);

        return res.status(201).json(result);
    }catch(err){
        return res.status(500).json({ message: err.message });
    }
}

const getCategories = async (req, res) => {
    try{
        const result = await categoriasModel.getCategories();

        return res.status(200).json(result);
    }catch(err){
        return res.status(500).json({ message: err.message });
    }
}

const getCategoryById = async (req, res) => {
    try{
        const { id } = req.params;
        const result = await categoriasModel.getCategoryById(id);

        return res.status(200).json(result);
    }catch(err){
        return res.status(500).json({ message: err.message });
    }
}

module.exports = {
    postCategory,
    getCategories,
    getCategoryById
}