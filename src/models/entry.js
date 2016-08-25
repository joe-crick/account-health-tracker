import DefineMap from 'can-define/map/';
import DefineList from 'can-define/list/';
import superMap from './connection/superMap';
import tag from 'can-connect/can/tag/';
import enumType from './types/enum';
import dateType from './types/date';

export const Entry = DefineMap.extend({
  seal: false
}, {
  id: 'number',
  projectId: 'number',
  kpiId: 'number',
  name: 'string',
  timestamp: dateType,
  value: enumType(['danger', 'warning', 'healthy'])
});

Entry.List = DefineList.extend({
  '*': Entry
});

export const entryConnection = superMap({
  url: '/clients/{clientId}/projects/{projectId}/entries',
  idProp: 'id',
  Map: Entry,
  List: Entry.List,
  name: 'kpi'
});

tag('entry-model', entryConnection);

export default Entry;
