import React from 'react';
import { t } from 'i18next';
import { useLang } from '../../homeworks/LangSwitcher/LangContext';
import styles from './LayoutBody.module.sass'

const LayoutBody = () => {
  const { lang } = useLang();
  return (
    <div className={styles.context}>
      <p>{t('aboutMyselfP1', { lng: lang })}</p>
      <p>{t('aboutMyselfP2', { lng: lang })}</p>
      <p>{t('aboutMyselfP3', { lng: lang })}</p>
      <p>{t('aboutMyselfP4', { lng: lang })}</p>
      <p>{t('aboutMyselfP5', { lng: lang })}</p>
      <p>{t('aboutMyselfP6', { lng: lang })}</p>
    </div>
  );
};

export default LayoutBody;
