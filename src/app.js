import Map from "can/map/";
// import route from "can/route/";
import 'can/map/define/';
import 'can/route/pushstate/';

const AppViewModel = Map.extend({
  define: {
    title: {
      value: 'account-health-tracker',
      serialize: false
    }
  }
});

export default AppViewModel;
