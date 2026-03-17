import { setRequestLocale } from 'next-intl/server'
import { getTranslations } from 'next-intl/server'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import PageHero from '@/components/layout/PageHero'
import Breadcrumbs from '@/components/layout/Breadcrumbs'
import WhatsAppButton from '@/components/WhatsAppButton'

type Props = {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'pages.newsPage' })
  return { title: `${t('title')} | ACM-2020` }
}

export default async function NoticiasPage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale)
  const t = await getTranslations({ locale, namespace: 'pages.newsPage' })

  return (
    <>
      <Navbar />
      <PageHero title={t('title')} subtitle={t('subtitle')} />
      <Breadcrumbs items={[{ label: t('title') }]} />
      <main className="section-padding bg-white">
        <div className="container-custom">
          <p className="text-center text-gray-500 text-lg">
            {locale === 'es' ? 'Seccion de noticias en preparacion.' :
             locale === 'ca' ? 'Seccio de noticies en preparacio.' :
             locale === 'fr' ? 'Section actualites en cours de preparation.' :
             'News section coming soon.'}
          </p>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
