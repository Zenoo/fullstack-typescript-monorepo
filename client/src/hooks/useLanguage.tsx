import 'moment/locale/fr';
import moment from 'moment';
import React, {useContext, useEffect, useMemo, useState} from 'react';
import {useTranslation} from 'react-i18next';
import {DEFAULT_LANGUAGE, Language} from '@fullstack-typescript-monorepo/core';

interface LanguageContextInterface {
  language: Language;
  setLanguage: (lang: Language) => void;
}

const LanguageContext = React.createContext<LanguageContextInterface>({
  language: DEFAULT_LANGUAGE,
  setLanguage: () => {
    console.error('LanguageContext.setLanguage() not implemented');
  },
});

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  return context;
};

interface LanguageProviderProps {
  children: React.ReactNode;
}

export function LanguageProvider({children}: LanguageProviderProps) {
  const [language, setLanguage] = useState<Language>(
    (localStorage.getItem('language') as Language) || DEFAULT_LANGUAGE
  );
  const {i18n} = useTranslation();

  useEffect(() => {
    i18n.changeLanguage(language).catch(error => {
      console.error(error);
    });
    document.documentElement.lang = language;
    moment.locale(language);
    localStorage.setItem('language', language);
  }, [i18n, language]);

  const methods = useMemo(
    () => ({
      language,
      setLanguage,
    }),
    [language, setLanguage]
  );

  return (
    <LanguageContext.Provider value={methods}>
      {children}
    </LanguageContext.Provider>
  );
}
