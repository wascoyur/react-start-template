import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';
import './theme-switcher.scss';

export const ThemeSwitcher = () => {
  const { currentTheme, togglerTheme } = useContext(ThemeContext);

  const handleThemeToggle = () => {
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    togglerTheme(newTheme);
  };

  return (
    <button onClick={handleThemeToggle} className={`theme-switcher ${currentTheme}`}>
      <span className="theme-icon" role="img" aria-label="theme-icon">
        {currentTheme === 'light' ? '🌞' : '🌙'}
      </span>
    </button>
  );
};
