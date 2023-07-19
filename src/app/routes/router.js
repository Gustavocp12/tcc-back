const users = require('./userRoutes');
const category = require('./categoriasRoutes');
const itens = require('./itensRoutes');
const cardapio = require('./cardapioRoutes');
const estabelecimento = require('./estabelecimentoRoutes');
const itemCategoria = require('./itemCategoriaRoutes');

const routes = (app) => {
    app.use(
        users,
        category,
        itens,
        cardapio,
        estabelecimento,
        itemCategoria
    );
};

module.exports = routes;