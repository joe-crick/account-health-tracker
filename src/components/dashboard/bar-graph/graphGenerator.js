/* eslint no-trailing-spaces: 0 */

import c3 from 'c3';
import {healthColors} from 'account-health-tracker/enums/colors/';
import health from 'account-health-tracker/enums/healthGroups/';
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
