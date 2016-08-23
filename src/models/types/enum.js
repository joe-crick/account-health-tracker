export default function (values) {
  return {
    set: function (newValue, setVal, setErr, oldValue) {
      if (values.indexOf(newValue) !== -1) {
        return newValue;
      }
      return oldValue;
    }
  }
};
