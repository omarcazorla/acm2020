'use client'

import { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'
import {
  Inbox,
  ChevronLeft,
  ChevronRight,
  Filter,
  RefreshCw,
} from 'lucide-react'
import type { Solicitud, SolicitudStatus, SolicitudPriority } from '@/lib/types/solicitudes'

const statusLabels: Record<SolicitudStatus, string> = {
  nueva: 'Nueva',
  en_proceso: 'En proceso',
  respondida: 'Respondida',
  cerrada: 'Cerrada',
}

const statusColors: Record<SolicitudStatus, string> = {
  nueva: 'bg-blue-100 text-blue-700',
  en_proceso: 'bg-amber-100 text-amber-700',
  respondida: 'bg-green-100 text-green-700',
  cerrada: 'bg-gray-100 text-gray-500',
}

const priorityLabels: Record<SolicitudPriority, string> = {
  alta: 'Alta',
  media: 'Media',
  baja: 'Baja',
}

const priorityColors: Record<SolicitudPriority, string> = {
  alta: 'text-red-600',
  media: 'text-amber-600',
  baja: 'text-gray-500',
}

interface PaginatedResponse {
  data: Solicitud[]
  pagination: {
    page: number
    perPage: number
    total: number
    totalPages: number
  }
}

export default function SolicitudesListPage() {
  const [solicitudes, setSolicitudes] = useState<Solicitud[]>([])
  const [pagination, setPagination] = useState({
    page: 1,
    perPage: 20,
    total: 0,
    totalPages: 0,
  })
  const [loading, setLoading] = useState(true)

  // Filters
  const [filterStatus, setFilterStatus] = useState('')
  const [filterPriority, setFilterPriority] = useState('')
  const [filterCategory, setFilterCategory] = useState('')

  const fetchSolicitudes = useCallback(async (page = 1) => {
    setLoading(true)
    const params = new URLSearchParams()
    params.set('page', String(page))
    if (filterStatus) params.set('status', filterStatus)
    if (filterPriority) params.set('priority', filterPriority)
    if (filterCategory) params.set('service_category', filterCategory)

    try {
      const res = await fetch(`/api/solicitudes?${params}`)
      if (!res.ok) return
      const json = (await res.json()) as PaginatedResponse
      setSolicitudes(json.data)
      setPagination(json.pagination)
    } catch {
      // silent
    } finally {
      setLoading(false)
    }
  }, [filterStatus, filterPriority, filterCategory])

  useEffect(() => {
    fetchSolicitudes(1)
  }, [fetchSolicitudes])

  const formatDate = (dateStr: string) => {
    const d = new Date(dateStr)
    return d.toLocaleDateString('es-ES', {
      day: '2-digit',
      month: '2-digit',
      year: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
    })
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <Inbox className="w-6 h-6 text-gray-400" />
          <h1 className="text-2xl font-bold text-gray-900">Solicitudes</h1>
          <span className="text-sm text-gray-500 bg-gray-100 px-2 py-0.5 rounded-full">
            {pagination.total}
          </span>
        </div>
        <button
          onClick={() => fetchSolicitudes(pagination.page)}
          className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 transition-colors"
        >
          <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
          Actualizar
        </button>
      </div>

      {/* Filters */}
      <div className="flex items-center gap-3 mb-6 flex-wrap">
        <Filter className="w-4 h-4 text-gray-400" />
        <select
          value={filterStatus}
          onChange={(e) => setFilterStatus(e.target.value)}
          className="text-sm border border-gray-200 rounded-lg px-3 py-1.5 bg-white focus:border-orange-500 outline-none"
        >
          <option value="">Todos los estados</option>
          {Object.entries(statusLabels).map(([value, label]) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
        </select>
        <select
          value={filterPriority}
          onChange={(e) => setFilterPriority(e.target.value)}
          className="text-sm border border-gray-200 rounded-lg px-3 py-1.5 bg-white focus:border-orange-500 outline-none"
        >
          <option value="">Todas las prioridades</option>
          {Object.entries(priorityLabels).map(([value, label]) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
        </select>
        <select
          value={filterCategory}
          onChange={(e) => setFilterCategory(e.target.value)}
          className="text-sm border border-gray-200 rounded-lg px-3 py-1.5 bg-white focus:border-orange-500 outline-none"
        >
          <option value="">Todos los servicios</option>
          <option value="radon">Radon</option>
          <option value="amianto">Amianto</option>
          <option value="general">General</option>
        </select>
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-100 text-left">
              <th className="px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                Fecha
              </th>
              <th className="px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                Nombre
              </th>
              <th className="px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                Email
              </th>
              <th className="px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                Servicio
              </th>
              <th className="px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                Estado
              </th>
              <th className="px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                Prioridad
              </th>
            </tr>
          </thead>
          <tbody>
            {loading && solicitudes.length === 0 ? (
              <tr>
                <td colSpan={6} className="px-4 py-12 text-center text-gray-400">
                  Cargando...
                </td>
              </tr>
            ) : solicitudes.length === 0 ? (
              <tr>
                <td colSpan={6} className="px-4 py-12 text-center text-gray-400">
                  No hay solicitudes
                </td>
              </tr>
            ) : (
              solicitudes.map((s) => (
                <tr
                  key={s.id}
                  className="border-b border-gray-50 hover:bg-gray-50/50 transition-colors"
                >
                  <td className="px-4 py-3">
                    <Link
                      href={`/admin/solicitudes/${s.id}`}
                      className="text-sm text-gray-600"
                    >
                      {formatDate(s.created_at)}
                    </Link>
                  </td>
                  <td className="px-4 py-3">
                    <Link
                      href={`/admin/solicitudes/${s.id}`}
                      className="text-sm font-medium text-gray-900 hover:text-orange-600"
                    >
                      {s.name}
                    </Link>
                  </td>
                  <td className="px-4 py-3">
                    <span className="text-sm text-gray-600">{s.email}</span>
                  </td>
                  <td className="px-4 py-3">
                    <span className="text-sm text-gray-600">
                      {s.service_category || s.form_id}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <span
                      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${statusColors[s.status]}`}
                    >
                      {statusLabels[s.status]}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <span
                      className={`text-sm font-medium ${priorityColors[s.priority]}`}
                    >
                      {priorityLabels[s.priority]}
                    </span>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>

        {/* Pagination */}
        {pagination.totalPages > 1 && (
          <div className="flex items-center justify-between px-4 py-3 border-t border-gray-100">
            <span className="text-sm text-gray-500">
              Pagina {pagination.page} de {pagination.totalPages}
            </span>
            <div className="flex items-center gap-2">
              <button
                onClick={() => fetchSolicitudes(pagination.page - 1)}
                disabled={pagination.page <= 1}
                className="p-1.5 rounded-lg border border-gray-200 text-gray-400 hover:text-gray-600 disabled:opacity-40"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => fetchSolicitudes(pagination.page + 1)}
                disabled={pagination.page >= pagination.totalPages}
                className="p-1.5 rounded-lg border border-gray-200 text-gray-400 hover:text-gray-600 disabled:opacity-40"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
