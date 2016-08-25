/**
 * @module {Module} account-health-tracker/components/dashboard/footer <aht-footer>
 * @parent aht.dashboard
 *
 * @group account-health-tracker/components/dashboard/footer.properties 0 properties
 *
 * @description Displays the dashboard footer, which contains the add and export options.
 *
 * @signature `<aht-footer/>`
 *   Creates the the summary bar graph.
 *
 * @body
 *
 * To create a `<aht-footer>` element, include it in your page
 *
 * ```
 * <aht-footer/>
 * ```
 *
 * ## Example
 *
 * @demo account-health-tracker/components/dashboard/footer.html
 *
 */
import Component from 'can-component';
import DefineMap from 'can-define/map/';
import './footer.less!';
import template from './footer.stache!';

export const ViewModel = DefineMap.extend({

});

export default Component.extend({
  tag: 'aht-footer',
  ViewModel,
  template,
});
