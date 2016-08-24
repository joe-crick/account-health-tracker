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

/**
 *
 * @param isAddition
 * @param chartLength
 */
function scrollBarContents(isAddition, chartLength) {
  const dashboardBarChart = this.viewModel.barGraphElement;
  let leftPos = getLeftPos(dashboardBarChart);
  if (leftPos <= 0 && Math.abs(leftPos) < chartLength) {
    leftPos = isAddition ? leftPos + 400 : leftPos - 400;
    dashboardBarChart.style.left = `${(leftPos)}px`;
    this.viewModel.set('leftPosition', leftPos);
  }
}

function chartRightScrollLimit() {
  return this.chartLength - 200;
}

export default Component.extend({
  tag: 'aht-bar-graph',
  ViewModel,
  template,
  events: {
    /**
     * @description inserted
     * @param element
     */
    inserted(element) {
      const vm = this.viewModel;
      vm.chart = generateGraph(element);
      vm.barGraphElement = element.querySelector('.dashboard-summary-bar-chart');
      vm.chartLength = vm.barGraphElement.clientWidth;
      vm.leftPosition = 0;
    },
    /**
     * @description left scroll click
     */
    '.left-scroll click'() {
      scrollBarContents.call(this, true, this.viewModel.chartLength);
    },
    /**
     * @description right scroll click
     */
    '.right-scroll click'() {
      scrollBarContents.call(this, false, chartRightScrollLimit.call(this.viewModel));
    }
  },
  helpers: {
    /**
     * @description is left scroll disabled
     * @returns {string}
     */
    isLeftScrollDisabled() {
      return this.leftPosition === 0 ? 'disabled' : '';
    },
    /**
     * @description is right scroll disabled
     * @returns {string}
     */
    isRightScrollDisabled() {
      return this.leftPosition === chartRightScrollLimit.call(this) ? 'disabled' : '';
    }
  }
});
