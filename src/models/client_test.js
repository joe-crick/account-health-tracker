import 'steal-mocha';
import chai from 'chai';
import Client from './client';

const assert = chai.assert;

describe('models/client', function ClientTests() {
  it('getList', function test(done) {
    Client.getList().then(function getClients(items) {
      assert.equal(items.length, 2);
      assert.equal(items.item(0).description, 'First item');
      done();
    });
  });
});
