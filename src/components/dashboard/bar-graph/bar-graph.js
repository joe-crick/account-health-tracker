import Component from 'can-component/';
import DefineMap from 'can-define/map/';
import template from './bar-graph.stache!';
import c3 from 'c3';
import './bar-graph.less!';

function generateGraph(element) {
  return c3.generate({
    data: {
      x: 'kpis',
      order: null,
      columns: [
        ['healthy', 30, 200, 200, 300, 150, 250],
        ['warning', 130, 100, 100, 200, 150, 50],
        ['danger', 230, 200, 200, 0, 250, 250],
        ['kpis', 'lorem', 'ipsum', 'dolor', 'sit', 'amet', 'sic']
      ],
      type: 'bar',
      groups: [
        ['healthy', 'warning', 'danger']
      ],
      colors: {
        healthy: '#4CAF50',
        warning: '#E6EE9C',
        danger: '#E57373'
      }
    },
    legend: {
      show: false
    },
    size: {
      height: 300
    },
    bindto: element.querySelector('.dashboard-summary-bar-chart'),
    grid: {
      y: {
        lines: [{value:0}]
      }
    },
    axis: {
      x: {
        type: 'category',
        tick: {
          multiline: false
        },
        height: 130
      },
      y: {
        show: false
      }
    }
  });
}

export const ViewModel = DefineMap.extend({
  kpis: {
    get(last, set){
      this.get('kpiPromise')
        .then(set)
        .then(() => {
          if(last) {
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
