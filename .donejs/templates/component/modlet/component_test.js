import 'steal-mocha';
import chai from 'chai';
import { ViewModel } from './<%= name %>';

const assert = chai.assert;

// ViewModel unit tests
describe('<%= module %>', function <%= module %>VMTests() {
  it('Has message', function test() {
    const vm = new ViewModel();
    assert.equal(vm.message, 'This is the <%= tag %> component');
  });
});
