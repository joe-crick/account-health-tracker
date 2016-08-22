import Component from 'can-component/';
import DefineMap from 'can-define/map/';
import './donut-graph.less!';
import template from './donut-graph.stache!';

export const ViewModel = DefineMap.extend({
  message: {
    value: 'This is the aht-donut-graph component'
  }
});

export default Component.extend({
  tag: 'aht-donut-graph',
  ViewModel: ViewModel,
  template
});