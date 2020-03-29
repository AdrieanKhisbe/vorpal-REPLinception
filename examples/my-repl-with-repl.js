const Vorpal = require('vorpal');
const vorpalReplinception = require('../src');

const vorpal = Vorpal();

console.log("Type 'repl' to open a node repl in this vorpal app");
vorpal
  .delimiter('node~$')
  .use(vorpalReplinception())
  .show();
