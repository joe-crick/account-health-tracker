import Component from 'can-component/';
import DefineMap from 'can-define/map/';
import DefineList from 'can-define/list/';
import c3 from 'c3';
import './donut-graph.less!';
import template from './donut-graph.stache!';
import { translate } from 'account-health-tracker/translation';
import { healthColors } from 'account-health-tracker/helpers';

export const ViewModel = DefineMap.extend({
  message: {
    value: 'This is the aht-donut-graph component',
  },
  chart: '*',
  healthyData: {
    value: []
  },
  warningData: {
    value: []
  },
  dangerData: {
    value: []
  },
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
          show: true,
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
