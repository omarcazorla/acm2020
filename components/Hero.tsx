'use client'

import { Shield, Award, ArrowRight } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/navigation'
import Image from 'next/image'
import { ContainerScroll } from '@/components/ui/ContainerScroll'

export default function Hero() {
  const t = useTranslations('hero')

  return (
    <section id="inicio" className="relative bg-[#f3f1ea]">
      <div className="relative z-10">
        <ContainerScroll
          titleComponent={
            <div className="pt-20 md:pt-28 pb-4">
              {/* Eyebrow */}
              <p className="uppercase tracking-[0.3em] text-sm text-[#000000]/60 mb-8">
                {t('badge')}
              </p>

              {/* Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-[64px] lg:leading-[83px] font-bold text-[#000000] leading-tight mb-6">
                {t('titleStart')}{' '}
                <span className="text-primary">{t('titleHighlight1')}</span>{' '}
                {t('titleMid')}{' '}
                <span className="text-primary">{t('titleHighlight2')}</span>
              </h1>

              {/* Subheadline */}
              <p className="text-lg sm:text-xl lg:text-[22px] font-light text-[#000000]/70 max-w-2xl mx-auto mb-10 leading-relaxed">
                {t('subtitle')}
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contacto"
                  className="inline-flex items-center justify-center gap-2 bg-[#000000] text-white rounded-[10px] px-7 py-3 text-lg font-medium hover:bg-[#000000]/90 transition-colors group"
                >
                  {t('ctaPrimary')}
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/servicios"
                  className="inline-flex items-center justify-center px-7 py-3 text-lg font-medium text-[#000000] border-2 border-[#000000]/20 rounded-[10px] hover:border-[#000000]/50 transition-colors"
                >
                  {t('ctaSecondary')}
                </Link>
              </div>
            </div>
          }
          statsComponent={
            <div className="max-w-2xl mx-auto">
              <div className="grid grid-cols-2 gap-x-16 gap-y-10">
                <div className="flex items-center space-x-4">
                  <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Shield className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <div className="text-3xl md:text-4xl font-bold text-white">{t('statsYears')}</div>
                    <div className="text-sm text-white/70">{t('statsYearsLabel')}</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Award className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <div className="text-3xl md:text-4xl font-bold text-white">{t('statsRera')}</div>
                    <div className="text-sm text-white/70">{t('statsReraLabel')}</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Shield className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <div className="text-3xl md:text-4xl font-bold text-white">{t('statsProjects')}</div>
                    <div className="text-sm text-white/70">{t('statsProjectsLabel')}</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Award className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <div className="text-3xl md:text-4xl font-bold text-white">{t('statsCommitment')}</div>
                    <div className="text-sm text-white/70">{t('statsCommitmentLabel')}</div>
                  </div>
                </div>
              </div>
            </div>
          }
        >
          <Image
            src="/roofing.webp"
            alt="Placas onduladas de fibrocemento"
            fill
            className="object-cover object-center"
            priority
            sizes="(max-width: 768px) 100vw, 1280px"
          />
          {/* Bottom gradient fade */}
          <div
            className="absolute bottom-0 left-0 right-0 h-[200px] z-10"
            style={{
              background: 'linear-gradient(to top, #DCD5C1 0%, rgba(217, 217, 217, 0) 100%)',
            }}
          />
        </ContainerScroll>
      </div>
    </section>
  )
}
