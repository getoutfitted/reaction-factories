# Reaction Factories
[![Circle CI](https://circleci.com/gh/reactioncommerce/reaction-factories.svg?style=svg)](https://circleci.com/gh/reactioncommerce/reaction-factories)

This is a core package of Reaction Commerce and provides
- faker - use `faker` on client and server
- faker.reaction - extended functions for reaction commerce
- Factories for reaction commerce

## Installation

```bash
meteor add reactioncommerce:reaction-factories
```

## Factory
The following factories are predefined:
- `Cart`
- `Orders`
- `Products`
- `Shops`
- `Users`

```
Factory.create("Shops")
var shopId = Factory.get("Shops")
```

## faker
Additional custom faker methods added:
- faker.reaction.address
- faker.reaction.metaField
- faker.reaction.productVariant
- faker.reaction.cartItem
- faker.reaction.order
- faker.reaction.shops
- faker.reaction.users
- faker.reaction.products

```
Factory.create("Shops")
var shopId = Factory.get("Shops")
```

# About
This package depends on the elegant [meteor-factory](https://github.com/percolatestudio/meteor-factory/) package and the useful [faker.js](https://github.com/Marak/faker.js) node package.

`reaction-factories` adds some Reaction Commerce specific Factory definitions, but can be used in any Meteor package.

It does not have any dependencies on `reactioncommerce:core`,

This package exports `faker` and `Factory`.

If reactioncommerce:core is installed, `ReactionCore.Collections.*` are used for tests, but if the `ReactionCore` global isn't defined, we'll create new mongo collections prefixed with `Factory`.
