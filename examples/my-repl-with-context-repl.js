const chalk = require('chalk');

const Vorpal = require('vorpal');
const vorpalReplinception = require('../src');

const vorpal = Vorpal();

vorpal
  .delimiter('node~$')
  .use(
    vorpalReplinception({
      enterMessage: 'In the context there is some chalk, a universe and myLibrary',
      // The following context will be accessible from within the node repl
      context: {
        chalk,
        universe: 42,
        myLibrary: vorpalReplinception
      }
    })
  )
  .show();
