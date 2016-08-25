import Component from 'can-component/';
import template from './bar-graph.stache!';
import generateGraph from './graphGenerator';
import {scrollBarContentsLeft, scrollBarContentsRight, chartRightScrollLimit} from './barGraphUtils';
import ViewModel from './bar-graph-viewmodel';
import './bar-graph.less!';

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
      viewModel.chart = generateGraph(viewModel.barGraphContainer, viewModel.kpis);
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
      scrollBarContentsLeft(this.viewModel);
    },
    /**
     * @description right scroll click
     */
    '.right-scroll click'() {
      scrollBarContentsRight(this.viewModel);
    },
    /**
     * @description on data column update
     * @param viewModel
     * @param ev
     * @param kpis
     */
    '{viewModel} kpis': function (viewModel, ev, kpis) {
      viewModel.chart.load({
        columns: kpis,
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
