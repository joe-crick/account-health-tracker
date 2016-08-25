import Component from 'can-component/';
import DefineMap from 'can-define/map/';
import './bar-graph.less!';
import template from './bar-graph.stache!';

/**
 * @module {Module} account-health-tracker/components/dashboard/bar-graph <aht-bar-graph>
 * @parent aht.dashboard
 *
 * @group account-health-tracker/components/dashboard/bar-graph.properties 0 properties
 *
 * @description Displays a bar graph of aggregate data for each kpi defined for the company.
 *
 * @signature `<aht-bar-graph/>`
 *   Creates the the summary bar graph.
 *
 * @body
 *
 * To create a `<aht-bar-graph>` element, include it in your page
 *
 * ```
 * <aht-bar-graph/>
 * ```
 *
 * ## Example
 *
 * @demo account-health-tracker/components/dashboard/bar-graph.html
 *
 */
export const ViewModel = DefineMap.extend({

});

export default Component.extend({
  tag: 'aht-bar-graph',
  ViewModel,
  template,
});
