import { setRequestLocale } from 'next-intl/server'
import { getTranslations } from 'next-intl/server'
import { notFound } from 'next/navigation'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import PageHero from '@/components/layout/PageHero'
import Breadcrumbs from '@/components/layout/Breadcrumbs'
import WhatsAppButton from '@/components/WhatsAppButton'
import { BreadcrumbJsonLd } from '@/components/JsonLd'
import { getProvinciaBySlug } from '@/data/provincias'
import { getMunicipiosByProvinciaAndZona } from '@/data/municipios'
import type { Locale } from '@/i18n/routing'
import Link from 'next/link'
import { MapPin, ArrowRight, AlertTriangle, Info } from 'lucide-react'
import MunicipiosMapWrapper from '@/components/MunicipiosMapWrapper'

const BASE_URL = 'https://acm2020.es'

type Props = {
  locale: string
  provinciaSlug: string
}

export function getProvinciaAlternates(provinciaSlug: string) {
  return {
    languages: {
      es: `${BASE_URL}/municipios/${provinciaSlug}`,
      ca: `${BASE_URL}/ca/municipis/${provinciaSlug}`,
      en: `${BASE_URL}/en/municipalities/${provinciaSlug}`,
      fr: `${BASE_URL}/fr/municipalites/${provinciaSlug}`,
      'x-default': `${BASE_URL}/municipios/${provinciaSlug}`,
    },
  }
}

export async function getProvinciaMetadata(locale: string, provinciaSlug: string) {
  const provincia = getProvinciaBySlug(provinciaSlug)
  if (!provincia) return {}
  const loc = locale as Locale
  return {
    title: provincia.metaTitle[loc],
    description: provincia.metaDescription[loc],
    alternates: getProvinciaAlternates(provinciaSlug),
  }
}

