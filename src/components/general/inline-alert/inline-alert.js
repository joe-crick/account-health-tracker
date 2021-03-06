/**
 * @module {Module} account-health-tracker/components/dashboard/inline-alert <aht-inline-alert>
 * @parent js.components
 *
 * @group account-health-tracker/components/general/inline-alert.properties 4 properties
 *
 * @description Displays an inline-alert.
 *
 * @signature `<aht-inline-alert/>`
 *   Creates an inline alert
 *
 * @body
 *
 * To create a `<aht-inline-alert>` element, include it in your page
 *
 * ```
 * <aht-inline-alert
 *    alert-title="Testius with Buttonius"
 *    message="Amet sit dolor ipsum lorraine"
 *    action="anything"
 *    button-label="No Click me 'k?">
 * </aht-inline-alert>
 * ```
 *
 * ## Example
 *
 * @demo src/components/inline-alert/inline-alert.html
 *
 */
import Component from 'can-component';
import DefineMap from 'can-define/map/';
import './inline-alert.less';
import template from './inline-alert.stache';

export const ViewModel = DefineMap.extend({
  action: undefined
});

export default Component.extend({
  tag: 'aht-inline-alert',
  ViewModel,
  template
});
