import 'steal-mocha';
import chai from 'chai';
import { ViewModel } from './dashboard';

const assert = chai.assert;

// ViewModel unit tests
describe('account-health-tracker/components/dashboard', function dashboardVMTests() {
  it('Has message', function test() {
    const vm = new ViewModel();
    assert.equal(vm.message, 'This is the aht-dashboard component');
  });
});
