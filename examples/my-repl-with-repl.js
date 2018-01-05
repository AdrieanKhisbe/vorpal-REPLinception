const Vorpal = require('vorpal');
const vorpalReplinception = require('../lib');

const vorpal = Vorpal();

vorpal
  .delimiter('node~$')
  .use(vorpalReplinception())
  .show();
