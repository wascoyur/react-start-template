import { jsx as _jsx } from "react/jsx-runtime";
import classNames from 'classnames';
import { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { LanguageContext } from './LangContext';
import { Locale } from './settings';
export const LangSwitcher = ({ className }) => {
    const { language, languageSwitcher } = useContext(LanguageContext);
    const { i18n } = ChangeLang();
    const lang = i18n.language === Locale.ru ? Locale.en : Locale.ru;
    return (_jsx("button", { type: "button", onClick: () => languageSwitcher(lang), className: classNames(className), children: lang }));
};
export const ChangeLang = () => {
    const { i18n } = useTranslation();
    return { i18n };
};
//# sourceMappingURL=LangSwitcher.js.map