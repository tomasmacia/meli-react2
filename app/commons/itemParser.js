function authorName(name, lastname) {
  return {
    name,
    lastname,
  };
}

function itemParser(item) {
  return {
    id: item.id,
    title: item.title,
    price: {
      currency: item.currency_id,
      amount: parseInt(item.price, 10),
      decimals: item.price.toString().split('.')[1] ? parseInt(item.price.toString().split('.')[1], 10) : 0,
    },
    picture: item.pictures,
    condition: item.condition,
  };
}

function itemVIPParser(item) {
  const i = {};
  i.author = authorName('Tomás', 'Macía');
  i.item = itemParser(item);
  i.item.sold_quantity = item.sold_quantity;
  i.item.free_shipping = item.free_shipping;
  // description
  return i;
}

function itemSearchParser(itemList) {
  const i = {};
  i.author = authorName('Tomás', 'Macía');
  // i.categories = categoriesParser(itemList);
  i.items = [];
  itemList.map((itemRes, idx) => {
    const item = itemParser(itemRes);
    item.free_shipping = itemList[idx].shipping.free_shipping;
    return i.items.push(item);
  });
  return i;
}

// function categoriesParser(item) {}

module.exports = { itemVIPParser, itemSearchParser };
