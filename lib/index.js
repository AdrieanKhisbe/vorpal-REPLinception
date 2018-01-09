const repl = require('repl');
const c = require('chalk');

module.exports = (options = {}) => vorpal => {
  const {
    enterMessage = c.bold.blue('entering node REPL'),
    exitMessage = c.bold.red('\nexiting node REPL'),
    helpMessage = 'Open a node REPL',
    prompt = c.bold('» '),
    commandName = 'repl',
    context = {}
  } = options;

  vorpal.command(commandName, helpMessage)
    .action((command, cb) => {
      if (enterMessage) console.log(enterMessage);
      const replServer = repl.start(prompt);

      for (const key of Object.keys(context)) {
        replServer.context[key] = context[key];
      }

      replServer.on('exit', () => {
        if(exitMessage) console.log(exitMessage);
        cb();
      });
    });
};
