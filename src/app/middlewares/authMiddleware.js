const jwt = require('jsonwebtoken');
const config = require('../../../config');

const authMiddleware = async (req, res, next) => {
    const token = req.headers.authorization;
    if (!token) {
        return res.status(401).json({ message: 'Login inválido' });
    }
    try {
        req.user = jwt.verify(token, config.SECRET);
        next();
    } catch (err) {
        return res.status(401).json({ message: 'Acesso negado' });
    }
}

module.exports = authMiddleware;