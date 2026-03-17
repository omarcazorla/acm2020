'use client'

import { useState } from 'react'
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  AlertCircle,
} from 'lucide-react'
import { useTranslations } from 'next-intl'

export default function Contact() {
  const t = useTranslations('contact')
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  const [honeypot, setHoneypot] = useState('')

  const contactInfo = [
    {
      icon: Phone,
      label: t('phone'),
      value: '667 623 844',
      href: 'tel:667623844',
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')

    try {
      const apiUrl = process.env.NEXT_PUBLIC_HAZARD_TRACKER_API_URL || ''
      const res = await fetch(`${apiUrl}/api/solicitudes/submit`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formState,
          source: 'web-acm2020',
          _hp: honeypot,
        }),
      })

      if (!res.ok) throw new Error('Submit failed')

      setStatus('success')
      setFormState({ name: '', email: '', phone: '', subject: '', message: '' })
      setTimeout(() => setStatus('idle'), 5000)
    } catch {
      setStatus('error')
      setTimeout(() => setStatus('idle'), 5000)
    }
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contacto" className="section-padding bg-white">
      <div className="container-custom">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
            {t('sectionLabel')}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-secondary mb-6">
            {t('title')}{' '}
            <span className="text-gradient">{t('titleHighlight')}</span>?
          </h2>
          <p className="text-lg text-gray-600">
            {t('subtitle')}
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact info */}
          <div className="lg:col-span-2">
            <div className="bg-secondary rounded-3xl p-8 h-full">
              <h3 className="text-2xl font-bold text-white mb-6">
                {t('infoTitle')}
              </h3>
              <p className="text-white/70 mb-8">
                {t('infoSubtitle')}
              </p>

              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <div className="text-white/60 text-sm mb-1">{item.label}</div>
                      {item.href ? (
                        <a
                          href={item.href}
                          target={item.href.startsWith('http') ? '_blank' : undefined}
                          rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                          className="text-white font-medium hover:text-primary transition-colors whitespace-pre-line"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <div className="text-white font-medium whitespace-pre-line">
                          {item.value}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Map */}
              <div className="mt-8 rounded-2xl overflow-hidden h-48 bg-white/10">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2988.5139755761886!2d2.1147563!3d41.5073889!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4bcb3a1d4f8c1%3A0x4b4b4b4b4b4b4b4b!2sC.%20Ibiza%2C%201%2C%2008214%20Bad%C3%ADa%20del%20Vall%C3%A8s%2C%20Barcelona!5e0!3m2!1ses!2ses!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="ACM-2020"
                />
              </div>
            </div>
          </div>

          {/* Contact form */}
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-secondary mb-2"
                  >
                    {t('form.name')} *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                    placeholder={t('form.namePlaceholder')}
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-secondary mb-2"
                  >
                    {t('form.email')} *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                    placeholder={t('form.emailPlaceholder')}
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-secondary mb-2"
                  >
                    {t('form.phone')}
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formState.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                    placeholder={t('form.phonePlaceholder')}
                  />
                </div>
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-secondary mb-2"
                  >
                    {t('form.subject')} *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formState.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-white"
                  >
                    <option value="">{t('form.subjectPlaceholder')}</option>
                    <option value="amianto">{t('form.subjectAsbestos')}</option>
                    <option value="radon">{t('form.subjectRadon')}</option>
                    <option value="presupuesto-amianto">{t('form.subjectBudgetAsbestos')}</option>
                    <option value="presupuesto-radon">{t('form.subjectBudgetRadon')}</option>
                    <option value="otro">{t('form.subjectOther')}</option>
                  </select>
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-secondary mb-2"
                >
                  {t('form.message')} *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
                  placeholder={t('form.messagePlaceholder')}
                />
              </div>

              {/* Honeypot field - hidden from users */}
              <input
                type="text"
                name="_hp"
                value={honeypot}
                onChange={(e) => setHoneypot(e.target.value)}
                tabIndex={-1}
                autoComplete="off"
                className="absolute opacity-0 h-0 w-0 overflow-hidden"
                aria-hidden="true"
              />

              <div className="flex items-center justify-between">
                <p className="text-sm text-gray-500">
                  * {t('form.required')}
                </p>
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="btn-primary group disabled:opacity-70"
                >
                  {status === 'sending' ? t('form.sending') : t('form.submit')}
                  <Send className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

              {/* Status messages */}
              {status === 'success' && (
                <div className="flex items-center space-x-2 text-green-600 bg-green-50 p-4 rounded-xl">
                  <CheckCircle className="w-5 h-5" />
                  <span>{t('form.success')}</span>
                </div>
              )}
              {status === 'error' && (
                <div className="flex items-center space-x-2 text-red-600 bg-red-50 p-4 rounded-xl">
                  <AlertCircle className="w-5 h-5" />
                  <span>{t('form.error')}</span>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
