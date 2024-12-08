import React, { FC } from 'react';
import Header from '../Header/Header';
import styles from './Layout.module.sass';
import clsx from 'clsx';
import { Outlet } from 'react-router-dom';

interface LayoutProps {
  children?: React.ReactNode;
}

const Layout: FC<LayoutProps> = ({children}) => {
  return (
    <div className={clsx([styles.layout])}>
      <Header />
      {/* <Outlet/> */}
      {children}
    </div>
  );
};

export default Layout;
