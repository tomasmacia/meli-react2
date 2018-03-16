const React = require('react');
const MeliLayout = require('../layout/');

const ItemCard = () => {
  const linkToVip = '/api/items/' + this.props.item.id;
  return (
    <div>
      {this.props.item.title} | Precio: ${this.props.item.price.amount} |{' '}
      <a href={linkToVip}>Link</a>
    </div>
  );
};

const SearchPage = () => {
  return (
    <MeliLayout>
      <div>
        {this.props.itemList.map(item => {
          return <ItemCard item={item} key={item.id} />;
        })}
      </div>
    </MeliLayout>
  );
};

module.exports = SearchPage;
