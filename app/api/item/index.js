const routes = require('express').Router();
const itemController = require('./controller');

routes.get('/:id', itemController);

module.exports = routes;
