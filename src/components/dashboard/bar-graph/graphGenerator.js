import c3 from 'c3';
import {healthColors} from 'account-health-tracker/enums/colors/';
import health from 'account-health-tracker/enums/healthGroups/';

const kpis = 'kpis';
const GRAPH_HEIGHT = 300;
const GRAPH_TYPE = 'bar';
const AXIS_TYPE = 'category';
const AXIS_HEIGHT = 130;

/**
 * @description generates the bar graph
 * @param element
 */
export default function generateGraph(element) {
  return c3.generate({
    data: {
      x: kpis,
      order: null,
      columns: [
        [health.healthy, 30, 200, 200, 300, 150, 250, 30],
        [health.warning, 130, 100, 100, 200, 150, 50, 30],
        [health.danger, 65, 70, 120, 0, 10, 15, 65],
        [kpis, 'lorem', 'ipsum', 'dolor', 'amet', 'sits', 'begs', 'plays dead']
      ],
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
