import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { pt } from './assets/i18n/pt';
import { en } from './assets/i18n/en';
import { es } from './assets/i18n/es';

const resources = {
  pt,en,es
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "pt",
    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

  export default i18n;