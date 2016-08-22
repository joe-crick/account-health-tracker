import Component from 'can/component/';
import Map from 'can/map/';
import 'can/map/define/';
import './donut-graph.less!';
import template from './donut-graph.stache!';

export const ViewModel = Map.extend({
  define: {
    message: {
      value: 'This is the aht-donut-graph component'
    }
  }
});

export default Component.extend({
  tag: 'aht-donut-graph',
  viewModel: ViewModel,
  template
});