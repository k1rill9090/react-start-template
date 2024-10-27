import React from 'react'
import styles from './Switch.module.sass'
import { useTheme } from '../ThemeContext/ThemeContext'
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';



const Switch = () => {
  const {theme, toggleTheme} = useTheme()

  return (
      <button className={styles.root} onClick={() =>toggleTheme()}>
        {theme === 'light' ? <DarkModeIcon /> : <LightModeIcon/>}
      </button>
  )
}

export default Switch