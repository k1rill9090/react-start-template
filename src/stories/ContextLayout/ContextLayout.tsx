import React, { FC } from 'react'
import { ThemeProvider } from '../../homeworks/ThemeSwitcher/ThemeContext/ThemeContext'
import Layout from '../../homeworks/jsxCss/general/Layout/Layout'
import LangProvider from '../../homeworks/LangSwitcher/LangContext'
import { I18nextProvider } from 'react-i18next'
import i18n from '../../i18n'


interface ContextLayoutProps {
    children: React.ReactNode
}

const ContextLayout: FC<ContextLayoutProps> = ({children}) => {

  return (
    <div>
        <ThemeProvider>
          <I18nextProvider i18n={i18n} defaultNS={'translation'}>
            <LangProvider>
              {children}
            </LangProvider>
          </I18nextProvider>
        </ThemeProvider>
    </div>
  )
}

export default ContextLayout