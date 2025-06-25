"use client"

import { ChevronDown, Globe } from "lucide-react"
import { useEffect, useState } from "react"
import { useTranslation } from "react-i18next"

export default function LanguageSwitcher() {
  const { i18n, t } = useTranslation()
  const [isOpen, setIsOpen] = useState(false)

  // Debug: Log current language
  useEffect(() => {
    console.log("Current language:", i18n.language)
    console.log("Available languages:", i18n.languages)
  }, [i18n.language])

  const languages = [
    { code: "en", name: t("language.english"), flag: "🇺🇸" },
    { code: "np", name: t("language.nepali"), flag: "🇳🇵" },
    { code: "ja", name: t("language.japanese"), flag: "🇯🇵" },
  ]

  const currentLanguage = languages.find((lang) => lang.code === i18n.language) || languages[0]

  const changeLanguage = (languageCode: string) => {
    console.log("Changing language to:", languageCode)
    i18n.changeLanguage(languageCode)
    setIsOpen(false)
  }

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-3 py-2 rounded-lg bg-white shadow-md hover:shadow-lg transition-shadow border border-gray-200"
        aria-label={t("language.switch")}
      >
        <Globe size={18} className="text-blue-600" />
        <span className="text-lg">{currentLanguage.flag}</span>
        <span className="hidden sm:block text-sm font-medium text-gray-700">{currentLanguage.name}</span>
        <ChevronDown size={16} className={`text-gray-500 transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
          <div className="py-2">
            {languages.map((language) => (
              <button
                key={language.code}
                onClick={() => changeLanguage(language.code)}
                className={`w-full flex items-center space-x-3 px-4 py-2 text-left hover:bg-gray-50 transition-colors ${
                  i18n.language === language.code ? "bg-blue-50 text-blue-600" : "text-gray-700"
                }`}
              >
                <span className="text-lg">{language.flag}</span>
                <span className="font-medium">{language.name}</span>
                {i18n.language === language.code && <span className="ml-auto text-blue-600">✓</span>}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Overlay to close dropdown when clicking outside */}
      {isOpen && <div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)} />}
    </div>
  )
}
