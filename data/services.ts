export interface ServicePage {
  slug: string
  translationKey: string
  category: 'amianto' | 'radon'
}

export const amiantoServices: ServicePage[] = [
  { slug: 'inspeccion-identificacion', translationKey: 'inspection', category: 'amianto' },
  { slug: 'planes-gestion', translationKey: 'management', category: 'amianto' },
  { slug: 'proyectos-desamiantado', translationKey: 'projects', category: 'amianto' },
  { slug: 'gestion-residuos', translationKey: 'waste', category: 'amianto' },
  { slug: 'direccion-obra', translationKey: 'supervision', category: 'amianto' },
  { slug: 'evaluacion-riesgos', translationKey: 'risk', category: 'amianto' },
  { slug: 'auditorias', translationKey: 'audits', category: 'amianto' },
  { slug: 'formacion', translationKey: 'training', category: 'amianto' },
  { slug: 'asesoria-consultoria', translationKey: 'consulting', category: 'amianto' },
  { slug: 'censos-municipales', translationKey: 'censuses', category: 'amianto' },
  { slug: 'amianto-aguas', translationKey: 'water', category: 'amianto' },
  { slug: 'amianto-suelos', translationKey: 'soil', category: 'amianto' },
  { slug: 'comunidades-vecinos', translationKey: 'communities', category: 'amianto' },
  { slug: 'compraventa-inmuebles', translationKey: 'realestate', category: 'amianto' },
  { slug: 'certificacion-breeam', translationKey: 'breeam', category: 'amianto' },
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
