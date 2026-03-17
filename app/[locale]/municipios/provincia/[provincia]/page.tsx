import { setRequestLocale } from 'next-intl/server'
import { getTranslations } from 'next-intl/server'
import { notFound } from 'next/navigation'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import PageHero from '@/components/layout/PageHero'
import Breadcrumbs from '@/components/layout/Breadcrumbs'
import WhatsAppButton from '@/components/WhatsAppButton'
import { BreadcrumbJsonLd } from '@/components/JsonLd'
import { getProvinciaBySlug, getProvinciasSlugs } from '@/data/provincias'
import { getMunicipiosByProvinciaAndZona, getComarcasByProvincia } from '@/data/municipios'
import type { Locale } from '@/i18n/routing'
import { routing } from '@/i18n/routing'
import { getPathname } from '@/i18n/navigation'
import Link from 'next/link'
import { MapPin, ArrowRight, AlertTriangle, Info } from 'lucide-react'

const BASE_URL = 'https://acm2020.es'

type Props = {
  params: Promise<{ locale: string; provincia: string }>
}

export function generateStaticParams() {
  return getProvinciasSlugs().map((provincia) => ({ provincia }))
}

function getAlternates(provincia: string) {
  const languages: Record<string, string> = {}
  for (const locale of routing.locales) {
    const path = getPathname({
      locale,
      href: { pathname: '/municipios/provincia/[provincia]', params: { provincia } } as never,
    })
    languages[locale] = `${BASE_URL}${path}`
  }
  languages['x-default'] = languages[routing.defaultLocale]
  return { languages }
}

export async function generateMetadata({ params }: Props) {
  const { locale, provincia: provinciaSlug } = await params
  const provincia = getProvinciaBySlug(provinciaSlug)
  if (!provincia) return {}
  const loc = locale as Locale
  return {
    title: provincia.metaTitle[loc],
    description: provincia.metaDescription[loc],
    alternates: getAlternates(provinciaSlug),
  }
}

export default async function ProvinciaPage({ params }: Props) {
  const { locale, provincia: provinciaSlug } = await params
  setRequestLocale(locale)

  const provincia = getProvinciaBySlug(provinciaSlug)
  if (!provincia) notFound()

  const loc = locale as Locale
  const t = await getTranslations({ locale, namespace: 'pages.provinciaPage' })
  const tMunicipios = await getTranslations({ locale, namespace: 'pages.municipiosIndex' })

  const provinciaName = loc === 'ca' ? provincia.nameCa : provincia.name
  const zonaII = getMunicipiosByProvinciaAndZona(provincia.name, 'II')
  const zonaI = getMunicipiosByProvinciaAndZona(provincia.name, 'I')
  const comarcas = getComarcasByProvincia(provincia.name)

  // Group by comarca
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

  return (
    <>
      <Navbar />
      <BreadcrumbJsonLd
        items={[
          { name: loc === 'es' ? 'Inicio' : loc === 'ca' ? 'Inici' : loc === 'en' ? 'Home' : 'Accueil', url: `${BASE_URL}/` },
          { name: tMunicipios('title'), url: `${BASE_URL}/municipios` },
          { name: provinciaName, url: `${BASE_URL}/municipios/provincia/${provinciaSlug}` },
        ]}
      />
      <PageHero
        title={t('title', { provincia: provinciaName })}
        subtitle={`${zonaII.length + zonaI.length} ${loc === 'es' ? 'municipios de actuacion prioritaria' : loc === 'ca' ? 'municipis d\'actuacio prioritaria' : loc === 'en' ? 'priority action municipalities' : 'municipalites d\'action prioritaire'}`}
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

          {/* Zona II - Exposicion Alta */}
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

          {/* Zona I - Exposicion Media */}
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

          {/* CTA */}
          <div className="bg-secondary rounded-2xl p-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {loc === 'es' ? `Medicion de radon en ${provinciaName}` :
                   loc === 'ca' ? `Mesurament de rado a ${provinciaName}` :
                   loc === 'en' ? `Radon measurement in ${provinciaName}` :
                   `Mesure du radon a ${provinciaName}`}
                </h3>
                <p className="text-white/70">
                  {loc === 'es' ? 'Solicite presupuesto sin compromiso para la medicion de gas radon en su municipio.' :
                   loc === 'ca' ? 'Sol·liciti pressupost sense compromis per al mesurament de gas rado al seu municipi.' :
                   loc === 'en' ? 'Request a no-obligation quote for radon gas measurement in your municipality.' :
                   'Demandez un devis sans engagement pour la mesure du gaz radon dans votre municipalite.'}
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
