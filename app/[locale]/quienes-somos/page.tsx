import { setRequestLocale } from 'next-intl/server'
import { getTranslations } from 'next-intl/server'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Breadcrumbs from '@/components/layout/Breadcrumbs'
import WhatsAppButton from '@/components/WhatsAppButton'
import About from '@/components/About'
import CountUp from '@/components/about/CountUp'
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
  const hasStats = t.has('stats')
  const hasTeam = t.has('team')
  const hasCerts = t.has('certifications')
  const hasVision = t.has('vision')

  const areas = hasTeam ? (t.raw('team.areas') as { name: string; description: string }[]) : []
  const certs = hasCerts ? (t.raw('certifications.items') as { name: string; description: string }[]) : []
  const storyParagraphs = hasStory ? (t('story.content') as string).split('\n\n') : []

  return (
    <>
      <Navbar darkHero />

      {/* ─── Immersive Hero ─── */}
      <section className="relative pt-36 pb-24 md:pt-44 md:pb-32 bg-gradient-to-br from-secondary via-secondary to-secondary-700 overflow-hidden noise-texture">
        {/* Layered decorative blurs for depth */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px] transform translate-x-1/3 -translate-y-1/3" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[80px] transform -translate-x-1/3 translate-y-1/3" />
          <div className="absolute top-1/2 left-1/2 w-[300px] h-[300px] bg-white/[0.03] rounded-full blur-[60px] transform -translate-x-1/2 -translate-y-1/2" />
        </div>

        <div className="relative container-custom text-center" data-stagger="fade" data-stagger-seq="0.12">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-[0.2em] mb-6">
            ACM-2020
          </span>
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-[1.1]">
            {t('title')}
          </h1>
          <p className="text-xl sm:text-2xl text-white/80 max-w-3xl mx-auto mb-8 font-light leading-relaxed">
            {t('subtitle')}
          </p>
          <p className="text-base text-white/50 max-w-2xl mx-auto leading-relaxed">
            {t('heroDescription')}
          </p>
        </div>
      </section>

      <Breadcrumbs items={[{ label: t('title') }]} />

      {/* ─── About (features, values, mission) ─── */}
      <About />

      {/* ─── Stats Counter Band ─── */}
      {hasStats && (
        <section className="py-16 md:py-20 bg-secondary relative overflow-hidden noise-texture">
          <div className="absolute inset-0">
            <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-[80px]" />
            <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-primary/5 rounded-full blur-[60px]" />
          </div>
          <div className="container-custom relative">
            <div
              data-stagger="zoom"
              data-stagger-seq="0.15"
              className="grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-16 max-w-4xl mx-auto stagger-perspective"
            >
              {/* Dividers between items on desktop */}
              <div className="text-center relative">
                <div className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-3 tracking-tight font-heading">
                  <CountUp end={25} suffix="+" />
                </div>
                <div className="text-white/50 text-sm uppercase tracking-wider font-medium">
                  {t('stats.yearsLabel')}
                </div>
              </div>
              <div className="text-center relative sm:before:absolute sm:before:left-0 sm:before:top-1/2 sm:before:-translate-y-1/2 sm:before:w-px sm:before:h-16 sm:before:bg-white/10 sm:after:absolute sm:after:right-0 sm:after:top-1/2 sm:after:-translate-y-1/2 sm:after:w-px sm:after:h-16 sm:after:bg-white/10">
                <div className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-3 tracking-tight font-heading">
                  <CountUp end={7} />
                </div>
                <div className="text-white/50 text-sm uppercase tracking-wider font-medium">
                  {t('stats.areasLabel')}
                </div>
              </div>
              <div className="text-center">
                <div className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-3 tracking-tight font-heading">
                  <CountUp end={3} />
                </div>
                <div className="text-white/50 text-sm uppercase tracking-wider font-medium">
                  {t('stats.certsLabel')}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ─── Story — Editorial Layout ─── */}
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

            <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 max-w-6xl mx-auto items-start">
              {/* Pull quote — sticky on desktop scroll */}
              <div data-reveal="fade" className="lg:col-span-5">
                <div className="lg:sticky lg:top-32">
                  <Quote className="w-12 h-12 text-primary/25 mb-6" strokeWidth={1.5} />
                  <blockquote className="font-heading text-2xl md:text-3xl font-bold text-secondary leading-snug">
                    {t('story.pullQuote')}
                  </blockquote>
                  <div className="mt-8 w-16 h-1 bg-gradient-to-r from-primary to-primary-600 rounded-full" />
                </div>
              </div>

              {/* Story body */}
              <div data-reveal="fade" className="lg:col-span-7 space-y-6">
                {storyParagraphs.map((p, i) => (
                  <p
                    key={i}
                    className={`leading-relaxed ${
                      i === 0
                        ? 'text-lg text-gray-700 font-medium'
                        : 'text-gray-600'
                    }`}
                  >
                    {p}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ─── Team Areas ─── */}
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
                    className="bg-white rounded-2xl p-8 border border-gray-100 hover:border-gray-200 card-hover relative group overflow-hidden"
                    style={{
                      boxShadow: '0 1px 2px rgba(0,0,0,0.02), 0 4px 8px rgba(0,0,0,0.02), 0 12px 24px rgba(0,0,0,0.03)',
                    }}
                  >
                    {/* Top gradient accent — reveals on hover */}
                    <div
                      className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100"
                      style={{ transition: 'opacity 0.5s var(--ease-cinematic)' }}
                    />
                    {/* Ambient glow */}
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

      {/* ─── Certifications ─── */}
      {certs.length > 0 && (
        <section className="section-padding bg-secondary relative overflow-hidden noise-texture">
          <div className="absolute inset-0">
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[100px] transform translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-[80px] transform -translate-x-1/2 translate-y-1/2" />
          </div>

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
                    className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center border border-white/10 hover:bg-white/[0.15] hover:border-white/20 card-hover relative group"
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

      {/* ─── Vision — Dramatic Closing ─── */}
      {hasVision && (
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <div data-reveal="zoom" className="max-w-4xl mx-auto bg-gradient-to-br from-secondary to-secondary-700 rounded-3xl p-10 md:p-16 relative overflow-hidden noise-texture">
              <div className="absolute inset-0">
                <div className="absolute top-0 right-0 w-72 h-72 bg-primary/20 rounded-full blur-[80px] transform translate-x-1/3 -translate-y-1/3" />
                <div className="absolute bottom-0 left-0 w-56 h-56 bg-primary/10 rounded-full blur-[60px] transform -translate-x-1/3 translate-y-1/3" />
              </div>

              <div className="relative text-center">
                <Quote className="w-12 h-12 text-primary/30 mx-auto mb-8" strokeWidth={1.5} />
                <h3 className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6">
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
