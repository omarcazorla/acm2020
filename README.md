# ACM-2020 Landing Page

Landing page moderna para ACM-2020, empresa especializada en consultoría de amianto y gas radón.

## Tecnologías

- **Next.js 16** - Framework React con App Router
- **TypeScript** - Tipado estático
- **Tailwind CSS** - Estilos utilitarios
- **Lucide React** - Iconos

## Instalación

```bash
# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev

# Construir para producción
npm run build

# Ejecutar en producción
npm start
```

La aplicación estará disponible en `http://localhost:3000`

---

## Estructura del Proyecto

```
acm2020/
├── app/
│   ├── layout.tsx          # Layout principal con metadatos SEO
│   ├── page.tsx            # Página principal
│   └── globals.css         # Estilos globales y Tailwind
├── components/
│   ├── Navbar.tsx          # Barra de navegación
│   ├── Hero.tsx            # Sección hero
│   ├── Services.tsx        # Sección de servicios
│   ├── About.tsx           # Sección quiénes somos
│   ├── Clients.tsx         # Sección de clientes (logos en marquee)
│   ├── Contact.tsx         # Sección de contacto
│   ├── Footer.tsx          # Pie de página
│   └── WhatsAppButton.tsx  # Botón flotante WhatsApp
├── public/
│   └── logos/              # ⬅️ LOGOS DE CLIENTES AQUÍ
│       ├── cliente1.png
│       ├── cliente2.png
│       └── ...
├── package.json
├── tailwind.config.ts      # Configuración de colores de marca
├── tsconfig.json
└── next.config.js
```

---

## Logos de Clientes

Los logos de clientes se muestran en una cinta animada (marquee) con efecto grayscale.

### Ubicación de los archivos

```
public/logos/
```

### Cómo añadir logos

1. **Coloca los archivos** de imagen en `/public/logos/`
   - Formatos soportados: PNG, SVG, JPG, WebP
   - Tamaño recomendado: 200x100 px (o proporcional)
   - Fondo transparente preferible (PNG/SVG)

2. **Actualiza el array** en `components/Clients.tsx`:

```typescript
const clientLogos = [
  'ayuntamiento-badia.png',
  'empresa-industrial.svg',
  'constructora-xyz.png',
  // Añade más logos aquí...
]
```

### Características del marquee

- **Efecto grayscale**: Los logos aparecen en escala de grises
- **Hover a color**: Al pasar el ratón, el logo se muestra a color
- **Animación infinita**: Los logos se desplazan continuamente de derecha a izquierda
- **Fade en bordes**: Degradado suave en los extremos para transición elegante

---

## Colores de Marca

| Color | Hex | Uso |
|-------|-----|-----|
| Naranja (Primary) | `#E67E22` | CTAs, acentos, destacados |
| Azul Oscuro (Secondary) | `#1E3A5F` | Textos, fondos, navbar |

---

## Estructura de la Página

### 1. Navbar (`components/Navbar.tsx`)

Barra de navegación fija con efecto blur al hacer scroll.

**Características:**
- Logo ACM-2020 a la izquierda
- Enlaces de navegación centrados
- Teléfono y botón CTA a la derecha
- Menú hamburguesa en móvil
- Efecto sticky con backdrop blur

**Enlaces de navegación:**

| Texto | Ancla |
|-------|-------|
| Inicio | `#inicio` |
| Amianto | `#servicios` |
| Radón | `#servicios` |
| Quiénes somos | `#nosotros` |
| Clientes | `#clientes` |
| Contactar (CTA) | `#contacto` |

---

### 2. Hero (`components/Hero.tsx`)

Sección principal con imagen de fondo y overlay degradado.

**Contenido:**
- Badge: "+25 años de experiencia · Certificación RERA 86/AB/09"
- Titular: "Protegemos la salud pública y el medio ambiente"
- Subtítulo descriptivo
- Doble CTA: "Solicitar presupuesto" → `#contacto` | "Conocer servicios" → `#servicios`
- Indicadores de confianza: +25 años, RERA, +500 proyectos, 100% compromiso
- Flecha de scroll animada → `#servicios`

---

