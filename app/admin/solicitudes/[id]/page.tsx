'use client'

import { useState, useEffect, useCallback } from 'react'
import { useParams, useRouter } from 'next/navigation'
import Link from 'next/link'
import {
  ArrowLeft,
  Save,
  Send,
  CheckCircle,
  AlertCircle,
  Clock,
  User,
  Mail,
  Phone,
  Building,
  Globe,
  Tag,
} from 'lucide-react'
import type {
  Solicitud,
  SolicitudStatus,
  SolicitudPriority,
  SolicitudCategory,
} from '@/lib/types/solicitudes'

const statusOptions: { value: SolicitudStatus; label: string }[] = [
  { value: 'nueva', label: 'Nueva' },
  { value: 'en_proceso', label: 'En proceso' },
  { value: 'respondida', label: 'Respondida' },
  { value: 'cerrada', label: 'Cerrada' },
]

const priorityOptions: { value: SolicitudPriority; label: string }[] = [
  { value: 'alta', label: 'Alta' },
  { value: 'media', label: 'Media' },
  { value: 'baja', label: 'Baja' },
]

const categoryOptions: { value: SolicitudCategory; label: string }[] = [
  { value: 'consulta', label: 'Consulta' },
  { value: 'solicitud_oferta', label: 'Solicitud de oferta' },
  { value: 'soporte', label: 'Soporte' },
  { value: 'colaboracion', label: 'Colaboracion' },
  { value: 'proveedor', label: 'Proveedor' },
  { value: 'otro', label: 'Otro' },
]

