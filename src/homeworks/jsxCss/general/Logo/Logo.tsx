import React, { FC } from 'react';
import styles from './Logo.module.sass';
import LogoSvg from './LogoSvg';

interface LogoProps {
  children: string;
}

const Logo: FC<LogoProps> = ({ children }) => {
  return (
    <div className={styles.logo}>
      {/* <img src={require('./logo.svg')} /> */}
      <LogoSvg/>
      <div className={styles.children}>{children}</div>
    </div>
  );
};

export default Logo;
