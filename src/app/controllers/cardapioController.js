const cardapioModel = require('../models/cardapioModel');

const postCardapio = async (req, res) => {
    try{
        const { corTema, corNav } = req.body;
        const banner = req.files[0].originalname;
        const result = await cardapioModel.postCardapio(banner, corTema, corNav);

        return res.status(201).json(result);
    }catch(err){
        return res.status(500).json({ message: err.message });
    }
}

module.exports = {
    postCardapio
}