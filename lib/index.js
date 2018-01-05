const repl = require('repl');
const c = require('chalk');

module.exports = (options = {}) => vorpal => {
  const {
    enterMessage = c.bold.blue('entering node REPL'),
    exitMessage = c.bold.red('\nexiting node REPL'),
    prompt = c.bold('» '),
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
