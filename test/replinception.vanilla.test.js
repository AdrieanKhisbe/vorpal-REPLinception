const test = require('ava');
const Vorpal = require('vorpal');
const strip = require('strip-ansi');
const replinception = require('../src');

const isValidLog = (t, validMessages) => msg => {
  t.truthy(validMessages.includes(strip(msg)));
};

test('defines the correct command', t => {
  const vorpal = Vorpal();
  vorpal.use(replinception());
  const cmd = vorpal.find('repl');
  t.truthy(cmd);
});

test('command has correct details', t => {
  const vorpal = Vorpal();
  vorpal.use(replinception());
  const cmd = vorpal.find('repl');
  t.deepEqual(cmd._description, 'Open a node REPL. (alias console)');
  t.deepEqual(cmd._aliases, ['console']);
});

test.cb('command open up a repl as expected', t => {
  const vorpal = Vorpal();
  vorpal.use(replinception());

  const action = vorpal
    .find('repl')
    ._fn.bind({log: isValidLog(t, ['entering node REPL', '\nexiting node REPL'])});
  const replServer = action('stub', t.end);
  replServer.emit('exit');
});
