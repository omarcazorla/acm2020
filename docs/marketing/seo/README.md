# SEO

## Estado actual (2026-09-10)

### Implementado

- Sitemap XML dinamico (~2700 URLs)
- robots.txt (allow /, disallow /api/ y /_next/)
- Hreflang y canonical en todas las paginas
- Meta title, description, keywords por pagina
- OpenGraph basico (title, description, locale, type)
- JSON-LD: Organization + LocalBusiness global
- 100+ redirects 301 del sitio anterior
- URLs localizadas por idioma

### Pendiente

- OpenGraph images (sin preview visual al compartir en redes)
- JSON-LD en paginas de servicio (Service schema)
- JSON-LD en paginas de municipio (LocalBusiness por ubicacion)
- Estrategia de contenido para keywords informacionales y transaccionales (ver `gbp-search-analysis.md`)
- Blog con articulos SEO
- Meta theme-color

## Archivos clave

- `app/sitemap.ts` - Generador del sitemap
- `app/robots.ts` - Configuracion de robots
- `lib/seo.ts` - Utilidades SEO (getUrl, getAlternates)
- `components/JsonLd.tsx` - Schemas de datos estructurados
- `next.config.ts` - Redirects 301
