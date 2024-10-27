import React, { FC } from 'react';
import Header from '../Header/Header';
import styles from './Layout.module.sass';
import { useTheme } from '../../../ThemeSwitcher/ThemeContext/ThemeContext';
import clsx from 'clsx';

interface LayoutProps {
  children?: React.ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  const { theme } = useTheme();
  return (
    <div className={clsx([styles.layout, styles[`layout-${theme}`]])}>
      <Header />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
