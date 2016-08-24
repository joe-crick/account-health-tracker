import DefineMap from 'can-define/map/';
import DefineList from 'can-define/list/';
import superMap from './connection/superMap';
import tag from 'can-connect/can/tag/';

export const Client = DefineMap.extend({
  seal: false
}, {
  id: 'number',
  name: 'string',
  companyId: 'number'
});

Client.List = DefineList.extend({
  '*': Client
});

export const clientConnection = superMap({
  url: '/clients',
  idProp: 'id',
  Map: Client,
  List: Client.List,
  name: 'client'
});

tag('client-model', clientConnection);

export default Client;
