import F from 'funcunit';
import mocha from 'steal-mocha';

F.attach(mocha);

describe('account-health-tracker functional smoke test', function functionalTests() {
  beforeEach(function beforeEach() {
    F.open('../development.html');
  });

  it('account-health-tracker main page shows up', function test() {
    F('title').text('account-health-tracker', 'Title is set');
  });
});

