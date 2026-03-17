import { setRequestLocale } from 'next-intl/server'
import { getTranslations } from 'next-intl/server'
import { notFound } from 'next/navigation'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import PageHero from '@/components/layout/PageHero'
import Breadcrumbs from '@/components/layout/Breadcrumbs'
import WhatsAppButton from '@/components/WhatsAppButton'
import { radonServices } from '@/data/services'
import { ArrowRight, CheckCircle, Scale, Phone } from 'lucide-react'
import Link from 'next/link'
import { getAlternates } from '@/lib/seo'
import type { Locale } from '@/i18n/routing'

type Props = {
  params: Promise<{ locale: string; slug: string }>
}

export function generateStaticParams() {
  return radonServices.map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({ params }: Props) {
  const { locale, slug } = await params
  const service = radonServices.find((s) => s.slug === slug)
  if (!service) return {}
  const t = await getTranslations({ locale, namespace: 'services' })
  const key = `radon.${service.translationKey}`
  const metaDesc = t.has(`${key}.metaDescription`) ? t(`${key}.metaDescription`) : t(`${key}.description`)
  return {
    title: `${t(`${key}.title`)} | ACM-2020`,
    description: metaDesc,
    alternates: getAlternates(locale as Locale, '/servicios/radon/[slug]', { slug }),
  }
}

export default async function RadonServicePage({ params }: Props) {
  const { locale, slug } = await params
  setRequestLocale(locale)

  const service = radonServices.find((s) => s.slug === slug)
  if (!service) notFound()

  const t = await getTranslations({ locale, namespace: 'services' })
  const tCommon = await getTranslations({ locale, namespace: 'common' })
  const tPages = await getTranslations({ locale, namespace: 'pages.radonIndex' })

  const key = `radon.${service.translationKey}`
  const hasIntro = t.has(`${key}.intro`)
  const hasSections = t.has(`${key}.sections`)
  const hasKeyPoints = t.has(`${key}.keyPoints`)
  const hasRegulations = t.has(`${key}.regulations`)

  const sections = hasSections ? (t.raw(`${key}.sections`) as { title: string; content: string }[]) : []
  const keyPoints = hasKeyPoints ? (t.raw(`${key}.keyPoints`) as string[]) : []

  return (
    <>
      <Navbar />
      <PageHero
        title={t(`${key}.title`)}
        subtitle={t(`${key}.description`)}
      />
      <Breadcrumbs
        items={[
          { label: tCommon('services'), href: '/servicios' },
          { label: tPages('title'), href: '/servicios/radon' },
          { label: t(`${key}.title`) },
        ]}
      />

      <main className="bg-white">
        {/* Intro */}
        {hasIntro && (
          <section className="section-padding border-b border-gray-100">
            <div className="container-custom max-w-4xl">
              <div className="text-lg md:text-xl text-gray-600 leading-relaxed space-y-4">
                {(t(`${key}.intro`) as string).split('\n\n').map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Sections */}
        {sections.length > 0 && (
          <section className="section-padding">
            <div className="container-custom max-w-4xl">
              <div className="space-y-12">
                {sections.map((section, i) => (
                  <div key={i} className="group">
                    <div className="flex items-start gap-4">
                      <div className="hidden sm:flex w-10 h-10 rounded-xl bg-primary/10 items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-primary font-bold text-sm">{String(i + 1).padStart(2, '0')}</span>
                      </div>
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
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Key Points */}
        {keyPoints.length > 0 && (
          <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
            <div className="container-custom max-w-4xl">
              <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-8 text-center">
                Aspectos clave
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {keyPoints.map((point, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 bg-white rounded-xl p-5 shadow-sm border border-gray-100"
                  >
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm leading-relaxed">{point}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Regulations */}
        {hasRegulations && (
          <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 border-t border-gray-100">
            <div className="container-custom max-w-4xl">
              <div className="bg-secondary-50 rounded-2xl p-6 md:p-8">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0">
                    <Scale className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-secondary mb-3">Normativa de aplicación</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{t(`${key}.regulations`)}</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* CTA */}
        <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-secondary to-secondary-700">
          <div className="container-custom max-w-3xl text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              ¿Necesita este servicio?
            </h2>
            <p className="text-white/80 mb-8 text-lg">
              Contacte con nuestro equipo técnico para recibir asesoramiento personalizado sin compromiso.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contacto" className="btn-primary group">
                {t('whyCta')}
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
