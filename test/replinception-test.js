import {describe} from 'ava-spec';
import Vorpal from 'vorpal';
import strip from 'strip-ansi';
import replinception from '../lib'

const isValidLog = (t, validMessages) => (msg) => {
  t.truthy(validMessages.includes(strip(msg)));
}

describe('replinception with no config', it => {
  it('defines the correct command', t => {
    const vorpal = Vorpal();
    vorpal.use(replinception());
    const cmd = vorpal.find('repl');
    t.truthy(cmd);
  });
  it('command has correct details', t => {
    const vorpal = Vorpal();
    vorpal.use(replinception());
    const cmd = vorpal.find('repl');
    t.deepEqual(cmd._description, 'Open a node REPL. (alias console)')
    t.deepEqual(cmd._aliases, ['console']);
  });
  it.cb('command open up a repl as expected', t => {
    const vorpal = Vorpal();
    vorpal.use(replinception());

    const action = vorpal.find('repl')._fn
      .bind({log: isValidLog(t, ['entering node REPL','\nexiting node REPL'])});
    const replServer = action('stub', t.end);
    replServer.emit('exit')

  });
});


describe('replinception with some config', it => {
  it('can define command name', t => {
    const vorpal = Vorpal();
    vorpal.use(replinception({commandName: 'test'}));
    t.truthy(vorpal.find('test'));
    t.falsy(vorpal.find('repl'));
  });
  it('can define alias name', t => {
    const vorpal = Vorpal();
    vorpal.use(replinception({aliasName: 'test'}));
    t.truthy(vorpal.find('repl')._aliases, ['test']);
  });
  it('can disable alias name', t => {
    const vorpal = Vorpal();
    vorpal.use(replinception({aliasName: false}));
    t.truthy(vorpal.find('repl')._aliases, []);
  });
});
