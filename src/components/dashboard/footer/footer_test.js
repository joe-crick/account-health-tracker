import 'steal-mocha';
import chai from 'chai';
import { ViewModel } from './footer';

const assert = chai.assert;

// ViewModel unit tests
describe('account-health-tracker/components/dashboard/footer', function () {
  it('Has message', function () {
    const vm = new ViewModel();
    assert.equal(vm.message, 'This is the aht-footer component');
  });
});
