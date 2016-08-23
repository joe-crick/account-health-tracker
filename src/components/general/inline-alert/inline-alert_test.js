import 'steal-mocha';
import chai from 'chai';
import { ViewModel } from './inline-alert';

const assert = chai.assert;

// ViewModel unit tests
describe('account-health-tracker/src/components/general/inline-alert', function () {
  it('defaults to no action', function () {
    const vm = new ViewModel();
    assert.isUndefined(vm.action);
  });
});
