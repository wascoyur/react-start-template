import { jsx as _jsx } from "react/jsx-runtime";
import { useContext } from 'react';
import { ThemeContext } from 'src/homeworks/homework-4/themeSwitcher/ThemeContext';
export const ThemeSwitcher = () => {
    const { currentTheme, togglerTheme } = useContext(ThemeContext);
    const handleThemeToggle = () => {
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        togglerTheme(newTheme);
    };
    return _jsx("button", { onClick: handleThemeToggle, children: "Theme Switch" });
};
//# sourceMappingURL=ThemeSwitcher.js.map