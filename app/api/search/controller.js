const React = require('react');
const ReactDOMServer = require('react-dom/server');
const routes = require('express').Router();
const SearchPage = require('../../pages/search');
const template = require('../../../template');
const request = require('request');
const { itemSearchParser } = require('../../commons/itemParser');

routes.get('/', (req, res) => {
  const limit = req.query.limit ? `&limit=${req.query.limit}` : '';
  const URL = `https://api.mercadolibre.com/sites/MLA/search?q=${req.query.q}${limit}`;
  request(URL, (err, response, body) => {
    if (err || response.statusCode !== 200) {
      return res.sendStatus(500);
    }

    const markup = ReactDOMServer.renderToString(React.createElement(
      SearchPage,
      {
        itemList: itemSearchParser(JSON.parse(body).results).items,
      },
      null,
    ));

    return res.send(template('Search', markup, 'search'));
  });
});

module.exports = routes;
