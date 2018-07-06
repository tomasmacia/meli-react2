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

const SearchPage = () => <MeliLayout>Search View</MeliLayout>;

ItemCard.propTypes = {
  item: PropTypes.objectOf(PropTypes.any).isRequired,
};

module.exports = SearchPage;
