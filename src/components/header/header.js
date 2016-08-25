/**
 * @module {Module} account-health-tracker/components/dashboard/header <aht-header>
 *
 * @group account-health-tracker/components/general/header.properties 0 properties
 *
 * @description Displays a header with navigation.
 *
 * @signature `<aht-header/>`
 *   Creates an header
 *
 * @body
 *
 * To create a `<aht-header>` element, include it in your page
 *
 * ```
 * <aht-header/>
 * ```
 *
 * ## Example
 *
 * @demo account-health-tracker/components/dashboard/header.html
 *
 */
import Component from 'can-component';
import DefineMap from 'can-define/map/';
import './header.less!';
import template from './header.stache!';

export const ViewModel = DefineMap.extend({
});

export default Component.extend({
  tag: 'aht-header',
  ViewModel,
  template
});
