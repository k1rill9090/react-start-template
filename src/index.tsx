import React from 'react';
import ReactDOM from 'react-dom/client';
import './app/index.css';
import App from './app/App';
import { ThemeProvider } from './homeworks/ThemeSwitcher/ThemeContext/ThemeContext';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';
import LangProvider from './homeworks/LangSwitcher/LangContext';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <I18nextProvider i18n={i18n} defaultNS={'translation'}>
        <LangProvider>
          <App />
        </LangProvider>
      </I18nextProvider>
    </ThemeProvider>
  </React.StrictMode>
);
