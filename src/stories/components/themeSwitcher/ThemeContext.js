import { createContext } from 'react';
export const ThemeContext = createContext({
    currentTheme: 'light',
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    togglerTheme: () => { },
});
export const defaultTheme = {
    currentTheme: 'light',
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    togglerTheme: () => { },
};
//# sourceMappingURL=ThemeContext.js.map