const userModel = require('../models/userModel');
const jwt = require('jsonwebtoken');
const config = require('../../../config');

const login = async (req, res) => {
    try {
        const { usuario, senha } = req.body;
        const user = await userModel.login(usuario, senha);
        if (user.length === 0) {
            return res.status(404).json({ message: 'Usuário não encontrado' });
        }
        const token = jwt.sign({ id: user.id }, config.SECRET, {});

        return res.status(200).json({ user: user, token: token });
    }catch (err) {
        return res.status(500).json({ message: err.message });
    }
}

module.exports = {
    login,
}