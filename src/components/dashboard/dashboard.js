import Component from 'can-component/';
import DefineMap from 'can-define/map/';
import './dashboard.less!';
import template from './dashboard.stache!';

export const ViewModel = DefineMap.extend({
  message: {
    value: 'This is the aht-dashboard component',
  },
});

export default Component.extend({
  tag: 'aht-dashboard',
  ViewModel,
  template,
});
