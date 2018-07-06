/* eslint-disable react/prop-types, react/jsx-no-bind, react/no-string-refs */
const React = require('react');
require('./MeliLayout.css');

const Header = () => (
  <header className="header">
    <SearchBar />
  </header>
);

class SearchBar extends React.Component {
  constructor() {
    super();
    this.state = {
      searchInput: '',
    };
  }

  update(e) {
    this.setState({
      searchInput: e.target.value,
    });
  }

  render() {
    return (
      <form className="search-container">
        <input
          className="search-bar"
          type="text"
          placeholder="Nunca dejes de buscar"
          maxLength="120"
          ref="searchInput"
          onChange={this.update.bind(this)}
        />
        <input
          type="button"
          className="search-button"
          onClick={() => this.props.history.push(this.state.searchInput)}
        />
      </form>
    );
  }
}

const MeliLayout = props => (
  <div className="layout">
    <Header />
    {props.children}
  </div>
);

module.exports = MeliLayout;
