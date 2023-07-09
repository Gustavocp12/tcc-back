const itensModel = require('../models/itensModel');

const postItem = async (req, res) => {
    try{
        const { nome, foto, precoPadrao, precoPromocional, descricao, estoque, idCategoria } = req.body;
        const result = await itensModel.postItem(nome, foto, precoPadrao, precoPromocional, estoque, descricao, idCategoria);

        return res.status(201).json(result);
    }catch(err){
        return res.status(500).json({ message: err.message });
    }
}

module.exports = {
    postItem
}