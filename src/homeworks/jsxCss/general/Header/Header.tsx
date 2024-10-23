import React, { FC } from 'react'
import styles from './Header.module.sass'
import Logo from '../Logo/Logo'
import { useTheme } from 'src/homeworks/ThemeSwitcher/ThemeContext/ThemeContext'


interface HeaderProps {
  children?: React.ReactNode
}

const Header: FC<HeaderProps> = ({children}) => {
  const {theme} = useTheme()
  return (
    <div className={styles[`header-${theme}`]}>
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