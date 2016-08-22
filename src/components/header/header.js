import Component from 'can-component';
import DefineMap from 'can-define/map/';
import './header.less!';
import template from './header.stache!';

export const ViewModel = DefineMap.extend({
});

export default Component.extend({
  tag: 'aht-header',
  ViewModel,
  template,
});
