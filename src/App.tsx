import React, { useState } from 'react';
import './components/themeSwitcher/App.scss';
import './components/themeSwitcher/theme-dark.scss';
import { ThemeSwitcher } from 'src/components/themeSwitcher/ThemeSwitcher';
import { ThemeContext } from 'src/components/themeSwitcher/ThemeContext';
import classNames from 'classnames';

function App() {
  const [theme, setCurrentTheme] = useState<'light' | 'dark'>('light');

  const setTheme = (arg: 'light' | 'dark') => {
    setCurrentTheme(arg);
  };

  return (
    <ThemeContext.Provider value={{ currentTheme: theme, togglerTheme: setTheme }}>
      <div className={classNames(theme === 'dark' ? 'App-theme-dark' : 'App-theme-light')}>
        <ThemeSwitcher />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
