/* eslint no-trailing-spaces: 0 */

import c3 from 'c3';
import { healthColors, healthGroups } from 'account-health-tracker/enums/';
import graphConfig from './graphConfig';

/**
 * @description generates the bar graph
 * @param element
 * @param kpis
 */
export default function generateGraph(element, kpis) {
  return c3.generate({
    data: {
      x: graphConfig.xAxis.label,
      order: null,
      columns: kpis,
      type: graphConfig.graphType,
      groups: [
        [healthGroups.healthy, healthGroups.warning, healthGroups.danger]
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
      height: graphConfig.graphHeight
    },
    bindto: element,
    grid: {
      y: {
        lines: [{value: 0}]
      }
    },
    axis: {
      x: {
        type: graphConfig.xAxis.type,
        tick: {
          multiline: false
        },
        height: graphConfig.xAxis.height
      },
      y: {
        show: false,
        min: 0,
        padding: 0
      }
    }
  });
}
