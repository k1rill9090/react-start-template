import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import translationEN from '../public/locales/en/translation.json';
import translationRU from '../public/locales/ru/translation.json';

const resources = {
  en: {
    translation: translationEN,
  },
  ru: {
    translation: translationRU,
  },
};

i18next.use(initReactI18next).use(LanguageDetector).init({
  resources,
  // debug: true,
  lng: 'ru',
});

export default i18next;
// console.log(i18next.t('look.deeper', {lng: 'ru'}))
