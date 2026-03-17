import { setRequestLocale } from 'next-intl/server'
import { getTranslations } from 'next-intl/server'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import PageHero from '@/components/layout/PageHero'
import Breadcrumbs from '@/components/layout/Breadcrumbs'
import WhatsAppButton from '@/components/WhatsAppButton'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { amiantoServices } from '@/data/services'
import { getAlternates } from '@/lib/seo'
import type { Locale } from '@/i18n/routing'

type Props = {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'pages.asbestosIndex' })
  return {
    title: `${t('title')} | ACM-2020`,
    alternates: getAlternates(locale as Locale, '/servicios/amianto'),
  }
}

export default async function AmiantoPage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale)
  const t = await getTranslations({ locale, namespace: 'pages.asbestosIndex' })
  const tServices = await getTranslations({ locale, namespace: 'services' })
  const tCommon = await getTranslations({ locale, namespace: 'common' })

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
      <main className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {amiantoServices.map((service) => (
              <Link
                key={service.slug}
                href={`/servicios/amianto/${service.slug}`}
                className="group bg-white rounded-2xl p-6 shadow-sm border border-gray-100 card-hover"
              >
                <h3 className="text-lg font-semibold text-secondary mb-2 group-hover:text-primary transition-colors">
                  {tServices(`asbestos.${service.translationKey}.title`)}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {tServices(`asbestos.${service.translationKey}.description`)}
                </p>
                <span className="inline-flex items-center text-primary text-sm font-semibold group-hover:translate-x-1 transition-transform">
                  {tCommon('learnMore')}
                  <ArrowRight className="w-4 h-4 ml-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
