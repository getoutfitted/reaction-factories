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
  state: "new",
  createdAt: faker.date.past(),
  updatedAt: new Date()
});
