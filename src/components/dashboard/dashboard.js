/**
 * @module {Module} account-health-tracker/components/dashboard <aht-dashboard>
 * @group account-health-tracker/components/dashboard.properties 3 properties
 *
 * @description Provides an overview of the kpis for the company.
 *
 * @signature `<aht-dashboard />`
 *   Creates a dashboard that displays aggregate data about kpis for the company's clients .
 *
 * @body
 *
 * To create a `<aht-dashboard>` element include the element in your page
 *
 * ```
 * <aht-dashboard />
 * ```
 *
 * ## Example
 *
 * @demo src/components/dashboard/dashboard.html
 *
 */
import Component from 'can-component/';
import DefineMap from 'can-define/map/';
import './dashboard.less!';
import template from './dashboard.stache!';

export const ViewModel = DefineMap.extend({
  /**
   * @property {Array<Number>} account-health-tracker/components/dashboard.healthyData healthyData
   * @parent account-health-tracker/components/dashboard.properties
   *
   * Healthy data for the summary graph.
   **/
  healthyData: {
    value: []
  },
  /**
   * @property {Array<Number>} account-health-tracker/components/dashboard.warningData warningData
   * @parent account-health-tracker/components/dashboard.properties
   *
   * Warning data for the summary graph.
   **/
  warningData: {
    value: []
  },
  /**
   * @property {Array<Number>} account-health-tracker/components/dashboard.dangerData dangerData
   * @parent account-health-tracker/components/dashboard.properties
   *
   * Danger data for the summary graph.
   **/
  dangerData: {
    value: []
  }
});

export default Component.extend({
  tag: 'aht-dashboard',
  ViewModel,
  template
});
