'use client'

import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/navigation'
import { ContainerScroll } from '@/components/ui/ContainerScroll'
import { clientLogos } from '@/lib/clients'

export default function Hero() {
  const t = useTranslations('hero')
  const tAnchors = useTranslations('anchors')

  return (
    <section id={tAnchors('home')} className="relative bg-warm noise-texture overflow-hidden">
      <div className="relative z-10">
        <ContainerScroll
          titleComponent={
            <div className="pt-20 md:pt-28 pb-4">
              {/* Eyebrow */}
              <p
                data-reveal="fade"
                className="uppercase tracking-[0.1em] sm:tracking-[0.3em] text-sm text-secondary/60 mb-8"
              >
                {t('badge')}
              </p>

              {/* Headline — word-by-word stagger */}
              <div
                data-stagger="fade"
                data-stagger-seq="0.25"
                className="text-3xl sm:text-5xl lg:text-[64px] lg:leading-[83px] font-bold text-secondary leading-tight mb-6"
              >
                <span>{t('titleStart')} </span>
                <span className="text-primary-text">{t('titleHighlight1')} </span>
                <span>{t('titleMid')} </span>
                <span className="text-primary-text">{t('titleHighlight2')}</span>
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
                  className="inline-flex items-center justify-center gap-2 bg-primary-text text-black rounded-[10px] px-5 py-2.5 text-base sm:px-7 sm:py-3 sm:text-lg font-semibold hover:bg-primary-text/90 transition-colors group shadow-lg hover:shadow-xl"
                >
                  {t('ctaPrimary')}
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/servicios"
                  className="inline-flex items-center justify-center px-5 py-2.5 text-base sm:px-7 sm:py-3 sm:text-lg font-medium text-secondary border-2 border-secondary/20 rounded-[10px] hover:border-secondary/50 transition-colors"
                >
                  {t('ctaSecondary')}
                </Link>
              </div>

              {/* Client logo marquee */}
              <div
                data-reveal="fade"
                style={{ transitionDelay: '1.8s' }}
                className="mt-16 max-w-3xl mx-auto"
              >
                <p className="text-center text-xs text-secondary/40 uppercase tracking-wider mb-6">
                  {t('trustedBy')}
                </p>

                <div className="relative overflow-hidden py-4">
                  {/* Gradient overlays — inherit bg-warm */}
                  <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-warm to-transparent z-10" />
                  <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-warm to-transparent z-10" />

                  {/* Scrolling track */}
                  <div className="flex animate-marquee">
                    {clientLogos.map((logo, index) => (
                      <div
                        key={`hero-logo-1-${index}`}
                        className="flex-shrink-0 mx-6 flex items-center justify-center"
                      >
                        <div className="w-24 h-10 relative grayscale opacity-40">
                          <Image
                            src={`/logos/${logo}`}
                            alt=""
                            fill
                            sizes="96px"
                            quality={75}
                            className="object-contain"
                          />
                        </div>
                      </div>
                    ))}
                    {clientLogos.map((logo, index) => (
                      <div
                        key={`hero-logo-2-${index}`}
                        className="flex-shrink-0 mx-6 flex items-center justify-center"
                      >
                        <div className="w-24 h-10 relative grayscale opacity-40">
                          <Image
                            src={`/logos/${logo}`}
                            alt=""
                            fill
                            sizes="96px"
                            quality={75}
                            className="object-contain"
                          />
                        </div>
                      </div>
                    ))}
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
