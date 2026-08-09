'use client'

import dynamic from 'next/dynamic'
import coordsData from '@/data/municipios-coords.json'

const MunicipiosMap = dynamic(() => import('./MunicipiosMap'), { ssr: false })

interface MunicipioBase {
  slug: string
  name: string
  zonaRadon: 'alta' | 'media' | 'baja'
  zonaActuacion?: 'I' | 'II'
  provincia: string
  comarca: string
}

interface MunicipiosMapWrapperProps {
  municipios: MunicipioBase[]
  locale: string
  height?: string
}

type CoordsMap = Record<string, { lat: number; lon: number }>

const coords = coordsData as CoordsMap

export default function MunicipiosMapWrapper({
  municipios,
  locale,
  height = '500px',
}: MunicipiosMapWrapperProps) {
  const municipiosWithCoords = municipios
    .filter((m) => coords[m.slug] !== undefined)
    .map((m) => ({
      ...m,
      lat: coords[m.slug].lat,
      lon: coords[m.slug].lon,
    }))

  if (municipiosWithCoords.length === 0) return null

  return (
    <MunicipiosMap
      municipios={municipiosWithCoords}
      locale={locale}
      height={height}
    />
  )
}
