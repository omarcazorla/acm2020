export const amiantoCategories = [
  'inspeccion', 'gestion', 'desamiantado', 'certificacion', 'formacion',
] as const

export type AmiantoCategory = typeof amiantoCategories[number]

export interface ServicePage {
  slug: string
  translationKey: string
  category: 'amianto' | 'radon'
  subcategory?: AmiantoCategory
}

export const amiantoServices: ServicePage[] = [
  // Inspecccion y Diagnostico
  { slug: 'inspeccion-identificacion', translationKey: 'inspection', category: 'amianto', subcategory: 'inspeccion' },
  { slug: 'evaluacion-riesgos', translationKey: 'risk', category: 'amianto', subcategory: 'inspeccion' },
  { slug: 'muestreo-ambiental', translationKey: 'airSampling', category: 'amianto', subcategory: 'inspeccion' },
  { slug: 'censos-municipales', translationKey: 'censuses', category: 'amianto', subcategory: 'inspeccion' },
  { slug: 'amianto-aguas', translationKey: 'water', category: 'amianto', subcategory: 'inspeccion' },
  { slug: 'amianto-suelos', translationKey: 'soil', category: 'amianto', subcategory: 'inspeccion' },
  // Gestion y Consultoria
  { slug: 'planes-gestion', translationKey: 'management', category: 'amianto', subcategory: 'gestion' },
  { slug: 'auditorias', translationKey: 'audits', category: 'amianto', subcategory: 'gestion' },
  { slug: 'asesoria-consultoria', translationKey: 'consulting', category: 'amianto', subcategory: 'gestion' },
  { slug: 'gestion-residuos', translationKey: 'waste', category: 'amianto', subcategory: 'gestion' },
  // Desamiantado y Control
  { slug: 'proyectos-desamiantado', translationKey: 'projects', category: 'amianto', subcategory: 'desamiantado' },
  { slug: 'direccion-obra', translationKey: 'supervision', category: 'amianto', subcategory: 'desamiantado' },
  { slug: 'control-calidad-final', translationKey: 'qualityControl', category: 'amianto', subcategory: 'desamiantado' },
  { slug: 'control-periodico', translationKey: 'periodicControl', category: 'amianto', subcategory: 'desamiantado' },
  // Certificacion y Servicios Inmobiliarios
  { slug: 'compraventa-inmuebles', translationKey: 'realestate', category: 'amianto', subcategory: 'certificacion' },
  { slug: 'certificacion-breeam', translationKey: 'breeam', category: 'amianto', subcategory: 'certificacion' },
  { slug: 'comunidades-vecinos', translationKey: 'communities', category: 'amianto', subcategory: 'certificacion' },
  // Formacion
  { slug: 'formacion', translationKey: 'training', category: 'amianto', subcategory: 'formacion' },
]

export const radonServices: ServicePage[] = [
  { slug: 'medicion-gas-radon', translationKey: 'measurement', category: 'radon' },
  { slug: 'soluciones-residenciales', translationKey: 'residential', category: 'radon' },
  { slug: 'espacios-trabajo', translationKey: 'workspace', category: 'radon' },
  { slug: 'informes-tecnicos', translationKey: 'reports', category: 'radon' },
  { slug: 'formacion-radon', translationKey: 'training', category: 'radon' },
  { slug: 'como-medir-radon', translationKey: 'howto', category: 'radon' },
]

export const allServices = [...amiantoServices, ...radonServices]

export function getServiceBySlug(slug: string) {
  return allServices.find((s) => s.slug === slug)
}
