import Component from 'can-component';
import DefineMap from 'can-define/map/';
import './client-health.less';
import template from './client-health.stache';

export const ViewModel = DefineMap.extend({
  message: {
    value: 'This is the aht-client-health component'
  },
  clients: {
    value: [{
      name: 'Bitovi',
      type: 'improving',
      healthyData: [75],
      warningData: [15],
      dangerData: [10]
    }, {
      name: 'Levi',
      type: 'declining',
      healthyData: [30],
      warningData: [45],
      dangerData: [25]
    }, {
      name: 'Mindjet',
      type: 'stable',
      healthyData: [34],
      warningData: [33],
      dangerData: [33]
    }]
  }
});

export default Component.extend({
  tag: 'aht-client-health',
  ViewModel,
  template
});
