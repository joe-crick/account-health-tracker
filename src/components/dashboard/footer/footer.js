import Component from 'can/component/';
import Map from 'can/map/';
import 'can/map/define/';
import './footer.less!';
import template from './footer.stache!';

export const ViewModel = Map.extend({
  define: {
    message: {
      value: 'This is the aht-footer component'
    }
  }
});

export default Component.extend({
  tag: 'aht-footer',
  viewModel: ViewModel,
  template
});