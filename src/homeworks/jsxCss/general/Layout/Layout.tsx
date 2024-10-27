import React, { FC } from 'react'
import Header from '../Header/Header'
import styles from './Layout.module.sass'


interface LayoutProps {
  children?: React.ReactNode
}

const Layout: FC<LayoutProps> = ({children}) => {
  return (
    <div className={styles.layout}>
            <Header/>
            <main>{children}</main>
        
    </div>
  )
}

export default Layout