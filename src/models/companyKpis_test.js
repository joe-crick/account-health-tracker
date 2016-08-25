import 'steal-mocha';
import chai from 'chai';
import CompanyKpis from './companyKpis';

const assert = chai.assert;

describe('models/companyKpis', function CompanyKpisTests() {
  it('getList', function test(done) {
    CompanyKpis.getList().then(function getCompanyKpiss(items) {
      assert.equal(items.length, 2);
      assert.equal(items.item(0).description, 'First item');
      done();
    });
  });
});
