import i18n from "i18next";
import { initReactI18next } from "react-i18next";


import transRus from './lang/ru.json'
import transUzb from './lang/uz.json'


const resources = {
  ru: {
    translation: transRus
  },
  uz: {
    translation: transUzb
  }
};


i18n
.use(initReactI18next) 
  .init({
    resources,
    lng: "uz",
    fallbackLng: "uz",

    interpolation: {
      escapeValue: false
    }
  });
  

  export default i18n