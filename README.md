## SWCify

This repo wraps SWC with a napi-rs package implementing our own custom transforms.

### toolchain

You'll need the rust nightly version listed in `rust-toolchain` in order to build this project.

### Using locally from a node project

- clone the repo
- build the package `yarn build`
- `npx yalc publish`
- in your other repo `npx yalc install`
- `require('swcify')`;

### Running tests

- `yarn build`
- `yarn test`
