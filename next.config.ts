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
      // New operational service URLs
      { source: '/control-calidad-final-superficies-amianto', destination: '/servicios/amianto/control-calidad-final', permanent: true },
      { source: '/control-periodico-superficies-amianto', destination: '/servicios/amianto/control-periodico', permanent: true },
      { source: '/muestra-ambiental-aire-amianto-punto-fijo', destination: '/servicios/amianto/muestreo-ambiental', permanent: true },
      // Old category index pages
      { source: '/servicios-operativos-amianto', destination: '/servicios/amianto', permanent: true },
      { source: '/servicios-consultoria-asesoria-formacion-amianto', destination: '/servicios/amianto', permanent: true },
      // Old URLs for already-migrated operational services
      { source: '/seguimiento-planes-trabajo-rera-amianto', destination: '/servicios/amianto/direccion-obra', permanent: true },
      { source: '/seguimiento-de-amianto-independiente', destination: '/servicios/amianto/direccion-obra', permanent: true },
      { source: '/estado-de-deterioro-fibrocemento-uralita-amianto', destination: '/servicios/amianto/evaluacion-riesgos', permanent: true },
      { source: '/estado-de-conservacion-del-amianto', destination: '/servicios/amianto/evaluacion-riesgos', permanent: true },
      { source: '/identificacion-localizacion-diagnostico-evaluacion-materiales-con-amianto', destination: '/servicios/amianto/inspeccion-identificacion', permanent: true },
      { source: '/identificacion-evaluacion-materiales-con-amianto', destination: '/servicios/amianto/inspeccion-identificacion', permanent: true },
      { source: '/deteccion-amianto-oficinas-lugares-trabajo', destination: '/servicios/amianto/inspeccion-identificacion', permanent: true },
      { source: '/muestra-ambiental-aire-amianto', destination: '/servicios/amianto/muestreo-ambiental', permanent: true },
      // Legal pages
      { source: '/privacidad', destination: '/legal/privacidad', permanent: true },
      { source: '/aviso-legal', destination: '/legal/aviso-legal', permanent: true },
      { source: '/politica-cookies', destination: '/legal/cookies', permanent: true },
      // Municipio and provincia redirects from old site
      ...allMunicipioRedirects,
    ]
  },
}

export default withNextIntl(nextConfig)
