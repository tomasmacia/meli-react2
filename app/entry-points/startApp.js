const React = require('react');
const ReactDOM = require('react-dom');

module.exports = function startApp(Component) {
  ReactDOM.hydrate(<Component />, document.getElementById('root'));
};
