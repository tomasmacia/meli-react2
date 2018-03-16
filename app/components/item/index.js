const React = require('react');
const MeliLayout = require('../layout/');

class ItemImage extends React.Component {
  render() {
    return <div />;
  }
}

class ItemInfo extends React.Component {
  constructor(props) {
    super(props);
    this.itemPrice = this.itemPrice.bind(this);
    this.itemCondition = this.itemCondition.bind(this);
    this.itemSoldQuantity = this.itemSoldQuantity.bind(this);
    this.itemTitle = this.itemTitle.bind(this);
  }

  itemPrice() {
    if (this.props.item.price.decimals !== 0) {
      return (
        '$' +
        this.props.item.price.amount +
        '.' +
        this.props.item.price.decimals
      );
    }
    return '$' + this.props.item.price.amount;
  }

  itemCondition() {
    if (this.props.item.condition == 'new') {
      return 'Nuevo';
    } else {
      return 'Usado';
    }
  }

  itemSoldQuantity() {
    return this.props.item.sold_quantity;
  }

  itemTitle() {
    return this.props.item.title;
  }

  render() {
    return (
      <div>
        <h6>
          {this.itemCondition()} | {this.itemSoldQuantity()} vendidos
        </h6>
        <h1>{this.itemTitle()}</h1>
        <h3>{this.itemPrice()}</h3>
      </div>
    );
  }
}

const ItemDescription = () => (
  <div>
    <h1>This is React :)</h1>
  </div>
);

const ItemPage = (props) => (
  <MeliLayout>
    <ItemInfo item={props.item} />
  </MeliLayout>
);

module.exports = ItemPage;
