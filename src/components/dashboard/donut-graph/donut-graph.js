/**
 * @module {Module} account-health-tracker/components/dashboard/donut-graph <aht-donut-graph>
 * @parent aht.dashboard
 *
 * @group account-health-tracker/components/dashboard/donut-graph.properties 0 properties
 *
 * @description Displays a bar graph of aggregate data for each kpi defined for the company.
 *
 * @signature `<aht-donut-graph/>`
 *   Creates the the summary bar graph.
 *
 * @body
 *
 * To create a `<aht-donut-graph>` element, include it in your page
 *
 * ```
 * <aht-donut-graph/>
 * ```
 *
 * ## Example
 *
 * @demo account-health-tracker/components/dashboard/donut-graph.html
 *
 */
import Component from 'can-component/';
import DefineMap from 'can-define/map/';
import DefineList from 'can-define/list/';
import './donut-graph.less!';
import template from './donut-graph.stache!';

export const ViewModel = DefineMap.extend({
  /**
   * @property {String} account-health-tracker/components/dashboard/donut-graph.type type
   * @parent account-health-tracker/components/dashboard/donut-graph.properties
   *
   * Determines the type of graph to display.
   **/
  type: {
    value: 'donut'
  },
  /**
   * @property {String} account-health-tracker/components/dashboard/donut-graph.title title
   * @parent account-health-tracker/components/dashboard/donut-graph.properties
   *
   * The title of the graph.
   **/
  title: {
    value: 'Foobar'
  },
  /**
   * @property {String} account-health-tracker/components/dashboard/donut-graph.dataColumns dataColumns
   * @parent account-health-tracker/components/dashboard/donut-graph.properties
   *
   * The data columns for the overall health summary.
   **/
  dataColumns: {
    value: new DefineList([
      new DefineList(['data1', 80]),
      new DefineList(['data2', 20])
    ])
  }
});

export default Component.extend({
  tag: 'aht-donut-graph',
  ViewModel,
  template
});
