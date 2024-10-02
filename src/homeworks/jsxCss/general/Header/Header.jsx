import React from 'react'
import styles from './Header.module.sass'
import Logo from '../Logo/Logo'
import cn from 'clsx'

const Header = ({children}) => {
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