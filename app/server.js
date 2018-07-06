require('babel-register');

require.extensions['.css'] = () => {};
require.extensions['.png'] = () => {};

const path = require('path');
const express = require('express');

const app = express();
const routes = require('./api');

app.use('/public', express.static(path.join(__dirname, '../public')));
app.use('/', routes);

/* eslint-disable no-console */
app.listen(5000, () => {
  console.log('Listening on port 5000');
});
