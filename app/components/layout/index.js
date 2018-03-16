//const Logo = require('./logo.png');
//const searchIcon = require('./search.png');
const React = require('react');
require('./MeliLayout.css');


class Header extends React.Component {
  render(){
    return (
        <header className="header">
          {/* <img src={Logo} className="logo" alt="MercadoLibre" /> */}
          <SearchBar />
        </header>
    )
  }
}

class SearchBar extends React.Component {
  constructor() {
    super();
    this.state = {
      searchInput : ""
    }
  }

  update(e) {
    this.setState({
      searchInput : e.target.value
    }, () => console.log("hola!"))
  }

  render(){
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
        <input type="button" className="search-button" onClick={() => this.props.history.push(this.state.searchInput)} />
      </form>
    )
  }
}




class MeliLayout extends React.Component {
  render(){
    return (
      <div className="layout">
        <Header />
        {this.props.children}
      </div>
    )
  }
}


module.exports = MeliLayout;
