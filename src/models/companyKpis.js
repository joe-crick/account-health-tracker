import DefineMap from 'can-define/map/';
import DefineList from 'can-define/list/';
import superMap from 'can-connect/can/super-map/';
import tag from 'can-connect/can/tag/';

export const CompanyKpis = DefineMap.extend({
  seal: false
}, {
  id: '*'
});

CompanyKpis.List = DefineList.extend({
  '*': CompanyKpis
});

export const companyKpisConnection = superMap({
  url: '/company/kpis',
  idProp: 'id',
  Map: CompanyKpis,
  List: CompanyKpis.List,
  name: 'companyKpis',
  parseListData(data) {
    debugger
    return data;
  }
});

tag('company-kpis-model', companyKpisConnection);

export default CompanyKpis;
