import { setRequestLocale } from 'next-intl/server'
import { getTranslations } from 'next-intl/server'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import PageHero from '@/components/layout/PageHero'
import Breadcrumbs from '@/components/layout/Breadcrumbs'
import WhatsAppButton from '@/components/WhatsAppButton'
import Link from 'next/link'
import {
  AlertTriangle,
  Activity,
  ArrowRight,
} from 'lucide-react'
import { getAlternates } from '@/lib/seo'
import type { Locale } from '@/i18n/routing'

type Props = {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'pages.servicesIndex' })
  return {
    title: `${t('title')} | ACM-2020`,
    alternates: getAlternates(locale as Locale, '/servicios'),
  }
}

export default async function ServiciosPage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale)
  const t = await getTranslations({ locale, namespace: 'pages.servicesIndex' })
  const tServices = await getTranslations({ locale, namespace: 'services' })
  const tCommon = await getTranslations({ locale, namespace: 'common' })

  return (
    <>
      <Navbar />
      <PageHero title={t('title')} subtitle={t('subtitle')} />
      <Breadcrumbs items={[{ label: tCommon('services') }]} />
      <main className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Amianto card */}
            <Link
              href="/servicios/amianto"
              className="group bg-white rounded-2xl p-8 shadow-lg border border-gray-100 card-hover"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                <AlertTriangle className="w-8 h-8 text-primary group-hover:text-white transition-colors" />
              </div>
              <h2 className="text-2xl font-bold text-secondary mb-3">
                {tServices('asbestosTitle')}
              </h2>
              <p className="text-gray-600 mb-6">
                {tServices('asbestosSubtitle')}
              </p>
              <span className="inline-flex items-center text-primary font-semibold group-hover:translate-x-1 transition-transform">
                {tCommon('learnMore')}
                <ArrowRight className="w-5 h-5 ml-2" />
              </span>
            </Link>

            {/* Radon card */}
            <Link
              href="/servicios/radon"
              className="group bg-white rounded-2xl p-8 shadow-lg border border-gray-100 card-hover"
            >
              <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-secondary transition-colors">
                <Activity className="w-8 h-8 text-secondary group-hover:text-white transition-colors" />
              </div>
              <h2 className="text-2xl font-bold text-secondary mb-3">
                {tServices('radonTitle')}
              </h2>
              <p className="text-gray-600 mb-6">
                {tServices('radonSubtitle')}
              </p>
              <span className="inline-flex items-center text-primary font-semibold group-hover:translate-x-1 transition-transform">
                {tCommon('learnMore')}
                <ArrowRight className="w-5 h-5 ml-2" />
              </span>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
