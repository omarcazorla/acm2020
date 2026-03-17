import { setRequestLocale } from 'next-intl/server'
import { getTranslations } from 'next-intl/server'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import PageHero from '@/components/layout/PageHero'
import Breadcrumbs from '@/components/layout/Breadcrumbs'
import WhatsAppButton from '@/components/WhatsAppButton'
import Clients from '@/components/Clients'
import { Building2, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { getAlternates } from '@/lib/seo'
import type { Locale } from '@/i18n/routing'

type Props = {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'pages.clientsPage' })
  return {
    title: `${t('title')} | ACM-2020`,
    alternates: getAlternates(locale as Locale, '/clientes'),
  }
}

export default async function ClientesPage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale)
  const t = await getTranslations({ locale, namespace: 'pages.clientsPage' })
  const tServices = await getTranslations({ locale, namespace: 'services' })

  const hasDescription = t.has('description')
  const hasSectors = t.has('sectors')
  const sectors = hasSectors ? (t.raw('sectors') as { name: string; clients: string[] }[]) : []

  return (
    <>
      <Navbar />
      <PageHero title={t('title')} subtitle={t('subtitle')} />
      <Breadcrumbs items={[{ label: t('title') }]} />

      {/* Existing Clients component with stats + logo marquee */}
      <Clients />

      {/* Detailed description */}
      {hasDescription && (
        <section className="section-padding bg-white border-t border-gray-100">
          <div className="container-custom max-w-4xl">
            <p className="text-lg text-gray-600 leading-relaxed text-center">
              {t('description')}
            </p>
          </div>
        </section>
      )}

      {/* Client sectors detailed */}
      {sectors.length > 0 && (
        <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="container-custom">
            <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-10 text-center">
              Referencias por sector
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sectors.map((sector, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                      <Building2 className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="text-lg font-bold text-secondary">{sector.name}</h3>
                  </div>
                  <ul className="space-y-2">
                    {sector.clients.map((client, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        {client}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-secondary to-secondary-700">
        <div className="container-custom max-w-3xl text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            ¿Quiere ser nuestro próximo cliente?
          </h2>
          <p className="text-white/80 mb-8 text-lg">
            Contacte con nosotros para recibir asesoramiento profesional adaptado a sus necesidades.
          </p>
          <Link href="/contacto" className="btn-primary group">
            {tServices('whyCta')}
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </>
  )
}
