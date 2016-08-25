import 'steal-mocha';
import chai from 'chai';

import DefineMap from 'can-define/map/';
import dateType from './date';
import moment from 'moment';

const assert = chai.assert;

const TestMap = DefineMap.extend({
  seal: false
}, {
  timestamp: dateType
});

let map;

describe('models/types/date', () => {
  beforeEach(() => {
    map = new TestMap();
  });

  it('converts string date to moment', () => {
    map.timestamp = '2016-06-23T16:41:47Z';
    assert.ok(map.timestamp instanceof moment);
  });
  it('converts Date Object to moment', () => {
    map.timestamp = new Date();
    assert.ok(map.timestamp instanceof moment);
  });
  it('serializes to ISO 8601 string', () => {
    const now = new Date();
    const expected = moment(now).utc().format(moment.ISO_8601());
    map.timestamp = now;
    assert.equal(map.serialize().timestamp, expected);
  });
});
