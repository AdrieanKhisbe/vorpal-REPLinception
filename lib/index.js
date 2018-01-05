const repl = require('repl');

module.exports = (options = {}) => (vorpal) => {
  const {
    enterMessage = 'entering node REPL',
    exitMessage = 'exiting node REPL',
    prompt = '> ',
    commandName = 'repl'
  } = options;
  vorpal.command(commandName)
    .action((command, cb) => {
      if (enterMessage) console.log(enterMessage)
      const replServer = repl.start(prompt)
      replServer.on('exit', () => {
        if(exitMessage) console.log(exitMessage);
        cb()
      });
    });
};
