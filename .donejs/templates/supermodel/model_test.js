import 'steal-mocha';
import chai from 'chai';
import <%= className %> from './<%= name %>';

const assert = chai.assert;

describe('models/<%= name %>', function <%= module %>Tests() {
  it('getList', function(done) {
    <%= className %>.getList().then(function(items) {
      assert.equal(items.length, 2);
      assert.equal(items.item(0).description, 'First item');
      done();
    });
  });
});
