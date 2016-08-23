/* eslint no-undef: 0 */
/* eslint import/prefer-default-export: 0 */
import stache from 'can-stache';

export function registeri18nHelper(translationFn) {
  stache.registerSimpleHelper('i18n', key => {
    return translationFn(key);
  });
}