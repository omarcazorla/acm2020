# Roadmap

## Pendiente

### 1. Rolling logos de clientes (landing page)
Carrusel/ticker animado en bucle con logos de clientes en la landing page.

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
