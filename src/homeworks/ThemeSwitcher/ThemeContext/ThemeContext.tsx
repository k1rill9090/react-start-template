import React, { createContext, useState, useContext, FC, useEffect } from 'react';

interface ThemeProviderProps {
  children: React.ReactNode;
}

export const ThemeContext = createContext({ theme: 'light', toggleTheme: null });

export const useTheme = () => {
  return useContext(ThemeContext);
};

const html = document.body.parentElement;
html.classList.add('light');

export const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState('light');
  useEffect(() => {
    
    html.classList.replace(html.classList.value, theme);
  }, [theme])

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;
};
