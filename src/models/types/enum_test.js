import 'steal-mocha';
import chai from 'chai';

import DefineMap from 'can-define/map/';
import enumType from './enum';

const assert = chai.assert;

const TestMap = DefineMap.extend({
  seal: false
}, {
  value: enumType(['a', 'b', 'c'])
});

let map;

describe('models/types/enum', function enumTests() {
  beforeEach(() => {
    map = new TestMap({
      value: 'a'
    });
  });

  it('allows you to set a value that is in the enum', () => {
    map.value = 'b';
    assert.equal(map.value, 'b');
  });

  describe('when setting a value that is not in the enum', () => {
    it('does not set the value', () => {
      map.value = 'd';
      assert.notEqual(map.value, 'd');
    });
    it('keeps the old value', () => {
      map.value = 'd';
      assert.equal(map.value, 'a');
    });
  });
});
