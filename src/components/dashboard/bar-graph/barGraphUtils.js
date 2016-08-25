/**
 * @description gets the left position of the bar chart
 * @param dashboardBarChart
 * @returns {number}
 */
function getLeftPos(dashboardBarChart) {
  return dashboardBarChart.style.left ? Number.parseInt(dashboardBarChart.style.left.replace('px', ''), 10) : 0;
}

/**
 * @description can scroll
 * @param leftPos
 * @param isAddition
 */
function canScroll(leftPos, chartWidth, isAddition) {
  const scrollable = isAddition ? leftPos < 0 : leftPos <= 0;
  return scrollable && Math.abs(leftPos) < chartWidth;
}

/**
 *
 * @param isAddition
 * @param chartWidth
 */
function scrollBarContents(isAddition, chartWidth) {
  const dashboardBarChart = this.viewModel.barGraphContainer;
  const leftPos = getLeftPos(dashboardBarChart);
  if (canScroll(leftPos, chartWidth, isAddition)) {
    const newPos = isAddition ? leftPos + 400 : leftPos - 400;
    dashboardBarChart.style.left = `${(newPos)}px`;
    this.viewModel.set('leftPosition', newPos);
  }
}

/**
 * @description chart right scroll limit
 * @returns {number}
 */
function chartRightScrollLimit() {
  return this.chartWidth - this.overflowContainerWidth;
}

/**
 * @description Scroll bar contents left
 */
function scrollBarContentsLeft() {
  scrollBarContents.call(this, true, this.viewModel.chartWidth);
}

/**
 * @description Scroll bar contents right
 */
function scrollBarContentsRight() {
  scrollBarContents.call(this, false, chartRightScrollLimit.call(this.viewModel));
}

export {scrollBarContentsLeft, scrollBarContentsRight, chartRightScrollLimit};
