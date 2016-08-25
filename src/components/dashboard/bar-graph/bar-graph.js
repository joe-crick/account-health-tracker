import Component from 'can-component/';
import DefineMap from 'can-define/map/';
import template from './bar-graph.stache!';
import generateGraph from './graphGenerator';
import { scrollBarContents, chartRightScrollLimit } from './barGraphUtils';
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
