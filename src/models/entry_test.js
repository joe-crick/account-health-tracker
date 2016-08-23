import 'steal-mocha';
import chai from 'chai';
import Entry from './entry';

const assert = chai.assert;

describe('models/entry', function EntryTests() {
  it('getList', function test(done) {
    Entry.getList().then(function getEntries(items) {
      assert.equal(items.length, 2);
      assert.equal(items.item(0).description, 'First item');
      done();
    });
  });
});
