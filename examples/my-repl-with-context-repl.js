const chalk = require('chalk');

const Vorpal = require('vorpal');
const vorpalReplinception = require('../lib');
const vorpal = Vorpal();

vorpal
  .delimiter('node~$')
  .use(vorpalReplinception({
    enterMessage: 'In the context there is some chalk, a universe and myLibrary',
    context: {
      chalk,
      universe: 42,
      myLibrary: vorpalReplinception
    }
  }))
  .show();
