import { setRequestLocale } from 'next-intl/server'
import { getTranslations } from 'next-intl/server'
import { notFound } from 'next/navigation'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import PageHero from '@/components/layout/PageHero'
import Breadcrumbs from '@/components/layout/Breadcrumbs'
import WhatsAppButton from '@/components/WhatsAppButton'
import FAQAccordion from '@/components/ui/FAQAccordion'
import { BreadcrumbJsonLd, FAQPageJsonLd } from '@/components/JsonLd'
import { municipios, getMunicipioBySlug, getMunicipiosByComarca } from '@/data/municipios'
import { getMunicipioContent } from '@/data/municipios-content'
import { getProvinciaBySlug } from '@/data/provincias'
import type { Locale } from '@/i18n/routing'
import { routing } from '@/i18n/routing'
import { getPathname } from '@/i18n/navigation'
import Link from 'next/link'
import { ArrowRight, MapPin, Shield, AlertTriangle, Info, Building2 } from 'lucide-react'
import enrichedData from '@/data/municipios-enriched.json'

// Inject zone labels into municipality links inside a "limita con" paragraph.
// Finds [Name](/municipios/slug) patterns, looks up the slug's zonaRadon,
// and rewrites as [Name (Zona II)](/municipios/slug) etc.
function injectZoneLabels(text: string, locale: string): string {
  return text.replace(/\[([^\]]+)\]\(\/municipios\/([^)]+)\)/g, (match, name, slug) => {
    const m = getMunicipioBySlug(slug)
    if (!m) return match
    const label =
      m.zonaRadon === 'alta'
        ? locale === 'ca' ? 'Zona II' : 'Zona II'
        : m.zonaRadon === 'media'
        ? locale === 'ca' ? 'Zona I' : 'Zona I'
        : locale === 'es' ? 'zona no prioritaria' : locale === 'ca' ? 'zona no prioritària' : locale === 'en' ? 'non-priority zone' : 'zone non prioritaire'
    return `[${name} (${label})](/municipios/${slug})`
  })
}

// Parse markdown-style links [text](/path) in content and render as Next.js Link components
function RichText({ text }: { text: string }) {
  const parts = text.split(/(\[[^\]]+\]\([^)]+\))/)
  return (
    <>
      {parts.map((part, i) => {
        const match = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/)
        if (match) {
          return (
            <Link key={i} href={match[2]} className="text-primary-text hover:underline font-medium">
              {match[1]}
            </Link>
          )
        }
        return <span key={i}>{part}</span>
      })}
    </>
  )
}

const BASE_URL = 'https://acm2020.es'

type Props = {
  params: Promise<{ locale: string; slug: string }>
}

export function generateStaticParams() {
  return municipios.map((m) => ({ slug: m.slug }))
}

function getAlternates(slug: string) {
  const languages: Record<string, string> = {}
  for (const locale of routing.locales) {
    const path = getPathname({
      locale,
      href: { pathname: '/municipios/[slug]', params: { slug } } as never,
    })
    languages[locale] = `${BASE_URL}${path}`
  }
  languages['x-default'] = languages[routing.defaultLocale]
  return { languages }
}

export async function generateMetadata({ params }: Props) {
  const { locale, slug } = await params
  const municipio = getMunicipioBySlug(slug)
  if (!municipio) return {}
  return {
    title: municipio.metaTitle[locale as Locale],
    description: municipio.metaDescription[locale as Locale],
    alternates: getAlternates(slug),
  }
}

