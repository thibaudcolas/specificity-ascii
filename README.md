specificity-ascii
=================

> TODO

## Getting started

TODO

## Contributing

### Install

> First, clone the project on your computer and install [Node](https://nodejs.org) or [nvm](https://github.com/creationix/nvm)

To install our dependencies:

```sh
nvm install
# Then, install all project dependencies.
npm install
# Optionally, install the linting tools
npm install -g eslint-config-airbnb eslint-plugin-import eslint-plugin-react eslint-plugin-jsx-a11y eslint
# Optionally, install the git hooks.
./.githooks/deploy
```

## Working on the project

> Everything mentioned in the installation process should already be done.

```sh
# Start the server and the development tools.
npm run start
# Builds frontend assets.
npm run build
# Runs linting.
npm run lint
# Runs tests.
npm run test
```

### Using the git hooks

> Git hooks automatically check your code before every commit.

```sh
# To enable the hooks, from the project root:
./.githooks/deploy
# To disable the hooks for a single commit, use the appropriate flag:
git commit --no-verify
```

### Tests

We use `mocha`, `chai` and `sinon` and for unit tests.

```sh
# Run all the tests.
npm run test
# Run unit tests.
npm run test:unit
# Run unit tests in a watcher.
npm run test:unit:watch
# Run your tests and outputs code coverage.
npm run test:unit:coverage
# And then to see the coverage:
open coverage/lcov-report/index.html
```

## Documentation

### Chart rendering

Used:

- https://github.com/yaronn/blessed-contrib

Alternatives:

- https://github.com/yaronn/wopr
- https://github.com/holman/spark
- https://github.com/sindresorhus/sparkly
- https://github.com/msiebuhr/node-textspark
- https://github.com/shiwano/sparkline
- https://github.com/jstrace/chart

See also:

- https://github.com/katiefenn/parker
- https://github.com/emilbayes/kMeans.js
- https://github.com/harthur/clusterfck
- https://en.wikipedia.org/wiki/Hierarchical_clustering
