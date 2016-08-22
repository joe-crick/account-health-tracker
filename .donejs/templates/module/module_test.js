import 'steal-mocha';
import chai from 'chai';
import module from './<%= name %>';

const assert = chai.assert;

describe('<%= module %>', function <%= module %>VMTests() {
  it('Initialized the module', function() {
    assert.equal(typeof module, 'function');
    assert.equal(module(), 'This is the <%= name %> module');
  });
});
