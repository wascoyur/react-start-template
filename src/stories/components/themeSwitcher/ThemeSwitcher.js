import { jsx as _jsx } from "react/jsx-runtime";
import { useContext } from 'react';
import { ThemeContext } from './ThemeContext';
import './theme-switcher.scss';
export const ThemeSwitcher = () => {
    const { currentTheme, togglerTheme } = useContext(ThemeContext);
    const handleThemeToggle = () => {
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        togglerTheme(newTheme);
    };
    return (_jsx("button", { onClick: handleThemeToggle, className: `theme-switcher ${currentTheme}`, children: _jsx("span", { className: "theme-icon", role: "img", "aria-label": "theme-icon", children: currentTheme === 'light' ? '🌞' : '🌙' }) }));
};
//# sourceMappingURL=ThemeSwitcher.js.map