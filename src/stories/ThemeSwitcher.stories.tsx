import classNames from 'classnames';
import React, { useState } from 'react';
import { Header } from './components/header/Header';
import './components/themeSwitcher/App.scss';
import './components/themeSwitcher/theme-dark.scss';
import { ThemeContext } from './components/themeSwitcher/ThemeContext';
import { ThemeSwitcher } from './components/themeSwitcher/ThemeSwitcher';

export default {
  title: 'Переключатель темы',
  component: ThemeSwitcher,
};

export const ThemeSwitcherS = () => {
  const [theme, setCurrentTheme] = useState<'light' | 'dark'>('light');

  const setTheme = (arg: 'light' | 'dark') => {
    setCurrentTheme(arg);
  };

  return (
    <ThemeContext.Provider value={{ currentTheme: theme, togglerTheme: setTheme }}>
      <div className={classNames(theme === 'dark' ? 'App-theme-dark' : 'App-theme-light')}>
        <Header>
          {/*<Logo />*/}
          <ThemeSwitcher />
        </Header>
        <div>Theme swither Demo</div>
      </div>
    </ThemeContext.Provider>
  );
};
