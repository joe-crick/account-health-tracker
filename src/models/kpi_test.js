import 'steal-mocha';
import chai from 'chai';
import Kpi from './kpi';

const assert = chai.assert;

describe('models/kpi', function KpiTests() {
  it('getList', function test(done) {
    Kpi.getList().then(function getKPIs(items) {
      assert.equal(items.length, 2);
      assert.equal(items.item(0).description, 'First item');
      done();
    });
  });
});
