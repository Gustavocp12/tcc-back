const itensModel = require('../models/itensModel');

const postItem = async (req, res) => {
    try{
        const { nome, precoPadrao, precoPromocional, descricao, estoque, idCategoria } = req.body;
        const foto = req.files[0].originalname;

        const result = await itensModel.postItem(nome, foto, precoPadrao, precoPromocional, estoque, descricao, idCategoria);

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

module.exports = {
    postItem,
    getItens,
    getItemById
}