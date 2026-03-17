'use client'

import { MessageCircle } from 'lucide-react'
import { useTranslations } from 'next-intl'

export default function WhatsAppButton() {
  const t = useTranslations('whatsapp')
  const phoneNumber = '34667623844'
  const message = t('message')
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 hover:scale-110 transition-all duration-300 group"
      aria-label="WhatsApp"
    >
      <MessageCircle className="w-7 h-7 text-white" />

      {/* Tooltip */}
      <span className="absolute right-full mr-3 bg-gray-900 text-white text-sm px-3 py-2 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        {t('tooltip')}
      </span>

      {/* Pulse animation */}
      <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-25" />
    </a>
  )
}
