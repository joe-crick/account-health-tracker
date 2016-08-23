import Component from 'can-component/';
import DefineMap from 'can-define/map/';
import './bar-graph.less!';
import template from './bar-graph.stache!';

export const ViewModel = DefineMap.extend({
  kpis: {
    get(last, set){
      this.get('kpiPromise').then(set);
    }
  },
  kpiPromise: {
    get() {
      return new Promise((resolve, reject) => {
        reject(new Error());
      })
    }
  }
});

export default Component.extend({
  tag: 'aht-bar-graph',
  ViewModel,
  template,
});
