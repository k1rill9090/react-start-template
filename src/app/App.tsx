import React from 'react';
import './App.sass';
import { useLang } from 'src/homeworks/LangSwitcher/LangContext';
import { t } from 'i18next';
import {Navigate, Outlet, Route, Routes } from 'react-router-dom';
import Layout from 'src/homeworks/jsxCss/general/Layout/Layout';
import { routes } from 'src/config/routes';

const App = () => {
  // const { theme } = useTheme();
  // const { lang } = useLang();

  return (
    <Routes>
      <Route path='/' element={<Layout><Outlet/></Layout>}>
        {routes.map(elem => {
          return (
            <Route 
              key={elem.path} 
              path={elem.path} 
              element={<elem.component/>}
            />
          )
        })}
        <Route index element={<Navigate to="/profile" />} />
      </Route>
    </Routes>
  );
};

export default App;
