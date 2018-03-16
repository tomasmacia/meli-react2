const React = require('react');
const MeliLayout = require('../layout/');
const PropTypes = require('prop-types');

const ItemCard = (props) => {
  const linkToVip = `/api/items/${props.item.id}`;
  return (
    <div>
      {props.item.title} | Precio: ${props.item.price.amount} | <a href={linkToVip}>Link</a>
    </div>
  );
};

const SearchPage = props => (
  <MeliLayout>
    <div>{props.itemList.map(item => <ItemCard item={item} key={item.id} />)}</div>
  </MeliLayout>
);

ItemCard.propTypes = {
  item: PropTypes.objectOf(PropTypes.any).isRequired,
};

SearchPage.propTypes = {
  itemList: PropTypes.arrayOf(PropTypes.any).isRequired,
};

module.exports = SearchPage;
