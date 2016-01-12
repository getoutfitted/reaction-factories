/**
* Cart Factory
* @summary define cart Factory
*/

const cart = {
  shopId: faker.reaction.shops.getShop()._id,
  userId: Factory.get("user"),
  sessionId: Random.id(),
  email: faker.internet.email(),
  items: [
    faker.reaction.cartItem(),
    faker.reaction.cartItem()
  ],
  shipping: [],
  billing: [],
  workflow: {
    status: "new",
    workflow: []
  },
  createdAt: faker.date.past(),
  updatedAt: new Date()
};
const addressForOrder = faker.reaction.address();
const cartToOrder = {
  shopId: Factory.get("shop"),
  shipping: [
    {
      _id: Random.id(),
      address: addressForOrder
    }
  ],
  billing: [
    {
      _id: Random.id(),
      address: addressForOrder
    }
  ],
  workflow: {
    status: "checkoutPayment",
    workflow: [
      "checkoutLogin",
      "checkoutAddressBook",
      "coreCheckoutShipping",
      "checkoutReview",
      "checkoutPayment"
    ]
  }
};
const anonymousCart = {
  userId: Factory.get("anonymous")
};

Factory.define("cart", Cart, Object.assign({}, cart));

Factory.define("cartToOrder", Cart, Object.assign({}, cart, cartToOrder));

Factory.define("anonymousCart", Cart, Object.assign({}, cart, anonymousCart));
