module.exports.ProductDetail = class ProductDetail {
  constructor(itemResponse, descriptionResponse) {
    this.author = { name: "Fabrizio", lastname: "Parodi" };
    this.item = new Item(
      itemResponse.id, 
      itemResponse.title);
    this.price = new Price(
      itemResponse.currency_id,
      itemResponse.price,
      parseInt(itemResponse.price % 1 * 100)
    );
    this.condition = itemResponse.condition;
    this.free_shipping = itemResponse.shipping.free_shipping;
    this.sold_quantity = itemResponse.sold_quantity;
    this.description = descriptionResponse.plain_text;
    this.picture = itemResponse.pictures[0].secure_url;
  }
};

class Item {
  constructor(id, title) {
    this.id = id;
    this.title = title;
  }
}

class Price {
  constructor(currency, amount, decimals) {
    this.currency = currency;
    this.amount = amount;
    this.decimals = decimals;
  }
}
