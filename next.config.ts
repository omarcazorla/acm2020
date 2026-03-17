import type { NextConfig } from 'next'
import createNextIntlPlugin from 'next-intl/plugin'
import { allMunicipioRedirects } from './data/redirects'

const withNextIntl = createNextIntlPlugin('./i18n/request.ts')

const nextConfig: NextConfig = {
  turbopack: {
    root: __dirname,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  async redirects() {
    return [
      // Old IONOS site redirects - common patterns
      { source: '/index.html', destination: '/', permanent: true },
      { source: '/inicio', destination: '/', permanent: true },
      { source: '/amianto', destination: '/servicios/amianto', permanent: true },
      { source: '/amianto.html', destination: '/servicios/amianto', permanent: true },
      { source: '/radon', destination: '/servicios/radon', permanent: true },
      { source: '/radon.html', destination: '/servicios/radon', permanent: true },
      { source: '/gas-radon', destination: '/servicios/radon', permanent: true },
      { source: '/sobre-nosotros', destination: '/quienes-somos', permanent: true },
      { source: '/about', destination: '/quienes-somos', permanent: true },
      { source: '/contact', destination: '/contacto', permanent: true },
      { source: '/contacto.html', destination: '/contacto', permanent: true },
      // Service-specific old URLs
      { source: '/inspeccion-amianto', destination: '/servicios/amianto/inspeccion-identificacion', permanent: true },
      { source: '/plan-gestion-amianto', destination: '/servicios/amianto/planes-gestion', permanent: true },
      { source: '/desamiantado', destination: '/servicios/amianto/proyectos-desamiantado', permanent: true },
      { source: '/retirada-amianto', destination: '/servicios/amianto/proyectos-desamiantado', permanent: true },
      { source: '/gestion-residuos-amianto', destination: '/servicios/amianto/gestion-residuos', permanent: true },
      { source: '/medicion-radon', destination: '/servicios/radon/medicion-gas-radon', permanent: true },
      { source: '/medir-radon', destination: '/servicios/radon/medicion-gas-radon', permanent: true },
      // Legal pages
      { source: '/privacidad', destination: '/legal/privacidad', permanent: true },
      { source: '/aviso-legal', destination: '/legal/aviso-legal', permanent: true },
      { source: '/politica-cookies', destination: '/legal/cookies', permanent: true },
      // Catalan variants
      { source: '/ca/serveis', destination: '/ca/servicios', permanent: true },
      { source: '/ca/contacte', destination: '/ca/contacto', permanent: true },
      { source: '/ca/qui-som', destination: '/ca/quienes-somos', permanent: true },
      // Municipio and provincia redirects from old site
      ...allMunicipioRedirects,
    ]
  },
}

export default withNextIntl(nextConfig)
