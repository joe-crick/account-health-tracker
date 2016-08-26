/**
 * @module {Module} account-health-tracker/components/dashboard/donut-graph <aht-donut-graph>
 * @parent js.components
 *
 * @group account-health-tracker/components/dashboard/donut-graph.properties 0 properties
 *
 * @description Displays a bar graph of aggregate data for each kpi defined for the company.
 *
 * @signature `<aht-donut-graph/>`
 *   Creates the the summary bar graph.
 *
 * @body
 *
 * To create a `<aht-donut-graph>` element, include it in your page
 *
 * ```
 * <aht-donut-graph/>
 * ```
 *
 * ## Example
 *
 * @demo src/components/dashboard/donut-graph/donut-graph.html
 *
 */
import Component from 'can-component/';
import DefineMap from 'can-define/map/';
import DefineList from 'can-define/list/';
import c3 from 'c3';
import template from './donut-graph.stache!';
import {healthColors, healthGroups} from 'account-health-tracker/enums/';
import { translate } from 'account-health-tracker/translation';
import './donut-graph.less!';

export const ViewModel = DefineMap.extend({
  /**
   * @property {String} account-health-tracker/components/dashboard/donut-graph.type type
   * @parent account-health-tracker/components/dashboard/donut-graph.properties
   *
   * Determines the type of graph to display.
   **/
  type: {
    value: 'donut'
  },
  /**
   * @property {String} account-health-tracker/components/dashboard/donut-graph.title title
   * @parent account-health-tracker/components/dashboard/donut-graph.properties
   *
   * The title of the graph.
   **/
  title: {
    value: 'Foobar'
  },
  /**
   * @property {c3} account-health-tracker/components/dashboard/donut-graph.chart chart
   * @parent account-health-tracker/components/dashboard/donut-graph.properties
   *
   * The graph object.
   **/
  chart: '*',
  /**
   * @property {htmlbool} account-health-tracker/components/dashboard/donut-graph.showLabel showLabel
   * @parent account-health-tracker/components/dashboard/donut-graph.properties
   *
   * Whether the graph should show a label/legend.
   **/
  showLabel: {
    type: 'htmlbool',
    value: false
  },
  height: 'number',
  width: 'number',
  /**
   * @property {Array<Number>} account-health-tracker/components/dashboard/donut-graph.healthyData healthyData
   * @parent account-health-tracker/components/dashboard/donut-graph.properties
   *
   * Healthy data for the summary graph.
   **/
  healthyData: {
    value: []
  },
  /**
   * @property {Array<Number>} account-health-tracker/components/dashboard/donut-graph.warningData warningData
   * @parent account-health-tracker/components/dashboard/donut-graph.properties
   *
   * Warning data for the summary graph.
   **/
  warningData: {
    value: []
  },
  /**
   * @property {Array<Number>} account-health-tracker/components/dashboard/donut-graph.dangerData dangerData
   * @parent account-health-tracker/components/dashboard/donut-graph.properties
   *
   * Danger data for the summary graph.
   **/
  dangerData: {
    value: []
  },
  /**
   * @property {String} account-health-tracker/components/dashboard/donut-graph.dataColumns dataColumns
   * @parent account-health-tracker/components/dashboard/donut-graph.properties
   *
   * The data columns for the overall health summary.
   **/
  dataColumns: {
    get() {
      const healthyData = this.healthyData;
      const warningData = this.warningData;
      const dangerData = this.dangerData;

      return [
        new DefineList([healthGroups.healthy]).concat(healthyData),
        new DefineList([healthGroups.warning]).concat(warningData),
        new DefineList([healthGroups.danger]).concat(dangerData)
      ];
    }
  }
});

export default Component.extend({
  tag: 'aht-donut-graph',
  ViewModel,
  template,
  events: {
    /**
     * @function inserted
     *
     * Creates a summary grid on component insertion
     *
     */
    inserted() {
      this.viewModel.chart = c3.generate({
        bindto: this.element.querySelector('.donut-chart'),
        data: {
          columns: this.viewModel.dataColumns,
          colors: {
            healthy: healthColors.healthy,
            warning: healthColors.warning,
            danger: healthColors.danger
          },
          names: {
            healthy: translate('dashboard.chart.keys.healthy'),
            warning: translate('dashboard.chart.keys.warning'),
            danger: translate('dashboard.chart.keys.danger')
          },
          type: 'donut'
        },
        legend: {
          show: this.viewModel.showLabel,
          position: 'right',
          item: {
            onclick() {
              return false;
            }
          }
        },
        size: {
          height: this.viewModel.height,
          width: this.viewModel.width
        },
        donut: {
          label: {
            show: this.viewModel.showLabel
          }
        },
        tooltip: {
          show: false
        }
      });
    },

    /**
     * @function beforeremove
     *
     * Destroys a chart object when the page is unloaded
     *
     */
    beforeremove() {
      this.viewModel.chart.destroy();
    },

    /**
     * @function {viewModel} dataColumns
     *
     * Updates the donut chart when the data columns update.
     *
     * @param {DefineMap} viewModel
     * @param {Event} ev
     * @param {Array<Number>} dataColumns
     */
    '{viewModel} dataColumns': function reloadChart(viewModel, ev, dataColumns) {
      viewModel.chart.load({
        columns: dataColumns,
        unload: viewModel.chart.columns
      });
    }
  }
});
