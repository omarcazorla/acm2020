// 301 redirects from old acm2020.es site to new URL structure
// Generated from old_sitemap.xml municipio and provincia pages

interface Redirect {
  source: string
  destination: string
  permanent: boolean
}

// Provincia/overview pages
const provinciaRedirects: Redirect[] = [
  { source: '/mapa-lista-municipios-actuacion-prioritaria-catalu%C3%B1a', destination: '/municipios', permanent: true },
  { source: '/mapa-lista-municipios-actuacion-prioritaria-cataluña', destination: '/municipios', permanent: true },
  { source: '/mapa-lista-municipios-actuacion-prioritaria-provincia-barcelona', destination: '/municipios/provincia/barcelona', permanent: true },
  { source: '/mapa-lista-municipios-actuacion-prioritaria-provincia-girona', destination: '/municipios/provincia/girona', permanent: true },
  { source: '/mapa-lista-municipios-actuacion-prioritaria-provincia-lleida', destination: '/municipios/provincia/lleida', permanent: true },
  { source: '/mapa-lista-municipios-actuacion-prioritaria-provincia-tarragona', destination: '/municipios/provincia/tarragona', permanent: true },
]

// Individual municipio page redirects (old slug -> new slug)
const municipioRedirectMap: Record<string, string> = {
  'badalona-municipio-actuacion-prioritaria-gas-radon': 'badalona',
  'alins-municipio-de-actuacion-prioritaria-gas-radon': 'alins',
  'espolla-municipio-de-actuacion-prioritaria-gas-radon': 'espolla',
  'botarell-municipio-de-actuacion-prioritaria-gas-radon': 'botarell',
  'vilaller-municipio-de-actuacion-prioritaria-gas-radon': 'vilaller',
  'aleixar-municipio-de-actuacion-prioritaria-gas-radon': 'aleixar',
  'montgat-municipio-de-actuacion-prioritaria-gas-radon': 'montgat',
  'sils-municipio-de-actuacion-prioritaria-gas-radon': 'sils',
  'alp-municipio-de-actuacion-prioritaria-gas-radon': 'alp',
  'camprodon-municipio-de-actuacion-prioritaria-gas-radon': 'camprodon',
  'angl%C3%A8s-municipio-de-actuacion-prioritaria-gas-radon': 'angles',
  'sort-municipio-de-actuacion-prioritaria-gas-radon': 'sort',
  'osor-municipio-de-actuacion-prioritaria-gas-radon': 'osor',
  'llanars-municipio-de-actuacion-prioritaria-gas-radon': 'llanars',
  'riudecanyes-municipio-de-actuacion-prioritaria-gas-radon': 'riudecanyes',
  'riudecols-municipio-de-actuacion-prioritaria-gas-radon': 'riudecols',
  'amer-municipio-de-actuacion-prioritaria-gas-radon': 'amer',
  'ger-municipio-de-actuacion-prioritaria-gas-radon': 'ger',
  'cadaques-municipio-de-actuacion-prioritaria-gas-radon': 'cadaques',
  'vidreres-municipio-de-actuacion-prioritaria-gas-radon': 'vidreres',
  'calonge-municipio-de-actuacion-prioritaria-gas-radon': 'calonge',
  'almoster-municipio-de-actuacion-prioritaria-gas-radon': 'almoster',
  'portbou-municipio-de-actuacion-prioritaria-gas-radon': 'portbou',
  'tiana-municipio-de-actuacion-prioritaria-gas-radon': 'tiana',
  'alforja-municipio-de-actuacion-prioritaria-gas-radon': 'alforja',
  'argentona-municipio-de-actuacion-prioritaria-gas-radon': 'argentona',
  'llan%C3%A7%C3%A0-municipio-de-actuacion-prioritaria-gas-radon': 'llança',
  'matar%C3%B3-municipio-de-actuaci%C3%B3n-prioritaria-gas-rad%C3%B3n': 'mataro',
  // Common pattern: [municipio]-municipio-de-actuacion-prioritaria-gas-radon
  'igualada-municipio-de-actuacion-prioritaria-gas-radon': 'igualada',
  'manresa-municipio-de-actuacion-prioritaria-gas-radon': 'manresa',
  'berga-municipio-de-actuacion-prioritaria-gas-radon': 'berga',
  'vic-municipio-de-actuacion-prioritaria-gas-radon': 'vic',
  'terrassa-municipio-de-actuacion-prioritaria-gas-radon': 'terrassa',
  'sabadell-municipio-de-actuacion-prioritaria-gas-radon': 'sabadell',
  'olot-municipio-de-actuacion-prioritaria-gas-radon': 'olot',
  'ripoll-municipio-de-actuacion-prioritaria-gas-radon': 'ripoll',
  'puigcerda-municipio-de-actuacion-prioritaria-gas-radon': 'puigcerda',
  'girona-municipio-de-actuacion-prioritaria-gas-radon': 'girona',
  'figueres-municipio-de-actuacion-prioritaria-gas-radon': 'figueres',
  'lleida-municipio-de-actuacion-prioritaria-gas-radon': 'lleida',
  'tremp-municipio-de-actuacion-prioritaria-gas-radon': 'tremp',
  'vielha-municipio-de-actuacion-prioritaria-gas-radon': 'vielha',
  'montblanc-municipio-de-actuacion-prioritaria-gas-radon': 'montblanc',
  'falset-municipio-de-actuacion-prioritaria-gas-radon': 'falset',
  'valls-municipio-de-actuacion-prioritaria-gas-radon': 'valls',
  'tarragona-municipio-de-actuacion-prioritaria-gas-radon': 'tarragona',
  'reus-municipio-de-actuacion-prioritaria-gas-radon': 'reus',
  'tortosa-municipio-de-actuacion-prioritaria-gas-radon': 'tortosa',
  'gandesa-municipio-de-actuacion-prioritaria-gas-radon': 'gandesa',
  'solsona-municipio-de-actuacion-prioritaria-gas-radon': 'solsona',
  'la-seu-durgell-municipio-de-actuacion-prioritaria-gas-radon': 'la-seu-durgell',
  'besalu-municipio-de-actuacion-prioritaria-gas-radon': 'besalu',
  'banyoles-municipio-de-actuacion-prioritaria-gas-radon': 'banyoles',
  'santa-coloma-de-farners-municipio-de-actuacion-prioritaria-gas-radon': 'santa-coloma-de-farners',
  'arbucies-municipio-de-actuacion-prioritaria-gas-radon': 'arbucies',
  'hostalric-municipio-de-actuacion-prioritaria-gas-radon': 'hostalric',
  'breda-municipio-de-actuacion-prioritaria-gas-radon': 'breda',
  'sant-joan-de-les-abadesses-municipio-de-actuacion-prioritaria-gas-radon': 'sant-joan-de-les-abadesses',
  'sant-celoni-municipio-de-actuacion-prioritaria-gas-radon': 'sant-celoni',
  'la-garriga-municipio-de-actuacion-prioritaria-gas-radon': 'la-garriga',
  'caldes-de-montbui-municipio-de-actuacion-prioritaria-gas-radon': 'caldes-de-montbui',
  'olesa-de-montserrat-municipio-de-actuacion-prioritaria-gas-radon': 'olesa-de-montserrat',
  'esparreguera-municipio-de-actuacion-prioritaria-gas-radon': 'esparreguera',
  'dosrius-municipio-de-actuacion-prioritaria-gas-radon': 'dosrius',
  'matadepera-municipio-de-actuacion-prioritaria-gas-radon': 'matadepera',
  'el-pont-de-suert-municipio-de-actuacion-prioritaria-gas-radon': 'el-pont-de-suert',
  'ponts-municipio-de-actuacion-prioritaria-gas-radon': 'ponts',
  'balaguer-municipio-de-actuacion-prioritaria-gas-radon': 'balaguer',
  'cervera-municipio-de-actuacion-prioritaria-gas-radon': 'cervera',
  // Catalan variant URLs
  'badalona-municipi-actuacio-prioritaria-gas-rado': 'badalona',
  'argentona-municipi-actuacio-prioritaria-gas-rado': 'argentona',
  'mataro-municipi-actuacio-prioritaria-gas-rado': 'mataro',
}

const municipioRedirects: Redirect[] = Object.entries(municipioRedirectMap).map(
  ([oldSlug, newSlug]) => ({
    source: `/${oldSlug}`,
    destination: `/municipios/${newSlug}`,
    permanent: true,
  })
)

// Radon-related page redirects
const radonPageRedirects: Redirect[] = [
  { source: '/gas-radon-barcelona-medir-concentracion-anual', destination: '/municipios/provincia/barcelona', permanent: true },
  { source: '/ca/gas-rado-barcelona-mesurar-concentracio-anual', destination: '/ca/municipios/provincia/barcelona', permanent: true },
]

export const allMunicipioRedirects: Redirect[] = [
  ...provinciaRedirects,
  ...municipioRedirects,
  ...radonPageRedirects,
]
