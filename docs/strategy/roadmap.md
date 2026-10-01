# Roadmap

## Pendiente

### 1. Rolling logos de clientes (landing page)
Carrusel/ticker animado en bucle con logos de clientes en la landing page. Pendiente de mejorar y reubicar.

---

### 2. Portal de descarga propio (tipo WeTransfer)
Página de descarga de archivos con identidad corporativa propia, orientada a compartir entregables con clientes.

**Experiencia del destinatario**
- Layout de dos columnas: descarga a la izquierda, publicidad corporativa a la derecha (slides en bucle: servicios, etc.)
- Botón de descarga que apunta directamente a un archivo alojado en SharePoint o Dropbox
- Si el enlace ha caducado: mensaje "Este enlace ha caducado, pero puedes volver a solicitar acceso..." con CTA
- Enlace no indexable (noindex + nofollow, excluido de sitemap)
- Contraseña opcional
- Fecha de caducidad opcional

**Panel /admin**
- Herramienta para generar enlaces compartibles
- Configuración por enlace: archivo origen (SharePoint/Dropbox), contraseña, caducidad, descripción
- Listado de enlaces generados con estado (activo/caducado), descargas, fecha de creación

---

### ~~3. Formularios de contacto contextuales y dashboard de solicitudes~~ HECHO

Implementado en commit `12e317b` (2026-10-01). Documentacion tecnica en `docs/technology/documentation/solicitudes-system.md`.

- 6 formularios contextuales (radon-cte, radon-is47, radon-hogar, amianto-inspeccion, amianto-certificado, general) con campos de cualificacion JSONB
- Almacenamiento en Supabase (tabla `solicitudes` ampliada)
- Notificaciones email a acm@acm2020.es via Resend
- Dashboard admin en `/admin/solicitudes` con filtros, gestion de estado/prioridad/categoria/asignacion, notas internas y respuesta por email
- CTAs de paginas de servicio enlazan al formulario correspondiente via `?service=`

---

### 4. Establecer una lista de buying personas en base a los correos que recibimos

Clasificar tipos de clientes que recibimos para orientar bien como listamos los servicios que ofrecemos.

---

### 5. /ca/municipis
Es una lista de municipios que no se debe centrar en radón: se centrará en los servicios que ofrece acm-2020 en dichos municipios. Primero desarrollaremos aquellos más próximos, después los que van quedando más lejos.
Las páginas de municipios integrarán servicios de amianto y de radón, siguiendo la fórmula para H1 “[Service] + [City]” para cada buying persona.
