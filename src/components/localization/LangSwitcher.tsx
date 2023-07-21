import classNames from 'classnames';
import React, { useContext } from 'react';

import { useTranslation } from 'react-i18next';
import { LanguageContext } from 'src/components/localization/LangContext';
import { Locale } from 'src/components/localization/settings';

export type ThemeSwitcherProps = {
  className?: string;
};

export const LangSwitcher = ({ className }: ThemeSwitcherProps) => {
  const { language, languageSwitcher } = useContext(LanguageContext);
  const { i18n } = ChangeLang();

  const lang = (i18n.language as Locale) === Locale.ru ? Locale.en : Locale.ru;

  return (
    <button type="button" onClick={() => languageSwitcher(lang)} className={classNames(className)}>
      {lang}
    </button>
  );
};

export const ChangeLang = () => {
  const { i18n } = useTranslation();
  return { i18n };
};
