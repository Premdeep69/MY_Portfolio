import i18n from "i18next"
import LanguageDetector from "i18next-browser-languagedetector"
import { initReactI18next } from "react-i18next"

// Import translation files
import enTranslations from "./local/en.json"
import npTranslations from "./local/np.json"
import jaTranslations from "./local/ja.json"

const resources = {
  en: {
    translation: enTranslations,
  },
  np: {
    translation: npTranslations,
  },
  ja: {
    translation: jaTranslations,
  },  
}

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "en",
    debug: process.env.NODE_ENV === "development",

    detection: {
      order: ["localStorage", "navigator", "htmlTag"],
      caches: ["localStorage"],
    },

    interpolation: {
      escapeValue: false,
    },
  })

export default i18n
