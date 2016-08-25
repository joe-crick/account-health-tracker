
/* eslint no-trailing-spaces: 0 */

import c3 from 'c3';
import {healthColors} from 'account-health-tracker/enums/colors/';
import health from 'account-health-tracker/enums/healthGroups/';

const X_AXIS_LABEL = 'kpis';
const GRAPH_HEIGHT = 300;
const GRAPH_TYPE = 'bar';
const AXIS_TYPE = 'category';
const AXIS_HEIGHT = 130;

/**
 * @description get kpi columsn
 * @param kpis
 * @returns {*[]}
 */
function getKpiColumns(kpis) {
  const healthyData = [health.healthy];
  const warningData = [health.warning];
  const dangerData = [health.danger];
  const labelData = [X_AXIS_LABEL];

  kpis.forEach((kpi) => {
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

/**
 * @description generates the bar graph
 * @param element
 * @param kpis
 */
export default function generateGraph(element, kpis) {
  return c3.generate({
    data: {
      x: X_AXIS_LABEL,
      order: null,
      columns: getKpiColumns(kpis),
      type: GRAPH_TYPE,
      groups: [
        [health.healthy, health.warning, health.danger]
      ],
      colors: {
        healthy: healthColors.healthy,
        warning: healthColors.warning,
        danger: healthColors.danger
      }
    },
    legend: {
      show: false
    },
    size: {
      height: GRAPH_HEIGHT
    },
    bindto: element.querySelector('.dashboard-summary-bar-chart'),
    grid: {
      y: {
        lines: [{value: 0}]
      }
    },
    axis: {
      x: {
        type: AXIS_TYPE,
        tick: {
          multiline: false
        },
        height: AXIS_HEIGHT
      },
      y: {
        show: false,
        min: 0,
        padding: 0
      }
    }
  });
}
