import React from 'react'
import styles from './Logo.module.sass'

const Logo = ({children}) => {
  return (
    <div className={styles.logo}>
        <img src={require("./logo.svg")} />
        <div className={styles.children}>
          {children}
        </div>
    </div>
  )
}

export default Logo