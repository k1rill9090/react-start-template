import React from 'react'
import styles from './Switch.module.sass'
import { useTheme } from '../ThemeContext/ThemeContext'



const Switch = () => {
  const {theme, toggleTheme} = useTheme()

  return (
    <div className={styles['container-switch']}>
        <span>Change theme</span>
        <label>
            <input 
              type="checkbox" 
              onChange={() =>toggleTheme()}
            />
            <span className={styles.slider}></span>
        </label>
    </div>
  )
}

export default Switch