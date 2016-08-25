import DefineMap from 'can-define/map/';
import Kpis from 'account-health-tracker/models/kpi';

export default DefineMap.extend({
  kpis: [Kpis],
  kpiPromise: {
    get() {
      return new Promise((resolve) => {
        resolve({});
      });
      // const context = this;
      // return Kpis.getList({})
      //   .then((kpis) => {
      //     context.kpis = kpis;
      //   });
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
  }
});
