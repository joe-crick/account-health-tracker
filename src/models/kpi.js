/**
 * @module {can.Map} account-health-tracker/models/kpi Kpi
 *
 * @group account-health-tracker/models/kpi.properties 4 properties
 */
import DefineMap from 'can-define/map/';
import DefineList from 'can-define/list/';
import superMap from './connection/superMap';
import tag from 'can-connect/can/tag/';

export const KPI = DefineMap.extend({
  seal: false
}, {
  /**
   * @property {Number}
   * The id.
   */
  id: 'number',
  /**
   * @property {Number}
   * The companyId.
   */
  companyId: 'number',
  name: 'string'
});

KPI.List = DefineList.extend({
  '*': KPI
});

export const kpiConnection = superMap({
  url: '/kpis',
  idProp: 'id',
  Map: KPI,
  List: KPI.List,
  name: 'kpi'
});

tag('kpi-model', kpiConnection);

export default KPI;
