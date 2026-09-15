# Arquitectura del proyecto

Ultima revision: 2026-09-10

## Stack

| Capa | Tecnologia |
|------|-----------|
| Framework | Next.js 16 (App Router, Turbopack) |
| Lenguaje | TypeScript (strict mode) |
| Estilos | Tailwind CSS 3.4 |
| Animaciones | Framer Motion + CSS keyframes |
| i18n | next-intl 4.8 (es, ca, en, fr) |
| Mapas | React Leaflet + OpenStreetMap/CARTO tiles |
| Iconos | Lucide React |
| Contenido | Datos estaticos en TypeScript (data/*.ts) |
| Blog | MDX (estructura lista, sin contenido) |

## Generacion de paginas

Todas las paginas son SSG (Static Site Generation) via `generateStaticParams`. No hay paginas dinamicas server-side. El build genera ~2700 paginas HTML estaticas.

## Variables de entorno

| Variable | Requerida | Uso |
|----------|-----------|-----|
| `NEXT_PUBLIC_HAZARD_TRACKER_API_URL` | Si | URL del backend para envio del formulario de contacto |

## Datos

No hay base de datos. Todo el contenido (servicios, municipios, FAQs, glosario) vive en archivos TypeScript bajo `data/`. Las traducciones estan en `messages/*.json`.

## Despliegue

Configurado para Vercel (inferido por convenciones en .gitignore y next.config.ts). Dominio: acm2020.es.
