import DefineMap from 'can-define/map/';
import Kpi from 'account-health-tracker/models/kpi';

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
      return new Promise((resolve) => {
        resolve({});
      });
      // const context = this;
      // return Kpi.getList({})
      //   .then((Kpi) => {
      //     context.Kpi = Kpi;
      //   });
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
  }
});
