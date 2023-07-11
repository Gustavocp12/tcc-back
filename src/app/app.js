const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const routes = require('./routes/router');

const app = express();

app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
app.use(cors());
app.use(express.json());
routes(app);

module.exports = app;