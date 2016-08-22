import 'steal-mocha';
import chai from 'chai';
import Kpi from './kpi';

const assert = chai.assert;

describe('models/kpi', function KpiTests() {
  it('getList', function(done) {
    Kpi.getList().then(function(items) {
      assert.equal(items.length, 2);
      assert.equal(items.item(0).description, 'First item');
      done();
    });
  });
});
