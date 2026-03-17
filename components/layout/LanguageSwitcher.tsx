'use client'

import { useLocale } from 'next-intl'
import { usePathname, useRouter } from 'next/navigation'
import { routing } from '@/i18n/routing'
import { useState, useRef, useEffect } from 'react'
import { Globe } from 'lucide-react'

const localeFlags: Record<string, string> = {
  es: '\u{1F1EA}\u{1F1F8}',
  ca: '\u{1F1EA}\u{1F1F8}',
  en: '\u{1F1EC}\u{1F1E7}',
  fr: '\u{1F1EB}\u{1F1F7}',
}

const localeLabels: Record<string, string> = {
  es: 'ES',
  ca: 'CA',
  en: 'EN',
  fr: 'FR',
}

const localeNames: Record<string, string> = {
  es: 'Castellano',
  ca: 'Catal\u00E0',
  en: 'English',
  fr: 'Fran\u00E7ais',
}

interface LanguageSwitcherProps {
  variant?: 'dropdown' | 'inline'
  theme?: 'light' | 'dark'
}

export default function LanguageSwitcher({ variant = 'dropdown', theme = 'light' }: LanguageSwitcherProps) {
  const locale = useLocale()
  const pathname = usePathname()
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const switchLocale = (newLocale: string) => {
    const segments = pathname.split('/')
    const currentLocaleInPath = routing.locales.find(
      (l) => segments[1] === l
    )
    if (currentLocaleInPath) {
      segments.splice(1, 1)
    }
    const newPath =
      newLocale === routing.defaultLocale
        ? segments.join('/') || '/'
        : `/${newLocale}${segments.join('/') || '/'}`

    router.push(newPath)
    setIsOpen(false)
  }

  if (variant === 'inline') {
    const baseText = theme === 'dark' ? 'text-white/60' : 'text-gray-500'
    const activeText = theme === 'dark' ? 'text-primary font-semibold' : 'text-primary font-semibold'
    const hoverText = theme === 'dark' ? 'hover:text-white' : 'hover:text-secondary'

    return (
      <div className="flex items-center gap-1">
        <Globe className={`w-4 h-4 ${baseText} mr-1`} />
        {routing.locales.map((l, i) => (
          <span key={l} className="flex items-center">
            {i > 0 && <span className={`mx-1 ${baseText}`}>·</span>}
            <button
              onClick={() => switchLocale(l)}
              className={`text-sm transition-colors ${
                l === locale ? activeText : `${baseText} ${hoverText}`
              }`}
            >
              {localeLabels[l]}
            </button>
          </span>
        ))}
      </div>
    )
  }

  const dropdownBtnClass = theme === 'dark'
    ? 'text-white/90 hover:text-white hover:bg-white/10'
    : 'text-secondary hover:text-primary hover:bg-primary/10'

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center space-x-1.5 px-2.5 py-2 text-sm font-medium rounded-lg transition-colors duration-300 ${dropdownBtnClass}`}
        aria-label="Change language"
      >
        <span className="text-base leading-none">{localeFlags[locale]}</span>
        <span>{localeLabels[locale]}</span>
      </button>

      {isOpen && (
        <div className="absolute right-0 top-full mt-1 bg-white rounded-xl shadow-xl border border-gray-100 py-2 min-w-[140px] z-50">
          {routing.locales.map((l) => (
            <button
              key={l}
              onClick={() => switchLocale(l)}
              className={`w-full text-left px-4 py-2 text-sm hover:bg-primary/10 transition-colors ${
                l === locale ? 'text-primary font-semibold' : 'text-secondary'
              }`}
            >
              <span className="mr-2">{localeFlags[l]}</span>
              {localeNames[l]}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
