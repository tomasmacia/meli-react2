const React = require('react');
const ReactDOMServer = require('react-dom/server');
const routes = require('express').Router();
const ItemPage = require('../../pages/item');
const template = require('../../../template');
const request = require('request');
const { itemVIPParser } = require('../../commons/itemParser');

routes.get('/:id', (req, res) => {
  const URL = `https://api.mercadolibre.com/items/${req.params.id}`;
  request(URL, (err, response, body) => {
    if (err || response.statusCode !== 200) {
      return res.status(500).send('Se ha producido un error :(');
    }
    const item = itemVIPParser(JSON.parse(body));

    const markup = ReactDOMServer.renderToString(React.createElement(ItemPage, { item: item.item }, null));
    return res.send(template('Item', markup, 'item'));
  });
});

module.exports = routes;
