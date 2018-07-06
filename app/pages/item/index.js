/* eslint-disable react/prop-types */

const React = require('react');
const MeliLayout = require('../layout/');

class ItemInfo extends React.Component {
  constructor(props) {
    super(props);
    this.itemPrice = this.itemPrice.bind(this);
    this.itemCondition = this.itemCondition.bind(this);
    this.itemSoldQuantity = this.itemSoldQuantity.bind(this);
    this.itemTitle = this.itemTitle.bind(this);
    this.itemDescription = this.itemDescription.bind(this);
  }

  itemPrice() {
    if (this.props.item.price.decimals !== 0) {
      return `$${this.props.item.price.amount}.${this.props.item.price.decimals}`;
    }
    return `$${this.props.item.price.amount}`;
  }

  itemCondition() {
    if (this.props.item.condition === 'new') {
      return 'Nuevo';
    }
    return 'Usado';
  }

  itemSoldQuantity() {
    return this.props.item.sold_quantity;
  }

  itemTitle() {
    return this.props.item.title;
  }

  itemDescription() {
    return this.props.item.itemDescription;
  }

  render() {
    return (
      <div>
        <h6>
          {this.itemCondition()} | {this.itemSoldQuantity()} vendidos
        </h6>
        <h1>{this.itemTitle()}</h1>
        <h3>{this.itemPrice()}</h3>
        <p>{this.itemDescription()}</p>
      </div>
    );
  }
}

const ItemPage = props => (
  <MeliLayout>
    <ItemInfo item={props.item} />
  </MeliLayout>
);

module.exports = ItemPage;
