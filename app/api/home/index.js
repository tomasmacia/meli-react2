const routes = require('express').Router();
const homeController = require('./controller');

routes.get('/', homeController);

module.exports = routes;
