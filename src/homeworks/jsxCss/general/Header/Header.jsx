import React from 'react'
import styles from './Header.module.sass'
import Logo from '../Logo/Logo'

const Header = ({children}) => {
  return (
    <div className={styles.header}>
      <div className={styles.headerContent}>
          <Logo>Lorem</Logo>
        <div className={styles.children}>
            {children}
        </div>
      </div>
      <hr/>
    </div>
  )
}

export default Header