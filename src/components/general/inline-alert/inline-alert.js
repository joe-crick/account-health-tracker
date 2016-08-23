import Component from 'can-component';
import DefineMap from 'can-define/map/';
import './inline-alert.less';
import template from './inline-alert.stache';

export const ViewModel = DefineMap.extend({
  action: undefined
});

export default Component.extend({
  tag: 'aht-inline-alert',
  ViewModel,
  template
});
