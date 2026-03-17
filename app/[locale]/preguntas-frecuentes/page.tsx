import { setRequestLocale } from 'next-intl/server'
import { getTranslations } from 'next-intl/server'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import PageHero from '@/components/layout/PageHero'
import Breadcrumbs from '@/components/layout/Breadcrumbs'
import WhatsAppButton from '@/components/WhatsAppButton'
import FAQAccordion from '@/components/ui/FAQAccordion'
import { faqsAmianto } from '@/data/faqs-amianto'
import { faqsRadon } from '@/data/faqs-radon'
import type { Locale } from '@/i18n/routing'

type Props = {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'pages.faqPage' })
  return { title: `${t('title')} | ACM-2020` }
}

export default async function FAQPage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale)
  const t = await getTranslations({ locale, namespace: 'pages.faqPage' })
  const tServices = await getTranslations({ locale, namespace: 'services' })
  const loc = locale as Locale

  return (
    <>
      <Navbar />
      <PageHero title={t('title')} subtitle={t('subtitle')} />
      <Breadcrumbs items={[{ label: t('title') }]} />
      <main className="section-padding bg-white">
        <div className="container-custom max-w-3xl">
          {/* Amianto FAQs */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-secondary mb-6">
              {tServices('asbestosTitle')}
            </h2>
            <FAQAccordion
              items={faqsAmianto.map((faq) => ({
                question: faq.question[loc],
                answer: faq.answer[loc],
              }))}
            />
          </div>

          {/* Radon FAQs */}
          <div>
            <h2 className="text-2xl font-bold text-secondary mb-6">
              {tServices('radonTitle')}
            </h2>
            <FAQAccordion
              items={faqsRadon.map((faq) => ({
                question: faq.question[loc],
                answer: faq.answer[loc],
              }))}
            />
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
