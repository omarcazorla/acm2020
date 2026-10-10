'use client'

import {
  FileSearch,
  ClipboardCheck,
  Shield,
  FileText,
  CheckSquare,
  MessageSquare,
  Home,
  Building2,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react'
import Image from 'next/image'
import { useTranslations, useLocale } from 'next-intl'
import { Link } from '@/i18n/navigation'
import ShinyText from '@/components/ui/ShinyText'
import { amiantoServices, getLocalizedSlug } from '@/data/services'

const operativoHighlights = [
  { key: 'inspection', icon: FileSearch },
  { key: 'supervision', icon: Shield },
  { key: 'qualityControl', icon: CheckSquare },
] as const

const consultoriaHighlights = [
  { key: 'consulting', icon: MessageSquare },
  { key: 'management', icon: ClipboardCheck },
  { key: 'projects', icon: FileText },
] as const

function getSlugForKey(key: string, locale: string): string {
  const service = amiantoServices.find(s => s.translationKey === key)
  return service ? getLocalizedSlug(service, locale) : key
}

const radonServiceKeys = [
  { key: 'measurement', icon: Activity },
  { key: 'residential', icon: Home },
  { key: 'workspace', icon: Building2 },
  { key: 'reports', icon: FileText },
] as const

export default function Services() {
  const t = useTranslations('services')
  const tAnchors = useTranslations('anchors')
  const locale = useLocale()

  return (
    <section id={tAnchors('services')} className="section-padding bg-gray-50">
      <div className="container-custom">
        {/* Section header */}
        <div data-reveal="fade" className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block bg-accent-100 text-accent-900 font-semibold text-sm uppercase tracking-wider px-4 py-1.5 rounded-full mb-4">
            {t('sectionLabel')}
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-secondary mb-6">
            {t('title')}{' '}
            <ShinyText text={t('titleHighlight')} speed={3} delay={1} />
          </h2>
          <p className="text-lg text-gray-600">
            {t('subtitle')}
          </p>
        </div>

        {/* Amianto Section */}
        <div className="mb-20">
          <div className="flex items-center space-x-4 mb-10">
            <div className="w-14 h-14 bg-accent-50 rounded-2xl flex items-center justify-center">
              <Image src="/amiant_dark.svg" alt="Amianto" width={28} height={28} className="w-7 h-7" />
            </div>
            <div>
              <h3 className="font-heading text-2xl font-bold text-secondary">{t('asbestosTitle')}</h3>
              <p className="text-gray-600">{t('asbestosSubtitle')}</p>
            </div>
          </div>

          {/* Operativos */}
          <h4 className="text-xl font-bold text-accent-900 border-l-4 border-accent-600 pl-4 mb-6">{t('operationalLabel')}</h4>
          <div
            data-stagger="zoom"
            data-stagger-seq="0.1"
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10 stagger-perspective"
          >
            {operativoHighlights.map((service) => (
              <Link
                key={service.key}
                href={{ pathname: '/servicios/amianto/[slug]', params: { slug: getSlugForKey(service.key, locale) } }}
                className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-100 hover:border-gray-200 card-hover group block h-full relative overflow-hidden"
              >
                <div
                  className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ transitionTimingFunction: 'var(--ease-cinematic)' }}
                />
                <div className="w-16 h-16 bg-accent-50 rounded-2xl flex items-center justify-center mb-6 relative">
                  <div
                    className="absolute inset-0 bg-gradient-to-br from-accent-100 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ transitionTimingFunction: 'var(--ease-cinematic)' }}
                  />
                  <service.icon
                    strokeWidth={1.5}
                    className="w-7 h-7 text-accent-700 relative z-10 transition-transform duration-500 group-hover:scale-110"
                    style={{ transitionTimingFunction: 'var(--ease-cinematic)' }}
                  />
                </div>
                <h4 className="text-xl font-semibold text-secondary mb-3 tracking-tight">
                  {t(`asbestos.${service.key}.title`)}
                </h4>
                <p className="text-gray-600 text-[15px] leading-relaxed">
                  {t(`asbestos.${service.key}.description`)}
                </p>
              </Link>
            ))}
          </div>

          {/* Consultoria */}
          <h4 className="text-xl font-bold text-accent-900 border-l-4 border-accent-600 pl-4 mb-6">{t('consultingLabel')}</h4>
          <div
            data-stagger="zoom"
            data-stagger-seq="0.1"
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8 stagger-perspective"
          >
            {consultoriaHighlights.map((service) => (
              <Link
                key={service.key}
                href={{ pathname: '/servicios/amianto/[slug]', params: { slug: getSlugForKey(service.key, locale) } }}
                className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-100 hover:border-gray-200 card-hover group block h-full relative overflow-hidden"
              >
                <div
                  className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ transitionTimingFunction: 'var(--ease-cinematic)' }}
                />
                <div className="w-16 h-16 bg-accent-50 rounded-2xl flex items-center justify-center mb-6 relative">
                  <div
                    className="absolute inset-0 bg-gradient-to-br from-accent-100 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ transitionTimingFunction: 'var(--ease-cinematic)' }}
                  />
                  <service.icon
                    strokeWidth={1.5}
                    className="w-7 h-7 text-accent-700 relative z-10 transition-transform duration-500 group-hover:scale-110"
                    style={{ transitionTimingFunction: 'var(--ease-cinematic)' }}
                  />
                </div>
                <h4 className="text-xl font-semibold text-secondary mb-3 tracking-tight">
                  {t(`asbestos.${service.key}.title`)}
                </h4>
                <p className="text-gray-600 text-[15px] leading-relaxed">
                  {t(`asbestos.${service.key}.description`)}
                </p>
              </Link>
            ))}
          </div>

          {/* CTA Ver todos */}
          <div className="text-center">
            <Link
              href="/servicios/amianto"
              className="inline-flex items-center text-accent-700-text font-semibold text-lg hover:underline group"
            >
              {t('viewAllAsbestos')}
              <ArrowRight className="w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Radon Section */}
        <div>
          <div className="flex items-center space-x-4 mb-10">
            <div className="w-14 h-14 bg-accent-50 rounded-2xl flex items-center justify-center">
              <Image src="/radon_dark.svg" alt="Radón" width={28} height={28} className="w-7 h-7" />
            </div>
            <div>
              <h3 className="font-heading text-2xl font-bold text-secondary">{t('radonTitle')}</h3>
              <p className="text-gray-600">{t('radonSubtitle')}</p>
            </div>
          </div>

          <div
            data-stagger="zoom"
            data-stagger-seq="0.1"
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 stagger-perspective"
          >
            {radonServiceKeys.map((service) => (
              <div
                key={service.key}
                className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-100 hover:border-gray-200 card-hover group h-full relative overflow-hidden"
              >
                <div
                  className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-secondary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ transitionTimingFunction: 'var(--ease-cinematic)' }}
                />
                <div className="w-16 h-16 bg-secondary/5 rounded-2xl flex items-center justify-center mb-6 relative">
                  <div
                    className="absolute inset-0 bg-gradient-to-br from-secondary/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ transitionTimingFunction: 'var(--ease-cinematic)' }}
                  />
                  <service.icon
                    strokeWidth={1.5}
                    className="w-7 h-7 text-secondary relative z-10 transition-transform duration-500 group-hover:scale-110"
                    style={{ transitionTimingFunction: 'var(--ease-cinematic)' }}
                  />
                </div>
                <h4 className="text-xl font-semibold text-secondary mb-3 tracking-tight">
                  {t(`radon.${service.key}.title`)}
                </h4>
                <p className="text-gray-600 text-[15px] leading-relaxed">
                  {t(`radon.${service.key}.description`)}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Why our services */}
        <div data-reveal="zoom" className="mt-16">
          <div className="bg-secondary rounded-3xl p-6 sm:p-8 md:p-12 relative overflow-hidden noise-texture">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="font-heading text-2xl md:text-3xl font-bold text-white mb-4">
                  {t('whyTitle')}
                </h3>
                <p className="text-white/80 mb-6">
                  {t('whySubtitle')}
                </p>
                <ul className="space-y-3">
                  {[0, 1, 2, 3].map((index) => (
                    <li key={index} className="flex items-center space-x-3 text-white/90">
                      <CheckCircle2 className="w-5 h-5 text-accent-700 flex-shrink-0" />
                      <span>{t(`whyItems.${index}`)}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex justify-center md:justify-end">
                <a
                  href={`#${tAnchors('contact')}`}
                  className="btn-primary group text-lg"
                >
                  {t('whyCta')}
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
