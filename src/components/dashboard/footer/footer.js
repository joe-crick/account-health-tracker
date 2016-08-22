import Component from 'can-component';
import DefineMap from 'can-define/map/';
import './footer.less!';
import template from './footer.stache!';

export const ViewModel = DefineMap.extend({
  message: {
    value: 'This is the aht-footer component'
  }
});

export default Component.extend({
  tag: 'aht-footer',
  ViewModel: ViewModel,
  template
});