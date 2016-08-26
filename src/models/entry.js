/**
 * @module {can.Map} account-health-tracker/models/entry Entry
 * @parent js.models
 *
 * @group account-health-tracker/models/entry.properties 5 properties
 */
import DefineMap from 'can-define/map/';
import DefineList from 'can-define/list/';
import superMap from './connection/superMap';
import tag from 'can-connect/can/tag/';
import enumType from './types/enum';
import dateType from './types/date';

export const Entry = DefineMap.extend({
  seal: false
}, {
  /**
   * @property {Number}
   * The id.
   */
  id: 'number',
  /**
   * @property {Number}
   * The projectId.
   */
  projectId: 'number',
  /**
   * @property {Number}
   * The kpiId.
   */
  kpiId: 'number',
  /**
   * @property {String}
   * The name.
   */
  name: 'string',
  /**
   * @property {Date}
   * The timestamp.
   */
  timestamp: dateType,
  /**
   * @property {Enum}
   * The entry rating.
   */
  value: enumType(['danger', 'warning', 'healthy'])
});

Entry.List = DefineList.extend({
  '*': Entry
});

export const entryConnection = superMap({
  url: '/entries',
  idProp: 'id',
  Map: Entry,
  List: Entry.List,
  name: 'kpi'
});

tag('entry-model', entryConnection);

export default Entry;