export default function SolicitudDetailPage() {
  const params = useParams()
  const router = useRouter()
  const id = params.id as string

  const [solicitud, setSolicitud] = useState<Solicitud | null>(null)
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [notes, setNotes] = useState('')
  const [notesTimer, setNotesTimer] = useState<ReturnType<typeof setTimeout> | null>(null)

  // Response form
  const [replySubject, setReplySubject] = useState('')
  const [replyBody, setReplyBody] = useState('')
  const [replying, setReplying] = useState(false)
  const [replyStatus, setReplyStatus] = useState<'idle' | 'success' | 'error'>(
    'idle'
  )

  const fetchSolicitud = useCallback(async () => {
    setLoading(true)
    try {
      const res = await fetch(`/api/solicitudes/${id}`)
      if (!res.ok) {
        router.push('/admin/solicitudes')
        return
      }
      const data = (await res.json()) as Solicitud
      setSolicitud(data)
      setNotes(data.notes || '')
    } catch {
      router.push('/admin/solicitudes')
    } finally {
      setLoading(false)
    }
  }, [id, router])

  useEffect(() => {
    fetchSolicitud()
  }, [fetchSolicitud])

  const updateField = async (field: string, value: string | null) => {
    setSaving(true)
    try {
      const res = await fetch(`/api/solicitudes/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ [field]: value }),
      })
      if (res.ok) {
        const updated = (await res.json()) as Solicitud
        setSolicitud(updated)
      }
    } catch {
      // silent
    } finally {
      setSaving(false)
    }
  }

  const handleNotesChange = (value: string) => {
    setNotes(value)
    if (notesTimer) clearTimeout(notesTimer)
    const timer = setTimeout(() => {
      updateField('notes', value)
    }, 1000)
    setNotesTimer(timer)
  }

  const handleReply = async (e: React.FormEvent) => {
    e.preventDefault()
    setReplying(true)
    setReplyStatus('idle')

    try {
      const res = await fetch(`/api/solicitudes/${id}/respond`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          subject: replySubject,
          body: replyBody,
        }),
      })

      if (!res.ok) throw new Error()

      setReplyStatus('success')
      setReplySubject('')
      setReplyBody('')
      fetchSolicitud()
    } catch {
      setReplyStatus('error')
    } finally {
      setReplying(false)
    }
  }

  if (loading) {
    return (
      <div className="text-center py-20 text-gray-400">
        Cargando solicitud...
      </div>
    )
  }

  if (!solicitud) return null

  const qualData = solicitud.qualification_data || {}
  const hasQualData = Object.keys(qualData).length > 0

  const formatDate = (dateStr: string | null) => {
    if (!dateStr) return '-'
    return new Date(dateStr).toLocaleDateString('es-ES', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    })
  }

  return (
    <div className="max-w-5xl">
      {/* Header */}
      <div className="flex items-center gap-4 mb-6">
        <Link
          href="/admin/solicitudes"
          className="p-2 rounded-lg border border-gray-200 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
        </Link>
        <div className="flex-1">
          <h1 className="text-xl font-bold text-gray-900">{solicitud.name}</h1>
          <p className="text-sm text-gray-500">
            {formatDate(solicitud.created_at)} &middot; {solicitud.form_id}
          </p>
        </div>
        {saving && (
          <span className="text-xs text-gray-400 flex items-center gap-1">
            <Save className="w-3 h-3" /> Guardando...
          </span>
        )}
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Main content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Contact info */}
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">
              Datos de contacto
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="flex items-center gap-3">
                <User className="w-4 h-4 text-gray-400" />
                <span className="text-sm text-gray-900">{solicitud.name}</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-gray-400" />
                <a
                  href={`mailto:${solicitud.email}`}
                  className="text-sm text-orange-600 hover:underline"
                >
                  {solicitud.email}
                </a>
              </div>
              {solicitud.phone && (
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-gray-400" />
                  <a
                    href={`tel:${solicitud.phone}`}
                    className="text-sm text-gray-900"
                  >
                    {solicitud.phone}
                  </a>
                </div>
              )}
              {solicitud.company && (
                <div className="flex items-center gap-3">
                  <Building className="w-4 h-4 text-gray-400" />
                  <span className="text-sm text-gray-900">
                    {solicitud.company}
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* Message */}
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">
              Mensaje
            </h2>
            <p className="text-gray-700 whitespace-pre-wrap leading-relaxed">
              {solicitud.message}
            </p>
          </div>

          {/* Qualification data */}
          {hasQualData && (
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">
                Datos de cualificacion
              </h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {Object.entries(qualData).map(([key, value]) => (
                  <div key={key} className="flex items-start gap-2">
                    <Tag className="w-4 h-4 text-gray-400 mt-0.5" />
                    <div>
                      <span className="text-xs text-gray-500 block">
                        {key.replace(/_/g, ' ')}
                      </span>
                      <span className="text-sm text-gray-900">
                        {String(value)}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Internal notes */}
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">
              Notas internas
            </h2>
            <textarea
              value={notes}
              onChange={(e) => handleNotesChange(e.target.value)}
              rows={4}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 outline-none resize-none text-sm"
              placeholder="Notas internas (auto-guarda)..."
            />
          </div>

          {/* Reply form */}
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">
              Responder por email
            </h2>
            <form onSubmit={handleReply} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Asunto
                </label>
                <input
                  type="text"
                  value={replySubject}
                  onChange={(e) => setReplySubject(e.target.value)}
                  required
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 outline-none text-sm"
                  placeholder="Re: Su solicitud sobre..."
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Cuerpo del email
                </label>
                <textarea
                  value={replyBody}
                  onChange={(e) => setReplyBody(e.target.value)}
                  required
                  rows={6}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 outline-none resize-none text-sm"
                  placeholder="Estimado/a..."
                />
              </div>
              <button
                type="submit"
                disabled={replying}
                className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white text-sm font-medium px-5 py-2.5 rounded-xl transition-colors disabled:opacity-70"
              >
                {replying ? 'Enviando...' : 'Enviar respuesta'}
                <Send className="w-4 h-4" />
              </button>

              {replyStatus === 'success' && (
                <div className="flex items-center gap-2 text-green-600 bg-green-50 p-3 rounded-xl text-sm">
                  <CheckCircle className="w-4 h-4" />
                  Email enviado correctamente
                </div>
              )}
              {replyStatus === 'error' && (
                <div className="flex items-center gap-2 text-red-600 bg-red-50 p-3 rounded-xl text-sm">
                  <AlertCircle className="w-4 h-4" />
                  Error al enviar el email
                </div>
              )}
            </form>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Status controls */}
          <div className="bg-white rounded-xl border border-gray-200 p-6 space-y-4">
            <div>
              <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                Estado
              </label>
              <select
                value={solicitud.status}
                onChange={(e) => updateField('status', e.target.value)}
                className="w-full px-3 py-2 rounded-lg border border-gray-200 text-sm focus:border-orange-500 outline-none bg-white"
              >
                {statusOptions.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                Prioridad
              </label>
              <select
                value={solicitud.priority}
                onChange={(e) => updateField('priority', e.target.value)}
                className="w-full px-3 py-2 rounded-lg border border-gray-200 text-sm focus:border-orange-500 outline-none bg-white"
              >
                {priorityOptions.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                Categoria
              </label>
              <select
                value={solicitud.category}
                onChange={(e) => updateField('category', e.target.value)}
                className="w-full px-3 py-2 rounded-lg border border-gray-200 text-sm focus:border-orange-500 outline-none bg-white"
              >
                {categoryOptions.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                Asignado a
              </label>
              <input
                type="text"
                value={solicitud.assigned_to || ''}
                onChange={(e) =>
                  updateField('assigned_to', e.target.value || null)
                }
                className="w-full px-3 py-2 rounded-lg border border-gray-200 text-sm focus:border-orange-500 outline-none"
                placeholder="Sin asignar"
              />
            </div>
          </div>

          {/* Metadata */}
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4">
              Metadata
            </h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-gray-400 mt-0.5" />
                <div>
                  <span className="text-gray-500 block text-xs">Creada</span>
                  <span className="text-gray-700">
                    {formatDate(solicitud.created_at)}
                  </span>
                </div>
              </div>
              {solicitud.replied_at && (
                <div className="flex items-start gap-2">
                  <Send className="w-4 h-4 text-gray-400 mt-0.5" />
                  <div>
                    <span className="text-gray-500 block text-xs">
                      Respondida
                    </span>
                    <span className="text-gray-700">
                      {formatDate(solicitud.replied_at)}
                    </span>
                  </div>
                </div>
              )}
              {solicitud.source_url && (
                <div className="flex items-start gap-2">
                  <Globe className="w-4 h-4 text-gray-400 mt-0.5" />
                  <div>
                    <span className="text-gray-500 block text-xs">
                      URL origen
                    </span>
                    <span className="text-gray-700 break-all text-xs">
                      {solicitud.source_url}
                    </span>
                  </div>
                </div>
              )}
              <div className="flex items-start gap-2">
                <Globe className="w-4 h-4 text-gray-400 mt-0.5" />
                <div>
                  <span className="text-gray-500 block text-xs">Locale</span>
                  <span className="text-gray-700">{solicitud.locale}</span>
                </div>
              </div>
              {(solicitud.utm_source ||
                solicitud.utm_medium ||
                solicitud.utm_campaign) && (
                <div className="pt-2 border-t border-gray-100">
                  <span className="text-gray-500 block text-xs mb-1">UTM</span>
                  {solicitud.utm_source && (
                    <div className="text-xs text-gray-600">
                      source: {solicitud.utm_source}
                    </div>
                  )}
                  {solicitud.utm_medium && (
                    <div className="text-xs text-gray-600">
                      medium: {solicitud.utm_medium}
                    </div>
                  )}
                  {solicitud.utm_campaign && (
                    <div className="text-xs text-gray-600">
                      campaign: {solicitud.utm_campaign}
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
