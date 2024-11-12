import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useTheme } from 'src/homeworks/ThemeSwitcher/ThemeContext/ThemeContext';
import { useLang } from 'src/homeworks/LangSwitcher/LangContext';
import Header from 'src/homeworks/jsxCss/general/Header/Header';
import { t } from 'i18next';
import ListOfGoods from 'src/homeworks/ListOfGoods/ListOfGoods';
import ModalButton from 'src/stories/ModalButton/ModalButton';
import Collapse from 'src/homeworks/jsxCss/general/Collapse/Collapse';

const App = () => {
  const { theme } = useTheme();
  const { lang } = useLang();

  return (
    <div className="App">
      <Header />

      <header className={`App-header-${theme}`}>
        <ModalButton />
        <img src={logo} className="App-logo" alt="logo" />
        <div className="About-myself">
          <p>{t('aboutMyselfP1', { lng: lang })}</p>
          <p>{t('aboutMyselfP2', { lng: lang })}</p>
          <p>{t('aboutMyselfP3', { lng: lang })}</p>
          <p>{t('aboutMyselfP4', { lng: lang })}</p>
          <p>{t('aboutMyselfP5', { lng: lang })}</p>
          <p>{t('aboutMyselfP6', { lng: lang })}</p>
        </div>
      </header>
      <Collapse>
        <button>button1</button>
        <button>button2</button>
        <button>button3</button>
      </Collapse>
      <div>
        <ListOfGoods goods={[]} />
      </div>
    </div>
  );
};

export default App;
