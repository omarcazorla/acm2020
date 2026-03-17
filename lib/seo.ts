import { routing } from '@/i18n/routing'
import { getPathname } from '@/i18n/navigation'
import type { Locale, Pathnames } from '@/i18n/routing'

const BASE_URL = 'https://acm2020.es'

export function getUrl(locale: Locale, pathname: Pathnames, params?: Record<string, string>): string {
  // getPathname already includes locale prefix for non-default locales
  const path = getPathname({ locale, href: params ? { pathname, params } as never : pathname as never })
  return `${BASE_URL}${path}`
}

export function getAlternates(locale: Locale, pathname: Pathnames, params?: Record<string, string>) {
  const languages: Record<string, string> = {}
  for (const l of routing.locales) {
    languages[l] = getUrl(l, pathname, params)
  }
  languages['x-default'] = getUrl(routing.defaultLocale, pathname, params)

  return {
    canonical: getUrl(locale, pathname, params),
    languages,
  }
}
