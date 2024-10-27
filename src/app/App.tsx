import React from 'react';
import logo from './logo.svg';
import './App.css';
import {useTheme} from 'src/homeworks/ThemeSwitcher/ThemeContext/ThemeContext';
import { useLang } from 'src/homeworks/LangSwitcher/LangContext';
import Header from 'src/homeworks/jsxCss/general/Header/Header';
import i18next from 'i18next';
import LangSwitcher from '../homeworks/LangSwitcher/LangSwitcher';


const App = () => {
  const {theme} = useTheme()
  const {lang} = useLang()

  return (
     
    <div className="App">
      <Header/>
      <header className={`App-header-${theme}`}>
        <img src={logo} className="App-logo" alt="logo" />
        <div className='About-myself'>
          <p>{i18next.t("aboutMyselfP1", {lng: lang})}</p>
          <p>{i18next.t("aboutMyselfP2", {lng: lang})}</p>
          <p>{i18next.t("aboutMyselfP3", {lng: lang})}</p>
          <p>{i18next.t("aboutMyselfP4", {lng: lang})}</p>
          <p>{i18next.t("aboutMyselfP5", {lng: lang})}</p>
          <p>{i18next.t("aboutMyselfP6", {lng: lang})}</p>
        </div>
      </header>
    </div>
  );
}

export default App;
