import Backend from 'i18next-xhr-backend';
import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import {DEFAULT_LANGUAGE} from '@fullstack-typescript-monorepo/core';

i18n
  .use(Backend)
  .use(initReactI18next)
  .init({
    lng: DEFAULT_LANGUAGE,
    backend: {
      /* translation file path */
      loadPath: '/static/i18n/{{lng}}/{{ns}}.json',
    },
    fallbackLng: DEFAULT_LANGUAGE,
    debug: false,
    /* can have multiple namespace, in case you want to divide a huge translation
    into smaller pieces and load them on demand */
    ns: ['common'],
    defaultNS: 'common',
    keySeparator: false,
    interpolation: {
      escapeValue: false,
      formatSeparator: ',',
    },
    react: {
      useSuspense: true,
    },
    returnObjects: true,
  })
  .catch(err => {
    console.error('Error loading language', err);
  });

export default i18n;
