'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import { Search, MapPin } from 'lucide-react'

interface MunicipioListItem {
  slug: string
  name: string
  provincia: string
  comarca: string
  zonaRadon: 'alta' | 'media' | 'baja'
}

interface MunicipiosIndexProps {
  municipios: MunicipioListItem[]
  locale: string
}

const zonaColors = {
  alta: 'bg-red-100 text-red-700',
  media: 'bg-yellow-100 text-yellow-700',
  baja: 'bg-green-100 text-green-700',
}

const zonaLabels = {
  es: { alta: 'Alta', media: 'Media', baja: 'Baja' },
  ca: { alta: 'Alta', media: 'Mitjana', baja: 'Baixa' },
  en: { alta: 'High', media: 'Medium', baja: 'Low' },
  fr: { alta: 'Elevee', media: 'Moyenne', baja: 'Faible' },
}

export default function MunicipiosIndex({ municipios, locale }: MunicipiosIndexProps) {
  const [search, setSearch] = useState('')
  const [filterProvincia, setFilterProvincia] = useState<string>('')
  const [filterZona, setFilterZona] = useState<string>('')

  const provincias = useMemo(() => {
    return [...new Set(municipios.map((m) => m.provincia))].sort()
  }, [municipios])

  const filtered = useMemo(() => {
    return municipios.filter((m) => {
      const matchSearch = !search ||
        m.name.toLowerCase().includes(search.toLowerCase()) ||
        m.comarca.toLowerCase().includes(search.toLowerCase())
      const matchProvincia = !filterProvincia || m.provincia === filterProvincia
      const matchZona = !filterZona || m.zonaRadon === filterZona
      return matchSearch && matchProvincia && matchZona
    })
  }, [municipios, search, filterProvincia, filterZona])

  const labels = zonaLabels[locale as keyof typeof zonaLabels] || zonaLabels.es

  return (
    <div>
      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4 mb-8">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder={locale === 'es' ? 'Buscar municipio...' : locale === 'ca' ? 'Cercar municipi...' : locale === 'fr' ? 'Rechercher...' : 'Search municipality...'}
            className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none"
          />
        </div>
        <select
          value={filterProvincia}
          onChange={(e) => setFilterProvincia(e.target.value)}
          className="px-4 py-3 rounded-xl border border-gray-200 bg-white focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none"
        >
          <option value="">
            {locale === 'es' ? 'Todas las provincias' : locale === 'ca' ? 'Totes les provincies' : locale === 'fr' ? 'Toutes les provinces' : 'All provinces'}
          </option>
          {provincias.map((p) => (
            <option key={p} value={p}>{p}</option>
          ))}
        </select>
        <select
          value={filterZona}
          onChange={(e) => setFilterZona(e.target.value)}
          className="px-4 py-3 rounded-xl border border-gray-200 bg-white focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none"
        >
          <option value="">
            {locale === 'es' ? 'Todas las zonas' : locale === 'ca' ? 'Totes les zones' : locale === 'fr' ? 'Toutes les zones' : 'All zones'}
          </option>
          <option value="alta">{labels.alta}</option>
          <option value="media">{labels.media}</option>
          <option value="baja">{labels.baja}</option>
        </select>
      </div>

      {/* Results count */}
      <p className="text-sm text-gray-500 mb-4">
        {filtered.length} {locale === 'es' ? 'municipios encontrados' : locale === 'ca' ? 'municipis trobats' : locale === 'fr' ? 'municipalites trouvees' : 'municipalities found'}
      </p>

      {/* List */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map((m) => (
          <Link
            key={m.slug}
            href={`/municipios/${m.slug}`}
            className="group flex items-start space-x-3 p-4 rounded-xl border border-gray-100 hover:border-primary/30 hover:shadow-md transition-all"
          >
            <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
            <div className="flex-1 min-w-0">
              <div className="font-semibold text-secondary group-hover:text-primary transition-colors truncate">
                {m.name}
              </div>
              <div className="text-xs text-gray-500">{m.comarca} · {m.provincia}</div>
            </div>
            <span className={`text-xs px-2 py-0.5 rounded-full font-medium flex-shrink-0 ${zonaColors[m.zonaRadon]}`}>
              {labels[m.zonaRadon]}
            </span>
          </Link>
        ))}
      </div>
    </div>
  )
}
