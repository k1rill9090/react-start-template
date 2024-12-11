import React from 'react';
import './App.sass';
import {Outlet} from 'react-router-dom';
import Layout from 'src/homeworks/jsxCss/general/Layout/Layout';
import RoutesComponent from './routes/RoutesComponent/RoutesComponent';

const App = () => {
  
  return (
    <RoutesComponent>
      <Layout>
        <Outlet/>
      </Layout>
    </RoutesComponent>
  );
};

export default App;
