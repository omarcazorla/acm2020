'use client'

import { useTranslations } from 'next-intl'
import { getFormConfig } from '@/data/form-configs'
import ContactFormBase from './ContactFormBase'

interface ServiceContactFormProps {
  formId: string
  prefill?: Record<string, string>
}

export default function ServiceContactForm({
  formId,
  prefill,
}: ServiceContactFormProps) {
  const t = useTranslations()
  const config = getFormConfig(formId)

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom max-w-3xl">
        <div className="text-center mb-10">
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-secondary mb-4">
            {t(config.titleKey)}
          </h2>
          {config.descriptionKey && (
            <p className="text-gray-600 text-lg">
              {t(config.descriptionKey)}
            </p>
          )}
        </div>
        <div className="bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-gray-100">
          <ContactFormBase formId={formId} prefill={prefill} />
        </div>
      </div>
    </section>
  )
}
