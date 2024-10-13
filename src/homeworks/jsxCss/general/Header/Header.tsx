import React, { FC } from 'react'
import styles from './Header.module.sass'
import Logo from '../Logo/Logo'


interface HeaderProps {
  children?: React.ReactNode
}

const Header: FC<HeaderProps> = ({children}) => {
  return (
    <div className={styles.header}>
      <div className={styles.headerContent}>
          <div className={styles.logo}>
            <Logo>Lorem</Logo>
          </div>
          <div className={children ? styles.children : null}>
              {children}
          </div>
      </div>
      <hr/>
    </div>
  )
}

export default Header