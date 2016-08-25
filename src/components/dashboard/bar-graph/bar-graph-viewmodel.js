import DefineMap from 'can-define/map/';
import CompanyKpis from 'account-health-tracker/models/companyKpis';
import health from 'account-health-tracker/enums/healthGroups';
import TEMP_DATA from './tempData';
import graphConfig from './graphConfig';

export default DefineMap.extend({
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
