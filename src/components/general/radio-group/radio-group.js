/**
 * @module {Module} account-health-tracker/components/dashboard/data-entry-item <aht-radio-group>
 * @parent js.components
 *
 * @group account-health-tracker/components/general/data-entry-item.properties 4 properties
 *
 * @description Displays a data-entry-item.
 *
 * @signature `<aht-radio-group/>`
 *   Creates an aht radio group
 *
 * @body
 *
 * To create a `<aht-radio-group>` element, include it in your page
 *
 * ```
 * <aht-radio-group
 *    legend="Testius with Buttonius"
 *    {value-options}=[1,2,3]
 *    {^selected-value}="anything">
 * </aht-radio-group>
 * ```
 *
 * ## Example
 *
 * @demo src/components/data-entry-item/data-entry-item.html
 *
 */
import Component from 'can-component';
import DefineMap from 'can-define/map/';
import './radio-group.less';
import template from './radio-group.stache';

export const ViewModel = DefineMap.extend({
  selectedValue: {},
  group: {
    Value: function Value() {
      return {name: Math.random().toString()};
    }
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
  tag: 'aht-radio-group',
  ViewModel,
  template
});
