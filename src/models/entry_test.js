import 'steal-mocha';
import chai from 'chai';
import Entry from './entry';
import entryData from './fixtures/entry.json';

const assert = chai.assert;

describe('models/entry', () => {
  describe('value', () => {
    describe('can only be one of the enum types ("danger", "warning" or "info")', () => {
      let entry;
      beforeEach(() => {
        entry = new Entry(entryData[0]);
      });

      it('sets value to "danger"', () => {
        entry.value = 'danger';
        assert.equal(entry.value, 'danger');
      });
      it('sets value to "warning"', () => {
        entry.value = 'warning';
        assert.equal(entry.value, 'warning');
      });
      it('sets value to "healthy"', () => {
        entry.value = 'healthy';
        assert.equal(entry.value, 'healthy');
      });
      it('does not set value to "no good"', () => {
        entry.value = 'no good';
        assert.notEqual(entry.value, 'no good');
        assert.equal(entry.value, entryData[0].value);
      });
    });
  });
});
