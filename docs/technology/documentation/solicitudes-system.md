# Sistema de solicitudes

Ultima revision: 2026-10-01

Sistema de captacion y gestion de solicitudes integrado en la web ACM-2020. Formularios contextuales por servicio, almacenamiento en Supabase, notificaciones por email via Resend, y dashboard interno para gestionar cada solicitud.

## Stack

| Componente | Tecnologia |
|------------|-----------|
| Base de datos | Supabase (PostgreSQL) - proyecto `crm` (`awihlmdntgkpwpcclogv`, EU-Central-1) |
| Email | Resend (dominio `acm2020.es`) |
| Autenticacion | JWT (jose) + bcrypt contra tabla `users` del CRM |
| Frontend admin | Next.js App Router (rutas fuera de `[locale]`, solo espanol) |

## Arquitectura de archivos

```
lib/
  supabase.ts              # createServerClient() + createAnonClient()
  supabase-browser.ts      # createBrowserSupabaseClient() (singleton)
  resend.ts                # sendNotificationEmail() + sendResponseEmail()
  auth.ts                  # verifyCredentials, createSession, verifySession, destroySession
  types/solicitudes.ts     # Solicitud, SolicitudInsert, SolicitudUpdate

data/
  form-configs.ts          # Definicion de formularios por servicio (campos, opciones, i18n keys)

components/forms/
  ContactFormBase.tsx       # Formulario reutilizable (campos comunes + especificos del servicio)
  ServiceContactForm.tsx    # Wrapper con titulo/descripcion para incrustar en paginas

app/api/
  solicitudes/
    route.ts               # POST (publico: crear) + GET (auth: listar con filtros)
    [id]/
      route.ts             # GET (auth: detalle) + PATCH (auth: actualizar)
      respond/route.ts     # POST (auth: enviar respuesta por email)
  auth/
    login/route.ts         # POST: verificar credenciales, crear sesion JWT
    logout/route.ts        # POST: destruir sesion

app/admin/
  layout.tsx               # Auth guard (redirect a /admin/login si no hay sesion)
  AdminShell.tsx            # Sidebar + shell del dashboard
  login/
    layout.tsx             # Layout minimo sin auth check
    page.tsx               # Formulario de login
  solicitudes/
    page.tsx               # Tabla con filtros, paginacion, badges de estado
    [id]/page.tsx          # Vista detalle + controles + respuesta email
```

## Base de datos

Tabla `public.solicitudes` en el proyecto Supabase `crm`. RLS habilitado con policy de INSERT publico para el rol `anon`.

### Columnas

| Columna | Tipo | Default | Descripcion |
|---------|------|---------|-------------|
| id | uuid | gen_random_uuid() | PK |
| name | text | - | Nombre del solicitante |
| email | text | - | Email del solicitante |
| phone | text | null | Telefono |
| company | text | null | Empresa |
| subject | text | - | Asunto |
| message | text | - | Mensaje |
| status | text | 'nueva' | nueva, en_proceso, respondida, cerrada |
| priority | text | 'media' | alta, media, baja |
| category | text | 'consulta' | consulta, solicitud_oferta, soporte, colaboracion, proveedor, otro |
| form_id | text | 'general' | ID del formulario usado |
| service_id | text | null | Slug del servicio (ej: medicion-gas-radon) |
| service_category | text | null | Categoria: radon, amianto, general |
| source | text | null | Origen (web-acm2020) |
| source_url | text | null | URL completa desde donde se envio |
| locale | text | 'es' | Idioma del usuario |
| utm_campaign | text | null | UTM campaign |
| utm_source | text | null | UTM source |
| utm_medium | text | null | UTM medium |
| qualification_data | jsonb | {} | Campos especificos del servicio (municipio, m2, tipo edificio, etc.) |
| assigned_to | text | null | Persona asignada |
| notes | text | null | Notas internas |
| privacy_accepted | boolean | false | Consentimiento RGPD |
| consent_timestamp | timestamptz | null | Fecha del consentimiento |
| honeypot | text | null | Campo anti-spam |
| replied_at | timestamptz | null | Fecha de respuesta |
| created_at | timestamptz | now() | Fecha de creacion |
| updated_at | timestamptz | now() | Se actualiza automaticamente via trigger |

### Constraints

- `solicitudes_status_check`: status IN ('nueva', 'en_proceso', 'respondida', 'cerrada')
- `solicitudes_priority_check`: priority IN ('alta', 'media', 'baja')
- `solicitudes_category_check`: category IN ('consulta', 'solicitud_oferta', 'soporte', 'colaboracion', 'proveedor', 'otro')

