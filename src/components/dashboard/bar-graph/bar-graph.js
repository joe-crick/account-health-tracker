import Component from 'can-component/';
import DefineMap from 'can-define/map/';
import template from './bar-graph.stache!';
import c3 from 'c3';
import './bar-graph.less!';

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
  },
  barChart: {
    get() {
      var kpis = this.get('kpis');

      return kpis ? c3.generate({
        data: {
          bindto: '#bar-chart',
          columns: [
            ['data1', 30, 200, 200, 400, 150, -250],
            ['data2', 130, -100, 100, 200, 150, 50],
            ['data3', 230, -200, 200, 0, 250, 250]
          ],
          type: 'bar',
          groups: [
            ['data1', 'data2']
          ]
        },
        axis: {
          x: {
            type: axis_x_type
          },
          rotated: axis_rotated
        },
        grid: {
          y: {
            lines: [{value:0}]
          }
        },
      }) : {};
    }
  }
});

export default Component.extend({
  tag: 'aht-bar-graph',
  ViewModel,
  template,
});
