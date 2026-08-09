'use client'

import { useEffect, useState } from 'react'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import { MapContainer, TileLayer, CircleMarker, Popup } from 'react-leaflet'

// Fix leaflet default icons with webpack
delete (L.Icon.Default.prototype as any)._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
})

interface MunicipioMapData {
  slug: string
  name: string
  lat: number
  lon: number
  zonaRadon: 'alta' | 'media' | 'baja'
  zonaActuacion?: 'I' | 'II'
  provincia: string
  comarca: string
}

interface MunicipiosMapProps {
  municipios: MunicipioMapData[]
  locale: string
  height?: string
}

const ZONE_COLORS: Record<string, { fillColor: string; color: string }> = {
  alta:  { fillColor: '#ef4444', color: '#dc2626' },
  media: { fillColor: '#eab308', color: '#ca8a04' },
  baja:  { fillColor: '#6b7280', color: '#4b5563' },
}

type LocaleKey = 'ca' | 'es' | 'en' | 'fr'

const ZONE_LABELS: Record<LocaleKey, Record<string, string>> = {
  ca: { alta: 'Alta',   media: 'Mitjana', baja: 'Baixa' },
  es: { alta: 'Alta',   media: 'Media',   baja: 'Baja' },
  en: { alta: 'High',   media: 'Medium',  baja: 'Low' },
  fr: { alta: 'Élevée', media: 'Moyenne', baja: 'Faible' },
}

function getZoneLabel(zonaRadon: string, locale: string): string {
  const key = locale as LocaleKey
  return (ZONE_LABELS[key] ?? ZONE_LABELS.es)[zonaRadon] ?? zonaRadon
}

export default function MunicipiosMap({ municipios, locale, height = '500px' }: MunicipiosMapProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (typeof window === 'undefined' || !mounted) return null

  const labels = ZONE_LABELS[locale as LocaleKey] ?? ZONE_LABELS.es

  return (
    <div style={{ position: 'relative', height, width: '100%' }}>
      <MapContainer
        center={[41.8, 1.7]}
        zoom={8}
        style={{ height: '100%', width: '100%' }}
        scrollWheelZoom={false}
      >
        <TileLayer
          url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
        />

        {municipios.map((m) => {
          const { fillColor, color } = ZONE_COLORS[m.zonaRadon] ?? ZONE_COLORS.baja
          const zoneLabel = getZoneLabel(m.zonaRadon, locale)

          return (
            <CircleMarker
              key={m.slug}
              center={[m.lat, m.lon]}
              radius={7}
              pathOptions={{
                fillColor,
                color,
                fillOpacity: 0.85,
                weight: 1.5,
              }}
            >
              <Popup>
                <div style={{ minWidth: '140px' }}>
                  <strong style={{ fontSize: '14px' }}>{m.name}</strong>
                  <br />
                  <span style={{ color: '#555', fontSize: '12px' }}>{m.comarca}</span>
                  <br />
                  <span style={{ fontSize: '12px' }}>
                    Radó: <span style={{ color: fillColor, fontWeight: 600 }}>{zoneLabel}</span>
                  </span>
                  <br />
                  <a
                    href={`/municipios/${m.slug}`}
                    style={{ fontSize: '12px', color: '#2563eb', textDecoration: 'underline' }}
                  >
                    Veure detalls →
                  </a>
                </div>
              </Popup>
            </CircleMarker>
          )
        })}
      </MapContainer>

      {/* Legend */}
      <div
        style={{
          position: 'absolute',
          bottom: '24px',
          left: '12px',
          zIndex: 1000,
          background: 'rgba(255,255,255,0.92)',
          borderRadius: '6px',
          padding: '8px 12px',
          boxShadow: '0 1px 5px rgba(0,0,0,0.2)',
          fontSize: '12px',
          lineHeight: '1.8',
          pointerEvents: 'none',
        }}
      >
        {(['alta', 'media', 'baja'] as const).map((zone) => (
          <div key={zone} style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <span
              style={{
                display: 'inline-block',
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                background: ZONE_COLORS[zone].fillColor,
                border: `2px solid ${ZONE_COLORS[zone].color}`,
                flexShrink: 0,
              }}
            />
            <span>{labels[zone]}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
