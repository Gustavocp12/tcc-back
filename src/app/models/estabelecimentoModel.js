const connection = require('../config/connection');

const postEstabelecimento = (nome, idUsuario, idCardapio) => {
    try{
        const sql = 'INSERT INTO estabelecimento (nome, ID_usuario, ID_cardapio) VALUES (?, ?, ?)';
        const result = connection.query(sql, [nome, idUsuario, idCardapio]);

        return result[0][0];
    }catch (err){
        throw new Error(err);
    }
}

module.exports = {
    postEstabelecimento
}