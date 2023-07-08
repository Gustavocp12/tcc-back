const connection = require('./connection');

const login = async (usuario, senha) => {
    try {
        const sql = 'SELECT * FROM usuario WHERE usuario = ? AND senha = ?';
        const result = await connection.execute(sql, [usuario, senha]);

        return result[0][0];
    } catch (err) {
        throw new Error(err);
    }
}

module.exports = {
    login,
}