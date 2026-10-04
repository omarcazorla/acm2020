export const amiantoCategories = [
  'inspeccion', 'gestion', 'desamiantado', 'certificacion', 'formacion',
] as const

export type AmiantoCategory = typeof amiantoCategories[number]

export interface ServicePage {
  slug: string
  slugs: Record<string, string>
  translationKey: string
  category: 'amianto' | 'radon'
  subcategory?: AmiantoCategory
  formId?: string
}

export const amiantoServices: ServicePage[] = [
  // Inspecccion y Diagnostico
  { slug: 'inspeccion-identificacion', slugs: { es: 'inspeccion-identificacion', ca: 'inspeccio-identificacio', en: 'inspection-identification', fr: 'inspection-identification' }, translationKey: 'inspection', category: 'amianto', subcategory: 'inspeccion', formId: 'amianto-inspeccion' },
  { slug: 'evaluacion-riesgos', slugs: { es: 'evaluacion-riesgos', ca: 'avaluacio-riscos', en: 'risk-assessment', fr: 'evaluation-risques' }, translationKey: 'risk', category: 'amianto', subcategory: 'inspeccion' },
  { slug: 'muestreo-ambiental', slugs: { es: 'muestreo-ambiental', ca: 'mostreig-ambiental', en: 'air-sampling', fr: 'echantillonnage-environnemental' }, translationKey: 'airSampling', category: 'amianto', subcategory: 'inspeccion' },
  { slug: 'censos-municipales', slugs: { es: 'censos-municipales', ca: 'censos-municipals', en: 'municipal-censuses', fr: 'recensements-municipaux' }, translationKey: 'censuses', category: 'amianto', subcategory: 'inspeccion' },
  { slug: 'amianto-aguas', slugs: { es: 'amianto-aguas', ca: 'amiant-aigues', en: 'asbestos-water', fr: 'amiante-eaux' }, translationKey: 'water', category: 'amianto', subcategory: 'inspeccion' },
  { slug: 'amianto-suelos', slugs: { es: 'amianto-suelos', ca: 'amiant-sols', en: 'asbestos-soil', fr: 'amiante-sols' }, translationKey: 'soil', category: 'amianto', subcategory: 'inspeccion' },
  // Gestion y Consultoria
  { slug: 'planes-gestion', slugs: { es: 'planes-gestion', ca: 'plans-gestio', en: 'management-plans', fr: 'plans-gestion' }, translationKey: 'management', category: 'amianto', subcategory: 'gestion' },
  { slug: 'auditorias', slugs: { es: 'auditorias', ca: 'auditories', en: 'audits', fr: 'audits' }, translationKey: 'audits', category: 'amianto', subcategory: 'gestion' },
  { slug: 'asesoria-consultoria', slugs: { es: 'asesoria-consultoria', ca: 'assessoria-consultoria', en: 'consulting-advisory', fr: 'conseil-consulting' }, translationKey: 'consulting', category: 'amianto', subcategory: 'gestion' },
  { slug: 'gestion-residuos', slugs: { es: 'gestion-residuos', ca: 'gestio-residus', en: 'waste-management', fr: 'gestion-dechets' }, translationKey: 'waste', category: 'amianto', subcategory: 'gestion' },
  // Desamiantado y Control
  { slug: 'proyectos-desamiantado', slugs: { es: 'proyectos-desamiantado', ca: 'projectes-desamiantatge', en: 'asbestos-removal-projects', fr: 'projets-desamiantage' }, translationKey: 'projects', category: 'amianto', subcategory: 'desamiantado' },
  { slug: 'direccion-obra', slugs: { es: 'direccion-obra', ca: 'direccio-obra', en: 'site-supervision', fr: 'direction-travaux' }, translationKey: 'supervision', category: 'amianto', subcategory: 'desamiantado' },
  { slug: 'control-calidad-final', slugs: { es: 'control-calidad-final', ca: 'control-qualitat-final', en: 'final-quality-control', fr: 'controle-qualite-final' }, translationKey: 'qualityControl', category: 'amianto', subcategory: 'desamiantado' },
  { slug: 'control-periodico', slugs: { es: 'control-periodico', ca: 'control-periodic', en: 'periodic-monitoring', fr: 'controle-periodique' }, translationKey: 'periodicControl', category: 'amianto', subcategory: 'desamiantado' },
  // Certificacion y Servicios Inmobiliarios
  { slug: 'compraventa-inmuebles', slugs: { es: 'compraventa-inmuebles', ca: 'compravenda-immobles', en: 'property-transactions', fr: 'transactions-immobilieres' }, translationKey: 'realestate', category: 'amianto', subcategory: 'certificacion', formId: 'amianto-certificado' },
  { slug: 'certificacion-breeam', slugs: { es: 'certificacion-breeam', ca: 'certificacio-breeam', en: 'breeam-certification', fr: 'certification-breeam' }, translationKey: 'breeam', category: 'amianto', subcategory: 'certificacion' },
  { slug: 'comunidades-vecinos', slugs: { es: 'comunidades-vecinos', ca: 'comunitats-veins', en: 'homeowner-communities', fr: 'communautes-proprietaires' }, translationKey: 'communities', category: 'amianto', subcategory: 'certificacion' },
  // Formacion
  { slug: 'formacion', slugs: { es: 'formacion', ca: 'formacio', en: 'training', fr: 'formation' }, translationKey: 'training', category: 'amianto', subcategory: 'formacion' },
]

export const radonServices: ServicePage[] = [
  { slug: 'medicion-gas-radon', slugs: { es: 'medicion-gas-radon', ca: 'mesurament-gas-rado', en: 'radon-gas-measurement', fr: 'mesure-gaz-radon' }, translationKey: 'measurement', category: 'radon', formId: 'radon-cte' },
  { slug: 'soluciones-residenciales', slugs: { es: 'soluciones-residenciales', ca: 'solucions-residencials', en: 'residential-solutions', fr: 'solutions-residentielles' }, translationKey: 'residential', category: 'radon', formId: 'radon-hogar' },
  { slug: 'espacios-trabajo', slugs: { es: 'espacios-trabajo', ca: 'espais-treball', en: 'workspace-solutions', fr: 'espaces-travail' }, translationKey: 'workspace', category: 'radon', formId: 'radon-is47' },
  { slug: 'informes-tecnicos', slugs: { es: 'informes-tecnicos', ca: 'informes-tecnics', en: 'technical-reports', fr: 'rapports-techniques' }, translationKey: 'reports', category: 'radon' },
  { slug: 'formacion-radon', slugs: { es: 'formacion-radon', ca: 'formacio-rado', en: 'radon-training', fr: 'formation-radon' }, translationKey: 'training', category: 'radon' },
  { slug: 'como-medir-radon', slugs: { es: 'como-medir-radon', ca: 'com-mesurar-rado', en: 'how-to-measure-radon', fr: 'comment-mesurer-radon' }, translationKey: 'howto', category: 'radon' },
]

export const allServices = [...amiantoServices, ...radonServices]

export function getServiceBySlug(slug: string) {
  return allServices.find((s) => s.slug === slug)
}

export function getServiceByLocalizedSlug(
  services: ServicePage[], slug: string, locale: string
): ServicePage | undefined {
  return services.find(s => s.slugs[locale] === slug || s.slug === slug)
}

export function getLocalizedSlug(service: ServicePage, locale: string): string {
  return service.slugs[locale] || service.slugs.es
}
