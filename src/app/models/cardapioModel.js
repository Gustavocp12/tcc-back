const connection = require('./connection');

const postCardapio = async (banner, corTema, corNav) => {
    try{
        const sql = 'INSERT INTO cardapio (banner, corTema, corNav) VALUES (?, ?, ?)';
        const result = await connection.execute(sql, [banner, corTema, corNav]);

        return result[0][0];
    }catch (err){
        throw new Error(err);
    }
}

module.exports = {
    postCardapio
}