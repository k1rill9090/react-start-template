import React, { FC } from 'react'
import styles from './Logo.module.sass'


interface LogoProps {
  children: string
}

const Logo: FC<LogoProps> = ({children}) => {
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