### 3. Servicios (`components/Services.tsx`)

Sección dividida en dos categorías principales.

**Gestión de Amianto (6 servicios):**
1. Inspección e Identificación
2. Planes de Gestión
3. Proyectos de Desamiantado
4. Gestión de Residuos
5. Dirección de Obra
6. Evaluación de Riesgos

**Control de Gas Radón (4 servicios):**
1. Medición de Gas Radón
2. Soluciones Residenciales
3. Espacios de Trabajo
4. Informes Técnicos

**Banner CTA:** "¿Por qué elegir nuestros servicios?" con lista de beneficios y botón → `#contacto`

---

### 4. Quiénes Somos (`components/About.tsx`)

Información sobre la empresa y propuesta de valor.

**Contenido:**
- Slogan: "Por la salud pública y el medio ambiente"
- Descripción de la empresa
- Valores: Profesionalidad, Seguridad, Confianza, Sostenibilidad
- 4 tarjetas de confianza:
  - Certificación RERA 86/AB/09
  - +25 Años de Experiencia
  - Equipo Especializado
  - Compromiso con la Salud
- Banner de misión con fondo degradado

---

### 5. Clientes (`components/Clients.tsx`)

Estadísticas, logos de clientes en marquee y sectores de trabajo.

**Estadísticas:**
| Métrica | Valor |
|---------|-------|
| Proyectos realizados | +500 |
| Clientes satisfechos | +200 |
| Ayuntamientos | +50 |
| Empresas | +100 |

**Logos de Clientes (Marquee):**
- Cinta animada con logos en escala de grises
- Hover muestra el logo a color
- Los logos se colocan en `/public/logos/`
- Array configurable en `components/Clients.tsx`

**Sectores:**
- Ayuntamientos y administraciones públicas
- Empresas industriales
- Comunidades de propietarios
- Constructoras y promotoras
- Colegios y centros educativos
- Hospitales y centros sanitarios

---

### 6. Contacto (`components/Contact.tsx`)

Formulario de contacto e información.

**Panel izquierdo (fondo azul):**

| Campo | Valor | URL/Enlace |
|-------|-------|------------|
| Teléfono | 667 623 844 | `tel:667623844` |
| Email | acm@acm2020.es | `mailto:acm@acm2020.es` |
| Dirección | C. Ibiza, 1, Bajos, 08214 Badia del Vallés, Barcelona | Google Maps |
| Horario | Lunes a Viernes, 9:00 - 18:00 | - |
| Mapa | Google Maps embed | Badia del Vallés |

**Formulario (panel derecho):**
- Nombre completo *
- Email *
- Teléfono
- Asunto * (select):
  - Consulta sobre amianto
  - Consulta sobre gas radón
  - Solicitar presupuesto
  - Otro
- Mensaje *
- Botón: "Enviar mensaje"

---

### 7. Footer (`components/Footer.tsx`)

Pie de página con 4 columnas y barra inferior.

#### Columna 1: Marca
- Logo: **ACM-2020**
- Descripción: "Consultoría especializada en gestión de amianto y control de gas radón. Más de 25 años protegiendo la salud pública y el medio ambiente."
- Badge: `RERA 86/AB/09`
- Redes sociales:

| Red Social | URL |
|------------|-----|
| LinkedIn | `#` (pendiente) |
| Facebook | `#` (pendiente) |
| Instagram | `#` (pendiente) |

#### Columna 2: Enlaces Rápidos

| Texto | Ancla |
|-------|-------|
| Inicio | `#inicio` |
| Servicios | `#servicios` |
| Quiénes somos | `#nosotros` |
| Clientes | `#clientes` |
| Contacto | `#contacto` |

#### Columna 3: Servicios

| Texto | Ancla |
|-------|-------|
| Gestión de Amianto | `#servicios` |
| Control de Radón | `#servicios` |
| Inspecciones | `#servicios` |
| Proyectos técnicos | `#servicios` |

#### Columna 4: Contacto

| Tipo | Valor | URL |
|------|-------|-----|
| Teléfono | 667 623 844 | `tel:667623844` |
| Email | acm@acm2020.es | `mailto:acm@acm2020.es` |
| Dirección | C. Ibiza, 1, Bajos, 08214 Badia del Vallés, Barcelona | - |

