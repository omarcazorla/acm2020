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
import { ArrowRight, MapPin, Shield, AlertTriangle } from 'lucide-react'

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
    (municipio.zonaRadon === 'alta' ? 'Elevee' : municipio.zonaRadon === 'media' ? 'Moyenne' : 'Faible')

  const zonaColor = municipio.zonaRadon === 'alta' ? 'bg-red-100 text-red-700' :
    municipio.zonaRadon === 'media' ? 'bg-yellow-100 text-yellow-700' : 'bg-green-100 text-green-700'

  const name = loc === 'ca' ? municipio.nameCa : municipio.name

  // Get personalized content (ES only) or fallback to template
  const personalizedContent = loc === 'es' ? getMunicipioContent(municipio.slug) : undefined
  const description = personalizedContent || municipio.descripcion[loc]

  // Provincia slug for breadcrumbs
  const provinciaSlug = municipio.provincia.toLowerCase()
  const provincia = getProvinciaBySlug(provinciaSlug)
  const provinciaName = provincia ? (loc === 'ca' ? provincia.nameCa : provincia.name) : municipio.provincia

  // Nearby municipios (same comarca, exclude self)
  const nearby = getMunicipiosByComarca(municipio.comarca)
    .filter((m) => m.slug !== municipio.slug)
    .slice(0, 5)

  return (
    <>
      <Navbar />
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
          {/* Zone badges */}
          <div className="flex flex-wrap items-center gap-3 mb-8">
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-primary" />
              <span className={`text-sm px-3 py-1 rounded-full font-semibold ${zonaColor}`}>
                {loc === 'es' ? 'Zona de exposicion' : loc === 'ca' ? 'Zona d\'exposicio' : loc === 'en' ? 'Exposure zone' : 'Zone d\'exposition'}: {zonaLabel}
              </span>
            </div>
            {municipio.zonaActuacion && (
              <span className={`text-sm px-3 py-1 rounded-full font-semibold ${municipio.zonaActuacion === 'II' ? 'bg-red-100 text-red-700' : 'bg-yellow-100 text-yellow-700'}`}>
                {loc === 'es' ? 'Zona de actuacion prioritaria' : loc === 'ca' ? 'Zona d\'actuacio prioritaria' : loc === 'en' ? 'Priority action zone' : 'Zone d\'action prioritaire'}: {tProv(municipio.zonaActuacion === 'II' ? 'zonaII' : 'zonaI')}
              </span>
            )}
          </div>

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
                {paragraph}
              </p>
            ))}
          </div>

          {/* Services CTA */}
          <div className="bg-secondary rounded-2xl p-8 mb-12">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <Shield className="w-10 h-10 text-primary" />
                <div>
                  <h3 className="text-xl font-bold text-white">
                    {loc === 'es' ? `Servicios de radon en ${name}` :
                     loc === 'ca' ? `Serveis de rado a ${name}` :
                     loc === 'en' ? `Radon services in ${name}` :
                     `Services radon a ${name}`}
                  </h3>
                  <p className="text-white/70 text-sm">
                    {loc === 'es' ? 'Medicion, diagnostico y soluciones profesionales' :
                     loc === 'ca' ? 'Mesurament, diagnostic i solucions professionals' :
                     loc === 'en' ? 'Measurement, diagnosis, and professional solutions' :
                     'Mesure, diagnostic et solutions professionnelles'}
                  </p>
                </div>
              </div>
              <Link href="/contacto" className="btn-primary group whitespace-nowrap">
                {loc === 'es' ? 'Solicitar presupuesto' :
                 loc === 'ca' ? 'Sol·licitar pressupost' :
                 loc === 'en' ? 'Request a quote' :
                 'Demander un devis'}
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* FAQs */}
          {municipio.faqs[loc] && municipio.faqs[loc].length > 0 && (
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-secondary mb-6">
                {loc === 'es' ? 'Preguntas frecuentes' :
                 loc === 'ca' ? 'Preguntes frequents' :
                 loc === 'en' ? 'Frequently asked questions' :
                 'Questions frequentes'}
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
                 `Autres municipalites a ${municipio.comarca}`}
              </h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {nearby.map((m) => {
                  const nearbyZonaColor = m.zonaRadon === 'alta' ? 'bg-red-100 text-red-700' :
                    m.zonaRadon === 'media' ? 'bg-yellow-100 text-yellow-700' : 'bg-green-100 text-green-700'
                  const nearbyZonaLabel = loc === 'es' ? (m.zonaRadon === 'alta' ? 'Alta' : m.zonaRadon === 'media' ? 'Media' : 'Baja') :
                    loc === 'ca' ? (m.zonaRadon === 'alta' ? 'Alta' : m.zonaRadon === 'media' ? 'Mitjana' : 'Baixa') :
                    loc === 'en' ? (m.zonaRadon === 'alta' ? 'High' : m.zonaRadon === 'media' ? 'Medium' : 'Low') :
                    (m.zonaRadon === 'alta' ? 'Elevee' : m.zonaRadon === 'media' ? 'Moyenne' : 'Faible')

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
