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
  type: {
    value: 'donut'
  },
  title: {
    value: 'Foobar'
  },
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
