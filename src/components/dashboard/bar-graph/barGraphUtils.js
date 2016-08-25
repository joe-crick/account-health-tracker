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
 * @description Updates the position of the bar graph relative to its container
 * @param isAddition
 * @param chartWidth
 */
function scrollBarContents(isAddition, chartWidth) {
  const dashboardBarChart = this.barGraphContainer;
  const leftPos = getLeftPos(dashboardBarChart);
  if (canScroll(leftPos, chartWidth, isAddition)) {
    const newPos = isAddition ? leftPos + 400 : leftPos - 400;
    dashboardBarChart.style.left = `${(newPos)}px`;
    this.set('leftPosition', newPos);
  }
}

/**
 * @description chart right scroll limit
 * @param viewModel
 * @returns {number}
 */
function chartRightScrollLimit(viewModel) {
  return viewModel.chartWidth - viewModel.overflowContainerWidth;
}

/**
 * @description Scroll bar contents left
 * @param viewModel
 */
function scrollBarContentsLeft(viewModel) {
  scrollBarContents.call(viewModel, true, viewModel.chartWidth);
}

/**
 * @description Scroll bar contents right
 * @param viewModel
 */
function scrollBarContentsRight(viewModel) {
  scrollBarContents.call(viewModel, false, chartRightScrollLimit(viewModel));
}

export {scrollBarContentsLeft, scrollBarContentsRight, chartRightScrollLimit};
