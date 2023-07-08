const users = require('./userRoutes');

const routes = (app) => {
    app.use(
        users,
    );
};

module.exports = routes;