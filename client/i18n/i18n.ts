import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import WUDtranslation from "./WUDtranslations";
import CBItranstlaton from './CBItranslations'

const translation = process.env.BRAND === 'CBI' ? CBItranstlaton : WUDtranslation

const resources = {
  es: translation.es,
  en: translation.en,
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    compatibilityJSON: 'v3',
    resources,
    fallbackLng: 'en',
    lng: "en", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
    react: {
      useSuspense:false,
   }
  });

export default i18n;
