const itensModel = require('../models/itensModel');

const postItem = async (req, res) => {
    try{
        const { nome, precoPadrao, precoPromocional, descricao, estoque } = req.body;
        const foto = req.files[0].originalname;

        const result = await itensModel.postItem(nome, foto, precoPadrao, precoPromocional, descricao, estoque);

        return res.status(201).json(result);
    }catch(err){
        return res.status(500).json({ message: err.message });
    }
}

const getItens = async (req, res) => {
    try{
        const result = await itensModel.getItens();

        return res.status(200).json(result);
    }catch(err){
        return res.status(500).json({ message: err.message });
    }
}

const getItemById = async (req, res) => {
    try{
        const { id } = req.params;
        const result = await itensModel.getItemById(id);

        return res.status(200).json(result);
    }catch(err){
        return res.status(500).json({ message: err.message });
    }
}

const putItemCategory = async (req, res) => {
    try{
        const { idCategoria, id } = req.body;
        const result = await itensModel.putItemCategory(idCategoria, id);

        return res.status(200).json(result);
    }catch(err){
        return res.status(500).json({ message: err.message });
    }
}

const getItensByCategory = async (req, res) => {
    try{
        const { idCategoria } = req.params;
        const result = await itensModel.getItensByCategory(idCategoria);

        return res.status(200).json(result);
    }catch(err){
        return res.status(500).json({ message: err.message });
    }
}

const putItemCategoryForNull = async (req, res) => {
    try{
        const { id } = req.body;
        const result = await itensModel.putItemCategoryForNull(id);

        return res.status(200).json(result);
    }catch(err){
        return res.status(500).json({ message: err.message });
    }
}

const putItemById = async (req, res) => {
    try{
        const { nome, precoPadrao, precoPromocional, descricao, estoque, id, nameFile } = req.body;
        let idCategoria = req.body.idCategoria;
        if(idCategoria == 0){
            idCategoria = null;
        }

        if(req.files.length == 0 || req.files == undefined || req.files == null){
            const foto = nameFile;
            const result = await itensModel.putItemById(nome, foto, precoPadrao, precoPromocional, descricao, estoque, id, idCategoria);

            return res.status(200).json(result);
        }else{
            const foto = req.files[0].originalname;
            const result = await itensModel.putItemById(nome, foto, precoPadrao, precoPromocional, descricao, estoque, id, idCategoria);
    
            return res.status(200).json(result);
        }
    }catch(err){
        return res.status(500).json({ message: err.message });
    }
}

const deleteItemById = async (req, res) => {
    try{
        const { id } = req.params;
        const result = await itensModel.deleteItemById(id);

        return res.status(200).json(result);
    }catch(err){
        return res.status(500).json({ message: err.message });
    }
}

module.exports = {
    postItem,
    getItens,
    getItemById,
    putItemCategory,
    getItensByCategory,
    putItemCategoryForNull,
    putItemById,
    deleteItemById
}