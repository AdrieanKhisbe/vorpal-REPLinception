const Vorpal = require('vorpal');
const vorpalReplinception = require('../src');

const vorpal = Vorpal();

vorpal
  .delimiter('node~$')
  .use(vorpalReplinception())
  .show();
