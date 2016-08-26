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
