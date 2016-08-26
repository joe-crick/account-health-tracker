import DefineMap from 'can-define/map/';
import route from 'can-route';
import 'can-route-pushstate';
import translation from 'account-health-tracker/translation';

import 'account-health-tracker/models/fixtures/';

const AppViewModel = DefineMap.extend({
  route: 'string',
  page: 'string',
  title: {
    value: 'account-health-tracker',
    serialize: false,
  },
  locale: {
    type: 'string',
    value: 'en-US'
  },
  i18nInterpreter: {
    get() {
      return translation(this.locale);
    }
  }
});

route(':page', { page: 'home' });

export default AppViewModel;
