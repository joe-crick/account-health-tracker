import Component from 'can-component/';
import DefineMap from 'can-define/map/';
import DefineList from 'can-define/list/';
import './donut-graph.less!';
import template from './donut-graph.stache!';

export const ViewModel = DefineMap.extend({
  message: {
    value: 'This is the aht-donut-graph component',
  },
  type: {
    value: 'donut'
  },
  title: {
    value: 'Foobar'
  },
  dataColumns: {
    value: new DefineList([
      new DefineList(['data1', 80]),
      new DefineList(['data2', 20])
    ])
  }
});

export default Component.extend({
  tag: 'aht-donut-graph',
  ViewModel,
  template
});
