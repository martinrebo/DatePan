import * as Localization from 'expo-localization'
import i18n from "i18n-js";
import translation from './translations'

// i18n.defaultLocale = 'en'
// i18n.locale = 'en'
// i18n.fallbacks = true


const availableTranslations : any = {
   es: translation.es,
  en: translation.en
};

/* This function is useful to load spanish or english language translations and set the corresponding locale */
const changeLanguage = (languageCode: any) => {
  i18n.translations = {
      [languageCode]: availableTranslations[languageCode]
  };
  i18n.locale = languageCode;
};

i18n.translations = {
  es: translation.es,
 en: translation.en
};

// export const loadLocale = async () => {
//   for (const locale of Localization.locales) {
//     console.log("locale", locale)
//     if (i18n.translations[locale] !== null) {
//       i18n.locale = locale
     
//       switch (locale) {
//         case 'en-US':
//             i18n.translations = { en: translation.en }
//           break
//         default:
//         case 'es':
//             i18n.translations = { es: translation.es }
//           break
//       }
//       break
//     }
//   }
// }


export default i18n;
