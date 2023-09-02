import React from 'react';
import { Header } from './components/header/Header';
import { LanguageContext, typeLangContext } from './components/localization/LangContext';
import { ChangeLang, LangSwitcher, ThemeSwitcherProps } from './components/localization/LangSwitcher';

export default {
  title: 'Переключатель Языка',
  component: LangSwitcher,
};

export const LangSwitcherS = ({ className }: ThemeSwitcherProps) => {
  const { i18n } = ChangeLang();

  return (
    <LanguageContext.Provider
      value={{ language: i18n.language, languageSwitcher: i18n.changeLanguage } as typeLangContext}
    >
      <Header>
        <LangSwitcher />
      </Header>
    </LanguageContext.Provider>
  );
};
