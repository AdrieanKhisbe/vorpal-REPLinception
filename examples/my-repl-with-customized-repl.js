const Vorpal = require('vorpal');
const vorpalReplinception = require('../src');

const vorpal = Vorpal();

vorpal
  .delimiter('node~$')
  .use(
    vorpalReplinception({
      prompt: '>>> ',
      commandName: 'myrepl',
      // Disable alias and enter/exit message
      aliasName: false,
      enterMessage: false,
      exitMessage: false
    })
  )
  .show();
