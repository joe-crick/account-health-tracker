import Component from 'can-component/';
import DefineMap from 'can-define/map/';
import template from './bar-graph.stache!';
import generateGraph from './graphGenerator';
import {scrollBarContents, chartRightScrollLimit} from './barGraphUtils';
import CompanyKpis from 'account-health-tracker/models/companyKpis';
import './bar-graph.less!';

export const ViewModel = DefineMap.extend({
  kpis: '*',
  kpiPromise: {
    get() {
      const context = this;
      return CompanyKpis.getList({})
        .then((kpis) => {
          const element = context.componentElement;
          context.kpis = kpis;
          generateGraph(context.barGraphElement, kpis);
          context.barGraphContainer = element.querySelector('.dashboard-summary-bar-chart');
          context.chartWidth = context.barGraphContainer.clientWidth;
          context.leftPosition = 0;
          context.overflowContainerWidth = element.querySelector('.bar-chart-over-flow').clientWidth;
        });
    }
  },
  barGraphContainer: '*',
  barGraphElement: '*',
  componentElement: '*',
  chart: '*',
  leftPosition: {
    value: 0
  },
  chartWidth: {
    value: 0
  },
  overflowContainerWidth: {
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
      vm.componentElement = element;
    },
    /**
     * @description left scroll click
     */
    '.left-scroll click'() {
      scrollBarContents.call(this, true, this.viewModel.chartWidth);
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
      const rightScrollLimit = chartRightScrollLimit.call(this);
      return Math.abs(this.leftPosition) < rightScrollLimit ? '' : 'disabled';
    }
  }
});
