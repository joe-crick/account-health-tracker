import DefineMap from 'can-define/map/';
import DefineList from 'can-define/list/';
import superMap from 'can-connect/can/super-map/';
import tag from 'can-connect/can/tag/';

export const KPI = DefineMap.extend({
  seal: false
}, {
  'id': '*'
});

KPI.List = DefineList.extend({
  '*': KPI
});

export const kpiConnection = superMap({
  url: '/dashboard/kpis',
  idProp: 'id',
  Map: KPI,
  List: KPI.List,
  name: 'kpi'
});

tag('kpi-model', kpiConnection);

export default KPI;
