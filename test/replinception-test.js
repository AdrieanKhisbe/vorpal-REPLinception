import {describe} from 'ava-spec';
import Vorpal from 'vorpal';
import replinception from '../lib'

describe('replinception with no config', it => {
  it('defines the correct command', t => {
    const vorpal = Vorpal();
    vorpal.use(replinception());
    const cmd = vorpal.find('repl')
    t.truthy(cmd);
  });
  it('command has correct details', t => {
    const vorpal = Vorpal();
    vorpal.use(replinception());
    const cmd = vorpal.find('repl')
    t.deepEqual(cmd._description, 'Open a node REPL. (alias console)')
    t.deepEqual(cmd._aliases, ['console']);
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
