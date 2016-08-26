/**
 * @module {can.Map} account-health-tracker/models/project Project
 * @parent js.models
 *
 * @group account-health-tracker/models/project.properties 3 properties
 */
import DefineMap from 'can-define/map/';
import DefineList from 'can-define/list/';
import superMap from './connection/superMap';
import tag from 'can-connect/can/tag/';

export const Project = DefineMap.extend({
  seal: false
}, {
  /**
   * @property {Number}
   * The id.
   */
  id: 'number',
  /**
   * @property {Number}
   * The clientId.
   */
  clientId: 'number',
  /**
   * @property {String}
   * The name.
   */
  name: 'string'
});

Project.List = DefineList.extend({
  '*': Project
});

export const projectConnection = superMap({
  url: '/clients/{clientId}/project',
  idProp: 'id',
  Map: Project,
  List: Project.List,
  name: 'project'
});

tag('project-model', projectConnection);

export default Project;
