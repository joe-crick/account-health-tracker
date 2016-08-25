import DefineMap from 'can-define/map/';
import Kpis from 'account-health-tracker/models/kpi';
import {healthGroups as health} from 'account-health-tracker/enums/';
import TEMP_DATA from './tempData';
import graphConfig from './graphConfig';

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
