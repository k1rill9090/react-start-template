import React, { FC } from 'react';
import Header from '../Header/Header';
import styles from './Layout.module.sass';
import { useTheme } from '../../../ThemeSwitcher/ThemeContext/ThemeContext';
import clsx from 'clsx';
import { Outlet } from 'react-router-dom';

interface LayoutProps {
  children?: React.ReactNode;
}

const Layout: FC<LayoutProps> = () => {
  const { theme } = useTheme();
  return (
    <div className={clsx([styles.layout, styles[`layout-${theme}`]])}>
      <Header />
      <Outlet/>
    </div>
  );
};

export default Layout;
