const estabelecimentoModel = require('../models/estabelecimentoModel');

const postEstabelecimento = async (req, res) => {
    try{
        const { nome, idUsuario, idCardapio } = req.body;
        const result = await estabelecimentoModel.postEstabelecimento(nome, idUsuario, idCardapio);

        res.status(201).json(result);
    }catch (err){
        res.status(500).json({message: err.message});
    }
}

module.exports = {
    postEstabelecimento
}