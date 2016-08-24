import Component from 'can-component/';
import DefineMap from 'can-define/map/';
import template from './bar-graph.stache!';
import generateGraph from './graphGenerator';
import './bar-graph.less!';

export const ViewModel = DefineMap.extend({
  kpis: {
    get(last, set){
      this.get('kpiPromise')
        .then(set)
        .then(() => {
          if (last) {
            generateGraph();
          }
        });
    }
  },
  kpiPromise: {
    get() {
      return new Promise((resolve, reject) => {
        resolve({});
      });
    }
  }
});

export default Component.extend({
  tag: 'aht-bar-graph',
  ViewModel,
  template,
  events: {
    inserted(element) {
      generateGraph(element);
    }
  }
});
