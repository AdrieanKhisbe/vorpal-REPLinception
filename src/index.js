const repl = require('repl');
const os = require('os');
const path = require('path');
const replHistory = require('repl.history');
const c = require('chalk');

module.exports = (options = {}) => vorpal => {
  const {
    enterMessage = c.bold.blue('entering node REPL'),
    exitMessage = c.bold.red('\nexiting node REPL'),
    helpMessage = 'Open a node REPL. (alias console)',
    aliasName = 'console',
    prompt = c.bold('» '),
    commandName = 'repl',
    historyFile = '.vorpal_node_history',
    context = {}
  } = options;

  const historyPath = path.join(os.homedir(), historyFile);

  const cmd = vorpal.command(commandName, helpMessage).action(function(command, cb) {
    if (enterMessage) this.log(enterMessage);
    const replServer = repl.start(prompt);
    if (historyPath) replHistory(replServer, historyPath);

    for (const key of Object.keys(context)) {
      replServer.context[key] = context[key];
    }

    replServer.on('exit', () => {
      if (exitMessage) this.log(exitMessage);
      cb();
    });
    return replServer;
  });

  if (aliasName) cmd.alias(aliasName);
};
