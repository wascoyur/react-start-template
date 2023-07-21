import React from 'react';
import { Header } from 'src/components/header/Header';
import { LanguageContext, typeLangContext } from 'src/components/localization/LangContext';
import { ChangeLang, LangSwitcher } from 'src/components/localization/LangSwitcher';

function App() {
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
}

export default App;
