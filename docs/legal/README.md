# Legal

Documentacion de cumplimiento legal del sitio.

## Estado actual (2026-09-10)

| Pagina | es | ca | en | fr |
|--------|----|----|----|----|
| Politica de Privacidad | Completa | Solo titulo | Solo titulo | Solo titulo |
| Aviso Legal | Completa | Solo titulo | Solo titulo | Solo titulo |
| Politica de Cookies | Completa | Solo titulo | Solo titulo | Solo titulo |

## Pendiente

- Traducir las tres paginas legales a catalan, ingles y frances
- Implementar banner de consentimiento de cookies (GDPR/LSSI)
- Vincular banner de cookies con la pagina `/legal/cookies`

## Archivos de referencia

- Contenido legal en espanol: `messages/es.json` (secciones `pages.privacy`, `pages.legalNotice`, `pages.cookiesPolicy`)
- Componentes: `app/[locale]/legal/privacidad/page.tsx`, `aviso-legal/page.tsx`, `cookies/page.tsx`
