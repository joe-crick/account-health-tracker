import DefineMap from 'can-define/map/';
import Kpi from 'account-health-tracker/models/kpi';
import {healthGroups} from 'account-health-tracker/enums/';
import graphConfig from './graphConfig';

export default DefineMap.extend({
  /**
   * @property {account-health-tracker/models/kpi}
   *
   * Provides a kpi list, once kpiPromise resolves.
   */
  kpis: [Kpi],
  /**
   * @property {Promise<account-health-tracker/models/kpi>|undefined}
   *
   * Provides a collection of kpis
   *
   * @signature `Promise<account-health-tracker/models/kpi>`
   *
   *   Given a valid `id`, the kpi promise.
   *
   * @signature `undefined`
   *
   *   Given an invalid `id`, the kpi promise.
   *
   */
  kpiPromise: {
    get() {
      const context = this;
      return Kpi.getList({})
        .then((kpi) => {
          context.kpis = kpi;
        });
    }
  },
  /**
   * @property {Object}
   *
   * The bar graph container.
   */
  barGraphContainer: '*',
  /**
   * @property {Object}
   *
   * The c3 chart object.
   */
  chart: '*',
  /**
   * @property {Number}
   *
   * The left position of the bar graph container.
   */
  leftPosition: {
    value: 0
  },
  /**
   * @property {Number}
   *
   * The width of the bar graph chart.
   */
  chartWidth: {
    value: 0
  },
  /**
   * @property {Number}
   *
   * The width of the bar graph overflow container.
   */
  overflowContainerWidth: {
    value: 0
  },
  dataColumns: {
    get() {
      const healthyData = [healthGroups.healthy];
      const warningData = [healthGroups.warning];
      const dangerData = [healthGroups.danger];
      const labelData = [graphConfig.xAxis.label];

      this.kpis.forEach((kpi) => {
        healthyData.push(kpi[healthGroups.healthy]);
        warningData.push(kpi[healthGroups.warning]);
        dangerData.push(kpi[healthGroups.danger]);
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
