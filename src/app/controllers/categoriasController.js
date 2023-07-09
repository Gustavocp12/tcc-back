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

module.exports = {
    postCategory,
}