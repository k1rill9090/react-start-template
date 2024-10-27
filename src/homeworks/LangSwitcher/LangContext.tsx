import React, { createContext, useState, useContext, FC } from 'react'
import i18next from 'i18next';


export const LangContext = createContext({lang: 'ru', toggleLang: null});

export const useLang = () => {
    return useContext(LangContext);
  };

interface LangProviderProps {
    children: React.ReactNode
}

const LangProvider: FC<LangProviderProps> = ({children}) => {
    const [lang, setLang] = useState(i18next.language)
    const toggleLang = () => {
        setLang((prevLang) => prevLang === 'ru' ? 'en' : 'ru')
    }
    return (
        <LangContext.Provider value={{lang, toggleLang}}>
            {children}
        </LangContext.Provider>
    )
}

export default LangProvider