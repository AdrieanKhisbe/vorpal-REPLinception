const chalk = require('chalk');

const Vorpal = require('vorpal');
const vorpalReplinception = require('../src');

const vorpal = Vorpal();

console.log(chalk.blue(`Type ${chalk.bold('repl')} to open a node repl in this vorpal app`));
vorpal
  .delimiter('node~$')
  .use(
    vorpalReplinception({
      enterMessage: `In the context there is some ${chalk.dim('chalk')}, a ${chalk.dim(
        'universe'
      )} and ${chalk.dim('myLibrary')}`,
      // The following context will be accessible from within the node repl
      context: {
        chalk,
        universe: 42,
        myLibrary: vorpalReplinception
      }
    })
  )
  .show();
