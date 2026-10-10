# Color Usage Guide - Orange Scales

Sistema de tres escalas de naranja para diferentes casos de uso.

## Color Scales Overview

### 🟠 Primary Orange - `primary`
**Base:** #E67E22 (naranja suave, tradicional)

**Uso:**
- Iconos y elementos decorativos
- Backgrounds sutiles (primary/5, primary/10)
- Hover states suaves
- Elementos secundarios de UI

**Clases disponibles:**
```
bg-primary      text-primary      border-primary
bg-primary-50   text-primary-100  border-primary-200
...
bg-primary-900  text-primary-900  border-primary-900
```

---

### 🔥 Accent Orange - `accent`
**Base:** #F36611 (naranja vibrante, alta energía)

**Uso principal:**
- **Fondos con texto negro** (botones, badges, CTAs)
- **Títulos grandes** (h1, h2 ≥24px)
- Elementos de alto impacto
- Estados hover energéticos

**⚠️ IMPORTANTE - WCAG Compliance:**
- ✅ `bg-accent + text-black` → WCAG AAA (7.05:1)
- ✅ `text-accent` en h1/h2/h3 (≥24px) → WCAG AA Large
- ❌ `text-accent` en párrafos → NO usar, falla WCAG AA

**Clases disponibles:**
```
bg-accent      text-accent      border-accent
bg-accent-50   text-accent-100  border-accent-200
...
bg-accent-900  text-accent-900  border-accent-900
```

**Tints de clara a oscuro:**
- `accent-50` #FFF1E9 - Backgrounds muy sutiles, highlights
- `accent-100` #FFE4D4 - Borders suaves, hover backgrounds
- `accent-200` #FFD6BE - Cards, paneles ligeros
- `accent-300` #FFC9A9 - Estados disabled
- `accent-400` #FFBB95 - Hover intermedio
- `accent-500` #FFAE80 - Punto medio
- `accent-600` #FFA06C - Estados active
- `accent-700` #FF9258 - Hover fuerte
- `accent-800` #F7752D - Elementos destacados
- `accent-900` #F36611 - Base (DEFAULT)

---

### 🔵 Secondary Blue - `secondary`
**Base:** #1E3A5F (azul corporativo, serio)

**Uso:**
- Texto principal (headings, párrafos)
- Navegación
- Elementos estructurales
- Fondos de sección

---

## Use Cases & Examples

### ✅ Botones Primarios (CTAs)

```tsx
// CORRECTO - Alto impacto, WCAG AAA
<button className="bg-accent text-black">
  Solicitar Presupuesto
</button>

// ALTERNATIVA - Suave, tradicional
<button className="bg-primary text-white">
  Ver Más
</button>
```

### ✅ Badges y Etiquetas

```tsx
// CORRECTO - Máximo contraste
<span className="bg-accent text-black px-3 py-1 rounded-full">
  Prioritario
</span>

// CORRECTO - Versión suave
<span className="bg-accent-100 text-accent-900 px-3 py-1 rounded-full">
  RERA
</span>
```

### ✅ Títulos

```tsx
// CORRECTO - Título grande, impacto visual
<h1 className="text-4xl font-bold text-accent">
  Eliminación de Amianto
</h1>

// CORRECTO - Subtítulo con primary
<h2 className="text-2xl text-primary-600">
  Servicios Operativos
</h2>
```

### ✅ Backgrounds y Cards

```tsx
// CORRECTO - Background sutil
<div className="bg-accent-50 p-6 rounded-lg">
  <p className="text-secondary">Contenido...</p>
</div>

// CORRECTO - Card con borde accent
<div className="border-2 border-accent-200 p-6 hover:border-accent-400">
  <p>Servicio...</p>
</div>
```

### ✅ Hover States

```tsx
// CORRECTO - Hover energético
<Link className="text-accent hover:text-accent-700 transition-colors">
  Ver detalles
</Link>

// CORRECTO - Background hover sutil
<div className="hover:bg-accent-50 transition-colors p-4">
  Item
</div>
```

### ❌ Anti-patterns (NO HACER)

```tsx
// ❌ INCORRECTO - Texto accent en párrafos (falla WCAG AA)
<p className="text-accent">
  Este párrafo no es accesible...
</p>

// ❌ INCORRECTO - Texto blanco sobre accent (falla WCAG AA)
<button className="bg-accent text-white">
  Solo 3.13:1 contraste
</button>

// ❌ INCORRECTO - Texto accent pequeño
<span className="text-sm text-accent">
  Label pequeño
</span>
```

---

## Quick Reference Table

| Elemento | Color Recomendado | Clase |
|----------|-------------------|-------|
| Botón primario | Accent + negro | `bg-accent text-black` |
| Badge importante | Accent + negro | `bg-accent text-black` |
| Badge sutil | Accent light | `bg-accent-100 text-accent-900` |
| Título h1/h2 | Accent | `text-accent` |
| Subtítulo h3/h4 | Primary oscuro | `text-primary-700` |
| Texto párrafo | Secondary | `text-secondary` |
| Link normal | Accent (≥18px) | `text-accent hover:text-accent-700` |
| Background sutil | Accent ultra light | `bg-accent-50` |
| Border suave | Accent light | `border-accent-200` |
| Hover background | Accent light | `hover:bg-accent-100` |
| Icono decorativo | Primary | `text-primary` |

---

## Color Variables (CSS)

También disponibles como CSS custom properties:

```css
:root {
  --primary: #E67E22;
  --primary-dark: #C56A1A;
  --primary-text: #F36611;  /* Alias de accent.DEFAULT */
  --secondary: #1E3A5F;
}
```

---

## Testing Checklist

Cuando uses colores accent, verifica:

- [ ] Si es texto, ¿es ≥24px o h1/h2/h3?
- [ ] Si es fondo, ¿usa texto negro?
- [ ] Si es link, ¿tiene underline o es ≥18px?
- [ ] ¿Se ve bien en modo claro Y oscuro? (futuro)
- [ ] ¿El contraste es ≥4.5:1 para texto normal?

---

**Última actualización:** 2026-10-10
**Ver también:** [ADR-003: Color System & WCAG Compliance](./adr-003-color-system-wcag-compliance.md)
