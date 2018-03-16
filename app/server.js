require('babel-register');
require.extensions['.css'] = () => {
 return;
};
require.extensions['.png'] = () => {
 return;
};

const React = require('react');
const ReactDOMServer = require('react-dom/server');
const path = require('path');
const express = require('express');
const app = express();
const template = require('../template');
const App = require('./components/App');
const routes = require('./api');

app.use('/public', express.static(path.join(__dirname, '../public')))
app.use('/', routes);
// app.get('/', (req, res)=> {
//   const markup = ReactDOMServer.renderToString(React.createElement(App, null, null));
//   res.send(template("React", markup));
// });
//
// app.get('/vip', (req, res)=> {
//   const markup = ReactDOMServer.renderToString(React.createElement(App, null, null));
//   res.send(template("React", markup));
// });

app.listen(5000, () => {
  console.log("Listening on port 5000");
})
