'use client'

import { useMemo } from 'react'
import { Mail, Phone, MapPin, Clock } from 'lucide-react'
import { useTranslations } from 'next-intl'
import ContactFormBase from './forms/ContactFormBase'
import { Typewriter } from './ui/Typewriter'

interface ContactProps {
  formId?: string
  prefill?: Record<string, string>
}

export default function Contact({ formId = 'general', prefill }: ContactProps) {
  const t = useTranslations('contact')
  const tAnchors = useTranslations('anchors')

  const titleWords = t.raw('titleWords') as string[]
  const sequences = useMemo(
    () => titleWords.map((word) => ({ text: word, deleteAfter: true, pauseAfter: 2000 })),
    [titleWords],
  )

  const contactInfo = [
    {
      icon: Phone,
      label: t('phone'),
      value: '667 623 844',
      href: 'tel:+34667623844',
    },
    {
      icon: Mail,
      label: t('email'),
      value: 'acm@acm2020.es',
      href: 'mailto:acm@acm2020.es',
    },
    {
      icon: MapPin,
      label: t('address'),
      value: t('addressValue'),
      href: 'https://maps.google.com/?q=C.+Ibiza,+1,+Bajos+08214+Badia+del+Valles,+Barcelona',
    },
    {
      icon: Clock,
      label: t('hours'),
      value: t('hoursValue'),
      href: null,
    },
  ]

  return (
    <section id={tAnchors('contact')} className="section-padding bg-white">
      <div className="container-custom">
        {/* Section header */}
        <div data-reveal="fade" className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
            {t('sectionLabel')}
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-secondary mb-6">
            {t('title')}{' '}
            <Typewriter
              sequences={sequences}
              typingSpeed={60}
              deleteSpeed={35}
              pauseBeforeDelete={2000}
              startDelay={500}
              loopDelay={300}
              autoLoop
              naturalVariance
              className="font-accent italic text-[0.85em]"
            />
            {t('titleEnd')}
          </h2>
          <p className="text-lg text-gray-600">{t('subtitle')}</p>
        </div>

        {/* Contact form */}
        <div data-reveal="fade" className="max-w-3xl mx-auto">
          <ContactFormBase formId={formId} prefill={prefill} />
        </div>

        {/* Contact info — below form */}
        <div data-reveal="fade" className="mt-16">
          <div className="bg-secondary rounded-3xl p-8 lg:p-10 relative overflow-hidden noise-texture">
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-white mb-2">
                {t('infoTitle')}
              </h3>
              <p className="text-white/70">{t('infoSubtitle')}</p>
            </div>

            <div
              data-stagger="fade"
              data-stagger-seq="0.1"
              className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
            >
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-white/60 text-xs mb-1">
                        {item.label}
                      </div>
                      {item.href ? (
                        <a
                          href={item.href}
                          target={
                            item.href.startsWith('http') ? '_blank' : undefined
                          }
                          rel={
                            item.href.startsWith('http')
                              ? 'noopener noreferrer'
                              : undefined
                          }
                          className="text-white text-sm font-medium hover:text-primary transition-colors whitespace-pre-line"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <div className="text-white text-sm font-medium whitespace-pre-line">
                          {item.value}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
