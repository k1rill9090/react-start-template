import React from 'react';
import ReactDOM from 'react-dom/client';
import './app/index.sass';
import App from './app/App';
import { ThemeProvider } from './homeworks/ThemeSwitcher/ThemeContext/ThemeContext';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';
import LangProvider from './homeworks/LangSwitcher/LangContext';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/store';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <BrowserRouter 
      future={{
        v7_relativeSplatPath: true,
        v7_startTransition: true
      }}
    >
    <ThemeProvider>
      <I18nextProvider i18n={i18n} defaultNS={'translation'}>
        <LangProvider>
          <Provider store={store}>
            <App />
          </Provider>
        </LangProvider>
      </I18nextProvider>
    </ThemeProvider>
    </BrowserRouter>
);
