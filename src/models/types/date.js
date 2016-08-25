import moment from 'moment';

export default {
  set(newValue) {
    return moment.utc(newValue);
  },
  serialize(currentValue) {
    return currentValue.utc().format(moment.ISO_8601());
  }
};
