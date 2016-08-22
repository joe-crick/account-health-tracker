import DefineMap from 'can-define/map/';
import route from 'can-route';
import 'can-route-pushstate';

const AppViewModel = DefineMap.extend({
  route: 'string',
  page: 'string',
  title: {
    value: 'account-health-tracker',
    serialize: false,
  },
});

route(':page', { page: 'home' });

export default AppViewModel;
