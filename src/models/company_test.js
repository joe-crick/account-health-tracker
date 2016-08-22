import 'steal-mocha';
import chai from 'chai';
import Company from './company';

const assert = chai.assert;

describe('models/company', function CompanyTests() {
  it('getList', function(done) {
    Company.getList().then(function(items) {
      assert.equal(items.length, 2);
      assert.equal(items.item(0).description, 'First item');
      done();
    });
  });
});
