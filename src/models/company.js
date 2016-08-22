import DefineMap from 'can-define/map/';
import DefineList from 'can-define/list/';
import superMap from 'can-connect/can/super-map/';
import tag from 'can-connect/can/tag/';

export const Company = DefineMap.extend({
  seal: false
}, {
  'id': '*'
});

Company.List = DefineList.extend({
  '*': Company
});

export const companyConnection = superMap({
  url: '/dashboard',
  idProp: 'id',
  Map: Company,
  List: Company.List,
  name: 'company'
});

tag('company-model', companyConnection);

export default Company;
