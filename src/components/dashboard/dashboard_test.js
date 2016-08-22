import 'steal-mocha';
import chai from 'chai';
import { ViewModel } from './dashboard';

let assert = chai.assert;

// ViewModel unit tests
describe('account-health-tracker/components/dashboard', function(){
  it('Has message', function(){
    var vm = new ViewModel();
    assert.equal(vm.message, 'This is the aht-dashboard component');
  });
});
