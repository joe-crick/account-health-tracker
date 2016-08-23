import DefineMap from 'can-define/map/';
import DefineList from 'can-define/list/';
import superMap from './connection/superMap';
import tag from 'can-connect/can/tag/';

export const Company = DefineMap.extend({
  seal: false
}, {
  id: 'number',
  name: 'string'
});

Company.List = DefineList.extend({
  '*': Company
});

export const companyConnection = superMap({
  url: '/',
  idProp: 'id',
  Map: Company,
  List: Company.List,
  name: 'company'
});

tag('company-model', companyConnection);

export default Company;