### Indices

- `idx_solicitudes_status` (status)
- `idx_solicitudes_created_at` (created_at DESC)
- `idx_solicitudes_service_category` (service_category)

## Formularios

Cada formulario se define en `data/form-configs.ts`. Los campos comunes (nombre, email, telefono, empresa, mensaje, consentimiento) los gestiona `ContactFormBase`. Los campos especificos del servicio se almacenan como JSONB en `qualification_data`.

### Formularios disponibles

| form_id | Servicio | Campos especificos |
|---------|----------|--------------------|
| radon-cte | Medicion radon CTE | municipio, tipo_edificio, m2, fase_proyecto |
| radon-is47 | Radon centro trabajo IS-47 | municipio, tipo_centro, m2, num_trabajadores |
| radon-hogar | Radon vivienda | municipio, tipo_vivienda, m2 |
| amianto-inspeccion | Inspeccion amianto | tipo_edificio, anio_construccion, m2, ubicacion, urgencia |
| amianto-certificado | Certificado compraventa | direccion, tipo_edificio, anio_construccion, finalidad |
| general | Contacto general | motivo (selector de servicio) |

### Como enlazar un formulario desde una pagina

El formulario se selecciona via query parameter `?service=` en la pagina de contacto:

```
/contacto?service=radon-cte
/contacto?service=amianto-inspeccion&municipio=Badia+del+Valles
```

Los CTAs de las paginas de servicio ya enlazan con el parametro correspondiente.

## Autenticacion admin

El sistema usa la tabla `users` del CRM (misma base de datos Supabase), que almacena `password_hash` con bcrypt. No usa Supabase Auth.

Flujo: login con username + password -> verificar hash con bcrypt -> generar JWT (HS256, 7 dias) -> cookie httpOnly `acm_session` -> verificar en cada request del admin.

El middleware de next-intl excluye las rutas `/admin` para evitar locale routing.

## Variables de entorno

| Variable | Secreta | Descripcion |
|----------|---------|-------------|
| `NEXT_PUBLIC_SUPABASE_URL` | No | URL del proyecto Supabase |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | No | Clave publica anon |
| `SUPABASE_SERVICE_ROLE_KEY` | Si | Clave con acceso completo (bypassa RLS) |
| `RESEND_API_KEY` | Si | API key de Resend |
| `ADMIN_NOTIFICATION_EMAIL` | No | Email donde llegan las notificaciones (default: acm@acm2020.es) |
| `JWT_SECRET` | Si | Secreto para firmar tokens JWT de sesion |

Las variables secretas deben estar en Vercel (Settings > Environment Variables) y en `.env.local` para desarrollo local.

## Flujo de una solicitud

1. Usuario rellena formulario en la web publica
2. `ContactFormBase` hace POST a `/api/solicitudes` con todos los datos + honeypot + UTMs
3. La API valida campos, comprueba honeypot, inserta en Supabase via anon client (RLS permite INSERT)
4. Se envia email de notificacion a `acm@acm2020.es` via Resend (no bloquea la respuesta)
5. El usuario ve mensaje de confirmacion
6. Un admin accede a `/admin/solicitudes`, ve la nueva solicitud
7. Puede cambiar estado, prioridad, categoria, asignar responsable, anadir notas
8. Puede responder por email directamente desde el dashboard -> se envia via Resend, se marca como "respondida"

## Dashboard admin

Acceso: `acm2020.es/admin/login`

### Lista de solicitudes (`/admin/solicitudes`)
- Filtros por estado, prioridad y categoria de servicio
- Tabla con fecha, nombre, email, servicio, estado (badge de color), prioridad
- Paginacion

### Detalle de solicitud (`/admin/solicitudes/[id]`)
- Datos de contacto completos
- Mensaje original
- Datos de cualificacion (JSONB renderizado como key-value)
- Controles: estado, prioridad, categoria, asignado a
- Notas internas con auto-guardado (debounce 1s)
- Formulario de respuesta por email (asunto + cuerpo)
- Panel de metadata: timestamps, URL origen, locale, UTMs

## i18n

Los textos de los formularios estan en el namespace `forms` de los archivos de mensajes (`messages/es.json`, `ca.json`, `en.json`, `fr.json`). Estructura:

- `forms.common.*` - Labels y mensajes comunes (nombre, email, submit, success, etc.)
- `forms.{formId}.*` - Titulo y descripcion de cada formulario
- `forms.fields.*` - Labels de campos especificos
- `forms.options.*` - Opciones de selects

El dashboard admin no esta internacionalizado (solo espanol).
