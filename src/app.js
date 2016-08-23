import DefineMap from 'can-define/map/';
import route from 'can-route';
import 'can-route-pushstate';
import translation from 'account-health-tracker/translation';

const AppViewModel = DefineMap.extend({
  route: 'string',
  page: 'string',
  title: {
    value: 'account-health-tracker',
    serialize: false,
  },
  locale: {
    type: 'string',
    value: 'en-Us'
  },
  i18nInterpreter: {
    get() {
      return translation(this.locale);
    }
  }
});

route(':page', { page: 'home' });

export default AppViewModel;
