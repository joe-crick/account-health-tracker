import 'steal-mocha';
import chai from 'chai';
import { ViewModel } from './data-entry-item';

const assert = chai.assert;

// ViewModel unit tests
describe('account-health-tracker/src/components/data-entry-item', function inlineAlertVMTests() {
  it('defaults to no action', function test() {
    const vm = new ViewModel();
    assert.isUndefined(vm.action);
  });
});
