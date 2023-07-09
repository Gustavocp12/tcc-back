const connection = require('./connection');

const postItem = async (nome, foto, precoPadrao, precoPromocional, descricao, estoque, idCategoria) => {
    try{
        const sql = 'INSER INTO itens (nome, foto, precoPadrao, precoPromocional, descricao, estoque, ID_categoria) VALUES (?, ?, ?, ?, ?, ?, ?)';
        const result = await connection.execute(sql, [nome, foto, precoPadrao, precoPromocional, descricao, estoque, idCategoria]);

        return result[0][0];
    }catch(err){
        throw new Error(err);
    }
}

module.exports = {
    postItem
}