#### Barra Inferior

| Elemento | Contenido/URL |
|----------|---------------|
| Copyright | © 2026 ACM-2020. Todos los derechos reservados. |
| Política de privacidad | `#` (pendiente) |
| Aviso legal | `#` (pendiente) |
| Cookies | `#` (pendiente) |

---

### 8. WhatsApp Button (`components/WhatsAppButton.tsx`)

Botón flotante en esquina inferior derecha.

**Configuración:**
- Teléfono: `34667623844`
- Mensaje predefinido: "Hola, me gustaría obtener información sobre sus servicios."
- URL generada: `https://wa.me/34667623844?text=Hola%2C%20me%20gustar%C3%ADa%20obtener%20informaci%C3%B3n%20sobre%20sus%20servicios.`

**Características:**
- Icono de mensaje
- Tooltip en hover: "¿Hablamos por WhatsApp?"
- Animación de pulso
- Abre en nueva pestaña

---

## URLs y Enlaces Externos

### Enlaces de Contacto

| Tipo | URL Completa |
|------|--------------|
| Teléfono | `tel:667623844` |
| Email | `mailto:acm@acm2020.es` |
| WhatsApp | `https://wa.me/34667623844?text=Hola%2C%20me%20gustar%C3%ADa%20obtener%20informaci%C3%B3n%20sobre%20sus%20servicios.` |
| Google Maps | `https://maps.google.com/?q=C.+Ibiza,+1,+Bajos+08214+Badia+del+Valles,+Barcelona` |

### Anclas Internas

| Sección | ID | URL |
|---------|----|----|
| Inicio/Hero | `#inicio` | `http://localhost:3000/#inicio` |
| Servicios | `#servicios` | `http://localhost:3000/#servicios` |
| Quiénes somos | `#nosotros` | `http://localhost:3000/#nosotros` |
| Clientes | `#clientes` | `http://localhost:3000/#clientes` |
| Contacto | `#contacto` | `http://localhost:3000/#contacto` |

### Enlaces Pendientes de Configurar

| Página | Estado |
|--------|--------|
| Política de privacidad | `#` - Pendiente |
| Aviso legal | `#` - Pendiente |
| Cookies | `#` - Pendiente |
| LinkedIn | `#` - Pendiente |
| Facebook | `#` - Pendiente |
| Instagram | `#` - Pendiente |

---

## SEO y Metadatos

Configurados en `app/layout.tsx`:

```typescript
{
  title: 'ACM-2020 | Consultoría Especializada en Amianto y Gas Radón',
  description: 'ACM-2020: Más de 25 años de experiencia en gestión de amianto y medición de gas radón. Certificación RERA 86/AB/09.',
  keywords: 'amianto, asbesto, gas radón, consultoría medioambiental, desamiantado, Barcelona, RERA, salud pública',
  openGraph: {
    url: 'https://acm2020.es',
    siteName: 'ACM-2020',
    locale: 'es_ES'
  }
}
```

---

## Responsive Design

La página es completamente responsive con breakpoints:

| Breakpoint | Ancho | Comportamiento |
|------------|-------|----------------|
| Mobile | < 640px | Menú hamburguesa, columnas apiladas |
| Tablet | 640px - 1024px | Grid 2 columnas |
| Desktop | > 1024px | Layout completo, grid 3-4 columnas |

---

## Personalización

### Cambiar colores de marca

Editar `tailwind.config.ts`:

```typescript
colors: {
  primary: {
    DEFAULT: '#E67E22', // Cambiar color primario
    // ...
  },
  secondary: {
    DEFAULT: '#1E3A5F', // Cambiar color secundario
    // ...
  },
}
```

### Cambiar información de contacto

Editar los siguientes archivos:
- `components/Navbar.tsx` - Teléfono en navbar
- `components/Contact.tsx` - Información de contacto
- `components/Footer.tsx` - Datos del footer
- `components/WhatsAppButton.tsx` - Número de WhatsApp

---

## Licencia

Proyecto privado para ACM-2020.
