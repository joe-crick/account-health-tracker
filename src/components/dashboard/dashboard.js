/**
 * @module {Module} account-health-tracker/components/dashboard <aht-dashboard>
 * @group account-health-tracker/components/dashboard.properties 3 properties
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
import Company from 'account-health-tracker/models/company';
import template from './dashboard.stache!';
import './dashboard.less!';

export const ViewModel = DefineMap.extend({
  /**
   * @property {account-health-tracker/models/company}
   *
   * Provides a company, once companyPromise resolves.
   */
  company: Company,
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
  companyPromise: {
    get() {
      const context = this;
      return Company.get({id: 1})
        .then((company) => {
          context.company = company;
        });
    }
  },
  /**
   * @property {Array<Number>} account-health-tracker/components/dashboard.healthyData healthyData
   * @parent account-health-tracker/components/dashboard.properties
   *
   * Healthy data for the summary graph.
   **/
  healthyData: {
    value: [80]
  },
  /**
   * @property {Array<Number>} account-health-tracker/components/dashboard.warningData warningData
   * @parent account-health-tracker/components/dashboard.properties
   *
   * Warning data for the summary graph.
   **/
  warningData: {
    value: [15]
  },
  /**
   * @property {Array<Number>} account-health-tracker/components/dashboard.dangerData dangerData
   * @parent account-health-tracker/components/dashboard.properties
   *
   * Danger data for the summary graph.
   **/
  dangerData: {
    value: [5]
  }
});

export default Component.extend({
  tag: 'aht-dashboard',
  ViewModel,
  template
});
