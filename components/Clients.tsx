'use client'

import { Building2, Home, Landmark, Factory } from 'lucide-react'
import Image from 'next/image'
import { useTranslations } from 'next-intl'

const statKeys = [
  { key: 'projects', icon: Building2 },
  { key: 'clients', icon: Home },
  { key: 'municipalities', icon: Landmark },
  { key: 'companies', icon: Factory },
] as const

// Logos de clientes en /public/logos/
const clientLogos: string[] = [
  'ajuntament_badia_del_valles-1920w.png',
  'logo_bcn-1920w.webp',
  'diba-1920w.webp',
  'generalitat-departament-dempresa-i-ocupacio-1920w.webp',
  'agbar-1920w.webp',
  'aigu-es-de-barcelona-1920w.webp',
  'transports_metropolitans_barcelona-1920w.png',
  'Ferrocarris_de_la_Generalitat-1920w.png',
  'TV3-1920w.png',
  'bimsa-1920w.webp',
  'ajuntament_manresa-640w-1920w.webp',
  'ajuntament_martorell-1920w.webp',
  'agencia_residus_catalunya-1920w.webp',
  'consell_relacions_laborals_catalunya-1920w.webp',
  'gestora-de-runes-1920w.webp',
  'insst2-1920w.webp',
  'atl_aigua_ter-llobregat.gif',
]

export default function Clients() {
  const t = useTranslations('clients')
  const tAnchors = useTranslations('anchors')

  return (
    <section id={tAnchors('clients')} className="section-padding bg-gray-50">
      <div className="container-custom">
        {/* Section header */}
        <div data-reveal="fade" className="text-center max-w-3xl mx-auto mb-16">
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

        {/* Stats */}
        <div
          data-stagger="zoom"
          data-stagger-seq="0.1"
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 stagger-perspective"
        >
          {statKeys.map((stat) => (
            <div key={stat.key} className="bg-white rounded-2xl p-8 text-center shadow-sm border border-gray-100 hover:border-gray-200 card-hover h-full relative group overflow-hidden">
              <div
                className="absolute top-0 left-1/2 -translate-x-1/2 w-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent group-hover:w-full transition-all duration-700"
                style={{ transitionTimingFunction: 'var(--ease-cinematic)' }}
              />
              <div className="w-16 h-16 bg-primary/5 rounded-2xl flex items-center justify-center mx-auto mb-6 relative">
                <div
                  className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ transitionTimingFunction: 'var(--ease-cinematic)' }}
                />
                <stat.icon
                  strokeWidth={1.5}
                  className="w-8 h-8 text-primary relative z-10 transition-transform duration-500 group-hover:scale-110"
                  style={{ transitionTimingFunction: 'var(--ease-cinematic)' }}
                />
              </div>
              <div className="text-4xl md:text-5xl font-bold text-secondary mb-2 tabular-nums">
                {t(`stats.${stat.key}.value`)}
              </div>
              <div className="text-sm text-gray-600 font-medium">{t(`stats.${stat.key}.label`)}</div>
            </div>
          ))}
        </div>

        {/* Client logos marquee */}
        {clientLogos.length > 0 && (
          <div data-reveal="fade" className="mb-16">
            <p className="text-center text-sm text-gray-500 uppercase tracking-wider mb-8">
              {t('someClients')}
            </p>

            {/* Marquee container */}
            <div className="relative overflow-hidden bg-white rounded-2xl py-8 border border-gray-100">
              {/* Gradient overlays for smooth fade effect */}
              <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10" />
              <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10" />

              {/* Scrolling track */}
              <div className="flex animate-marquee">
                {/* First set of logos */}
                {clientLogos.map((logo, index) => (
                  <div
                    key={`logo-1-${index}`}
                    className="flex-shrink-0 mx-8 flex items-center justify-center"
                  >
                    <div className="w-32 h-16 relative grayscale hover:grayscale-0 opacity-60 hover:opacity-100" style={{ transition: 'opacity 0.5s var(--ease-cinematic), filter 0.5s var(--ease-cinematic)' }}>
                      <Image
                        src={`/logos/${logo}`}
                        alt={`Cliente ${index + 1}`}
                        fill
                        sizes="128px"
                        quality={75}
                        className="object-contain"
                      />
                    </div>
                  </div>
                ))}
                {/* Duplicate set for seamless loop */}
                {clientLogos.map((logo, index) => (
                  <div
                    key={`logo-2-${index}`}
                    className="flex-shrink-0 mx-8 flex items-center justify-center"
                  >
                    <div className="w-32 h-16 relative grayscale hover:grayscale-0 opacity-60 hover:opacity-100" style={{ transition: 'opacity 0.5s var(--ease-cinematic), filter 0.5s var(--ease-cinematic)' }}>
                      <Image
                        src={`/logos/${logo}`}
                        alt={`Cliente ${index + 1}`}
                        fill
                        sizes="128px"
                        quality={75}
                        className="object-contain"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Client types */}
        <div data-reveal="zoom">
          <div className="bg-secondary rounded-3xl p-8 md:p-12 relative overflow-hidden noise-texture">
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
                  <div className="w-2 h-2 bg-primary rounded-full transition-transform duration-500 group-hover:scale-125" style={{ transitionTimingFunction: 'var(--ease-cinematic)' }} />
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
