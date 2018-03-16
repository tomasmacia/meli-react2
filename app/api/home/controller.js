const React = require('react');
const ReactDOMServer = require('react-dom/server');
const routes = require('express').Router();
const Home = require('../../pages/home');
const template = require('../../../template');

routes.get('/', (req, res) => {
  // res.send("Hello from the other side!");
  // res.render('./index');
  const markup = ReactDOMServer.renderToString(<Home asd="asd" />);
  res.send(template('Home', markup, 'home'));
});

module.exports = routes;
