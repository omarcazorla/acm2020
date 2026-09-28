'use client'

import { Shield, Award, ArrowRight } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/navigation'
import { ContainerScroll } from '@/components/ui/ContainerScroll'

export default function Hero() {
  const t = useTranslations('hero')
  const tAnchors = useTranslations('anchors')

  return (
    <section id={tAnchors('home')} className="relative bg-warm noise-texture">
      <div className="relative z-10">
        <ContainerScroll
          titleComponent={
            <div className="pt-20 md:pt-28 pb-4">
              {/* Eyebrow */}
              <p
                data-reveal="fade"
                className="uppercase tracking-[0.3em] text-sm text-secondary/60 mb-8"
              >
                {t('badge')}
              </p>

              {/* Headline — word-by-word stagger */}
              <div
                data-stagger="fade"
                data-stagger-seq="0.25"
                className="text-4xl sm:text-5xl lg:text-[64px] lg:leading-[83px] font-bold text-secondary leading-tight mb-6"
              >
                <span>{t('titleStart')} </span>
                <span className="text-primary">{t('titleHighlight1')} </span>
                <span>{t('titleMid')} </span>
                <span className="text-primary">{t('titleHighlight2')}</span>
              </div>

              {/* Subheadline */}
              <p
                data-reveal="fade"
                style={{ transitionDelay: '1.2s' }}
                className="text-lg sm:text-xl lg:text-[22px] font-light text-secondary/70 max-w-2xl mx-auto mb-10 leading-relaxed"
              >
                {t('subtitle')}
              </p>

              {/* CTAs */}
              <div
                data-reveal="fade"
                style={{ transitionDelay: '1.5s' }}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <Link
                  href="/contacto"
                  className="inline-flex items-center justify-center gap-2 bg-secondary text-white rounded-[10px] px-7 py-3 text-lg font-medium hover:bg-secondary/90 transition-colors group"
                >
                  {t('ctaPrimary')}
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/servicios"
                  className="inline-flex items-center justify-center px-7 py-3 text-lg font-medium text-secondary border-2 border-secondary/20 rounded-[10px] hover:border-secondary/50 transition-colors"
                >
                  {t('ctaSecondary')}
                </Link>
              </div>
            </div>
          }
          statsComponent={
            <div className="max-w-2xl mx-auto">
              <div
                data-stagger="zoom"
                data-stagger-seq="0.1"
                className="grid grid-cols-2 gap-x-16 gap-y-10 stagger-perspective"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Shield className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <div className="text-3xl md:text-4xl font-bold text-secondary">{t('statsYears')}</div>
                    <div className="text-sm text-secondary/50">{t('statsYearsLabel')}</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Award className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <div className="text-3xl md:text-4xl font-bold text-secondary">{t('statsRera')}</div>
                    <div className="text-sm text-secondary/50">{t('statsReraLabel')}</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Shield className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <div className="text-3xl md:text-4xl font-bold text-secondary">{t('statsProjects')}</div>
                    <div className="text-sm text-secondary/50">{t('statsProjectsLabel')}</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Award className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <div className="text-3xl md:text-4xl font-bold text-secondary">{t('statsCommitment')}</div>
                    <div className="text-sm text-secondary/50">{t('statsCommitmentLabel')}</div>
                  </div>
                </div>
              </div>
            </div>
          }
        />
      </div>
    </section>
  )
}
