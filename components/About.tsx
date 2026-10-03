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
import ShinyText from '@/components/ui/ShinyText'

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
  const tAnchors = useTranslations('anchors')

  return (
    <section id={tAnchors('about')} className="section-padding bg-warm">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left content — line-by-line stagger */}
          <div data-stagger="fade" data-stagger-seq="0.2">
            <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
              {t('sectionLabel')}
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-secondary mb-6 leading-tight">
              {t('title')}{' '}
              <ShinyText text={t('titleHighlight')} speed={3} delay={1} />
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

          {/* Right content - Trust indicators — zoom from center */}
          <div
            data-stagger="zoom"
            data-stagger-seq="0.1"
            className="grid sm:grid-cols-2 gap-6 stagger-perspective"
          >
            {featureKeys.map((feature) => (
              <div key={feature.key} className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl border border-gray-100 hover:border-gray-200 card-hover h-full relative group overflow-hidden">
                <div
                  className="absolute -top-24 -right-24 w-48 h-48 bg-primary/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                  style={{ transitionTimingFunction: 'var(--ease-cinematic)' }}
                />
                <div
                  className="w-16 h-16 bg-gradient-to-br from-primary/90 to-primary-600 rounded-2xl flex items-center justify-center mb-6 shadow-md shadow-primary/15 group-hover:shadow-lg group-hover:shadow-primary/25 transition-shadow duration-500 relative z-10"
                  style={{ transitionTimingFunction: 'var(--ease-cinematic)' }}
                >
                  <feature.icon strokeWidth={1.5} className="w-8 h-8 text-white" />
                </div>
                <div className="relative z-10">
                  <div className="text-xs font-bold text-primary mb-2 uppercase tracking-wider">
                    {t(`features.${feature.key}.highlight`)}
                  </div>
                  <h3 className="text-xl font-bold text-secondary mb-3 tracking-tight">
                    {t(`features.${feature.key}.title`)}
                  </h3>
                  <p className="text-gray-600 text-[15px] leading-relaxed">
                    {t(`features.${feature.key}.description`)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mission statement */}
        <div data-reveal="zoom" className="mt-20 text-center">
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-secondary to-secondary-600 rounded-3xl p-10 md:p-14 relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary/10 rounded-full blur-2xl transform -translate-x-1/2 translate-y-1/2" />

            <div className="relative">
              <h3 className="font-heading text-2xl md:text-3xl font-bold text-white mb-4">
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
