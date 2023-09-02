import React, { useContext } from 'react';
import { ThemeContext } from 'src/homeworks/homework-4/themeSwitcher/ThemeContext';

export const ThemeSwitcher = () => {
  const { currentTheme, togglerTheme } = useContext(ThemeContext);

  const handleThemeToggle = () => {
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    togglerTheme(newTheme);
  };

  return <button onClick={handleThemeToggle}>Theme Switch</button>;
};
