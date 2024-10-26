import React, { FC } from 'react'
import { ThemeProvider } from '../../homeworks/ThemeSwitcher/ThemeContext/ThemeContext'
import Layout from 'src/homeworks/jsxCss/general/Layout/Layout'

interface ContextLayoutProps {
    children: React.ReactNode
}

const ContextLayout: FC<ContextLayoutProps> = ({children}) => {
  return (
    <div>
        <ThemeProvider>
           {children}
        </ThemeProvider>
    </div>
  )
}

export default ContextLayout