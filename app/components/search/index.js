const React = require('react');
const MeliLayout = require('../layout/');

const ItemCard = props => {
  const linkToVip = '/api/items/' + props.item.id;
  return (
    <div>
      {props.item.title} | Precio: ${props.item.price.amount} |{' '}
      <a href={linkToVip}>Link</a>
    </div>
  );
};

const SearchPage = props => (
  <MeliLayout>
    <div>
      {props.itemList.map(item => {
        return <ItemCard item={item} key={item.id} />;
      })}
    </div>
  </MeliLayout>
);

module.exports = SearchPage;
