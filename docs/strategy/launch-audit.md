# Auditoria de Lanzamiento

Ultima revision: 2026-09-10

## Estado general

El sitio compila correctamente y genera ~2700 paginas estaticas (20 servicios x 4 idiomas, 200+ municipios x 4 idiomas, paginas institucionales). La estructura SEO basica (sitemap, robots.txt, hreflang, canonical, JSON-LD global) esta implementada. El diseno es responsive y las imagenes estan optimizadas en WebP.

---

## Bloqueantes

Estos items deben resolverse antes de poner el sitio en produccion.

### 1. Formulario de contacto sin backend

- **Archivo:** `components/Contact.tsx:61`
- **Problema:** La variable `NEXT_PUBLIC_HAZARD_TRACKER_API_URL` no esta definida. No existe archivo `.env` ni `.env.local`. El formulario envia un POST a una URL vacia y falla silenciosamente.
- **Solucion:** Crear `.env.local` con la URL del backend de solicitudes, o implementar una alternativa (API route de Next.js, Formspree, Resend, etc.).

### 2. Sin banner de consentimiento de cookies (GDPR/LSSI)

- **Archivo:** No existe componente de consent.
- **Problema:** Obligatorio por la LSSI espanola y el RGPD europeo. Sin el, el sitio incumple normativa desde el primer dia. Afecta especialmente si se instala analytics.
- **Solucion:** Implementar banner de cookies con gestion de consentimiento (Cookiebot, cookie-consent propio, o similar). Vincular a `/legal/cookies`.

### 3. Favicon inexistente

- **Archivo:** `app/[locale]/layout.tsx:70` referencia `/favicon.ico`
- **Problema:** El archivo no existe en `public/`. Genera un 404 en cada carga de pagina.
- **Solucion:** Generar favicon a partir del logo existente y colocarlo en `public/favicon.ico`. Considerar tambien `apple-touch-icon.png` y `site.webmanifest`.

### 4. Paginas legales vacias en ca/en/fr

- **Archivos:** `messages/ca.json`, `messages/en.json`, `messages/fr.json`
- **Problema:** Solo `es.json` contiene las secciones completas de Politica de Privacidad, Aviso Legal y Politica de Cookies. Los otros tres idiomas solo tienen el titulo; el contenido muestra "Contenido en preparacion."
- **Solucion:** Traducir las secciones legales de `es.json` a catalan, ingles y frances.

---

## Alta prioridad

Deberian resolverse para el lanzamiento o inmediatamente despues.

### 5. Links de redes sociales son placeholder

- **Archivo:** `components/Footer.tsx:10-12`
- **Problema:** LinkedIn, Facebook, Instagram apuntan a `href="#"`.
- **Solucion:** Sustituir por las URLs reales de los perfiles de ACM-2020, o eliminar los iconos hasta que existan.

### 6. Sin analytics

- **Problema:** No hay Google Analytics, GA4, Plausible ni ninguna solucion de medicion.
- **Solucion:** Integrar GA4 o una alternativa privacy-friendly (Plausible, Fathom). Condicionar la carga al consentimiento de cookies (item 2).

### 7. Sin pagina 404 personalizada

- **Problema:** No existe `app/not-found.tsx`. El usuario ve la pagina 404 generica de Next.js sin branding ni forma de volver al sitio.
- **Solucion:** Crear `app/not-found.tsx` con navbar, mensaje amigable y enlace a la home.

### 8. Sin pagina de error (500)

- **Problema:** No existe `app/error.tsx`. Si hay un error en produccion el usuario ve una pantalla en blanco.
- **Solucion:** Crear `app/error.tsx` (client component) con fallback visual.

### 9. Telefonos sin prefijo internacional

- **Archivos:** `Footer.tsx:113`, `Contact.tsx:34`, `Navbar.tsx:89,140`, `servicios/radon/[slug]/page.tsx:173`, `servicios/radon/page.tsx:178`, `servicios/amianto/[slug]/page.tsx:173`
- **Problema:** `href="tel:667623844"` no funciona desde fuera de Espana. Con 4 idiomas (incluido ingles y frances) es esperable trafico internacional.
- **Solucion:** Cambiar a `href="tel:+34667623844"` en todos los sitios.

---

## Prioridad media

Pueden lanzarse sin ellas, pero conviene planificar a corto plazo.

### 10. Blog vacio

- **Ruta:** `/blog`
- **Estado:** Muestra "Proximamente publicaremos articulos sobre amianto y gas radon."
- **Recomendacion:** Ocultar el enlace del navbar/footer hasta tener al menos 2-3 articulos, o publicar contenido inicial antes del lanzamiento.

### 11. Pagina de noticias vacia

- **Ruta:** `/noticias`
- **Estado:** Muestra "News section coming soon."
- **Recomendacion:** Misma estrategia que el blog. Ocultar o poblar.

### 12. JSON-LD incompleto en paginas de servicio y municipio

- **Problema:** Las paginas individuales de servicio (`/servicios/amianto/[slug]`, `/servicios/radon/[slug]`) y de municipio (`/municipios/[slug]`) no emiten structured data propia. Solo existen los schemas globales (Organization, LocalBusiness).
- **Recomendacion:** Anadir BreadcrumbList + Service schema en paginas de servicio, y BreadcrumbList + LocalBusiness por ubicacion en municipios.

### 13. OpenGraph sin imagen

- **Problema:** `generateMetadata` no incluye `openGraph.images` en ninguna pagina. Al compartir en redes sociales no se muestra preview visual.
- **Recomendacion:** Crear una imagen OG generica (1200x630) con el logo y claim, y referenciarla en el metadata global. A futuro, generar imagenes OG dinamicas por pagina.

### 14. Sin meta theme-color

- **Problema:** No hay `<meta name="theme-color">`. La barra del navegador movil no adopta los colores de marca.
- **Recomendacion:** Anadir en el layout: `<meta name="theme-color" content="#1E3A5F" />` (secondary/dark blue).

---

## Lo que funciona correctamente

- Routing i18n completo (es/ca/en/fr) con URLs localizadas
- Sitemap dinamico con las ~2700 paginas
- robots.txt correctamente configurado
- Hreflang y canonical en todas las paginas
- JSON-LD global (Organization + LocalBusiness)
- 100+ redirects 301 del sitio anterior (IONOS)
- 20 servicios con contenido completo en 4 idiomas
- 200+ paginas de municipio con mapa interactivo (Leaflet)
- Formulario con honeypot anti-spam
- Imagenes optimizadas en WebP
- Fuentes con display:swap
- Diseno responsive con Tailwind
- Build exitoso sin errores ni warnings
