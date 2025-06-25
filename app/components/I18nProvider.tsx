"use client"

import { useEffect, useState } from "react"
import { I18nextProvider } from "react-i18next"
import i18n from "../i18n/config"

interface I18nProviderProps {
  children: React.ReactNode
}

export default function I18nProvider({ children }: I18nProviderProps) {
  const [isReady, setIsReady] = useState(false)

  useEffect(() => {
    // Ensure i18n is initialized
    if (i18n.isInitialized) {
      setIsReady(true)
    } else {
      i18n.on('initialized', () => {
        setIsReady(true)
      })
    }
  }, [])

  if (!isReady) {
    return <div className="flex items-center justify-center min-h-screen">Loading translations...</div>
  }

  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>
} 