export function registeri18nHelper(translationFn) {
    stache.registerSimpleHelper('i18n', key => {
        return translationFn(key);
    });
}