export default async function MunicipioPage({ params }: Props) {
  const { locale, slug } = await params
  setRequestLocale(locale)

  const municipio = getMunicipioBySlug(slug)
  if (!municipio) notFound()

  const loc = locale as Locale
  const tPages = await getTranslations({ locale, namespace: 'pages.municipiosIndex' })
  const tProv = await getTranslations({ locale, namespace: 'pages.provinciaPage' })

  const zonaLabel = loc === 'es' ? (municipio.zonaRadon === 'alta' ? 'Alta' : municipio.zonaRadon === 'media' ? 'Media' : 'Baja') :
    loc === 'ca' ? (municipio.zonaRadon === 'alta' ? 'Alta' : municipio.zonaRadon === 'media' ? 'Mitjana' : 'Baixa') :
    loc === 'en' ? (municipio.zonaRadon === 'alta' ? 'High' : municipio.zonaRadon === 'media' ? 'Medium' : 'Low') :
    (municipio.zonaRadon === 'alta' ? 'Élevée' : municipio.zonaRadon === 'media' ? 'Moyenne' : 'Faible')

  const zonaColor = municipio.zonaRadon === 'alta' ? 'bg-red-100 text-red-700' :
    municipio.zonaRadon === 'media' ? 'bg-yellow-100 text-yellow-700' : 'bg-green-100 text-green-700'

  const name = loc === 'ca' ? municipio.nameCa : municipio.name

  // Get personalized content (ES only) or fallback to template
  const personalizedContent = getMunicipioContent(municipio.slug)
  let description = loc === 'es' && personalizedContent
    ? personalizedContent
    : municipio.descripcion[loc]

  // Append "limita con" paragraph to non-ES locales (proper nouns + zone info)
  if (loc !== 'es' && personalizedContent) {
    const paragraphs = personalizedContent.split('\n\n')
    const limitaCon = paragraphs.find(p => p.includes('limita con'))
    if (limitaCon) {
      description = description + '\n\n' + limitaCon
    }
  }

  // Inject live zone labels into municipality links inside the "limita con" paragraph
  description = description
    .split('\n\n')
    .map(p => p.includes('limita con') ? injectZoneLabels(p, loc) : p)
    .join('\n\n')

  // Provincia slug for breadcrumbs
  const provinciaSlug = municipio.provincia.toLowerCase()
  const provincia = getProvinciaBySlug(provinciaSlug)
  const provinciaName = provincia ? (loc === 'ca' ? provincia.nameCa : provincia.name) : municipio.provincia

  // Nearby municipios (same comarca, exclude self)
  const nearby = getMunicipiosByComarca(municipio.comarca)
    .filter((m) => m.slug !== municipio.slug)
    .slice(0, 5)

  // Enriched data (fibrocemento, demographics)
  const enriched = (enrichedData as Record<string, { fibrocemento: { cubiertas: number; areaM2: number; pesoT: number; cubiertasPorKm2: number; cubiertasPorMilHab: number; rankingComarca: { rank: number; total: number }; rankingProvincia: { rank: number; total: number } } | null; perfil: string } | undefined>)[municipio.slug]
  const fibro = enriched?.fibrocemento ?? null

  return (
    <>
      <Navbar darkHero />
      <BreadcrumbJsonLd
        items={[
          { name: loc === 'es' ? 'Inicio' : loc === 'ca' ? 'Inici' : loc === 'en' ? 'Home' : 'Accueil', url: `${BASE_URL}/` },
          { name: tPages('title'), url: `${BASE_URL}/municipios` },
          { name: provinciaName, url: `${BASE_URL}/municipios/provincia/${provinciaSlug}` },
          { name, url: `${BASE_URL}/municipios/${municipio.slug}` },
        ]}
      />
      {municipio.faqs[loc] && municipio.faqs[loc].length > 0 && (
        <FAQPageJsonLd
          faqs={municipio.faqs[loc].map((faq) => ({
            question: faq.q,
            answer: faq.a,
          }))}
        />
      )}
      <PageHero
        title={name}
        subtitle={`${municipio.comarca} · ${municipio.provincia}`}
      />
      <Breadcrumbs
        items={[
          { label: tPages('title'), href: '/municipios' },
          { label: provinciaName, href: `/municipios/provincia/${provinciaSlug}` },
          { label: name },
        ]}
      />
      <main className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          {/* Zone badges — only for Zona I / Zona II */}
          {municipio.zonaRadon !== 'baja' && (
            <div className="flex flex-wrap items-center gap-3 mb-8">
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-primary" />
                <span className={`text-sm px-3 py-1 rounded-full font-semibold ${zonaColor}`}>
                  {loc === 'es' ? 'Zona de exposición' : loc === 'ca' ? 'Zona d\'exposició' : loc === 'en' ? 'Exposure zone' : 'Zone d\'exposition'}: {zonaLabel}
                </span>
              </div>
              {municipio.zonaActuacion && (
                <span className={`text-sm px-3 py-1 rounded-full font-semibold ${municipio.zonaActuacion === 'II' ? 'bg-red-100 text-red-700' : 'bg-yellow-100 text-yellow-700'}`}>
                  {loc === 'es' ? 'Zona de actuación prioritaria' : loc === 'ca' ? 'Zona d\'actuació prioritària' : loc === 'en' ? 'Priority action zone' : 'Zone d\'action prioritaire'}: {tProv(municipio.zonaActuacion === 'II' ? 'zonaII' : 'zonaI')}
                </span>
              )}
            </div>
          )}

          {/* Info block for low-risk (baja) municipalities */}
          {municipio.zonaRadon === 'baja' && (
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-8 flex items-start gap-3">
              <Info className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
              <p className="text-sm text-blue-700">
                {loc === 'es'
                  ? 'Este municipio no figura en las zonas de actuación prioritaria del CSN (RD 1029/2022). La probabilidad de concentraciones elevadas de radón es baja, aunque el gas puede aparecer en cualquier edificio. ACM-2020 recomienda la medición preventiva.'
                  : loc === 'ca'
                  ? 'Aquest municipi no figura en les zones d\'actuació prioritària del CSN (RD 1029/2022). La probabilitat de concentracions elevades de radó és baixa, tot i que el gas pot aparèixer a qualsevol edifici. ACM-2020 recomana la mesura preventiva.'
                  : loc === 'en'
                  ? 'This municipality is not listed in CSN priority action zones (RD 1029/2022). The probability of elevated radon concentrations is low, although radon can appear in any building. ACM-2020 recommends preventive measurement.'
                  : 'Cette commune ne figure pas dans les zones d\'action prioritaires du CSN (RD 1029/2022). La probabilité de concentrations élevées de radon est faible, bien que le gaz puisse apparaître dans n\'importe quel bâtiment. ACM-2020 recommande une mesure préventive.'}
              </p>
            </div>
          )}

          {/* Zona actuacion alert for high zones */}
          {municipio.zonaActuacion === 'II' && (
            <div className="bg-red-50 border border-red-200 rounded-xl p-4 mb-8 flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
              <p className="text-sm text-red-700">
                {tProv('zonaIIDesc')}
              </p>
            </div>
          )}

          {/* Description - multi-paragraph */}
          <div className="prose prose-lg max-w-none mb-12">
            {description.split('\n\n').map((paragraph, i) => (
              <p key={i} className="text-lg text-gray-600 leading-relaxed">
                <RichText text={paragraph} />
              </p>
            ))}
          </div>

          {/* Services CTA — radon */}
          <div className="bg-secondary rounded-2xl p-8 mb-12">
            <div className="flex flex-col gap-6">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                <div className="flex items-center gap-4">
                  <Shield className="w-10 h-10 text-primary flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold text-white">
                      {loc === 'es' ? `Servicios de radón en ${name}` :
                       loc === 'ca' ? `Serveis de radó a ${name}` :
                       loc === 'en' ? `Radon services in ${name}` :
                       `Services radon à ${name}`}
                    </h3>
                    <p className="text-white/70 text-sm">
                      {loc === 'es' ? 'Medición, diagnóstico y soluciones profesionales' :
                       loc === 'ca' ? 'Mesurament, diagnostic i solucions professionals' :
                       loc === 'en' ? 'Measurement, diagnosis, and professional solutions' :
                       'Mesure, diagnostic et solutions professionnelles'}
                    </p>
                  </div>
                </div>
                <Link href={`/contacto?service=radon-cte&municipio=${encodeURIComponent(name)}`} className="btn-primary group whitespace-nowrap">
                  {loc === 'es' ? 'Solicitar presupuesto' :
                   loc === 'ca' ? 'Sol·licitar pressupost' :
                   loc === 'en' ? 'Request a quote' :
                   'Demander un devis'}
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <Link href="/servicios/radon/espacios-trabajo" className="group flex items-center gap-2 px-3 py-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors">
                  <ArrowRight className="w-3.5 h-3.5 text-primary flex-shrink-0 group-hover:translate-x-0.5 transition-transform" />
                  <span className="text-sm text-white/90 group-hover:text-white transition-colors">CTE DB HS6</span>
                </Link>
                <Link href="/servicios/radon/medicion-gas-radon" className="group flex items-center gap-2 px-3 py-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors">
                  <ArrowRight className="w-3.5 h-3.5 text-primary flex-shrink-0 group-hover:translate-x-0.5 transition-transform" />
                  <span className="text-sm text-white/90 group-hover:text-white transition-colors">
                    {loc === 'es' ? 'Instrucción IS-47' : loc === 'ca' ? 'Instrucció IS-47' : loc === 'en' ? 'Instruction IS-47' : 'Instruction IS-47'}
                  </span>
                </Link>
                <Link href="/servicios/radon/soluciones-residenciales" className="group flex items-center gap-2 px-3 py-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors">
                  <ArrowRight className="w-3.5 h-3.5 text-primary flex-shrink-0 group-hover:translate-x-0.5 transition-transform" />
                  <span className="text-sm text-white/90 group-hover:text-white transition-colors">
                    {loc === 'es' ? 'Medir en mi hogar' : loc === 'ca' ? 'Mesurar la meva llar' : loc === 'en' ? 'Home measurement' : 'Mesure à domicile'}
                  </span>
                </Link>
              </div>
            </div>
          </div>

          {/* Fibrocemento data section */}
          {fibro && (
            <>
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-secondary mb-4 flex items-center gap-2">
                  <Building2 className="w-6 h-6 text-primary" />
                  {loc === 'es' ? `Fibrocemento detectado en ${name}` :
                   loc === 'ca' ? `Fibrociment detectat a ${name}` :
                   loc === 'en' ? `Fibre cement detected in ${name}` :
                   `Fibrociment détecté à ${name}`}
                </h2>
                <p className="text-sm text-gray-500 mb-4">
                  {loc === 'es' ? 'Según el censo de cubiertas con fibrocemento en Catalunya (ICGC)' :
                   loc === 'ca' ? 'Segons el cens de cobertes amb fibrociment a Catalunya (ICGC)' :
                   loc === 'en' ? 'According to the fibre cement roofing census in Catalonia (ICGC)' :
                   'Selon le recensement des toitures en fibrociment en Catalogne (ICGC)'}
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="bg-gray-50 rounded-xl p-4 text-center">
                    <div className="text-2xl font-bold text-secondary">{fibro.cubiertas.toLocaleString(loc)}</div>
                    <div className="text-sm text-gray-600">
                      {loc === 'es' ? 'Cubiertas' : loc === 'ca' ? 'Cobertes' : loc === 'en' ? 'Rooftops' : 'Toitures'}
                    </div>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-4 text-center">
                    <div className="text-2xl font-bold text-secondary">{fibro.areaM2.toLocaleString(loc)}</div>
                    <div className="text-sm text-gray-600">m&sup2;</div>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-4 text-center">
                    <div className="text-2xl font-bold text-secondary">{fibro.pesoT.toLocaleString(loc, { maximumFractionDigits: 0 })}</div>
                    <div className="text-sm text-gray-600">
                      {loc === 'es' ? 'Toneladas est.' : loc === 'ca' ? 'Tones est.' : loc === 'en' ? 'Est. tonnes' : 'Tonnes est.'}
                    </div>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-4 text-center">
                    <div className="text-2xl font-bold text-secondary">
                      {fibro.rankingProvincia.rank}/{fibro.rankingProvincia.total}
                    </div>
                    <div className="text-sm text-gray-600">
                      {loc === 'es' ? `Ranking ${municipio.provincia}` :
                       loc === 'ca' ? `Rànquing ${municipio.provincia}` :
                       loc === 'en' ? `${municipio.provincia} ranking` :
                       `Classement ${municipio.provincia}`}
                    </div>
                  </div>
                </div>
              </div>

              {/* Services CTA — asbestos */}
              <div className="bg-secondary rounded-2xl p-8 mb-6">
                <div className="flex flex-col gap-6">
                  <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                    <div className="flex items-center gap-4">
                      <Building2 className="w-10 h-10 text-primary flex-shrink-0" />
                      <div>
                        <h3 className="text-xl font-bold text-white">
                          {loc === 'es' ? `Servicios de amianto en ${name}` :
                           loc === 'ca' ? `Serveis d'amiant a ${name}` :
                           loc === 'en' ? `Asbestos services in ${name}` :
                           `Services amiante à ${name}`}
                        </h3>
                        <p className="text-white/70 text-sm">
                          {loc === 'es' ? 'Inspección, gestión, desamiantado y certificación' :
                           loc === 'ca' ? 'Inspecció, gestió, desamiantatge i certificació' :
                           loc === 'en' ? 'Inspection, management, removal, and certification' :
                           'Inspection, gestion, désamiantage et certification'}
                        </p>
                      </div>
                    </div>
                    <Link href="/servicios/amianto" className="btn-primary group whitespace-nowrap">
                      {loc === 'es' ? 'Ver servicios' :
                       loc === 'ca' ? 'Veure serveis' :
                       loc === 'en' ? 'View services' :
                       'Voir les services'}
                      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <Link href="/servicios/amianto/inspeccion-identificacion" className="group flex items-center gap-2 px-3 py-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors">
                      <ArrowRight className="w-3.5 h-3.5 text-primary flex-shrink-0 group-hover:translate-x-0.5 transition-transform" />
                      <span className="text-sm text-white/90 group-hover:text-white transition-colors">
                        {loc === 'es' ? 'Identificación y Evaluación de Amianto' : loc === 'ca' ? 'Inspecció i Identificació' : loc === 'en' ? 'Inspection & Identification' : 'Inspection et Identification'}
                      </span>
                    </Link>
                    <Link href="/servicios/amianto/evaluacion-riesgos" className="group flex items-center gap-2 px-3 py-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors">
                      <ArrowRight className="w-3.5 h-3.5 text-primary flex-shrink-0 group-hover:translate-x-0.5 transition-transform" />
                      <span className="text-sm text-white/90 group-hover:text-white transition-colors">
                        {loc === 'es' ? 'Evaluación del Estado de Conservación' : loc === 'ca' ? 'Avaluació de Riscos' : loc === 'en' ? 'Risk Assessment' : 'Évaluation des Risques'}
                      </span>
                    </Link>
                    <Link href="/servicios/amianto/planes-gestion" className="group flex items-center gap-2 px-3 py-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors">
                      <ArrowRight className="w-3.5 h-3.5 text-primary flex-shrink-0 group-hover:translate-x-0.5 transition-transform" />
                      <span className="text-sm text-white/90 group-hover:text-white transition-colors">
                        {loc === 'es' ? 'Planes de Gestión del Amianto' : loc === 'ca' ? 'Plans de Gestió' : loc === 'en' ? 'Management Plans' : 'Plans de Gestion'}
                      </span>
                    </Link>
                    <Link href="/servicios/amianto/muestreo-ambiental" className="group flex items-center gap-2 px-3 py-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors">
                      <ArrowRight className="w-3.5 h-3.5 text-primary flex-shrink-0 group-hover:translate-x-0.5 transition-transform" />
                      <span className="text-sm text-white/90 group-hover:text-white transition-colors">
                        {loc === 'es' ? 'Muestreo Estático Ambiental de Amianto' : loc === 'ca' ? 'Mostreig Estàtic Ambiental d\'Amiant' : loc === 'en' ? 'Environmental Air Sampling for Asbestos' : 'Prélèvement Statique Environnemental d\'Amiante'}
                      </span>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Asbestos info notice — fibrocemento is not the only source */}
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-12 flex items-start gap-3">
                <Info className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                <p className="text-sm text-amber-800">
                  {loc === 'es'
                    ? <>Los datos anteriores reflejan solo las cubiertas de fibrocemento detectadas por teledetección. El amianto puede estar presente en muchos otros materiales y elementos constructivos, tanto en exteriores como en interiores. <Link href="/amianto-donde-se-encuentra-casa-trabajo" className="text-amber-900 underline font-medium hover:text-amber-700">Consulta dónde puede encontrarse amianto en tu edificio</Link>.</>
                    : loc === 'ca'
                    ? <>Les dades anteriors reflecteixen només les cobertes de fibrociment detectades per teledetecció. L&apos;amiant pot ser present en molts altres materials i elements constructius, tant en exteriors com en interiors. <Link href="/amianto-donde-se-encuentra-casa-trabajo" className="text-amber-900 underline font-medium hover:text-amber-700">Consulta on es pot trobar amiant al teu edifici</Link>.</>
                    : loc === 'en'
                    ? <>The data above reflects only fibre cement roofing detected by remote sensing. Asbestos may be present in many other building materials and elements, both outdoors and indoors. <Link href="/amianto-donde-se-encuentra-casa-trabajo" className="text-amber-900 underline font-medium hover:text-amber-700">Find out where asbestos can be found in your building</Link>.</>
                    : <>Les données ci-dessus ne reflètent que les toitures de fibrociment détectées par télédétection. L&apos;amiante peut être présent dans de nombreux autres matériaux et éléments de construction, tant à l&apos;extérieur qu&apos;à l&apos;intérieur. <Link href="/amianto-donde-se-encuentra-casa-trabajo" className="text-amber-900 underline font-medium hover:text-amber-700">Découvrez où l&apos;amiante peut se trouver dans votre bâtiment</Link>.</>}
                </p>
              </div>
            </>
          )}

          {/* FAQs */}
          {municipio.faqs[loc] && municipio.faqs[loc].length > 0 && (
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-secondary mb-6">
                {loc === 'es' ? 'Preguntas frecuentes' :
                 loc === 'ca' ? 'Preguntes frequents' :
                 loc === 'en' ? 'Frequently asked questions' :
                 'Questions fréquentes'}
              </h2>
              <FAQAccordion
                items={municipio.faqs[loc].map((faq) => ({
                  question: faq.q,
                  answer: faq.a,
                }))}
              />
            </div>
          )}

          {/* Nearby municipios */}
          {nearby.length > 0 && (
            <div>
              <h2 className="text-2xl font-bold text-secondary mb-6">
                {loc === 'es' ? `Otros municipios en ${municipio.comarca}` :
                 loc === 'ca' ? `Altres municipis a ${municipio.comarca}` :
                 loc === 'en' ? `Other municipalities in ${municipio.comarca}` :
                 `Autres municipalités à ${municipio.comarca}`}
              </h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {nearby.map((m) => {
                  const nearbyZonaColor = m.zonaRadon === 'alta' ? 'bg-red-100 text-red-700' :
                    m.zonaRadon === 'media' ? 'bg-yellow-100 text-yellow-700' : 'bg-green-100 text-green-700'
                  const nearbyZonaLabel = loc === 'es' ? (m.zonaRadon === 'alta' ? 'Alta' : m.zonaRadon === 'media' ? 'Media' : 'Baja') :
                    loc === 'ca' ? (m.zonaRadon === 'alta' ? 'Alta' : m.zonaRadon === 'media' ? 'Mitjana' : 'Baixa') :
                    loc === 'en' ? (m.zonaRadon === 'alta' ? 'High' : m.zonaRadon === 'media' ? 'Medium' : 'Low') :
                    (m.zonaRadon === 'alta' ? 'Élevée' : m.zonaRadon === 'media' ? 'Moyenne' : 'Faible')

                  return (
                    <Link
                      key={m.slug}
                      href={`/municipios/${m.slug}`}
                      className="group flex items-center justify-between p-3 rounded-lg border border-gray-100 hover:border-primary/30 hover:shadow-sm transition-all"
                    >
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
                        <span className="text-sm font-medium text-secondary group-hover:text-primary transition-colors">
                          {loc === 'ca' ? m.nameCa : m.name}
                        </span>
                      </div>
                      <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${nearbyZonaColor}`}>
                        {nearbyZonaLabel}
                      </span>
                    </Link>
                  )
                })}
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
