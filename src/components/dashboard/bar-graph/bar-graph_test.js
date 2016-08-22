import 'steal-mocha';
import chai from 'chai';
import { ViewModel } from './bar-graph';

const assert = chai.assert;

// ViewModel unit tests
describe('account-health-tracker/components/dashboard/bar-graph', function () {
  it('Has message', function () {
    const vm = new ViewModel();
    assert.equal(vm.message, 'This is the aht-bar-graph component');
  });
});
