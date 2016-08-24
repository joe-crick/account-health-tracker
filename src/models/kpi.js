import DefineMap from 'can-define/map/';
import DefineList from 'can-define/list/';
import superMap from 'can-connect/can/super-map/';
import tag from 'can-connect/can/tag/';

export const KPI = DefineMap.extend({
  seal: false
}, {
  id: 'number',
  clientId: 'number',
  projectId: 'number'
  name: 'string',
  timestamp: 'date'
});

KPI.List = DefineList.extend({
  '*': KPI
});

export const kpiConnection = superMap({
  url: '/clients/{clientId}/projects/{projectId}/kpis',
  idProp: 'id',
  Map: KPI,
  List: KPI.List,
  name: 'kpi'
});

tag('kpi-model', kpiConnection);

export default KPI;
