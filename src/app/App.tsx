import React from 'react';
import logo from './logo.svg';
import './App.css';
import Switch from 'src/homeworks/ThemeSwitcher/Switch/Switch';
import {useTheme} from 'src/homeworks/ThemeSwitcher/ThemeContext/ThemeContext';
import Header from 'src/homeworks/jsxCss/general/Header/Header';

const App = () => {
  const {theme} = useTheme()

  return (
     
    <div className="App">
      <Header>
        <Switch/>
      </Header>
      <header className={`App-header-${theme}`}>
        <img src={logo} className="App-logo" alt="logo" />
        <div className='About-myself'>
          <p>
            Привет!
            Меня зовут Кирилл, на данный момент я являюсь системным аналитиком и хочу попробовать себя
            в роли frontend разработчика.
          </p>
          <p>
            У меня есть небольшой опыт программирования на python (учебные проекты по backend разработке и Data science).
          </p>
          <p>Также есть базовые знания по html, css и JavaScript, немного знаю React.</p>
          <p>Записался на данный курс, так как хочу углубить свои знания по React и узнать больше о фронтенд-разработке.</p>
          <p>Рассчитываю, что полученные знания помогут мне перейти на должность frontend разработчика, ну или хотя бы писать более хорошие ТЗ :)</p>
          <p>Мой телеграм: @kirill59rus368</p>
        </div>
      </header>
    </div>
  );
}

export default App;
