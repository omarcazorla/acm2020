import { setRequestLocale } from 'next-intl/server'
import { getTranslations } from 'next-intl/server'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import PageHero from '@/components/layout/PageHero'
import Breadcrumbs from '@/components/layout/Breadcrumbs'
import WhatsAppButton from '@/components/WhatsAppButton'
import About from '@/components/About'
import { Award, FileCheck, Shield, Users, Briefcase, Wind, FlaskConical, Droplets, ArrowRight, Quote } from 'lucide-react'
import { Link } from '@/i18n/navigation'
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
  const tServices = await getTranslations({ locale, namespace: 'services' })

  const hasStory = t.has('story')
  const hasTeam = t.has('team')
  const hasCerts = t.has('certifications')
  const hasVision = t.has('vision')

  const areas = hasTeam ? (t.raw('team.areas') as { name: string; description: string }[]) : []
  const certs = hasCerts ? (t.raw('certifications.items') as { name: string; description: string }[]) : []

  const storyParagraphs = hasStory
    ? (t('story.content') as string).split('\n\n')
    : []

  return (
    <>
      <Navbar darkHero />
      <PageHero title={t('title')} subtitle={t('subtitle')} />
      <Breadcrumbs items={[{ label: t('title') }]} />

      {/* Reused About component (features, values, mission) */}
      <About />

      {/* Story section */}
      {hasStory && (
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <div data-reveal="fade" className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
                {t('storyLabel')}
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-secondary">
                {t('story.title')}
              </h2>
            </div>

            <div data-reveal="fade" className="max-w-4xl mx-auto relative">
              {/* Decorative accent line */}
              <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-primary/40 via-primary/20 to-transparent hidden lg:block" />

              <div className="lg:pl-10 space-y-6">
                {storyParagraphs.map((p, i) => (
                  <p
                    key={i}
                    className={`text-gray-600 leading-relaxed ${i === 0 ? 'text-lg font-medium text-gray-700' : 'text-base'}`}
                  >
                    {p}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Team areas */}
      {areas.length > 0 && (
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div data-reveal="fade" className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
                {t('teamLabel')}
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-secondary mb-6">
                {t('team.title')}
              </h2>
              <p className="text-lg text-gray-600">
                {t('team.description')}
              </p>
            </div>

            <div
              data-stagger="fade"
              data-stagger-seq="0.08"
              className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            >
              {areas.map((area, i) => {
                const Icon = areaIcons[i % areaIcons.length]
                return (
                  <div
                    key={i}
                    className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:border-gray-200 card-hover relative group overflow-hidden"
                  >
                    {/* Top gradient line on hover */}
                    <div
                      className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent opacity-0 group-hover:opacity-100"
                      style={{ transition: 'opacity 0.5s var(--ease-cinematic)' }}
                    />
                    {/* Background glow */}
                    <div
                      className="absolute -top-24 -right-24 w-48 h-48 bg-primary/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100"
                      style={{ transition: 'opacity 0.7s var(--ease-cinematic)' }}
                    />

                    <div
                      className="w-14 h-14 bg-gradient-to-br from-primary/90 to-primary-600 rounded-2xl flex items-center justify-center mb-5 shadow-md shadow-primary/15 group-hover:shadow-lg group-hover:shadow-primary/25 relative z-10"
                      style={{ transition: 'box-shadow 0.5s var(--ease-cinematic)' }}
                    >
                      <Icon
                        strokeWidth={1.5}
                        className="w-7 h-7 text-white group-hover:scale-110 relative z-10"
                        style={{ transition: 'transform 0.5s var(--ease-cinematic)' }}
                      />
                    </div>
                    <div className="relative z-10">
                      <h3 className="text-lg font-bold text-secondary mb-2 tracking-tight">
                        {area.name}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {area.description}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>
      )}

      {/* Certifications */}
      {certs.length > 0 && (
        <section className="section-padding bg-secondary relative overflow-hidden noise-texture">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-2xl transform -translate-x-1/2 translate-y-1/2" />

          <div className="container-custom relative">
            <div data-reveal="fade" className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
                {t('certsLabel')}
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
                {t('certifications.title')}
              </h2>
            </div>

            <div
              data-stagger="zoom"
              data-stagger-seq="0.12"
              className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto stagger-perspective"
            >
              {certs.map((cert, i) => {
                const Icon = certIcons[i % certIcons.length]
                return (
                  <div
                    key={i}
                    className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center border border-white/10 hover:bg-white/15 hover:border-white/20 card-hover relative group"
                  >
                    <div
                      className="w-16 h-16 bg-gradient-to-br from-primary to-primary-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-primary/25 group-hover:shadow-xl group-hover:shadow-primary/35"
                      style={{ transition: 'box-shadow 0.5s var(--ease-cinematic)' }}
                    >
                      <Icon
                        strokeWidth={1.5}
                        className="w-8 h-8 text-white group-hover:scale-110"
                        style={{ transition: 'transform 0.5s var(--ease-cinematic)' }}
                      />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3 tracking-tight">
                      {cert.name}
                    </h3>
                    <p className="text-white/70 text-sm leading-relaxed">
                      {cert.description}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>
      )}

      {/* Vision */}
      {hasVision && (
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <div data-reveal="zoom" className="max-w-4xl mx-auto bg-gradient-to-br from-secondary to-secondary-700 rounded-3xl p-10 md:p-16 relative overflow-hidden noise-texture">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary/10 rounded-full blur-2xl transform -translate-x-1/2 translate-y-1/2" />

              <div className="relative text-center">
                <Quote className="w-10 h-10 text-primary/40 mx-auto mb-6" strokeWidth={1.5} />
                <h3 className="font-heading text-2xl md:text-3xl font-bold text-white mb-6">
                  {t('visionTitle')}
                </h3>
                <p className="text-lg md:text-xl text-white/90 leading-relaxed max-w-3xl mx-auto">
                  {t('vision')}
                </p>
                <div className="mt-10">
                  <Link href="/contacto" className="btn-primary group">
                    {tServices('whyCta')}
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      <Footer />
      <WhatsAppButton />
    </>
  )
}
