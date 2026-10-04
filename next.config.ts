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
      // =================================================================
      // Old IONOS site redirects - common patterns
      // =================================================================
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

      // =================================================================
      // Asbestos (amianto) service pages — ES
      // =================================================================
      // Inspection & identification
      { source: '/inspeccion-amianto', destination: '/servicios/amianto/inspeccion-identificacion', permanent: true },
      { source: '/identificacion-localizacion-diagnostico-evaluacion-materiales-con-amianto', destination: '/servicios/amianto/inspeccion-identificacion', permanent: true },
      { source: '/identificacion-evaluacion-materiales-con-amianto', destination: '/servicios/amianto/inspeccion-identificacion', permanent: true },
      { source: '/identificacion-de-elementos-que-contienen-amianto', destination: '/servicios/amianto/inspeccion-identificacion', permanent: true },
      { source: '/deteccion-amianto-oficinas-lugares-trabajo', destination: '/servicios/amianto/inspeccion-identificacion', permanent: true },
      { source: '/detectar-amianto', destination: '/servicios/amianto/inspeccion-identificacion', permanent: true },
      { source: '/detectar-amianto-antes-de-la-rehabilitacion-energetica-de-edificios', destination: '/servicios/amianto/inspeccion-identificacion', permanent: true },
      { source: '/diagnosis-identificacion-evaluacion-amianto-en-edificios', destination: '/servicios/amianto/inspeccion-identificacion', permanent: true },
      { source: '/informe-tecnico-de-localizacion-y-diagnostico-de-amianto', destination: '/servicios/amianto/inspeccion-identificacion', permanent: true },
      { source: '/amianto-donde-se-encuentra-casa-trabajo', destination: '/servicios/amianto/inspeccion-identificacion', permanent: true },
      { source: '/como-saber-si-tengo-amianto-en-casa', destination: '/servicios/amianto/inspeccion-identificacion', permanent: true },
      { source: '/riesgo-de-amianto-en-obras-de-rehabilitacion-de-edificios', destination: '/servicios/amianto/inspeccion-identificacion', permanent: true },
      { source: '/detecci%C3%B3n-amianto-sector-n%C3%A1utico-diagnosis', destination: '/servicios/amianto/inspeccion-identificacion', permanent: true },
      { source: '/detecci%C3%B3n-amianto-industria-naval-buques-astilleros-diagnosis', destination: '/servicios/amianto/inspeccion-identificacion', permanent: true },
      { source: '/detecci%C3%B3n-de-amianto-en-hospitales-y-centros-de-salud', destination: '/servicios/amianto/inspeccion-identificacion', permanent: true },
      // Risk evaluation
      { source: '/estado-de-deterioro-fibrocemento-uralita-amianto', destination: '/servicios/amianto/evaluacion-riesgos', permanent: true },
      { source: '/estado-de-conservacion-del-amianto', destination: '/servicios/amianto/evaluacion-riesgos', permanent: true },
      { source: '/estado-de-degradacion-y-riesgo-potencial-de-los-materiales-con-amianto-instalados-2025', destination: '/servicios/amianto/evaluacion-riesgos', permanent: true },
      // Direction & supervision
      { source: '/seguimiento-planes-trabajo-rera-amianto', destination: '/servicios/amianto/direccion-obra', permanent: true },
      { source: '/seguimiento-de-amianto-independiente', destination: '/servicios/amianto/direccion-obra', permanent: true },
      { source: '/seguimiento-de-la-gestion-retirada-de-amianto', destination: '/servicios/amianto/direccion-obra', permanent: true },
      // Quality control
      { source: '/control-calidad-final-superficies-amianto', destination: '/servicios/amianto/control-calidad-final', permanent: true },
      { source: '/inspeccion-visual-amianto-despues-retirada-eliminacion-amianto-rera', destination: '/servicios/amianto/control-calidad-final', permanent: true },
      // Periodic control
      { source: '/control-periodico-superficies-amianto', destination: '/servicios/amianto/control-periodico', permanent: true },
      // Environmental sampling
      { source: '/muestra-ambiental-aire-amianto-punto-fijo', destination: '/servicios/amianto/muestreo-ambiental', permanent: true },
      { source: '/muestra-ambiental-aire-amianto', destination: '/servicios/amianto/muestreo-ambiental', permanent: true },
      { source: '/medicion-ambiental-de-amianto-deteccion-fibras-de-amianto-en-aire', destination: '/servicios/amianto/muestreo-ambiental', permanent: true },
      // Advisory & consulting
      { source: '/asesoria-consultoria-amianto', destination: '/servicios/amianto/asesoria-consultoria', permanent: true },
      { source: '/asesoramiento-gestion-amianto-administradores-fincas-inmobiliarias', destination: '/servicios/amianto/asesoria-consultoria', permanent: true },
      // Training
      { source: '/formacion-amianto', destination: '/servicios/amianto/formacion', permanent: true },
      // Municipal censuses (18K impressions — 4th highest traffic page)
      { source: '/censo-de-amianto-por-municipios', destination: '/servicios/amianto/censos-municipales', permanent: true },
      { source: '/censo-municipal-de-amianto-en-catalu%C3%B1a', destination: '/servicios/amianto/censos-municipales', permanent: true },
      { source: '/censos-de-amianto-edificios-instalaciones-infraestructuras', destination: '/servicios/amianto/censos-municipales', permanent: true },
      { source: '/mapa-del-amianto-de-badia-del-vall%C3%A9s', destination: '/servicios/amianto/censos-municipales', permanent: true },
      // Management plans
      { source: '/plan-gestion-amianto', destination: '/servicios/amianto/planes-gestion', permanent: true },
      // Audits
      { source: '/auditoria-amianto', destination: '/servicios/amianto/auditorias', permanent: true },
      // Removal projects
      { source: '/desamiantado', destination: '/servicios/amianto/proyectos-desamiantado', permanent: true },
      { source: '/retirada-amianto', destination: '/servicios/amianto/proyectos-desamiantado', permanent: true },
      // Waste management
      { source: '/gestion-residuos-amianto', destination: '/servicios/amianto/gestion-residuos', permanent: true },
      // Water asbestos
      { source: '/aguas-con-amianto', destination: '/servicios/amianto/amianto-aguas', permanent: true },
      // Soil asbestos
      { source: '/suelos-tierras-contaminadas-con-amianto-fibrocemento', destination: '/servicios/amianto/amianto-suelos', permanent: true },
      { source: '/parques-y-zonas-verdes-con-amianto-fibrocemento-uralita', destination: '/servicios/amianto/amianto-suelos', permanent: true },
      // Communities
      { source: '/amianto-en-comunidades-de-vecinos', destination: '/servicios/amianto/comunidades-vecinos', permanent: true },
      // Property transactions
      { source: '/deteccion-verificacion-amianto-compraventa-inmuebles', destination: '/servicios/amianto/compraventa-inmuebles', permanent: true },
      // BREEAM certification
      { source: '/inspeccion-amianto-certificacion-breeam', destination: '/servicios/amianto/certificacion-breeam', permanent: true },
      // Sector index
      { source: '/amianto-por-escenarios-o-sectores', destination: '/servicios/amianto', permanent: true },
      // Category index pages
      { source: '/servicios-operativos-amianto', destination: '/servicios/amianto', permanent: true },
      { source: '/servicios-consultoria-asesoria-formacion-amianto', destination: '/servicios/amianto', permanent: true },
      { source: '/servicios-asesor%C3%ADa-consultor%C3%ADa-formaci%C3%B3n-amianto', destination: '/servicios/amianto', permanent: true },
      { source: '/servicios-consultoria-asesoria-formacion-amianto', destination: '/servicios/amianto', permanent: true },

      // =================================================================
      // Radon service pages — ES
      // =================================================================
      { source: '/medicion-radon', destination: '/servicios/radon/medicion-gas-radon', permanent: true },
      { source: '/medir-radon', destination: '/servicios/radon/medicion-gas-radon', permanent: true },
      { source: '/medir-radiacion-gas-radon', destination: '/servicios/radon/medicion-gas-radon', permanent: true },
      { source: '/mediciones-concentracion-promedio-anual-gas-radon', destination: '/servicios/radon/medicion-gas-radon', permanent: true },
      { source: '/servicio-de-mediciones-de-concentraci%C3%B3n-de-gas-rad%C3%B3n', destination: '/servicios/radon/medicion-gas-radon', permanent: true },
      { source: '/mediciones-concentraci%C3%B3n-gas-rad%C3%B3n-c%C3%B3digo-t%C3%A9cnico-edificaci%C3%B3n-cte-hs6', destination: '/servicios/radon/medicion-gas-radon', permanent: true },
      { source: '/mediciones-concentracion-gas-radon-viviendas-locales-habitables', destination: '/servicios/radon/medicion-gas-radon', permanent: true },
      { source: '/medir-concentraci%C3%B3n-de-gas-rad%C3%B3n-antes-de-reforma-rehabilitacion-ampliacion-cambio-de-uso', destination: '/servicios/radon/medicion-gas-radon', permanent: true },
      { source: '/como-saber-si-tengo-gas-radon', destination: '/servicios/radon/como-medir-radon', permanent: true },
      { source: '/calculadora-detectores-gas-rad%C3%B3n', destination: '/servicios/radon/medicion-gas-radon', permanent: true },
      { source: '/formacion-tecnicos-organismos-empresas-gas-radon', destination: '/servicios/radon/formacion-radon', permanent: true },
      { source: '/asesoria-consultoria-organismos-publicos-empresas-gas-radon', destination: '/servicios/radon/informes-tecnicos', permanent: true },

      // =================================================================
      // Regulatory / news content — ES
      // =================================================================
      { source: '/instrucci%C3%B3n-1-2023-encapsulaci%C3%B3n-de-materiales-y-elementos-que-contienen-amianto-catalu%C3%B1a', destination: '/noticias', permanent: true },
      { source: '/amianto-ascensores-real-decreto-355-2024-instruccion-tecnica-complementaria-itc', destination: '/noticias', permanent: true },
      { source: '/proyecto-de-ley-para-la-erradicacion-del-amianto-de-catalunya', destination: '/noticias', permanent: true },
      { source: '/plan-nacional-para-la-erradicaci%C3%B3n-del-amianto-en-catalu%C3%B1a', destination: '/noticias', permanent: true },
      { source: '/calendario-para-la-retirada-de-amianto', destination: '/noticias', permanent: true },
      { source: '/directiva-ue-2023/2668-parlamento-europeo-consejo-22-noviembre-2023-amianto-fibras', destination: '/noticias', permanent: true },
      { source: '/noticias-proyectos-colaboraciones', destination: '/noticias', permanent: true },

      // =================================================================
      // FAQ
      // =================================================================
      { source: '/preguntas-frecuentes-gas-radon', destination: '/preguntas-frecuentes', permanent: true },

      // =================================================================
      // Institutional pages — ES
      // =================================================================
      { source: '/equipo', destination: '/quienes-somos', permanent: true },
      { source: '/referencias', destination: '/clientes', permanent: true },
      { source: '/pol%C3%ADtica-de-calidad', destination: '/quienes-somos', permanent: true },

      // =================================================================
      // Legal pages
      // =================================================================
      { source: '/privacidad', destination: '/legal/privacidad', permanent: true },
      { source: '/privacy', destination: '/legal/privacidad', permanent: true },
      { source: '/aviso-legal', destination: '/legal/aviso-legal', permanent: true },
      { source: '/politica-cookies', destination: '/legal/cookies', permanent: true },

      // =================================================================
      // Catalan content pages — /ca/
      // =================================================================
      // Radon landing
      { source: '/ca/gas-rado', destination: '/ca/serveis/rado', permanent: true },
      // Asbestos service pages (CA)
      { source: '/ca/amiant-asbest-on-es-troba-casa-feina', destination: '/ca/serveis/amiant', permanent: true },
      { source: '/ca/diagnosis-identificacio-avaluacio-amiant-en-edificis', destination: '/ca/serveis/amiant/inspeccio-identificacio', permanent: true },
      { source: '/ca/identificacio-localitzacio-diagnostic-avaluacio-materials-amb-amiant', destination: '/ca/serveis/amiant/inspeccio-identificacio', permanent: true },
      { source: '/ca/detectar-amiant-abans-rehabilitacio-energetica-edifici', destination: '/ca/serveis/amiant', permanent: true },
      { source: '/ca/cens-municipal-amiant-catalunya-municipis', destination: '/ca/serveis/amiant/censos-municipals', permanent: true },
      { source: '/ca/cens-amiant-per-municipis', destination: '/ca/serveis/amiant/censos-municipals', permanent: true },
      { source: '/ca/censos-amiant-edificis-instalacions-infraestructures', destination: '/ca/serveis/amiant/censos-municipals', permanent: true },
      { source: '/ca/estat-de-deteriorament-fibrociment-uralita-amiant', destination: '/ca/serveis/amiant/avaluacio-riscos', permanent: true },
      { source: '/ca/estat-de-conservacio-del-amiant', destination: '/ca/serveis/amiant/avaluacio-riscos', permanent: true },
      { source: '/ca/sols-terres-contaminades-amb-amiant-fibrociment', destination: '/ca/serveis/amiant/amiant-sols', permanent: true },
      { source: '/ca/parcs-i-zones-verdes-amb-residus-amiant-fibrociment-uralita', destination: '/ca/serveis/amiant/amiant-sols', permanent: true },
      { source: '/ca/aigues-amiant', destination: '/ca/serveis/amiant/amiant-aigues', permanent: true },
      { source: '/ca/formacio-amiant', destination: '/ca/serveis/amiant/formacio', permanent: true },
      { source: '/ca/mostreig-ambiental-aire-amiant-punt-fix', destination: '/ca/serveis/amiant/mostreig-ambiental', permanent: true },
      { source: '/ca/control-qualitat-final-superficies-amiant', destination: '/ca/serveis/amiant/control-qualitat-final', permanent: true },
      { source: '/ca/control-periodic-superficies-amiant', destination: '/ca/serveis/amiant/control-periodic', permanent: true },
      { source: '/ca/seguiment-plans-treball-rera-amiant', destination: '/ca/serveis/amiant/direccio-obra', permanent: true },
      { source: '/ca/assessoria-consultoria-amiant', destination: '/ca/serveis/amiant/assessoria-consultoria', permanent: true },
      // Catalan category index pages
      { source: '/ca/serveis-assessoria-consultoria-formacio-amiant', destination: '/ca/serveis/amiant', permanent: true },
      { source: '/ca/serveis-operatius-amiant', destination: '/ca/serveis/amiant', permanent: true },
      { source: '/ca/serveis-consultoria-assessoria-formacio-amiant', destination: '/ca/serveis/amiant', permanent: true },
      // Catalan news/regulatory
      { source: '/ca/projecte-de-llei-per-a-lerradicacio-de-lamiant-de-catalunya', destination: '/ca/noticies', permanent: true },
      { source: '/ca/instruccio-1-2023-encapsulament-de-materials-i-elements-que-contenen-amiant-catalunya', destination: '/ca/noticies', permanent: true },
      { source: '/ca/pla-nacional-erradicacio-amiant-a-catalunya-pneac', destination: '/ca/noticies', permanent: true },
      { source: '/ca/calendari-per-a-la-retirada-amiant', destination: '/ca/noticies', permanent: true },
      { source: '/ca/noticias-proyectos-colaboraciones', destination: '/ca/noticies', permanent: true },
      // Catalan institutional
      { source: '/ca/referencies', destination: '/ca/clients', permanent: true },

      // =================================================================
      // Catalan service slug redirects (old Spanish slugs -> translated)
      // =================================================================
      // Amianto
      { source: '/ca/serveis/amiant/inspeccion-identificacion', destination: '/ca/serveis/amiant/inspeccio-identificacio', permanent: true },
      { source: '/ca/serveis/amiant/evaluacion-riesgos', destination: '/ca/serveis/amiant/avaluacio-riscos', permanent: true },
      { source: '/ca/serveis/amiant/muestreo-ambiental', destination: '/ca/serveis/amiant/mostreig-ambiental', permanent: true },
      { source: '/ca/serveis/amiant/censos-municipales', destination: '/ca/serveis/amiant/censos-municipals', permanent: true },
      { source: '/ca/serveis/amiant/amianto-aguas', destination: '/ca/serveis/amiant/amiant-aigues', permanent: true },
      { source: '/ca/serveis/amiant/amianto-suelos', destination: '/ca/serveis/amiant/amiant-sols', permanent: true },
      { source: '/ca/serveis/amiant/planes-gestion', destination: '/ca/serveis/amiant/plans-gestio', permanent: true },
      { source: '/ca/serveis/amiant/auditorias', destination: '/ca/serveis/amiant/auditories', permanent: true },
      { source: '/ca/serveis/amiant/asesoria-consultoria', destination: '/ca/serveis/amiant/assessoria-consultoria', permanent: true },
      { source: '/ca/serveis/amiant/gestion-residuos', destination: '/ca/serveis/amiant/gestio-residus', permanent: true },
      { source: '/ca/serveis/amiant/proyectos-desamiantado', destination: '/ca/serveis/amiant/projectes-desamiantatge', permanent: true },
      { source: '/ca/serveis/amiant/direccion-obra', destination: '/ca/serveis/amiant/direccio-obra', permanent: true },
      { source: '/ca/serveis/amiant/control-calidad-final', destination: '/ca/serveis/amiant/control-qualitat-final', permanent: true },
      { source: '/ca/serveis/amiant/control-periodico', destination: '/ca/serveis/amiant/control-periodic', permanent: true },
      { source: '/ca/serveis/amiant/compraventa-inmuebles', destination: '/ca/serveis/amiant/compravenda-immobles', permanent: true },
      { source: '/ca/serveis/amiant/certificacion-breeam', destination: '/ca/serveis/amiant/certificacio-breeam', permanent: true },
      { source: '/ca/serveis/amiant/comunidades-vecinos', destination: '/ca/serveis/amiant/comunitats-veins', permanent: true },
      { source: '/ca/serveis/amiant/formacion', destination: '/ca/serveis/amiant/formacio', permanent: true },
      // Radon
      { source: '/ca/serveis/rado/medicion-gas-radon', destination: '/ca/serveis/rado/mesurament-gas-rado', permanent: true },
      { source: '/ca/serveis/rado/soluciones-residenciales', destination: '/ca/serveis/rado/solucions-residencials', permanent: true },
      { source: '/ca/serveis/rado/espacios-trabajo', destination: '/ca/serveis/rado/espais-treball', permanent: true },
      { source: '/ca/serveis/rado/informes-tecnicos', destination: '/ca/serveis/rado/informes-tecnics', permanent: true },
      { source: '/ca/serveis/rado/formacion-radon', destination: '/ca/serveis/rado/formacio-rado', permanent: true },
      { source: '/ca/serveis/rado/como-medir-radon', destination: '/ca/serveis/rado/com-mesurar-rado', permanent: true },

      // =================================================================
      // Provincia intermediate redirects (avoid chain redirects)
      // =================================================================
      { source: '/municipios/provincia/barcelona', destination: '/municipios/barcelona', permanent: true },
      { source: '/municipios/provincia/girona', destination: '/municipios/girona', permanent: true },
      { source: '/municipios/provincia/lleida', destination: '/municipios/lleida', permanent: true },
      { source: '/municipios/provincia/tarragona', destination: '/municipios/tarragona', permanent: true },
      { source: '/ca/municipis/provincia/barcelona', destination: '/ca/municipis/barcelona', permanent: true },
      { source: '/ca/municipis/provincia/girona', destination: '/ca/municipis/girona', permanent: true },
      { source: '/ca/municipis/provincia/lleida', destination: '/ca/municipis/lleida', permanent: true },
      { source: '/ca/municipis/provincia/tarragona', destination: '/ca/municipis/tarragona', permanent: true },
      { source: '/en/municipalities/province/:slug', destination: '/en/municipalities/:slug', permanent: true },
      { source: '/fr/municipalites/province/:slug', destination: '/fr/municipalites/:slug', permanent: true },

      // =================================================================
      // Municipio and provincia redirects from old site (data/redirects.ts)
      // =================================================================
      ...allMunicipioRedirects,
    ]
  },
}

export default withNextIntl(nextConfig)
