import Component from 'can/component/';
import Map from 'can/map/';
import 'can/map/define/';
import './bar-graph.less!';
import template from './bar-graph.stache!';

export const ViewModel = Map.extend({
  define: {
    message: {
      value: 'This is the aht-bar-graph component'
    }
  }
});

export default Component.extend({
  tag: 'aht-bar-graph',
  viewModel: ViewModel,
  template
});