# vorpal-REPLinception
> Vorpal Extension for node Repl

[![npm](https://img.shields.io/npm/v/vorpal-replinception.svg)](https://www.npmjs.com/package/vorpal-replinception)
[![Build Status](https://travis-ci.org/AdrieanKhisbe/vorpal-REPLinception.svg?branch=master)](https://travis-ci.org/AdrieanKhisbe/vorpal-REPLinception)
[![codecov](https://codecov.io/gh/AdrieanKhisbe/vorpal-REPLinception/branch/master/graph/badge.svg)](https://codecov.io/gh/AdrieanKhisbe/vorpal-REPLinception)
[![dependencies Status](https://david-dm.org/AdrieanKhisbe/vorpal-REPLinception/status.svg)](https://david-dm.org/AdrieanKhisbe/vorpal-REPLinception)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

*vorpal-REPLinception* is a plugin to vorpal to provide a command to open a node REPL.


### Installation

To add it to your project just `yarn add`/`npm install` it along vorpal

```bash
npm install vorpal
npm install vorpal-replinception
```

### Basic Usage
```js
const Vorpal = require('vorpal');
const vorpalReplinception = require('../lib');

const vorpal = Vorpal();

vorpal
  .delimiter('node~$')
  .use(vorpalReplinception())
  .show();
```

### Configuration

This is configurable, you can pass a config object to `vorpalReplinception`:
here are so far the properties:
- `prompt` = the prompt used by the repl
- `commandName` : the name of the vorpal command to enter the repl, default to `repl`
- `aliasName` : an alias for the commandName, default to `console`, disable with `false`
- `helpMessageMessage`: the help message associated with the command
- `enterMessage`: some message at the entering of the node repl
- `exitMessage`: some message at the exit of the node repl, disable with `false`
- `exitMessage`: some message at the exit of the node repl, disable with `false`
- `historyFile`: where the repl history is persisted, default with `.vorpal_node_history`, disable with `false`
- `context`: this is a key value object for the values you want to expose in the repl context.

For more details refer to the [examples folder](./examples), specificaly the
 [`my-repl-with-customized-repl.js` file](./examples/my-repl-with-customized-repl.js)
