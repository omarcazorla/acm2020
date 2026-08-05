export interface ServicePage {
  slug: string
  translationKey: string
  category: 'amianto' | 'radon'
  subcategory?: 'operativo' | 'consultoria'
}

export const amiantoServices: ServicePage[] = [
  // Operativos (bajo Plan de Trabajo 86/AB/09-001-B)
  { slug: 'inspeccion-identificacion', translationKey: 'inspection', category: 'amianto', subcategory: 'operativo' },
  { slug: 'evaluacion-riesgos', translationKey: 'risk', category: 'amianto', subcategory: 'operativo' },
  { slug: 'direccion-obra', translationKey: 'supervision', category: 'amianto', subcategory: 'operativo' },
  { slug: 'control-calidad-final', translationKey: 'qualityControl', category: 'amianto', subcategory: 'operativo' },
  { slug: 'control-periodico', translationKey: 'periodicControl', category: 'amianto', subcategory: 'operativo' },
  { slug: 'muestreo-ambiental', translationKey: 'airSampling', category: 'amianto', subcategory: 'operativo' },
  // Consultoria y Formacion
  { slug: 'asesoria-consultoria', translationKey: 'consulting', category: 'amianto', subcategory: 'consultoria' },
  { slug: 'formacion', translationKey: 'training', category: 'amianto', subcategory: 'consultoria' },
  { slug: 'censos-municipales', translationKey: 'censuses', category: 'amianto', subcategory: 'consultoria' },
  { slug: 'planes-gestion', translationKey: 'management', category: 'amianto', subcategory: 'consultoria' },
  { slug: 'auditorias', translationKey: 'audits', category: 'amianto', subcategory: 'consultoria' },
  { slug: 'proyectos-desamiantado', translationKey: 'projects', category: 'amianto', subcategory: 'consultoria' },
  { slug: 'gestion-residuos', translationKey: 'waste', category: 'amianto', subcategory: 'consultoria' },
  { slug: 'amianto-aguas', translationKey: 'water', category: 'amianto', subcategory: 'consultoria' },
  { slug: 'amianto-suelos', translationKey: 'soil', category: 'amianto', subcategory: 'consultoria' },
  { slug: 'comunidades-vecinos', translationKey: 'communities', category: 'amianto', subcategory: 'consultoria' },
  { slug: 'compraventa-inmuebles', translationKey: 'realestate', category: 'amianto', subcategory: 'consultoria' },
  { slug: 'certificacion-breeam', translationKey: 'breeam', category: 'amianto', subcategory: 'consultoria' },
]

export const amiantoOperativos = amiantoServices.filter((s) => s.subcategory === 'operativo')
export const amiantoConsultoria = amiantoServices.filter((s) => s.subcategory === 'consultoria')

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
