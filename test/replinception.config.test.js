const test = require('ava');
const Vorpal = require('vorpal');
const strip = require('strip-ansi');
const replinception = require('../src');

const isValidLog = (t, validMessages) => msg => {
  t.truthy(validMessages.includes(strip(msg)));
};

test('can define command name', t => {
  const vorpal = Vorpal();
  vorpal.use(replinception({commandName: 'test'}));
  t.truthy(vorpal.find('test'));
  t.falsy(vorpal.find('repl'));
});
test('can define alias name', t => {
  const vorpal = Vorpal();
  vorpal.use(replinception({aliasName: 'test'}));
  t.deepEqual(vorpal.find('repl')._aliases, ['test']);
});

test('can disable alias name', t => {
  const vorpal = Vorpal();
  vorpal.use(replinception({aliasName: false}));
  t.deepEqual(vorpal.find('repl')._aliases, []);
});

test.cb('command open a repl with given context (and no messages)', t => {
  const vorpal = Vorpal();
  vorpal.use(replinception({enterMessage: false, exitMessage: false, context: {universe: 42}}));

  const action = vorpal.find('repl')._fn.bind({log: isValidLog(t, ['XXX'])});
  const replServer = action('stub', t.end);
  replServer.emit('exit');
  t.deepEqual(42, replServer.context.universe);
});
