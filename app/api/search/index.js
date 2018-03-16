const routes = require('express').Router();
const searchController = require('./controller');

routes.get('/', searchController);

module.exports = routes;
