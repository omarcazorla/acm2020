export type SolicitudStatus = 'nueva' | 'en_proceso' | 'respondida' | 'cerrada'
export type SolicitudPriority = 'alta' | 'media' | 'baja'
export type SolicitudCategory =
  | 'consulta'
  | 'solicitud_oferta'
  | 'soporte'
  | 'colaboracion'
  | 'proveedor'
  | 'otro'

export interface Solicitud {
  id: string
  created_at: string
  updated_at: string
  name: string
  email: string
  phone: string | null
  company: string | null
  subject: string
  message: string
  status: SolicitudStatus
  priority: SolicitudPriority
  category: SolicitudCategory
  source: string | null
  source_url: string | null
  form_id: string
  service_id: string | null
  service_category: string | null
  locale: string
  utm_campaign: string | null
  utm_source: string | null
  utm_medium: string | null
  qualification_data: Record<string, string | number | boolean>
  assigned_to: string | null
  notes: string | null
  privacy_accepted: boolean
  consent_timestamp: string | null
  honeypot: string | null
  replied_at: string | null
}

export interface SolicitudInsert {
  name: string
  email: string
  phone?: string | null
  company?: string | null
  subject: string
  message: string
  source?: string
  source_url?: string
  form_id?: string
  service_id?: string
  service_category?: string
  locale?: string
  utm_campaign?: string
  utm_source?: string
  utm_medium?: string
  qualification_data?: Record<string, string | number | boolean>
  privacy_accepted?: boolean
  consent_timestamp?: string
  honeypot?: string
}

export interface SolicitudUpdate {
  status?: SolicitudStatus
  priority?: SolicitudPriority
  category?: SolicitudCategory
  assigned_to?: string | null
  notes?: string | null
}
