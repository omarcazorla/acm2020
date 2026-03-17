import { defineRouting } from 'next-intl/routing'

export const routing = defineRouting({
  locales: ['es', 'ca', 'en', 'fr'],
  defaultLocale: 'es',
  localeDetection: true,
  localePrefix: {
    mode: 'as-needed',
  },
  pathnames: {
    '/': '/',
    '/servicios': {
      es: '/servicios',
      ca: '/serveis',
      en: '/services',
      fr: '/services',
    },
    '/servicios/amianto': {
      es: '/servicios/amianto',
      ca: '/serveis/amiant',
      en: '/services/asbestos',
      fr: '/services/amiante',
    },
    '/servicios/amianto/[slug]': {
      es: '/servicios/amianto/[slug]',
      ca: '/serveis/amiant/[slug]',
      en: '/services/asbestos/[slug]',
      fr: '/services/amiante/[slug]',
    },
    '/servicios/radon': {
      es: '/servicios/radon',
      ca: '/serveis/rado',
      en: '/services/radon',
      fr: '/services/radon',
    },
    '/servicios/radon/[slug]': {
      es: '/servicios/radon/[slug]',
      ca: '/serveis/rado/[slug]',
      en: '/services/radon/[slug]',
      fr: '/services/radon/[slug]',
    },
    '/quienes-somos': {
      es: '/quienes-somos',
      ca: '/qui-som',
      en: '/about-us',
      fr: '/qui-sommes-nous',
    },
    '/clientes': {
      es: '/clientes',
      ca: '/clients',
      en: '/clients',
      fr: '/clients',
    },
    '/contacto': {
      es: '/contacto',
      ca: '/contacte',
      en: '/contact',
      fr: '/contact',
    },
    '/blog': {
      es: '/blog',
      ca: '/blog',
      en: '/blog',
      fr: '/blog',
    },
    '/blog/[slug]': {
      es: '/blog/[slug]',
      ca: '/blog/[slug]',
      en: '/blog/[slug]',
      fr: '/blog/[slug]',
    },
    '/preguntas-frecuentes': {
      es: '/preguntas-frecuentes',
      ca: '/preguntes-frequents',
      en: '/faq',
      fr: '/faq',
    },
    '/glosario': {
      es: '/glosario',
      ca: '/glossari',
      en: '/glossary',
      fr: '/glossaire',
    },
    '/noticias': {
      es: '/noticias',
      ca: '/noticies',
      en: '/news',
      fr: '/actualites',
    },
    '/municipios': {
      es: '/municipios',
      ca: '/municipis',
      en: '/municipalities',
      fr: '/municipalites',
    },
    '/municipios/provincia/[provincia]': {
      es: '/municipios/provincia/[provincia]',
      ca: '/municipis/provincia/[provincia]',
      en: '/municipalities/province/[provincia]',
      fr: '/municipalites/province/[provincia]',
    },
    '/municipios/[slug]': {
      es: '/municipios/[slug]',
      ca: '/municipis/[slug]',
      en: '/municipalities/[slug]',
      fr: '/municipalites/[slug]',
    },
    '/legal/privacidad': {
      es: '/legal/privacidad',
      ca: '/legal/privadesa',
      en: '/legal/privacy',
      fr: '/legal/confidentialite',
    },
    '/legal/aviso-legal': {
      es: '/legal/aviso-legal',
      ca: '/legal/avis-legal',
      en: '/legal/legal-notice',
      fr: '/legal/mentions-legales',
    },
    '/legal/cookies': {
      es: '/legal/cookies',
      ca: '/legal/cookies',
      en: '/legal/cookies',
      fr: '/legal/cookies',
    },
  },
})

export type Locale = (typeof routing.locales)[number]
export type Pathnames = keyof typeof routing.pathnames
