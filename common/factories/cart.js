/**
* Cart Factory
* @summary define cart Factory
*/
Factory.define("cart", Cart, {
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
});

const addressForOrder = faker.reaction.address();

Factory.define("cartToOrder", Cart, {
  shopId: Factory.get("shop"),
  userId: Factory.get("user"),
  sessionId: Random.id(),
  email: faker.internet.email(),
  items: [
    faker.reaction.cartItem(),
    faker.reaction.cartItem()
  ],
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
  },
  createdAt: faker.date.past(),
  updatedAt: new Date()
});