Package.describe({
  summary: "Reaction Factories - reaction commerce specific factories with an extended faker implementation",
  name: "reactioncommerce:reaction-factories",
  version: "0.3.6",
  git: "https://github.com/reactioncommerce/reaction-factories.git"
});

Npm.depends({
  faker: "3.0.1"
});

Package.onUse(function (api) {
  api.versionsFrom("METEOR@1.2.1");
  api.use("mongo");
  api.use("random");
  api.use("underscore");
  api.use("ecmascript");
  api.use("momentjs:moment@2.10.6");
  api.use("dburles:factory@0.3.10");
  api.use("mquandalle:bower@1.5.2_1");
  api.use("reactioncommerce:reaction-collections@1.0.3");
  // reaction faker tools
  api.addFiles("lib/faker.js", ["server"]);
  api.addFiles("lib/bower.json", "client");
  // adds dummy collection if ReactionCore not defined
  api.addFiles("common/collections.js");
  // defines factories
  api.addFiles("common/factories/faker.js");
  api.addFiles("common/factories/shops.js");
  api.addFiles("common/factories/users.js");
  api.addFiles("common/factories/accounts.js");
  api.addFiles("common/factories/products.js");
  api.addFiles("common/factories/cart.js");
  api.addFiles("common/factories/orders.js");

  api.imply("dburles:factory");
  api.export("faker");
});
