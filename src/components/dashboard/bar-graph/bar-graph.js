import Component from 'can-component/';
import DefineMap from 'can-define/map/';
import template from './bar-graph.stache!';
import generateGraph from './graphGenerator';
import {scrollBarContentsLeft, scrollBarContentsRight, chartRightScrollLimit} from './barGraphUtils';
import CompanyKpis from 'account-health-tracker/models/companyKpis';
import health from 'account-health-tracker/enums/healthGroups';
import TEMP_DATA from './tempData';
import graphConfig from './graphConfig';
import './bar-graph.less!';

export const ViewModel = DefineMap.extend({
  kpis: [CompanyKpis],
  kpiPromise: {
    get() {
      const context = this;
      return CompanyKpis.getList({})
        .then((kpis) => {
          context.kpis = kpis;
        });
    }
  },
  barGraphContainer: '*',
  chart: '*',
  leftPosition: {
    value: 0
  },
  chartWidth: {
    value: 0
  },
  overflowContainerWidth: {
    value: 0
  },
  dataColumns: {
    get() {
      const healthyData = [health.healthy];
      const warningData = [health.warning];
      const dangerData = [health.danger];
      const labelData = [graphConfig.xAxis.label];

      TEMP_DATA.forEach((kpi) => {
        healthyData.push(kpi[health.healthy]);
        warningData.push(kpi[health.warning]);
        dangerData.push(kpi[health.danger]);
        labelData.push(kpi.name);
      });

      return [
        healthyData,
        warningData,
        dangerData,
        labelData
      ];
    }
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
      const viewModel = this.viewModel;
      viewModel.barGraphContainer = element.querySelector('.dashboard-summary-bar-chart');
      viewModel.overflowContainerWidth = element.querySelector('.bar-chart-over-flow').clientWidth;
      viewModel.chartWidth = viewModel.barGraphContainer.clientWidth;
      viewModel.leftPosition = 0;
      // Generate a blank graph, which will be populated once the data loads
      viewModel.chart = generateGraph(viewModel.barGraphContainer, viewModel.dataColumns);
    },
    /**
     * @description destroy chart on remove
     */
    beforeremove() {
      this.viewModel.chart.destroy();
    },
    /**
     * @description left scroll click
     */
    '.left-scroll click'() {
      scrollBarContentsLeft.call(this);
    },
    /**
     * @description right scroll click
     */
    '.right-scroll click'() {
      scrollBarContentsRight.call(this);
    },
    /**
     * @description on data column update
     * @param viewModel
     * @param ev
     * @param dataColumns
     */
    '{viewModel} dataColumns': function (viewModel, ev, dataColumns) {
      viewModel.chart.load({
        columns: dataColumns,
        unload: viewModel.chart.columns
      });
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
