import React, { createContext, useState, useContext, FC, useEffect } from 'react';

interface ThemeProviderProps {
  children: React.ReactNode;
}


const themeFromStorage = localStorage.getItem("theme") !== null ? localStorage.getItem("theme") : 'light';
export const ThemeContext = createContext({ theme: 'light', toggleTheme: null });

export const useTheme = () => {
  return useContext(ThemeContext);
};

const html = document.body.parentElement;
html.classList.add('light');

export const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState(themeFromStorage);
  useEffect(() => {
    
    html.classList.replace(html.classList.value, theme);
  }, [theme])

  const toggleTheme = () => {
    localStorage.setItem('theme', theme === 'light' ? 'dark' : 'light');
    setTheme((prevTheme) => localStorage.getItem("theme"));
  };

  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;
};
