import { createContext } from 'react';

export const ThemeContext = createContext<typeThemeContext>({
  currentTheme: 'light',
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  togglerTheme: () => {},
});

export type typeThemeContext = {
  currentTheme: 'light' | 'dark';
  togglerTheme: (arg: 'light' | 'dark') => void;
};

export const defaultTheme: typeThemeContext = {
  currentTheme: 'light',
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  togglerTheme: () => {},
};
