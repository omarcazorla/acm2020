'use client'

import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { clientLogos } from '@/lib/clients'
import ShinyText from '@/components/ui/ShinyText'
import { useMemo } from 'react'

export default function Clients() {
  const t = useTranslations('clients')
  const tAnchors = useTranslations('anchors')

  // Shuffle logos and split into 3 rows for variety
  const { row1, row2, row3 } = useMemo(() => {
    const shuffled = [...clientLogos].sort(() => Math.random() - 0.5)
    return {
      row1: shuffled.slice(0, Math.ceil(shuffled.length / 3)),
      row2: shuffled.slice(Math.ceil(shuffled.length / 3), Math.ceil(shuffled.length * 2 / 3)),
      row3: shuffled.slice(Math.ceil(shuffled.length * 2 / 3))
    }
  }, [])

  return (
    <section id={tAnchors('clients')} className="section-padding bg-gray-50">
      <div className="container-custom">
        {/* Section header */}
        <div data-reveal="fade" className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-secondary mb-6">
            {t('title')}{' '}
            <ShinyText text={t('titleHighlight')} speed={3} delay={1} />
          </h2>
          <p className="text-lg text-secondary/80 leading-relaxed">
            Treballem amb empreses, administracions públiques i particulars que valoren la professionalitat i el compromís amb la seguretat.
          </p>
        </div>

        {/* Client logos - 3 rows with different speeds */}
        {clientLogos.length > 0 && (
          <div data-reveal="fade" className="mb-16">
            <p className="text-center text-sm font-semibold text-secondary/60 uppercase tracking-wider mb-8">
              Alguns dels nostres clients
            </p>

            <div className="max-w-3xl mx-auto space-y-4">
              {/* Row 1 - Slow (30s) */}
              <div className="relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-gray-50 to-transparent z-10" />
                <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-gray-50 to-transparent z-10" />
                <div className="flex animate-marquee" style={{ animationDuration: '30s' }}>
                  {[...row1, ...row1].map((logo, index) => (
                    <div key={`row1-${index}`} className="flex-shrink-0 mx-6">
                      <div className="w-24 h-12 relative grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
                        <Image src={`/logos/${logo}`} alt="" fill sizes="96px" quality={75} className="object-contain" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Row 2 - Medium (40s) - Reverse */}
              <div className="relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-gray-50 to-transparent z-10" />
                <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-gray-50 to-transparent z-10" />
                <div className="flex animate-marquee" style={{ animationDuration: '40s', animationDirection: 'reverse' }}>
                  {[...row2, ...row2].map((logo, index) => (
                    <div key={`row2-${index}`} className="flex-shrink-0 mx-6">
                      <div className="w-24 h-12 relative grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
                        <Image src={`/logos/${logo}`} alt="" fill sizes="96px" quality={75} className="object-contain" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Row 3 - Fast (25s) */}
              <div className="relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-gray-50 to-transparent z-10" />
                <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-gray-50 to-transparent z-10" />
                <div className="flex animate-marquee" style={{ animationDuration: '25s' }}>
                  {[...row3, ...row3].map((logo, index) => (
                    <div key={`row3-${index}`} className="flex-shrink-0 mx-6">
                      <div className="w-24 h-12 relative grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
                        <Image src={`/logos/${logo}`} alt="" fill sizes="96px" quality={75} className="object-contain" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Client types */}
        <div data-reveal="zoom">
          <div className="bg-secondary rounded-3xl p-6 sm:p-8 md:p-12 relative overflow-hidden noise-texture">
            <div className="text-center mb-10">
              <h3 className="font-heading text-2xl md:text-3xl font-bold text-white mb-4">
                {t('sectorsTitle')}
              </h3>
              <p className="text-white/70 max-w-2xl mx-auto">
                {t('sectorsSubtitle')}
              </p>
            </div>
            <div
              data-stagger="fade"
              data-stagger-seq="0.1"
              className="grid sm:grid-cols-2 md:grid-cols-3 gap-4"
            >
              {[0, 1, 2, 3, 4, 5].map((index) => (
                <div
                  key={index}
                  className="flex items-center space-x-4 bg-white/10 backdrop-blur-sm rounded-xl p-4 hover:bg-white/20 transition-all duration-500 group"
                  style={{ transitionTimingFunction: 'var(--ease-cinematic)' }}
                >
                  <div className="w-2 h-2 bg-accent-600 rounded-full transition-transform duration-500 group-hover:scale-125" style={{ transitionTimingFunction: 'var(--ease-cinematic)' }} />
                  <span className="text-white font-medium text-[15px]">{t(`sectors.${index}`)}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
