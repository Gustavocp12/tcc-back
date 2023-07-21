const connection = require('./connection');

const postItem = async (nome, foto, precoPadrao, precoPromocional, descricao, estoque) => {
    try{
        const sql = 'INSERT INTO itens (nome, foto, precoPadrao, precoPromocional, descricao, estoque) VALUES (?, ?, ?, ?, ?, ?)';
        const result = await connection.execute(sql, [nome, foto, precoPadrao, precoPromocional, descricao, estoque]);

        return result[0][0];
    }catch(err){
        throw new Error(err);
    }
}

const getItens = async () => {
    try{
        const sql = 'SELECT * FROM itens';
        const result = await connection.execute(sql);

        return result[0];
    }catch(err){
        throw new Error(err);
    }
}

const getItemById = async (id) => {
    try{
        const sql = 'SELECT * FROM itens WHERE ID = ?';
        const result = await connection.execute(sql, [id]);

        return result[0][0];
    }catch(err){
        throw new Error(err);
    }
}

const putItemCategory = async (idCategoria, id) => {
    try{
        const sql = 'UPDATE itens SET ID_categoria = ? WHERE ID = ?';
        const result = await connection.execute(sql, [idCategoria, id]);

        return result[0];
    }catch(err){
        throw new Error(err);
    }
}

const getItensByCategory = async (idCategoria) => {
    try{
        const sql = 'SELECT * FROM itens WHERE ID_categoria = ?';
        const result = await connection.execute(sql, [idCategoria]);

        return result[0];
    }catch(err){
        throw new Error(err);
    }
}

const putItemCategoryForNull = async (id) => {
    try{
        const sql = 'UPDATE itens SET ID_categoria = null WHERE id = ?';
        const result = await connection.execute(sql, [id]);

        return result[0];
    }catch(err){
        throw new Error(err);
    }
}

const putItemById = async (nome, foto, precoPadrao, precoPromocional, descricao, estoque, id, idCategoria) => {
    try{
        const sql = 'UPDATE itens SET nome = ?, foto = ?, precoPadrao = ?, precoPromocional = ?, descricao = ?, estoque = ?, ID_categoria = ? WHERE ID = ?';
        const result = await connection.execute(sql, [nome, foto, precoPadrao, precoPromocional, descricao, estoque, idCategoria, id]);


        return result[0];
    }catch(err){
        throw new Error(err);
    }
}

const deleteItemById = async (id) => {
    try{
        const sql = 'DELETE FROM itens WHERE itens.ID = ?';
        const result = await connection.execute(sql, [id]);

        return result[0];
    }catch(err){
        throw new Error(err);
    }
}

module.exports = {
    postItem,
    getItens,
    getItemById,
    putItemCategory,
    getItensByCategory,
    putItemCategoryForNull,
    putItemById,
    deleteItemById
}