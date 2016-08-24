import Component from 'can-component/';
import DefineMap from 'can-define/map/';
import template from './bar-graph.stache!';
import generateGraph from './graphGenerator';
import './bar-graph.less!';

function getLeftPos(dashboardBarChart) {
  return Number.parseInt(dashboardBarChart.style.left ? dashboardBarChart.style.left.replace('px', '') : 0, 10);
}

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
  },
  barGraphElement: '*',
  chart: '*',
  leftPosition: {
    value: 0
  },
  chartLength: {
    value: 0
  }
});

export default Component.extend({
  tag: 'aht-bar-graph',
  ViewModel,
  template,
  events: {
    inserted(element) {
      const vm = this.viewModel;
      vm.chart = generateGraph(element);
      vm.barGraphElement = element.querySelector('.dashboard-summary-bar-chart');
      vm.chartLength = vm.barGraphElement.clientWidth;
    },
    '.left-scroll click'() {
      const dashboardBarChart = this.viewModel.barGraphElement;
      const leftPos = getLeftPos(dashboardBarChart);
      if (leftPos < 0 && Math.abs(leftPos) < this.viewModel.chartLength) {
        dashboardBarChart.style.left = `${(leftPos + 400)}px`;
        this.viewModel.set('leftPosition', leftPos);
      }
    },
    '.right-scroll click'() {
      const dashboardBarChart = this.viewModel.barGraphElement;
      const leftPos = getLeftPos(dashboardBarChart);
      if (leftPos <= 0 && Math.abs(leftPos) < (this.viewModel.chartLength - 200)) {
        dashboardBarChart.style.left = `${(leftPos - 400)}px`;
        this.viewModel.set('leftPosition', leftPos);
      }
    }
  },
  helpers: {
    isScrollerDisabled() {
      return false;
    }
  }
});
