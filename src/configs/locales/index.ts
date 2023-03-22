import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';
import en from 'configs/locales/en';
import ja from 'configs/locales/ja';

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          ...en
        }
      },
      ja: {
        translation: {
          ...ja
        }
      }
    },
    react: {
      useSuspense: false
    },
    backend: {
      allowMultiLoading: false
    },
    fallbackLng: process.env.REACT_APP_LOCALE_DEFAULT || 'ja',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
