import 'steal-mocha';
import chai from 'chai';
import { ViewModel } from './footer';

let assert = chai.assert;

// ViewModel unit tests
describe('account-health-tracker/components/dashboard/footer', function(){
  it('Has message', function(){
    var vm = new ViewModel();
    assert.equal(vm.attr('message'), 'This is the aht-footer component');
  });
});
