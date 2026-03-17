'use client'

import {
  AlertTriangle,
  FileSearch,
  ClipboardCheck,
  Trash2,
  Shield,
  FileText,
  Activity,
  Home,
  Building2,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react'
import { useTranslations } from 'next-intl'

const amiantoServiceKeys = [
  { key: 'inspection', icon: FileSearch },
  { key: 'management', icon: ClipboardCheck },
  { key: 'projects', icon: FileText },
  { key: 'waste', icon: Trash2 },
  { key: 'supervision', icon: Shield },
  { key: 'risk', icon: AlertTriangle },
] as const

const radonServiceKeys = [
  { key: 'measurement', icon: Activity },
  { key: 'residential', icon: Home },
  { key: 'workspace', icon: Building2 },
  { key: 'reports', icon: FileText },
] as const

export default function Services() {
  const t = useTranslations('services')

  return (
    <section id="servicios" className="section-padding bg-gray-50">
      <div className="container-custom">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
            {t('sectionLabel')}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-secondary mb-6">
            {t('title')}{' '}
            <span className="text-gradient">{t('titleHighlight')}</span>
          </h2>
          <p className="text-lg text-gray-600">
            {t('subtitle')}
          </p>
        </div>

        {/* Amianto Section */}
        <div className="mb-20">
          <div className="flex items-center space-x-4 mb-10">
            <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center">
              <AlertTriangle className="w-7 h-7 text-primary" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-secondary">{t('asbestosTitle')}</h3>
              <p className="text-gray-600">{t('asbestosSubtitle')}</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {amiantoServiceKeys.map((service) => (
              <div
                key={service.key}
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 card-hover group"
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
              </div>
            ))}
          </div>
        </div>

        {/* Radón Section */}
        <div>
          <div className="flex items-center space-x-4 mb-10">
            <div className="w-14 h-14 bg-secondary/10 rounded-2xl flex items-center justify-center">
              <Activity className="w-7 h-7 text-secondary" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-secondary">{t('radonTitle')}</h3>
              <p className="text-gray-600">{t('radonSubtitle')}</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {radonServiceKeys.map((service) => (
              <div
                key={service.key}
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 card-hover group"
              >
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
            ))}
          </div>
        </div>

        {/* Why our services */}
        <div className="mt-16 bg-secondary rounded-3xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
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
                href="#contacto"
                className="btn-primary group text-lg"
              >
                {t('whyCta')}
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