export default async function ProvinciaPageServer({ locale, provinciaSlug }: Props) {
  setRequestLocale(locale)

  const provincia = getProvinciaBySlug(provinciaSlug)
  if (!provincia) notFound()

  const loc = locale as Locale
  const t = await getTranslations({ locale, namespace: 'pages.provinciaPage' })
  const tMunicipios = await getTranslations({ locale, namespace: 'pages.municipiosIndex' })

  const provinciaName = loc === 'ca' ? provincia.nameCa : provincia.name
  const zonaII = getMunicipiosByProvinciaAndZona(provincia.name, 'II')
  const zonaI = getMunicipiosByProvinciaAndZona(provincia.name, 'I')
  const allProvMunicipios = [...zonaII, ...zonaI]

  function groupByComarca(municipios: typeof zonaII) {
    const grouped: Record<string, typeof zonaII> = {}
    for (const m of municipios) {
      if (!grouped[m.comarca]) grouped[m.comarca] = []
      grouped[m.comarca].push(m)
    }
    return Object.entries(grouped).sort(([a], [b]) => a.localeCompare(b))
  }

  const zonaIIByComarca = groupByComarca(zonaII)
  const zonaIByComarca = groupByComarca(zonaI)

  const breadcrumbHome = loc === 'es' ? 'Inicio' : loc === 'ca' ? 'Inici' : loc === 'en' ? 'Home' : 'Accueil'

  return (
    <>
      <Navbar darkHero />
      <BreadcrumbJsonLd
        items={[
          { name: breadcrumbHome, url: `${BASE_URL}/` },
          { name: tMunicipios('title'), url: `${BASE_URL}/municipios` },
          { name: provinciaName, url: `${BASE_URL}/municipios/${provinciaSlug}` },
        ]}
      />
      <PageHero
        title={t('title', { provincia: provinciaName })}
        subtitle={`${zonaII.length + zonaI.length} ${loc === 'es' ? 'municipios de actuación prioritaria' : loc === 'ca' ? "municipis d'actuació prioritària" : loc === 'en' ? 'priority action municipalities' : "municipalités d'action prioritaire"}`}
      />
      <Breadcrumbs
        items={[
          { label: tMunicipios('title'), href: '/municipios' },
          { label: provinciaName },
        ]}
      />
      <main className="section-padding bg-white">
        <div className="container-custom max-w-5xl">
          {/* Intro */}
          <div className="prose prose-lg max-w-none mb-12">
            <p className="text-lg text-gray-600 leading-relaxed">
              {provincia.intro[loc]}
            </p>
          </div>

          {/* Zona explanation banner */}
          <div className="grid md:grid-cols-2 gap-4 mb-12">
            <div className="bg-red-50 border border-red-200 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-2">
                <AlertTriangle className="w-5 h-5 text-red-600" />
                <h3 className="font-bold text-red-800">{t('zonaII')}</h3>
              </div>
              <p className="text-sm text-red-700">{t('zonaIIDesc')}</p>
            </div>
            <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-2">
                <Info className="w-5 h-5 text-yellow-600" />
                <h3 className="font-bold text-yellow-800">{t('zonaI')}</h3>
              </div>
              <p className="text-sm text-yellow-700">{t('zonaIDesc')}</p>
            </div>
          </div>

          {/* Zona II */}
          {zonaIIByComarca.length > 0 && (
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-secondary mb-6 flex items-center gap-3">
                <span className="w-3 h-3 rounded-full bg-red-500" />
                {t('zonaII')}
              </h2>
              <div className="space-y-6">
                {zonaIIByComarca.map(([comarca, municipios]) => (
                  <div key={comarca}>
                    <h3 className="text-lg font-semibold text-gray-700 mb-3">{comarca}</h3>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                      {municipios.map((m) => (
                        <Link
                          key={m.slug}
                          href={`/municipios/${m.slug}`}
                          className="group flex items-center gap-2 p-3 rounded-lg border border-red-100 hover:border-red-300 hover:shadow-sm transition-all bg-white"
                        >
                          <MapPin className="w-4 h-4 text-red-500 flex-shrink-0" />
                          <span className="text-sm font-medium text-secondary group-hover:text-primary transition-colors">
                            {loc === 'ca' ? m.nameCa : m.name}
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Zona I */}
          {zonaIByComarca.length > 0 && (
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-secondary mb-6 flex items-center gap-3">
                <span className="w-3 h-3 rounded-full bg-yellow-500" />
                {t('zonaI')}
              </h2>
              <div className="space-y-6">
                {zonaIByComarca.map(([comarca, municipios]) => (
                  <div key={comarca}>
                    <h3 className="text-lg font-semibold text-gray-700 mb-3">{comarca}</h3>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                      {municipios.map((m) => (
                        <Link
                          key={m.slug}
                          href={`/municipios/${m.slug}`}
                          className="group flex items-center gap-2 p-3 rounded-lg border border-yellow-100 hover:border-yellow-300 hover:shadow-sm transition-all bg-white"
                        >
                          <MapPin className="w-4 h-4 text-yellow-500 flex-shrink-0" />
                          <span className="text-sm font-medium text-secondary group-hover:text-primary transition-colors">
                            {loc === 'ca' ? m.nameCa : m.name}
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Map */}
          {allProvMunicipios.length > 0 && (
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-secondary mb-6">
                {loc === 'es' ? `Mapa de municipios — ${provinciaName}` :
                 loc === 'ca' ? `Mapa de municipis — ${provinciaName}` :
                 loc === 'en' ? `Municipality map — ${provinciaName}` :
                 `Carte des municipalités — ${provinciaName}`}
              </h2>
              <div className="rounded-2xl overflow-hidden border border-gray-100 shadow-sm">
                <MunicipiosMapWrapper
                  municipios={allProvMunicipios.map((m) => ({
                    slug: m.slug,
                    name: loc === 'ca' ? m.nameCa : m.name,
                    provincia: m.provincia,
                    comarca: m.comarca,
                    zonaRadon: m.zonaRadon,
                    zonaActuacion: m.zonaActuacion,
                  }))}
                  locale={loc}
                  height="460px"
                />
              </div>
            </div>
          )}

          {/* CTA */}
          <div className="bg-secondary rounded-2xl p-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {loc === 'es' ? `Medición de radón en ${provinciaName}` :
                   loc === 'ca' ? `Mesurament de radó a ${provinciaName}` :
                   loc === 'en' ? `Radon measurement in ${provinciaName}` :
                   `Mesure du radon à ${provinciaName}`}
                </h3>
                <p className="text-white/70">
                  {loc === 'es' ? 'Solicite presupuesto sin compromiso para la medición de gas radón en su municipio.' :
                   loc === 'ca' ? 'Sol·liciti pressupost sense compromís per al mesurament de gas radó al seu municipi.' :
                   loc === 'en' ? 'Request a no-obligation quote for radon gas measurement in your municipality.' :
                   'Demandez un devis sans engagement pour la mesure du gaz radon dans votre municipalité.'}
                </p>
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
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
