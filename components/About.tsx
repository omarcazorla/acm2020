'use client'

import {
  Award,
  Shield,
  Users,
  Heart,
  Clock,
  CheckCircle,
  Target,
  Leaf,
} from 'lucide-react'
import { useTranslations } from 'next-intl'

const featureKeys = [
  { key: 'rera', icon: Award },
  { key: 'experience', icon: Clock },
  { key: 'team', icon: Users },
  { key: 'health', icon: Heart },
] as const

const valueKeys = [
  { key: 'professionalism', icon: Target },
  { key: 'safety', icon: Shield },
  { key: 'trust', icon: CheckCircle },
  { key: 'sustainability', icon: Leaf },
] as const

export default function About() {
  const t = useTranslations('about')

  return (
    <section id="nosotros" className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left content */}
          <div>
            <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
              {t('sectionLabel')}
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-secondary mb-6 leading-tight">
              {t('title')}{' '}
              <span className="text-gradient">{t('titleHighlight')}</span>
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              {t('description1')}
            </p>
            <p className="text-gray-600 mb-8">
              {t('description2')}
            </p>

            {/* Values */}
            <div className="grid grid-cols-2 gap-4">
              {valueKeys.map((value) => (
                <div
                  key={value.key}
                  className="flex items-center space-x-3 p-3 rounded-xl bg-gray-50 hover:bg-primary/5 transition-colors"
                >
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <value.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-secondary text-sm">
                      {t(`values.${value.key}.title`)}
                    </div>
                    <div className="text-xs text-gray-500">
                      {t(`values.${value.key}.description`)}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right content - Trust indicators */}
          <div className="grid sm:grid-cols-2 gap-6">
            {featureKeys.map((feature) => (
              <div
                key={feature.key}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 card-hover"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-primary to-primary-600 rounded-2xl flex items-center justify-center mb-4 shadow-lg shadow-primary/25">
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <div className="text-sm font-bold text-primary mb-1">
                  {t(`features.${feature.key}.highlight`)}
                </div>
                <h3 className="text-lg font-bold text-secondary mb-2">
                  {t(`features.${feature.key}.title`)}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {t(`features.${feature.key}.description`)}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Mission statement */}
        <div className="mt-20 text-center">
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-secondary to-secondary-600 rounded-3xl p-10 md:p-14 relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary/10 rounded-full blur-2xl transform -translate-x-1/2 translate-y-1/2" />

            <div className="relative">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                {t('missionTitle')}
              </h3>
              <p className="text-lg md:text-xl text-white/90 leading-relaxed">
                &ldquo;{t('missionText')}&rdquo;
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
