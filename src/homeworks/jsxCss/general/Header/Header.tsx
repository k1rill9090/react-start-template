import React, { FC } from 'react';
import styles from './Header.module.sass';
import Logo from '../Logo/Logo';
import Switch from '../../../ThemeSwitcher/Switch/Switch';
import LangSwitcher from '../../../LangSwitcher/LangSwitcher';
import { NavLink } from 'react-router-dom';
import clsx from 'clsx';

interface HeaderProps {
  children?: React.ReactNode;
}

const Header: FC<HeaderProps> = ({ children }) => {
  return (
    <div className={styles.header}>
      <div className={styles.headerContent}>
        <div className={styles.logo}>
          <Logo>Lorem</Logo>
        </div>
        <Switch />
        <LangSwitcher />
        <div className={styles.children}>

          <NavLink to={'/profile'} className={({isActive}) => (isActive ? clsx(styles.link, styles.active) : styles.link)}>Профиль</NavLink>
          <NavLink to={'/products'} className={({isActive}) => (isActive ? clsx(styles.link, styles.active) : styles.link)}>Товары</NavLink>
          <NavLink to={'/cart'} className={({isActive}) => (isActive ? clsx(styles.link, styles.active) : styles.link)}>Корзина</NavLink>
          {children}
        </div>
        
      </div>
      <hr />
      
    </div>
  );
};

export default Header;
