/**
 * @module {Module} account-health-tracker/components/dashboard/data-input <aht-data-input>
 * @parent js.components
 *
 * @group account-health-tracker/components/data-input.properties __ properties
 *
 * @description Displays a data-input.
 *
 * @signature `<aht-data-input/>`
 *   Data input container component
 *
 * @body
 *
 * To create a `<aht-data-input>` element, include it in your page
 *
 * ```
 * <aht-data-input>
 * </aht-data-input>
 * ```
 *
 * ## Example
 *
 * @demo src/components/data-input/data-input.html
 *
 */
import Component from 'can-component';
import DefineMap from 'can-define/map/';
import './data-input.less';
import template from './data-input.stache';

export const ViewModel = DefineMap.extend({
  valueOptions: {
    value: [
      'healthy',
      'warning',
      'danger'
    ]
  }
});

export default Component.extend({
  tag: 'aht-data-input',
  ViewModel,
  template
});
