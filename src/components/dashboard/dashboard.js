import Component from 'can/component/';
import Map from 'can/map/';
import 'can/map/define/';
import './dashboard.less!';
import template from './dashboard.stache!';

export const ViewModel = Map.extend({
  define: {
    message: {
      value: 'This is the aht-dashboard component'
    }
  }
});

export default Component.extend({
  tag: 'aht-dashboard',
  viewModel: ViewModel,
  template
});