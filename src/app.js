import DefineMap from 'can-define/map/';
import route from 'can-route';
import 'can-route-pushstate';
import translation from 'account-health-tracker/translation';

// Remove fixtures in production
//!steal-remove-start
import 'account-health-tracker/models/fixtures/';
//!steal-remove-end

const AppViewModel = DefineMap.extend({
  route: 'string',
  page: 'string',
  title: {
    value: 'account-health-tracker',
<<<<<<< a01e1aa9f90915864f7d6b61009748322d9e7b19
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
=======
    serialize: false
>>>>>>> Add models
  }
});

route(':page', { page: 'home' });

export default AppViewModel;
