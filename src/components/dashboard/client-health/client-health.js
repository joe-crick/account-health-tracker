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
import template from './client-health.stache';
import Clients from 'account-health-tracker/models/client';
import './client-health.less';

export const ViewModel = DefineMap.extend({
  /**
   * @property {account-health-tracker/models/company}
   *
   * Provides a company, once companyPromise resolves.
   */
  clients: [Clients],
  /**
   * @property {Promise<account-health-tracker/models/company>|undefined}
   *
   * Provides a company
   *
   * @signature `Promise<account-health-tracker/models/company>`
   *
   *   Given a valid `id`, the company promise.
   *
   * @signature `undefined`
   *
   *   Given an invalid `id`, the company promise.
   *
   */
  clientPromise: {
    get() {
      const context = this;
      return Clients.getList({})
        .then((clients) => {
          context.clients = clients;
        });
    }
  }
});

export default Component.extend({
  tag: 'aht-client-health',
  ViewModel,
  template
});
