/**
 * @module {Module} account-health-tracker/components/dashboard/client-health <aht-client-health>
 * @parent js.components
 *
 * @group account-health-tracker/components/dashboard/client-health.properties 0 properties
 *
 * @description Displays client health in a grid.
 *
 * @signature `<aht-client-health/>`
 *   Creates the client grid.
 *
 * @body
 *
 * To create a `<aht-client-health>` element, include it in your page
 *
 * ```
 * <aht-client-health/>
 * ```
 *
 * ## Example
 *
 * @demo src/components/dashboard/client-health/client-health.html
 *
 */
import Component from 'can-component';
import DefineMap from 'can-define/map/';
import './client-health.less';
import template from './client-health.stache';

export const ViewModel = DefineMap.extend({
  message: {
    value: 'This is the aht-client-health component'
  },
  clients: {
    value: []
  }
});

export default Component.extend({
  tag: 'aht-client-health',
  ViewModel,
  template
});
