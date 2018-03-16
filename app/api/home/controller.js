const React = require('react');
const ReactDOMServer = require('react-dom/server');
const routes = require('express').Router();
const Home = require('../../components/home');
const template = require('../../../template');


routes.get('/', (req, res) => {
  //res.send("Hello from the other side!");
  //res.render('./index');
  const markup = ReactDOMServer.renderToString(React.createElement(Home, null, null));
  res.send(template("Home", markup));
});

module.exports = routes;
