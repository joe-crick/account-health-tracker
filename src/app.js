import Map from "can/map/";
import route from "can/route/";
import 'can/map/define/';
import 'can/route/pushstate/';
import 'bootstrap/js/collapse';

const AppViewModel = Map.extend({
  define: {
    title: {
      value: 'account-health-tracker',
      serialize: false
    }
  }
});

route(':page', { page: 'home' });

export default AppViewModel;
