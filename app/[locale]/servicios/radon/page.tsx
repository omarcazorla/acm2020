import { setRequestLocale } from 'next-intl/server'
import { getTranslations } from 'next-intl/server'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import PageHero from '@/components/layout/PageHero'
import Breadcrumbs from '@/components/layout/Breadcrumbs'
import WhatsAppButton from '@/components/WhatsAppButton'
import Link from 'next/link'
import { ArrowRight, AlertTriangle, Home, Thermometer, MapPin, Ruler, ShieldCheck, Phone } from 'lucide-react'
import { radonServices } from '@/data/services'
import { getAlternates } from '@/lib/seo'
import type { Locale } from '@/i18n/routing'

type Props = {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'pages.radonIndex' })
  return {
    title: `${t('title')} | ACM-2020`,
    description: t('metaDescription'),
    alternates: getAlternates(locale as Locale, '/servicios/radon'),
  }
}

export default async function RadonPage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale)
  const t = await getTranslations({ locale, namespace: 'pages.radonIndex' })
  const tServices = await getTranslations({ locale, namespace: 'services' })
  const tCommon = await getTranslations({ locale, namespace: 'common' })

  const hasContent = t.has('intro')
  const hasSections = t.has('sections')
  const sections = hasSections ? (t.raw('sections') as { title: string; content: string; icon?: string }[]) : []

  const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
    alert: AlertTriangle,
    home: Home,
    thermometer: Thermometer,
    map: MapPin,
    ruler: Ruler,
    shield: ShieldCheck,
  }

  return (
    <>
      <Navbar />
      <PageHero title={t('title')} subtitle={t('subtitle')} />
      <Breadcrumbs
        items={[
          { label: tCommon('services'), href: '/servicios' },
          { label: t('title') },
        ]}
      />

      <main className="bg-white">
        {/* Intro */}
        {hasContent && (
          <section className="section-padding border-b border-gray-100">
            <div className="container-custom max-w-4xl">
              <div className="text-lg md:text-xl text-gray-600 leading-relaxed space-y-4">
                {(t('intro') as string).split('\n\n').map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Key stat banner */}
        {hasContent && (
          <section className="py-12 px-4 sm:px-6 lg:px-8 bg-secondary">
            <div className="container-custom">
              <div className="grid sm:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-1">230.000</div>
                  <div className="text-white/70 text-sm">{t('statDeaths')}</div>
                </div>
                <div>
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-1">300 Bq/m³</div>
                  <div className="text-white/70 text-sm">{t('statReference')}</div>
                </div>
                <div>
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-1">2-3</div>
                  <div className="text-white/70 text-sm">{t('statMonths')}</div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Content sections */}
        {sections.length > 0 && (
          <section className="section-padding">
            <div className="container-custom max-w-4xl">
              <div className="space-y-12">
                {sections.map((section, i) => {
                  const IconComponent = section.icon ? iconMap[section.icon] : null
                  return (
                    <div key={i}>
                      <div className="flex items-start gap-4">
                        {IconComponent && (
                          <div className="hidden sm:flex w-10 h-10 rounded-xl bg-primary/10 items-center justify-center flex-shrink-0 mt-1">
                            <IconComponent className="w-5 h-5 text-primary" />
                          </div>
                        )}
                        <div className="flex-1">
                          <h2 className="text-xl md:text-2xl font-bold text-secondary mb-4">
                            {section.title}
                          </h2>
                          <div className="text-gray-600 leading-relaxed space-y-3">
                            {section.content.split('\n\n').map((p, j) => (
                              <p key={j}>{p}</p>
                            ))}
                          </div>
                        </div>
                      </div>
                      {i < sections.length - 1 && (
                        <div className="mt-8 border-b border-gray-100" />
                      )}
                    </div>
                  )
                })}
              </div>
            </div>
          </section>
        )}

        {/* Services grid */}
        <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="container-custom">
            <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-3 text-center">
              {tServices('radonTitle')}
            </h2>
            <p className="text-gray-600 text-center mb-10 max-w-2xl mx-auto">
              {tServices('radonSubtitle')}
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {radonServices.map((service) => (
                <Link
                  key={service.slug}
                  href={`/servicios/radon/${service.slug}`}
                  className="group bg-white rounded-2xl p-6 shadow-sm border border-gray-100 card-hover"
                >
                  <h3 className="text-lg font-semibold text-secondary mb-2 group-hover:text-primary transition-colors">
                    {tServices(`radon.${service.translationKey}.title`)}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {tServices(`radon.${service.translationKey}.description`)}
                  </p>
                  <span className="inline-flex items-center text-primary text-sm font-semibold group-hover:translate-x-1 transition-transform">
                    {tCommon('learnMore')}
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-secondary to-secondary-700">
          <div className="container-custom max-w-3xl text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              {t('ctaTitle')}
            </h2>
            <p className="text-white/80 mb-8 text-lg">
              {t('ctaDescription')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contacto" className="btn-primary group">
                {tServices('whyCta')}
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a href="tel:667623844" className="btn-outline group">
                <Phone className="w-5 h-5 mr-2" />
                667 623 844
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </>
  )
}
