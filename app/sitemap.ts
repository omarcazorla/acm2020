import type { MetadataRoute } from 'next'
import { routing } from '@/i18n/routing'
import { getPathname } from '@/i18n/navigation'
import { municipios } from '@/data/municipios'
import { getProvinciasSlugs } from '@/data/provincias'
import { amiantoServices, radonServices } from '@/data/services'
import type { Locale, Pathnames } from '@/i18n/routing'

const BASE_URL = 'https://acm2020.es'

function getUrl(pathname: Pathnames, locale: Locale, params?: Record<string, string>): string {
  // getPathname already includes locale prefix for non-default locales
  const path = getPathname({ locale, href: params ? { pathname, params } as never : pathname as never })
  return `${BASE_URL}${path}`
}

function getAlternates(pathname: Pathnames, params?: Record<string, string>) {
  const languages: Record<string, string> = {}
  for (const locale of routing.locales) {
    languages[locale] = getUrl(pathname, locale, params)
  }
  // x-default points to the default locale version
  languages['x-default'] = getUrl(pathname, routing.defaultLocale, params)
  return { languages }
}

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = []

  // Static pages
  const staticPages: { path: Pathnames; freq: 'weekly' | 'monthly'; priority: number }[] = [
    { path: '/', freq: 'weekly', priority: 1.0 },
    { path: '/servicios', freq: 'monthly', priority: 0.9 },
    { path: '/servicios/amianto', freq: 'monthly', priority: 0.9 },
    { path: '/servicios/radon', freq: 'monthly', priority: 0.9 },
    { path: '/quienes-somos', freq: 'monthly', priority: 0.8 },
    { path: '/clientes', freq: 'monthly', priority: 0.7 },
    { path: '/contacto', freq: 'monthly', priority: 0.8 },
    { path: '/blog', freq: 'weekly', priority: 0.7 },
    { path: '/preguntas-frecuentes', freq: 'monthly', priority: 0.7 },
    { path: '/glosario', freq: 'monthly', priority: 0.6 },
    { path: '/noticias', freq: 'weekly', priority: 0.7 },
    { path: '/municipios', freq: 'monthly', priority: 0.7 },
    { path: '/legal/privacidad', freq: 'monthly', priority: 0.3 },
    { path: '/legal/aviso-legal', freq: 'monthly', priority: 0.3 },
    { path: '/legal/cookies', freq: 'monthly', priority: 0.3 },
  ]

  for (const page of staticPages) {
    for (const locale of routing.locales) {
      entries.push({
        url: getUrl(page.path, locale),
        lastModified: new Date(),
        changeFrequency: page.freq,
        priority: page.priority,
        alternates: getAlternates(page.path),
      })
    }
  }

  // Amianto service pages
  for (const service of amiantoServices) {
    const params = { slug: service.slug }
    for (const locale of routing.locales) {
      entries.push({
        url: getUrl('/servicios/amianto/[slug]', locale, params),
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.8,
        alternates: getAlternates('/servicios/amianto/[slug]', params),
      })
    }
  }

  // Radon service pages
  for (const service of radonServices) {
    const params = { slug: service.slug }
    for (const locale of routing.locales) {
      entries.push({
        url: getUrl('/servicios/radon/[slug]', locale, params),
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.8,
        alternates: getAlternates('/servicios/radon/[slug]', params),
      })
    }
  }

  // Provincia pages
  for (const provinciaSlug of getProvinciasSlugs()) {
    const params = { provincia: provinciaSlug }
    for (const locale of routing.locales) {
      entries.push({
        url: getUrl('/municipios/provincia/[provincia]', locale, params),
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.7,
        alternates: getAlternates('/municipios/provincia/[provincia]', params),
      })
    }
  }

  // Municipio pages
  for (const municipio of municipios) {
    const params = { slug: municipio.slug }
    for (const locale of routing.locales) {
      entries.push({
        url: getUrl('/municipios/[slug]', locale, params),
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.6,
        alternates: getAlternates('/municipios/[slug]', params),
      })
    }
  }

  return entries
}
