'use client'

import { useState, useEffect } from 'react'
import { useTranslations } from 'next-intl'
import { useLocale } from 'next-intl'
import { Send, CheckCircle, AlertCircle } from 'lucide-react'
import { getFormConfig } from '@/data/form-configs'
import type { FormField } from '@/data/form-configs'

interface ContactFormBaseProps {
  formId?: string
  prefill?: Record<string, string>
}

export default function ContactFormBase({
  formId = 'general',
  prefill,
}: ContactFormBaseProps) {
  const t = useTranslations()
  const locale = useLocale()
  const config = getFormConfig(formId)

  const [commonFields, setCommonFields] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  })
  const [qualificationData, setQualificationData] = useState<
    Record<string, string>
  >({})
  const [privacyAccepted, setPrivacyAccepted] = useState(false)
  const [honeypot, setHoneypot] = useState('')
  const [status, setStatus] = useState<
    'idle' | 'sending' | 'success' | 'error'
  >('idle')

  // Initialize locked checkbox values + apply prefill
  useEffect(() => {
    const lockedDefaults: Record<string, string> = {}
    for (const field of config.fields) {
      if (field.type === 'checkboxGroup' && field.options) {
        const lockedValues = field.options
          .filter((o) => o.locked)
          .map((o) => o.value)
        if (lockedValues.length > 0) {
          lockedDefaults[field.name] = lockedValues.join(',')
        }
      }
    }
    if (Object.keys(lockedDefaults).length > 0 || prefill) {
      setQualificationData((prev) => ({
        ...prev,
        ...lockedDefaults,
        ...prefill,
      }))
    }
  }, [config.fields, prefill])

  const handleCommonChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setCommonFields((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleQualChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setQualificationData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')

    // Build subject from form config
    const subject =
      qualificationData.motivo ||
      config.titleKey.split('.').pop() ||
      'Consulta general'

    // Capture UTM params
    const urlParams = new URLSearchParams(window.location.search)

    try {
      const res = await fetch('/api/solicitudes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...commonFields,
          subject,
          form_id: config.id,
          service_id: config.serviceId || null,
          service_category: config.serviceCategory,
          source_url: window.location.href,
          locale,
          utm_campaign: urlParams.get('utm_campaign') || undefined,
          utm_source: urlParams.get('utm_source') || undefined,
          utm_medium: urlParams.get('utm_medium') || undefined,
          qualification_data: qualificationData,
          privacy_accepted: privacyAccepted,
          _hp: honeypot,
        }),
      })

      if (!res.ok) throw new Error('Submit failed')

      setStatus('success')
      setCommonFields({ name: '', email: '', phone: '', company: '', message: '' })
      setQualificationData({})
      setPrivacyAccepted(false)
      setTimeout(() => setStatus('idle'), 5000)
    } catch {
      setStatus('error')
      setTimeout(() => setStatus('idle'), 5000)
    }
  }

  const inputClasses =
    'w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none'
  const inputTransition = {
    transition:
      'border-color 0.3s var(--ease-cinematic), box-shadow 0.3s var(--ease-cinematic)',
  }

  const renderField = (field: FormField) => {
    const label = t(field.labelKey)
    const placeholder = field.placeholderKey ? t(field.placeholderKey) : ''

    if (field.type === 'select' && field.options) {
      return (
        <div key={field.name}>
          <label
            htmlFor={field.name}
            className="block text-sm font-medium text-secondary mb-2"
          >
            {label} {field.required && '*'}
          </label>
          <select
            id={field.name}
            name={field.name}
            value={qualificationData[field.name] || ''}
            onChange={handleQualChange}
            required={field.required}
            className={`${inputClasses} bg-white`}
            style={inputTransition}
          >
            <option value="">{t('forms.common.selectPlaceholder')}</option>
            {field.options.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {t(opt.labelKey)}
              </option>
            ))}
          </select>
        </div>
      )
    }

    if (field.type === 'checkboxGroup' && field.options) {
      const currentValues = (qualificationData[field.name] || '').split(',').filter(Boolean)

      const handleCheckboxToggle = (value: string, checked: boolean) => {
        const updated = checked
          ? [...currentValues, value]
          : currentValues.filter((v) => v !== value)
        setQualificationData((prev) => ({
          ...prev,
          [field.name]: updated.join(','),
        }))
      }

      return (
        <div key={field.name} className={field.fullWidth ? 'sm:col-span-2' : ''}>
          <span className="block text-sm font-medium text-secondary mb-3">
            {label}
          </span>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            {field.options.map((opt) => {
              const isLocked = opt.locked === true
              const isChecked = isLocked || currentValues.includes(opt.value)
              return (
                <label
                  key={opt.value}
                  className={`flex items-center gap-2 cursor-pointer ${isLocked ? 'opacity-70 cursor-default' : ''}`}
                >
                  <input
                    type="checkbox"
                    checked={isChecked}
                    disabled={isLocked}
                    onChange={(e) =>
                      handleCheckboxToggle(opt.value, e.target.checked)
                    }
                    className="w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary disabled:opacity-60"
                  />
                  <span className="text-sm text-gray-700">{t(opt.labelKey)}</span>
                </label>
              )
            })}
          </div>
        </div>
      )
    }

    if (field.type === 'textarea') {
      return (
        <div key={field.name} className="sm:col-span-2">
          <label
            htmlFor={field.name}
            className="block text-sm font-medium text-secondary mb-2"
          >
            {label} {field.required && '*'}
          </label>
          <textarea
            id={field.name}
            name={field.name}
            value={qualificationData[field.name] || ''}
            onChange={handleQualChange}
            required={field.required}
            rows={4}
            className={`${inputClasses} resize-none`}
            style={inputTransition}
            placeholder={placeholder}
          />
        </div>
      )
    }

    return (
      <div key={field.name} className={field.fullWidth ? 'sm:col-span-2' : ''}>
        <label
          htmlFor={field.name}
          className="block text-sm font-medium text-secondary mb-2"
        >
          {label} {field.required && '*'}
        </label>
        <input
          type={field.type === 'number' ? 'number' : 'text'}
          id={field.name}
          name={field.name}
          value={qualificationData[field.name] || ''}
          onChange={handleQualChange}
          required={field.required}
          className={inputClasses}
          style={inputTransition}
          placeholder={placeholder}
        />
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Common fields */}
      <div className="grid sm:grid-cols-2 gap-6">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-secondary mb-2"
          >
            {t('forms.common.name')} *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={commonFields.name}
            onChange={handleCommonChange}
            required
            className={inputClasses}
            style={inputTransition}
            placeholder={t('forms.common.namePlaceholder')}
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-secondary mb-2"
          >
            {t('forms.common.email')} *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={commonFields.email}
            onChange={handleCommonChange}
            required
            className={inputClasses}
            style={inputTransition}
            placeholder={t('forms.common.emailPlaceholder')}
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-6">
        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-secondary mb-2"
          >
            {t('forms.common.phone')}
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={commonFields.phone}
            onChange={handleCommonChange}
            className={inputClasses}
            style={inputTransition}
            placeholder={t('forms.common.phonePlaceholder')}
          />
        </div>
        <div>
          <label
            htmlFor="company"
            className="block text-sm font-medium text-secondary mb-2"
          >
            {t('forms.common.company')}
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={commonFields.company}
            onChange={handleCommonChange}
            className={inputClasses}
            style={inputTransition}
            placeholder={t('forms.common.companyPlaceholder')}
          />
        </div>
      </div>

      {/* Service-specific fields */}
      {config.fields.length > 0 && (
        <div className="grid sm:grid-cols-2 gap-6">
          {config.fields.map(renderField)}
        </div>
      )}

      {/* Message */}
      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-secondary mb-2"
        >
          {t('forms.common.message')} *
        </label>
        <textarea
          id="message"
          name="message"
          value={commonFields.message}
          onChange={handleCommonChange}
          required
          rows={6}
          className={`${inputClasses} resize-none`}
          style={inputTransition}
          placeholder={t('forms.common.messagePlaceholder')}
        />
      </div>

      {/* Honeypot */}
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

      {/* Privacy checkbox */}
      <label className="flex items-start gap-3 cursor-pointer">
        <input
          type="checkbox"
          checked={privacyAccepted}
          onChange={(e) => setPrivacyAccepted(e.target.checked)}
          required
          className="mt-1 w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary"
        />
        <span className="text-sm text-gray-600">
          {t('forms.common.privacy')} *
        </span>
      </label>

      <div className="flex items-center justify-between">
        <p className="text-sm text-gray-500">* {t('forms.common.required')}</p>
        <button
          type="submit"
          disabled={status === 'sending'}
          className="btn-primary group disabled:opacity-70"
        >
          {status === 'sending'
            ? t('forms.common.sending')
            : t('forms.common.submit')}
          <Send className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

      {status === 'success' && (
        <div className="flex items-center space-x-2 text-green-600 bg-green-50 p-4 rounded-xl">
          <CheckCircle className="w-5 h-5 flex-shrink-0" />
          <span>{t('forms.common.success')}</span>
        </div>
      )}
      {status === 'error' && (
        <div className="flex items-center space-x-2 text-red-600 bg-red-50 p-4 rounded-xl">
          <AlertCircle className="w-5 h-5 flex-shrink-0" />
          <span>{t('forms.common.error')}</span>
        </div>
      )}
    </form>
  )
}
