import { setRequestLocale } from 'next-intl/server'
import { getTranslations } from 'next-intl/server'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import PageHero from '@/components/layout/PageHero'
import Breadcrumbs from '@/components/layout/Breadcrumbs'
import { getAlternates } from '@/lib/seo'
import type { Locale } from '@/i18n/routing'

type Props = {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'pages.legalNotice' })
  return {
    title: `${t('title')} | ACM-2020`,
    alternates: getAlternates(locale as Locale, '/legal/aviso-legal'),
  }
}

export default async function AvisoLegalPage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale)
  const t = await getTranslations({ locale, namespace: 'pages.legalNotice' })

  const hasSections = t.has('sections')
  const sections = hasSections ? (t.raw('sections') as { title: string; content: string }[]) : []

  return (
    <>
      <Navbar />
      <PageHero title={t('title')} />
      <Breadcrumbs items={[{ label: t('title') }]} />
      <main className="section-padding bg-white">
        <div className="container-custom max-w-3xl">
          {sections.length > 0 ? (
            <div className="space-y-8">
              {sections.map((section, i) => (
                <div key={i}>
                  <h2 className="text-xl font-bold text-secondary mb-3">{section.title}</h2>
                  <div className="text-gray-600 leading-relaxed space-y-3">
                    {section.content.split('\n\n').map((p, j) => (
                      <p key={j} className="whitespace-pre-line">{p}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-600">Contenido en preparación.</p>
          )}
        </div>
      </main>
      <Footer />
    </>
  )
}
