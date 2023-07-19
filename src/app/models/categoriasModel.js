const connection = require('./connection');

const postCategory = async (nome) => {
    try{
        const sql = 'INSERT INTO categorias (nome) VALUES (?)';
        const result = await connection.execute(sql, [nome]);

        return result[0][0];
    }catch(err){
        throw new Error(err);
    }
}

const getCategories = async () => {
    try{
        const sql = 'SELECT * FROM categorias';
        const result = await connection.execute(sql);

        return result[0];
    }catch(err){
        throw new Error(err);
    }
}

const getCategoryById = async (id) => {
    try{
        const sql = 'SELECT * FROM categorias WHERE ID = ?';
        const result = await connection.execute(sql, [id]);

        return result[0][0];
    }catch(err){
        throw new Error(err);
    }
}

module.exports = {
    postCategory,
    getCategories,
    getCategoryById
}