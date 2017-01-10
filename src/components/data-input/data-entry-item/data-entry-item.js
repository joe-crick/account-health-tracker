/**
 * @module {Module} account-health-tracker/components/dashboard/data-entry-item <aht-data-entry-item>
 * @parent js.components
 *
 * @group account-health-tracker/components/general/data-entry-item.properties 4 properties
 *
 * @description Displays a data-entry-item.
 *
 * @signature `<aht-data-entry-item/>`
 *   Creates an data entry item
 *
 * @body
 *
 * To create a `<aht-data-entry-item>` element, include it in your page
 *
 * ```
 * <aht-data-entry-item
 *    legend="Testius with Buttonius"
 *    field-names="Amet sit dolor ipsum lorraine"
 *    value="anything">
 * </aht-data-entry-item>
 * ```
 *
 * ## Example
 *
 * @demo src/components/data-entry-item/data-entry-item.html
 *
 */
import Component from 'can-component';
import DefineMap from 'can-define/map/';
import './data-entry-item.less';
import template from './data-entry-item.stache';

export const ViewModel = DefineMap.extend({
  selectedValue: {},
  name: {
    value: Math.random().toString()
  },
  /**
   * Sets the selected value of the component
   * @param val
   */
  setSelectedValue(val) {
    this.selectedValue = val;
  }
});

export default Component.extend({
  tag: 'aht-data-entry-item',
  ViewModel,
  template
});