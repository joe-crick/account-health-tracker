import Component from 'can-component/';
import DefineMap from 'can-define/map/';
import './bar-graph.less!';
import template from './bar-graph.stache!';

export const ViewModel = DefineMap.extend({
  message: {
    value: 'This is the aht-bar-graph component'
  }
});

export default Component.extend({
  tag: 'aht-bar-graph',
  ViewModel: ViewModel,
  template
});