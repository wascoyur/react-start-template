import React from 'react';

export const LanguageContext = React.createContext<typeLangContext>({} as typeLangContext);
export type typeLangContext = {
  language: string;
  languageSwitcher: (arg: string) => void;
};
