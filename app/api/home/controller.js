const React = require('react');
const ReactDOMServer = require('react-dom/server');
const routes = require('express').Router();
const App = require('../../components/App');
const template = require('../../../template');


routes.get('/', (req, res) => {
  //res.send("Hello from the other side!");
  //res.render('./index');
  const markup = ReactDOMServer.renderToString(React.createElement(App, null, null));
  res.send(template("Home", markup));
});

module.exports = routes;
