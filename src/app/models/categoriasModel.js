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

module.exports = {
    postCategory,
}