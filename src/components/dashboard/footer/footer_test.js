import 'steal-mocha';
import chai from 'chai';
import { ViewModel } from './footer';

const assert = chai.assert;

// ViewModel unit tests
describe('account-health-tracker/components/dashboard/footer', function footerVMtests() {
  it('Has message', function test() {
    const vm = new ViewModel();
    assert.equal(vm.message, 'This is the aht-footer component');
  });
});
