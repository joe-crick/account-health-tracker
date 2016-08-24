import c3 from 'c3';

/**
 * @description generates the bar graph
 * @param element
 */
export default function generateGraph(element) {
  return c3.generate({
    data: {
      x: 'kpis',
      order: null,
      columns: [
        ['healthy', 30, 200, 200, 300, 150, 250],
        ['warning', 130, 100, 100, 200, 150, 50],
        ['danger', 230, 200, 200, 0, 250, 250],
        ['kpis', 'lorem', 'ipsum', 'dolor', 'sit', 'amet', 'sic']
      ],
      type: 'bar',
      groups: [
        ['healthy', 'warning', 'danger']
      ],
      colors: {
        healthy: '#4CAF50',
        warning: '#E6EE9C',
        danger: '#E57373'
      }
    },
    legend: {
      show: false
    },
    size: {
      height: 300
    },
    bindto: element.querySelector('.dashboard-summary-bar-chart'),
    grid: {
      y: {
        lines: [{value: 0}]
      }
    },
    axis: {
      x: {
        type: 'category',
        tick: {
          multiline: false
        },
        height: 130
      },
      y: {
        show: false,
        min: 0,
        padding: 0
      }
    }
  });
}
