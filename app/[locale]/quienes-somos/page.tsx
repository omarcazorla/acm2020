import { setRequestLocale } from 'next-intl/server'
import { getTranslations } from 'next-intl/server'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import PageHero from '@/components/layout/PageHero'
import Breadcrumbs from '@/components/layout/Breadcrumbs'
import WhatsAppButton from '@/components/WhatsAppButton'
import About from '@/components/About'
import { Award, FileCheck, Shield, Users, Briefcase, Wind, FlaskConical, Droplets, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { getAlternates } from '@/lib/seo'
import type { Locale } from '@/i18n/routing'

type Props = {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'pages.aboutPage' })
  return {
    title: `${t('title')} | ACM-2020`,
    alternates: getAlternates(locale as Locale, '/quienes-somos'),
  }
}

const areaIcons = [Briefcase, FileCheck, Users, Shield, Wind, FlaskConical, Droplets]
const certIcons = [Award, FileCheck, Shield]

export default async function QuienesSomosPage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale)
  const t = await getTranslations({ locale, namespace: 'pages.aboutPage' })
  const tAbout = await getTranslations({ locale, namespace: 'about' })
  const tServices = await getTranslations({ locale, namespace: 'services' })

  const hasStory = t.has('story')
  const hasTeam = t.has('team')
  const hasCerts = t.has('certifications')
  const hasVision = t.has('vision')

  const areas = hasTeam ? (t.raw('team.areas') as { name: string; description: string }[]) : []
  const certs = hasCerts ? (t.raw('certifications.items') as { name: string; description: string }[]) : []

  return (
    <>
      <Navbar />
      <PageHero title={t('title')} subtitle={t('subtitle')} />
      <Breadcrumbs items={[{ label: t('title') }]} />

      {/* Existing About component (homepage version) */}
      <About />

      {/* Extended story section */}
      {hasStory && (
        <section className="section-padding bg-gray-50">
          <div className="container-custom max-w-4xl">
            <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-8">
              {t('story.title')}
            </h2>
            <div className="text-gray-600 leading-relaxed space-y-4 text-lg">
              {(t('story.content') as string).split('\n\n').map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Team areas */}
      {areas.length > 0 && (
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-4">
                {t('team.title')}
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                {t('team.description')}
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {areas.map((area, i) => {
                const Icon = areaIcons[i % areaIcons.length]
                return (
                  <div
                    key={i}
                    className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 card-hover"
                  >
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-bold text-secondary mb-2">{area.name}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{area.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>
      )}

      {/* Certifications */}
      {certs.length > 0 && (
        <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="container-custom max-w-4xl">
            <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-8 text-center">
              {t('certifications.title')}
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {certs.map((cert, i) => {
                const Icon = certIcons[i % certIcons.length]
                return (
                  <div
                    key={i}
                    className="bg-white rounded-2xl p-6 text-center shadow-sm border border-gray-100 card-hover"
                  >
                    <div className="w-14 h-14 bg-gradient-to-br from-primary to-primary-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-primary/25">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-secondary mb-2">{cert.name}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{cert.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>
      )}

      {/* Vision */}
      {hasVision && (
        <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-secondary to-secondary-700">
          <div className="container-custom max-w-3xl text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
              Nuestra Visión
            </h2>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed">
              &ldquo;{t('vision')}&rdquo;
            </p>
            <div className="mt-8">
              <Link href="/contacto" className="btn-primary group">
                {tServices('whyCta')}
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </section>
      )}

      <Footer />
      <WhatsAppButton />
    </>
  )
}
