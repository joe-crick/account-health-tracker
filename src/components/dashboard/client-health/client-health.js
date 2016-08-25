import Component from 'can-component';
import DefineMap from 'can-define/map/';
import './client-health.less';
import template from './client-health.stache';

export const ViewModel = DefineMap.extend({
  message: {
    value: 'This is the aht-client-health component'
  },
  clients: {
    value: []
  }
});

export default Component.extend({
  tag: 'aht-client-health',
  ViewModel,
  template
});
