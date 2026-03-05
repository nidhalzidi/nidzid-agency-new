'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import translations from '@/locales'

type Language = 'en' | 'ar' | 'fr' | 'ms' | 'id'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
  dir: 'ltr' | 'rtl'
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

const LANGUAGE_KEY = 'nidzid_language'

// Country to language mapping
const countryToLanguage: Record<string, Language> = {
  // Arabic speaking countries
  'SA': 'ar', 'AE': 'ar', 'EG': 'ar', 'MA': 'ar', 'TN': 'ar', 'DZ': 'ar',
  'JO': 'ar', 'LB': 'ar', 'SY': 'ar', 'IQ': 'ar', 'KW': 'ar', 'QA': 'ar',
  'BH': 'ar', 'OM': 'ar', 'YE': 'ar', 'LY': 'ar', 'SD': 'ar', 'PS': 'ar',
  // French speaking countries
  'FR': 'fr', 'BE': 'fr', 'CH': 'fr', 'LU': 'fr', 'MC': 'fr',
  'SN': 'fr', 'CI': 'fr', 'ML': 'fr', 'BF': 'fr', 'NE': 'fr',
  'CM': 'fr', 'GA': 'fr', 'CG': 'fr', 'CD': 'fr', 'MG': 'fr',
  'HT': 'fr', 'CA': 'fr', // Canada can be French
  // Malaysia
  'MY': 'ms',
  // Indonesia
  'ID': 'id',
  // Brunei (Malay speaking)
  'BN': 'ms',
  // Singapore (has Malay)
  'SG': 'ms',
}

function detectLanguage(): Language {
  // 1. Check localStorage first
  if (typeof window !== 'undefined') {
    const saved = localStorage.getItem(LANGUAGE_KEY) as Language
    if (saved && translations[saved]) {
      return saved
    }

    // 2. Check browser language
    const browserLang = navigator.language.split('-')[0] as Language
    if (translations[browserLang]) {
      return browserLang
    }

    // 3. Check for Arabic browser
    if (navigator.language.startsWith('ar')) return 'ar'
    if (navigator.language.startsWith('fr')) return 'fr'
    if (navigator.language.startsWith('ms')) return 'ms'
    if (navigator.language.startsWith('id')) return 'id'
  }

  return 'en'
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>('en')

  useEffect(() => {
    const detected = detectLanguage()
    setLanguageState(detected)
  }, [])

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    if (typeof window !== 'undefined') {
      localStorage.setItem(LANGUAGE_KEY, lang)
      document.documentElement.lang = lang
      document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr'
    }
  }

  // Get nested translation value
  const t = (key: string): string => {
    const keys = key.split('.')
    let value: any = translations[language]

    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k]
      } else {
        // Fallback to English
        value = translations['en']
        for (const fallbackKey of keys) {
          if (value && typeof value === 'object' && fallbackKey in value) {
            value = value[fallbackKey]
          } else {
            return key // Return key if not found
          }
        }
        break
      }
    }

    return typeof value === 'string' ? value : key
  }

  const dir = language === 'ar' ? 'rtl' : 'ltr'

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, dir }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}

export type { Language }
