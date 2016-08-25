/**
 * @module {Module} account-health-tracker/components/dashboard/donut-graph <aht-donut-graph>
 * @parent aht.dashboard
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
 * @demo account-health-tracker/components/dashboard/donut-graph.html
 *
 */
import Component from 'can-component/';
import DefineMap from 'can-define/map/';
import DefineList from 'can-define/list/';
import c3 from 'c3';
import './donut-graph.less!';
import template from './donut-graph.stache!';
import { translate } from 'account-health-tracker/translation';
import { healthColors } from 'account-health-tracker/helpers';

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
  chart: '*',
  showLabel: {
    type: 'htmlbool'
  },
  healthyData: {
    value: []
  },
  warningData: {
    value: []
  },
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
        new DefineList(['healthy']).concat(healthyData),
        new DefineList(['warning']).concat(warningData),
        new DefineList(['danger']).concat(dangerData)
      ];
    }
  }
});

export default Component.extend({
  tag: 'aht-donut-graph',
  ViewModel,
  template,
  events: {
    inserted() {
      this.viewModel.chart = c3.generate({
        bindto: this.element.querySelector('.chart'),
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
        donut: {
          label: {
            show: false
          }
        },
        tooltip: {
          show: false
        }
      });
    },

    beforeremove() {
      this.viewModel.chart.destroy();
    },

    '{viewModel} dataColumns': function reloadChart(viewModel, ev, dataColumns) {
      viewModel.chart.load({
        columns: dataColumns,
        unload: viewModel.chart.columns
      });
    }
  }
});
