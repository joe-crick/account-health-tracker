import 'steal-mocha';
import chai from 'chai';
import { ViewModel } from './donut-graph';

const assert = chai.assert;

// ViewModel unit tests
describe('account-health-tracker/components/dashboard/donut-graph', function donutGraphVMTests() {
  it('Has message', function test() {
    const vm = new ViewModel();
    assert.equal(vm.message, 'This is the aht-donut-graph component');
  });
});
