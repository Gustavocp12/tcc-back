const cardapioModel = require('../models/cardapioModel');

const postCardapio = async (req, res) => {
    try{
        const { banner, corTema, corNav } = req.body;
        const result = await cardapioModel.postCardapio(banner, corTema, corNav);

        return res.status(201).json(result);
    }catch(err){
        return res.status(500).json({ message: err.message });
    }
}

module.exports = {
    postCardapio
}