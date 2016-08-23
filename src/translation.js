import i18next from 'i18next';
import {registeri18nHelper} from 'account-health-tracker/helpers';

import enUs from 'account-health-tracker/i18n/en-US.json';

export default function (text) {
  // Return a promise that is resolved once
  // the i18n is initialized - this is specific to
  // i18next.
  return new Promise((resolve, reject) => {
    i18next.init({
      text,
      resources: {enUs},
      keySeparator: false,
      debug: true
    },
    (err, translation) => {
      if (err) {
        reject(err);
      }
      registeri18nHelper(translation);
      resolve({});
    });
  });
}
