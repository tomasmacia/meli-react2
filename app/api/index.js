const routes = require('express').Router();
const home = require('./home');
const search = require('./search');
const item = require('./item');

// url mappings
routes.use('/', home);
routes.use('/api/items', search);
routes.use('/api/items', item);

module.exports = routes;
