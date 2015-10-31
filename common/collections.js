ReactionFactory = {};
ReactionFactory.Collections = {};

if (typeof ReactionCore !== "undefined") {
  ReactionFactory.Collections.Shops = new ReactionCore.Collections.Shops;
  ReactionFactory.Collections.Tags = new ReactionCore.Collections.Tags;
  ReactionFactory.Collections.Products = new ReactionCore.Collections.Products;
  ReactionFactory.Collections.Orders = new ReactionCore.Collections.Orders;
  ReactionFactory.Collections.Cart = new ReactionCore.Collections.Cart;
} else {
  ReactionFactory.Collections.Shops = new Mongo.Collection("FactoryShops");
  ReactionFactory.Collections.Tags = new Mongo.Collection("FactoryTags");
  ReactionFactory.Collections.Products = new Mongo.Collection("FactoryProducts");
  ReactionFactory.Collections.Orders = new Mongo.Collection("FactoryOrders");
  ReactionFactory.Collections.Cart = new Mongo.Collection("FactoryCart");
}
