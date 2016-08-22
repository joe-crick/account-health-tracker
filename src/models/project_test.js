import 'steal-mocha';
import chai from 'chai';
import Project from './project';

const assert = chai.assert;

describe('models/project', function ProjectTests() {
  it('getList', function test(done) {
    Project.getList().then(function getProjects(items) {
      assert.equal(items.length, 2);
      assert.equal(items.item(0).description, 'First item');
      done();
    });
  });
});
