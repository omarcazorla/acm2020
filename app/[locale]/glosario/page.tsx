import { setRequestLocale } from 'next-intl/server'
import { getTranslations } from 'next-intl/server'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import PageHero from '@/components/layout/PageHero'
import Breadcrumbs from '@/components/layout/Breadcrumbs'
import WhatsAppButton from '@/components/WhatsAppButton'
import { glosario } from '@/data/glosario'
import type { Locale } from '@/i18n/routing'

type Props = {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'pages.glossaryPage' })
  return { title: `${t('title')} | ACM-2020` }
}

export default async function GlosarioPage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale)
  const t = await getTranslations({ locale, namespace: 'pages.glossaryPage' })
  const loc = locale as Locale

  return (
    <>
      <Navbar />
      <PageHero title={t('title')} subtitle={t('subtitle')} />
      <Breadcrumbs items={[{ label: t('title') }]} />
      <main className="section-padding bg-white">
        <div className="container-custom max-w-3xl">
          <div className="space-y-6">
            {glosario.map((term) => (
              <div
                key={term.slug}
                id={term.slug}
                className="bg-gray-50 rounded-xl p-6 scroll-mt-24"
              >
                <h3 className="text-lg font-bold text-secondary mb-2">
                  {term.term[loc]}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {term.definition[loc]}
                </p>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
