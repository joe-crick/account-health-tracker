/**
 * @module {Module} account-health-tracker/components/dashboard <aht-dashboard>
 * @group account-health-tracker/components/dashboard.properties 0 properties
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
  healthyData: {
    value: []
  },
  warningData: {
    value: []
  },
  dangerData: {
    value: []
  }
});

export default Component.extend({
  tag: 'aht-dashboard',
  ViewModel,
  template
});
