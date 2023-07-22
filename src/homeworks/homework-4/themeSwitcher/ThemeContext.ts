import { createContext } from 'react';

export const ThemeContext = createContext<themeContext>({
  currentTheme: 'light',
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  togglerTheme: () => {},
});

export type themeContext = {
  currentTheme: 'light' | 'dark';
  togglerTheme: (arg: 'light' | 'dark') => void;
};
