import React from 'react';
import { useLang } from './LangContext';
import styles from './LangSwitcher.module.sass';

const LangSwitcher = () => {
  const { lang, toggleLang } = useLang();
  return (
    <button className={styles.lang} onClick={() => toggleLang()}>
      {lang === 'ru' ? 'en' : 'ru'}
    </button>
  );
};

export default LangSwitcher;
