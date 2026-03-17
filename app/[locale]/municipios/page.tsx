import { setRequestLocale } from 'next-intl/server'
import { getTranslations } from 'next-intl/server'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import PageHero from '@/components/layout/PageHero'
import Breadcrumbs from '@/components/layout/Breadcrumbs'
import WhatsAppButton from '@/components/WhatsAppButton'
import MunicipiosIndex from '@/components/MunicipiosIndex'
import { municipios } from '@/data/municipios'
import { provincias } from '@/data/provincias'
import { routing } from '@/i18n/routing'
import { getPathname } from '@/i18n/navigation'
import type { Locale } from '@/i18n/routing'
import Link from 'next/link'
import { MapPin, ArrowRight } from 'lucide-react'

const BASE_URL = 'https://acm2020.es'

type Props = {
  params: Promise<{ locale: string }>
}

function getAlternates() {
  const languages: Record<string, string> = {}
  for (const locale of routing.locales) {
    const path = getPathname({ locale, href: '/municipios' as never })
    languages[locale] = `${BASE_URL}${path}`
  }
  languages['x-default'] = languages[routing.defaultLocale]
  return { languages }
}

export async function generateMetadata({ params }: Props) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'pages.municipiosIndex' })
  return {
    title: `${t('title')} | ACM-2020`,
    description: t('subtitle'),
    alternates: getAlternates(),
  }
}

export default async function MunicipiosPage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale)
  const t = await getTranslations({ locale, namespace: 'pages.municipiosIndex' })
  const loc = locale as Locale

  const stats = {
    total: municipios.length,
    alta: municipios.filter((m) => m.zonaRadon === 'alta').length,
    media: municipios.filter((m) => m.zonaRadon === 'media').length,
    baja: municipios.filter((m) => m.zonaRadon === 'baja').length,
  }

  // Per-provincia stats
  const provinciaStats = provincias.map((p) => {
    const provMunicipios = municipios.filter((m) => m.provincia === p.name)
    return {
      ...p,
      total: provMunicipios.length,
      zonaII: provMunicipios.filter((m) => m.zonaActuacion === 'II').length,
      zonaI: provMunicipios.filter((m) => m.zonaActuacion === 'I').length,
    }
  })

  return (
    <>
      <Navbar />
      <PageHero title={t('title')} subtitle={t('subtitle')} />
      <Breadcrumbs items={[{ label: t('title') }]} />
      <main className="section-padding bg-white">
        <div className="container-custom">
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            <div className="bg-gray-50 rounded-xl p-4 text-center">
              <div className="text-2xl font-bold text-secondary">{stats.total}</div>
              <div className="text-sm text-gray-600">
                {loc === 'es' ? 'Municipios' : loc === 'ca' ? 'Municipis' : loc === 'fr' ? 'Municipalites' : 'Municipalities'}
              </div>
            </div>
            <div className="bg-red-50 rounded-xl p-4 text-center">
              <div className="text-2xl font-bold text-red-600">{stats.alta}</div>
              <div className="text-sm text-gray-600">
                {loc === 'es' ? 'Zona II (alta)' : loc === 'ca' ? 'Zona II (alta)' : loc === 'fr' ? 'Zone II (elevee)' : 'Zone II (high)'}
              </div>
            </div>
            <div className="bg-yellow-50 rounded-xl p-4 text-center">
              <div className="text-2xl font-bold text-yellow-600">{stats.media}</div>
              <div className="text-sm text-gray-600">
                {loc === 'es' ? 'Zona I (media)' : loc === 'ca' ? 'Zona I (mitjana)' : loc === 'fr' ? 'Zone I (moyenne)' : 'Zone I (medium)'}
              </div>
            </div>
            <div className="bg-green-50 rounded-xl p-4 text-center">
              <div className="text-2xl font-bold text-green-600">{stats.baja}</div>
              <div className="text-sm text-gray-600">
                {loc === 'es' ? 'Zona baja' : loc === 'ca' ? 'Zona baixa' : loc === 'fr' ? 'Zone faible' : 'Low zone'}
              </div>
            </div>
          </div>

          {/* Intro paragraph */}
          <div className="prose prose-lg max-w-none mb-8">
            <p className="text-lg text-gray-600 leading-relaxed">
              {loc === 'es' ? 'Catalunya cuenta con mas de 200 municipios clasificados como zonas de actuacion prioritaria frente al gas radon, segun el Real Decreto 1029/2022. Estos municipios se distribuyen en cuatro provincias, con especial concentracion en las comarcas del interior y zonas pirenaicas. La clasificacion distingue entre Zona II (exposicion alta, medicion obligatoria en centros de trabajo) y Zona I (exposicion media, medicion recomendada).' :
               loc === 'ca' ? 'Catalunya compta amb mes de 200 municipis classificats com a zones d\'actuacio prioritaria davant el gas rado, segons el Reial Decret 1029/2022. Aquests municipis es distribueixen en quatre provincies, amb especial concentracio a les comarques de l\'interior i zones pirinenques. La classificacio distingeix entre Zona II (exposicio alta, mesurament obligatori en centres de treball) i Zona I (exposicio mitjana, mesurament recomanat).' :
               loc === 'en' ? 'Catalonia has over 200 municipalities classified as priority action zones for radon gas, according to Royal Decree 1029/2022. These municipalities are distributed across four provinces, with special concentration in interior regions and Pyrenean areas. The classification distinguishes between Zone II (high exposure, mandatory measurement in workplaces) and Zone I (medium exposure, recommended measurement).' :
               'La Catalogne compte plus de 200 municipalites classees comme zones d\'action prioritaire pour le gaz radon, selon le Decret Royal 1029/2022. Ces municipalites sont reparties dans quatre provinces, avec une concentration particuliere dans les regions interieures et pyreneennes. La classification distingue entre Zone II (exposition elevee, mesure obligatoire sur les lieux de travail) et Zone I (exposition moyenne, mesure recommandee).'}
            </p>
          </div>

          {/* Provincia cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            {provinciaStats.map((p) => (
              <Link
                key={p.slug}
                href={`/municipios/provincia/${p.slug}`}
                className="group p-6 rounded-xl border border-gray-100 hover:border-primary/30 hover:shadow-lg transition-all"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold text-secondary group-hover:text-primary transition-colors">
                    {loc === 'ca' ? p.nameCa : p.name}
                  </h3>
                  <ArrowRight className="w-5 h-5 text-gray-300 group-hover:text-primary group-hover:translate-x-1 transition-all" />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">{loc === 'es' ? 'Municipios' : loc === 'ca' ? 'Municipis' : 'Municipalities'}</span>
                    <span className="font-semibold text-secondary">{p.total}</span>
                  </div>
                  {p.zonaII > 0 && (
                    <div className="flex justify-between text-sm">
                      <span className="text-red-600">Zona II</span>
                      <span className="font-semibold text-red-600">{p.zonaII}</span>
                    </div>
                  )}
                  {p.zonaI > 0 && (
                    <div className="flex justify-between text-sm">
                      <span className="text-yellow-600">Zona I</span>
                      <span className="font-semibold text-yellow-600">{p.zonaI}</span>
                    </div>
                  )}
                </div>
              </Link>
            ))}
          </div>

          <MunicipiosIndex
            municipios={municipios.map((m) => ({
              slug: m.slug,
              name: locale === 'ca' ? m.nameCa : m.name,
              provincia: m.provincia,
              comarca: m.comarca,
              zonaRadon: m.zonaRadon,
            }))}
            locale={locale}
          />
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
