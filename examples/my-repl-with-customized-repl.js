const Vorpal = require('vorpal');
const vorpalReplinception = require('../lib');

const vorpal = Vorpal();

vorpal
  .delimiter('node~$')
  .use(vorpalReplinception({
    prompt: '>>> ',
    commandName: 'console',
    enterMessage: false,
    exitMessage: false
  }))
  .show();
