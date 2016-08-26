import DefineMap from 'can-define/map/';

export default DefineMap.extend({
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
      const kpis = this.kpis;

      return [
        kpis[0].serialize(),
        kpis[1].serialize(),
        kpis[2].serialize(),
        kpis[3].serialize()
      ];
    }
  }
});
