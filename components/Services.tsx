'use client'

import {
  AlertTriangle,
  FileSearch,
  ClipboardCheck,
  Shield,
  FileText,
  CheckSquare,
  MessageSquare,
  Activity,
  Home,
  Building2,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react'
import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/navigation'
import RevealOnScroll from '@/components/ui/RevealOnScroll'

const operativoHighlights = [
  { key: 'inspection', slug: 'inspeccion-identificacion', icon: FileSearch },
  { key: 'supervision', slug: 'direccion-obra', icon: Shield },
  { key: 'qualityControl', slug: 'control-calidad-final', icon: CheckSquare },
] as const

const consultoriaHighlights = [
  { key: 'consulting', slug: 'asesoria-consultoria', icon: MessageSquare },
  { key: 'management', slug: 'planes-gestion', icon: ClipboardCheck },
  { key: 'projects', slug: 'proyectos-desamiantado', icon: FileText },
] as const

const radonServiceKeys = [
  { key: 'measurement', icon: Activity },
  { key: 'residential', icon: Home },
  { key: 'workspace', icon: Building2 },
  { key: 'reports', icon: FileText },
] as const

export default function Services() {
  const t = useTranslations('services')
  const tAnchors = useTranslations('anchors')

  return (
    <section id={tAnchors('services')} className="section-padding bg-gray-50">
      <div className="container-custom">
        {/* Section header */}
        <RevealOnScroll>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
              {t('sectionLabel')}
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-secondary mb-6">
              {t('title')}{' '}
              <span className="text-gradient">{t('titleHighlight')}</span>
            </h2>
            <p className="text-lg text-gray-600">
              {t('subtitle')}
            </p>
          </div>
        </RevealOnScroll>

        {/* Amianto Section */}
        <div className="mb-20">
          <div className="flex items-center space-x-4 mb-10">
            <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center">
              <AlertTriangle className="w-7 h-7 text-primary" />
            </div>
            <div>
              <h3 className="font-heading text-2xl font-bold text-secondary">{t('asbestosTitle')}</h3>
              <p className="text-gray-600">{t('asbestosSubtitle')}</p>
            </div>
          </div>

          {/* Operativos */}
          <h4 className="text-lg font-semibold text-primary mb-4">{t('operationalLabel')}</h4>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {operativoHighlights.map((service, index) => (
              <RevealOnScroll key={service.key} delay={index * 0.1}>
                <Link
                  href={{ pathname: '/servicios/amianto/[slug]', params: { slug: service.slug } }}
                  className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 border-l-4 border-l-primary card-hover group block h-full"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                    <service.icon className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
                  </div>
                  <h4 className="text-lg font-semibold text-secondary mb-2">
                    {t(`asbestos.${service.key}.title`)}
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {t(`asbestos.${service.key}.description`)}
                  </p>
                </Link>
              </RevealOnScroll>
            ))}
          </div>

          {/* Consultoria */}
          <h4 className="text-lg font-semibold text-primary mb-4">{t('consultingLabel')}</h4>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {consultoriaHighlights.map((service, index) => (
              <RevealOnScroll key={service.key} delay={index * 0.1}>
                <Link
                  href={{ pathname: '/servicios/amianto/[slug]', params: { slug: service.slug } }}
                  className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 border-l-4 border-l-primary card-hover group block h-full"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                    <service.icon className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
                  </div>
                  <h4 className="text-lg font-semibold text-secondary mb-2">
                    {t(`asbestos.${service.key}.title`)}
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {t(`asbestos.${service.key}.description`)}
                  </p>
                </Link>
              </RevealOnScroll>
            ))}
          </div>

          {/* CTA Ver todos */}
          <div className="text-center">
            <Link
              href="/servicios/amianto"
              className="inline-flex items-center text-primary font-semibold hover:underline group"
            >
              {t('viewAllAsbestos')}
              <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Radón Section */}
        <div>
          <div className="flex items-center space-x-4 mb-10">
            <div className="w-14 h-14 bg-secondary/10 rounded-2xl flex items-center justify-center">
              <Activity className="w-7 h-7 text-secondary" />
            </div>
            <div>
              <h3 className="font-heading text-2xl font-bold text-secondary">{t('radonTitle')}</h3>
              <p className="text-gray-600">{t('radonSubtitle')}</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {radonServiceKeys.map((service, index) => (
              <RevealOnScroll key={service.key} delay={index * 0.1}>
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 border-l-4 border-l-secondary card-hover group h-full">
                  <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-secondary group-hover:scale-110 transition-all duration-300">
                    <service.icon className="w-6 h-6 text-secondary group-hover:text-white transition-colors" />
                  </div>
                  <h4 className="text-lg font-semibold text-secondary mb-2">
                    {t(`radon.${service.key}.title`)}
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {t(`radon.${service.key}.description`)}
                  </p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>

        {/* Why our services */}
        <RevealOnScroll className="mt-16">
        <div className="bg-secondary rounded-3xl p-8 md:p-12 relative overflow-hidden noise-texture">
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
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
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
        </RevealOnScroll>
      </div>
    </section>
  )
}
