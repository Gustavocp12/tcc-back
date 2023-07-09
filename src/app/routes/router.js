const users = require('./userRoutes');
const category = require('./categoriasRoutes');
const itens = require('./itensRoutes');
const cardapio = require('./cardapioRoutes');
const estabelecimento = require('./estabelecimentoRoutes');

const routes = (app) => {
    app.use(
        users,
        category,
        itens,
        cardapio,
        estabelecimento
    );
};

module.exports = routes;