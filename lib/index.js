const repl = require('repl');

module.exports = function (vorpal) {
  vorpal.command('repl')
    .action((command, cb) => {
      const replServer = repl.start('> ')
      replServer.on('exit', () => {
        console.log('exit from REPL, back to vorpal');
        cb()
      });
    });
};
