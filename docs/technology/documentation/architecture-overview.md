# Arquitectura del proyecto

Ultima revision: 2026-10-01

## Stack

| Capa | Tecnologia |
|------|-----------|
| Framework | Next.js 16 (App Router, Turbopack) |
| Lenguaje | TypeScript (strict mode) |
| Estilos | Tailwind CSS 3.4 |
| Animaciones | IntersectionObserver cinematic system + CSS keyframes |
| i18n | next-intl 4.8 (es, ca, en, fr) |
| Mapas | React Leaflet + OpenStreetMap/CARTO tiles |
| Iconos | Lucide React |
| Contenido | Datos estaticos en TypeScript (data/*.ts) |
| Blog | MDX (estructura lista, sin contenido) |
| Base de datos | Supabase (PostgreSQL) - proyecto `crm` |
| Email | Resend (dominio acm2020.es) |
| Auth admin | JWT (jose) + bcrypt contra tabla `users` del CRM |

## Generacion de paginas

Las paginas publicas son SSG (Static Site Generation) via `generateStaticParams`. El build genera ~2700 paginas HTML estaticas.

Las rutas de admin (`/admin/*`) y API (`/api/*`) son dinamicas (server-rendered on demand).

## Variables de entorno

| Variable | Requerida | Uso |
|----------|-----------|-----|
| `NEXT_PUBLIC_HAZARD_TRACKER_API_URL` | No | URL legacy del backend Hazard Tracker |
| `NEXT_PUBLIC_SUPABASE_URL` | Si | URL del proyecto Supabase |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Si | Clave publica anon de Supabase |
| `SUPABASE_SERVICE_ROLE_KEY` | Si | Clave de servicio (bypassa RLS) |
| `RESEND_API_KEY` | Si | API key de Resend para envio de emails |
| `ADMIN_NOTIFICATION_EMAIL` | No | Email de notificaciones (default: acm@acm2020.es) |
| `JWT_SECRET` | Si | Secreto para firmar tokens de sesion admin |

## Datos

El contenido publico (servicios, municipios, FAQs, glosario) vive en archivos TypeScript bajo `data/`. Las traducciones estan en `messages/*.json`.

Las solicitudes de contacto y los datos de gestion (usuarios, clientes, proyectos) se almacenan en Supabase (proyecto `crm`). Ver `docs/technology/documentation/solicitudes-system.md` para la documentacion completa del sistema de solicitudes.

## Despliegue

Configurado para Vercel. Dominio: acm2020.es.
