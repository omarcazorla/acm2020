export interface FormFieldOption {
  value: string
  labelKey: string // i18n key under forms namespace
  locked?: boolean // pre-checked and not uncheckable
}

export interface FormField {
  name: string
  type: 'text' | 'select' | 'number' | 'textarea' | 'checkboxGroup'
  labelKey: string
  placeholderKey?: string
  options?: FormFieldOption[]
  required?: boolean
  fullWidth?: boolean // span both columns in grid
}

export interface FormConfig {
  id: string
  titleKey: string
  descriptionKey?: string
  serviceCategory: string
  serviceId?: string
  fields: FormField[]
}

export const formConfigs: Record<string, FormConfig> = {
  'radon-cte': {
    id: 'radon-cte',
    titleKey: 'forms.radonCte.title',
    descriptionKey: 'forms.radonCte.description',
    serviceCategory: 'radon',
    serviceId: 'medicion-gas-radon',
    fields: [
      {
        name: 'municipio',
        type: 'text',
        labelKey: 'forms.fields.municipio',
        placeholderKey: 'forms.fields.municipioPlaceholder',
        required: true,
      },
      {
        name: 'tipo_edificio',
        type: 'select',
        labelKey: 'forms.fields.tipoEdificio',
        required: true,
        options: [
          { value: 'residencial', labelKey: 'forms.options.residencial' },
          { value: 'comercial', labelKey: 'forms.options.comercial' },
          { value: 'industrial', labelKey: 'forms.options.industrial' },
          { value: 'publico', labelKey: 'forms.options.publico' },
        ],
      },
      {
        name: 'plantas_tipo',
        type: 'checkboxGroup',
        labelKey: 'forms.fields.plantasEdificio',
        fullWidth: true,
        options: [
          { value: 'bajo_rasante', labelKey: 'forms.options.plantasBajoRasante' },
          { value: 'planta_baja', labelKey: 'forms.options.plantaBaja', locked: true },
          { value: 'sobre_rasante', labelKey: 'forms.options.plantasSobreRasante' },
        ],
      },
      {
        name: 'm2',
        type: 'number',
        labelKey: 'forms.fields.m2',
        placeholderKey: 'forms.fields.m2Placeholder',
      },
      {
        name: 'fase_proyecto',
        type: 'select',
        labelKey: 'forms.fields.faseProyecto',
        options: [
          { value: 'proyecto', labelKey: 'forms.options.faseProyecto' },
          { value: 'construccion', labelKey: 'forms.options.faseConstruccion' },
          { value: 'existente', labelKey: 'forms.options.faseExistente' },
        ],
      },
    ],
  },

  'radon-is47': {
    id: 'radon-is47',
    titleKey: 'forms.radonIs47.title',
    descriptionKey: 'forms.radonIs47.description',
    serviceCategory: 'radon',
    serviceId: 'espacios-trabajo',
    fields: [
      {
        name: 'municipio',
        type: 'text',
        labelKey: 'forms.fields.municipio',
        placeholderKey: 'forms.fields.municipioPlaceholder',
        required: true,
      },
      {
        name: 'tipo_centro',
        type: 'select',
        labelKey: 'forms.fields.tipoCentro',
        required: true,
        options: [
          { value: 'oficina', labelKey: 'forms.options.oficina' },
          { value: 'fabrica', labelKey: 'forms.options.fabrica' },
          { value: 'almacen', labelKey: 'forms.options.almacen' },
          { value: 'educativo', labelKey: 'forms.options.educativo' },
          { value: 'sanitario', labelKey: 'forms.options.sanitario' },
          { value: 'otro', labelKey: 'forms.options.otro' },
        ],
      },
      {
        name: 'plantas_tipo',
        type: 'checkboxGroup',
        labelKey: 'forms.fields.plantasEdificioTrabajo',
        fullWidth: true,
        options: [
          { value: 'bajo_rasante', labelKey: 'forms.options.plantasBajoRasanteTrabajadores' },
          { value: 'planta_baja', labelKey: 'forms.options.plantaBaja', locked: true },
        ],
      },
      {
        name: 'm2',
        type: 'number',
        labelKey: 'forms.fields.m2',
        placeholderKey: 'forms.fields.m2Placeholder',
      },
      {
        name: 'num_trabajadores',
        type: 'number',
        labelKey: 'forms.fields.numTrabajadores',
        placeholderKey: 'forms.fields.numTrabajadoresPlaceholder',
      },
    ],
  },

  'radon-hogar': {
    id: 'radon-hogar',
    titleKey: 'forms.radonHogar.title',
    descriptionKey: 'forms.radonHogar.description',
    serviceCategory: 'radon',
    serviceId: 'soluciones-residenciales',
    fields: [
      {
        name: 'municipio',
        type: 'text',
        labelKey: 'forms.fields.municipio',
        placeholderKey: 'forms.fields.municipioPlaceholder',
        required: true,
      },
      {
        name: 'tipo_vivienda',
        type: 'select',
        labelKey: 'forms.fields.tipoVivienda',
        required: true,
        options: [
          { value: 'piso', labelKey: 'forms.options.piso' },
          { value: 'casa', labelKey: 'forms.options.casa' },
          { value: 'adosado', labelKey: 'forms.options.adosado' },
          { value: 'duplex', labelKey: 'forms.options.duplex' },
        ],
      },
      {
        name: 'm2',
        type: 'number',
        labelKey: 'forms.fields.m2',
        placeholderKey: 'forms.fields.m2Placeholder',
      },
    ],
  },

  'amianto-inspeccion': {
    id: 'amianto-inspeccion',
    titleKey: 'forms.amiantoInspeccion.title',
    descriptionKey: 'forms.amiantoInspeccion.description',
    serviceCategory: 'amianto',
    serviceId: 'inspeccion-identificacion',
    fields: [
      {
        name: 'tipo_edificio',
        type: 'select',
        labelKey: 'forms.fields.tipoEdificio',
        required: true,
        options: [
          { value: 'residencial', labelKey: 'forms.options.residencial' },
          { value: 'comercial', labelKey: 'forms.options.comercial' },
          { value: 'industrial', labelKey: 'forms.options.industrial' },
          { value: 'publico', labelKey: 'forms.options.publico' },
        ],
      },
      {
        name: 'anio_construccion',
        type: 'number',
        labelKey: 'forms.fields.anioConstruccion',
        placeholderKey: 'forms.fields.anioConstruccionPlaceholder',
      },
      {
        name: 'm2',
        type: 'number',
        labelKey: 'forms.fields.m2',
        placeholderKey: 'forms.fields.m2Placeholder',
      },
      {
        name: 'ubicacion',
        type: 'text',
        labelKey: 'forms.fields.ubicacion',
        placeholderKey: 'forms.fields.ubicacionPlaceholder',
      },
      {
        name: 'urgencia',
        type: 'select',
        labelKey: 'forms.fields.urgencia',
        options: [
          { value: 'normal', labelKey: 'forms.options.urgenciaNormal' },
          { value: 'urgente', labelKey: 'forms.options.urgenciaUrgente' },
          { value: 'planificada', labelKey: 'forms.options.urgenciaPlanificada' },
        ],
      },
    ],
  },

  'amianto-certificado': {
    id: 'amianto-certificado',
    titleKey: 'forms.amiantoCertificado.title',
    descriptionKey: 'forms.amiantoCertificado.description',
    serviceCategory: 'amianto',
    serviceId: 'compraventa-inmuebles',
    fields: [
      {
        name: 'direccion',
        type: 'text',
        labelKey: 'forms.fields.direccion',
        placeholderKey: 'forms.fields.direccionPlaceholder',
        required: true,
      },
      {
        name: 'tipo_edificio',
        type: 'select',
        labelKey: 'forms.fields.tipoEdificio',
        required: true,
        options: [
          { value: 'residencial', labelKey: 'forms.options.residencial' },
          { value: 'comercial', labelKey: 'forms.options.comercial' },
          { value: 'industrial', labelKey: 'forms.options.industrial' },
        ],
      },
      {
        name: 'anio_construccion',
        type: 'number',
        labelKey: 'forms.fields.anioConstruccion',
        placeholderKey: 'forms.fields.anioConstruccionPlaceholder',
      },
      {
        name: 'finalidad',
        type: 'select',
        labelKey: 'forms.fields.finalidad',
        required: true,
        options: [
          { value: 'venta', labelKey: 'forms.options.finalidadVenta' },
          { value: 'reforma', labelKey: 'forms.options.finalidadReforma' },
          { value: 'demolicion', labelKey: 'forms.options.finalidadDemolicion' },
        ],
      },
    ],
  },

  general: {
    id: 'general',
    titleKey: 'forms.general.title',
    descriptionKey: 'forms.general.description',
    serviceCategory: 'general',
    fields: [
      {
        name: 'motivo',
        type: 'select',
        labelKey: 'forms.fields.motivo',
        required: true,
        options: [
          { value: 'amianto', labelKey: 'forms.options.motivoAmianto' },
          { value: 'radon', labelKey: 'forms.options.motivoRadon' },
          { value: 'presupuesto-amianto', labelKey: 'forms.options.motivoPresupuestoAmianto' },
          { value: 'presupuesto-radon', labelKey: 'forms.options.motivoPresupuestoRadon' },
          { value: 'colaboracion', labelKey: 'forms.options.motivoColaboracion' },
          { value: 'otro', labelKey: 'forms.options.motivoOtro' },
        ],
      },
    ],
  },
}

export function getFormConfig(formId: string): FormConfig {
  return formConfigs[formId] || formConfigs.general
}
