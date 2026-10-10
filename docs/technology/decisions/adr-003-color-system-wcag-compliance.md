# ADR-003: Color System & WCAG Compliance

**Status:** Accepted
**Date:** 2026-10-10
**Deciders:** Product, Design, Engineering

## Context

El sistema de color original utilizaba `#A85613` como `primary-text`, un tono marrón-naranja oscuro que, aunque cumplía con WCAG AA, era visualmente apagado y no transmitía la energía necesaria para la marca.

Se exploró el uso de `#FF4D00` (naranja brillante vibrante) como reemplazo, pero resultó "demasiado chillón" y excesivamente saturado para uso en texto.

Necesitábamos:
1. Un color naranja más vivo y llamativo que `#A85613`
2. Cumplimiento con WCAG AA (Google requirement: ratio ≥ 4.5:1 para texto normal)
3. Coherencia visual con el naranja primario `#E67E22`
4. Flexibilidad para diferentes casos de uso (títulos, botones, texto normal)

## Decision

Adoptamos un **sistema de color dual** para naranja:

### Primary Orange - #F36611

**Uso:** Color de fondo para elementos interactivos

- Botones primarios (CTAs)
- Badges y etiquetas
- Alertas y avisos destacados
- Headers de sección con fondo

**Texto sobre este fondo:**
- **Negro (#000000):** Contraste 7.05:1 ✓ Pasa WCAG AAA
- **Blanco (#FFFFFF):** Contraste 3.13:1 ✓ Pasa WCAG AA Large solamente

**Decisión:** Usar texto **negro** sobre fondo `#F36611` para máxima accesibilidad.

### Limitación reconocida

`#F36611` como color de texto sobre fondos claros:
- Sobre blanco (#FFF): 3.13:1 → ✗ Falla WCAG AA Normal
- Sobre warm (#f3f1ea): 2.77:1 → ✗ Falla WCAG AA
- Solo válido para texto grande (≥24px, bold) en estos fondos

**Implicación:** No usar `#F36611` para texto de párrafo o cuerpo. Reservar para:
- Títulos h1, h2, h3
- Texto destacado ≥24px
- Elementos interactivos (cuando sea fondo con texto negro)

### Color Configuration

```typescript
// tailwind.config.ts
colors: {
  'primary-text': '#F36611',  // Uso limitado: títulos grandes o como fondo
  primary: {
    DEFAULT: '#E67E22',       // Naranja estándar, más suave
    // ... resto de escala
  }
}
```

```css
/* globals.css */
:root {
  --primary: #E67E22;
  --primary-text: #F36611;
}
```

## Alternatives Considered

### Opción A: Naranjas oscuros que pasan WCAG AA como texto

Probamos varios tonos más oscuros que cumplen WCAG AA para texto normal sobre blanco:

- `#D35400` - Ratio 4.77:1 ✓ Pasa AA
- `#CC5200` - Ratio 5.21:1 ✓ Pasa AA
- `#C44D00` - Ratio 5.82:1 ✓ Pasa AA
- `#B84600` - Ratio 6.51:1 ✓ Pasa AA
- `#A85613` - Ratio 5.89:1 ✓ Pasa AA (original)

**Rechazado porque:** Todos estos tonos son visualmente "horribles" - demasiado marrones, apagados, sin la viveza que necesita la marca. Sacrifican el impacto visual por cumplimiento técnico.

### Opción B: #FF4D00 (punto de partida explorado)

- Naranja ultra-vibrante, máxima energía
- Sobre blanco: ~2.5:1 → Falla incluso para texto grande
- **Rechazado porque:** Demasiado chillón, excesivamente saturado

### Opción C: Punto medio #F36611

- Balance entre viveza (#FF4D00) y el naranja estándar (#E67E22)
- **Aceptado** con restricciones de uso claras

## Consequences

### Positive

- Color naranja vibrante y moderno que diferencia la marca
- Cumplimiento WCAG AA/AAA cuando se usa correctamente (fondo + texto negro)
- Sistema claro de dos naranjas con casos de uso definidos:
  - `#E67E22` → Naranja general, backgrounds sutiles
  - `#F36611` → Elementos destacados, CTAs, títulos grandes

### Negative

- Requiere disciplina en el uso:
  - No apto para texto de párrafo sobre blanco
  - Desarrolladores deben conocer las restricciones
- Necesidad de documentar claramente los casos de uso válidos

### Neutral

- Los botones deben usar texto **negro** (no blanco) para cumplir AAA
- Puede requerir ajustes en componentes existentes que asumían texto blanco

## Compliance Summary

| Combinación | Ratio | WCAG AA Normal | WCAG AA Large | WCAG AAA Normal |
|-------------|-------|----------------|---------------|-----------------|
| `#F36611` fondo + texto negro | 7.05:1 | ✓ Pasa | ✓ Pasa | ✓ Pasa |
| `#F36611` fondo + texto blanco | 3.13:1 | ✗ Falla | ✓ Pasa | ✗ Falla |
| `#F36611` texto + fondo blanco | 3.13:1 | ✗ Falla | ✓ Pasa | ✗ Falla |
| `#F36611` texto + fondo warm (#f3f1ea) | 2.77:1 | ✗ Falla | ✗ Falla | ✗ Falla |

**Recomendación Google:** Mínimo WCAG AA (4.5:1 normal, 3:1 large)

## Implementation Guidelines

### ✓ Uso correcto

```tsx
// Botón primario - fondo naranja, texto negro
<button className="bg-primary-text text-black">
  Solicitar Presupuesto
</button>

// Título grande - texto naranja
<h1 className="text-primary-text text-4xl font-bold">
  ACM 2020
</h1>

// Badge - fondo naranja, texto negro
<span className="bg-primary-text text-black px-3 py-1 rounded">
  Prioritario
</span>
```

### ✗ Uso incorrecto

```tsx
// ✗ Texto de párrafo naranja sobre blanco - NO PASA WCAG AA
<p className="text-primary-text">
  Este párrafo no es accesible...
</p>

// ✗ Botón con texto blanco - NO PASA WCAG AA
<button className="bg-primary-text text-white">
  CTA
</button>
```

## References

- [WCAG 2.1 Contrast Guidelines](https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html)
- [Google Material Design Accessibility](https://material.io/design/color/text-legibility.html)
- Verificación de contraste: `/docs/technology/decisions/contrast-verification-f36611.html`

## Verification Tools Created

Durante la exploración se crearon herramientas de verificación:

1. `color-comparison.html` - Comparación visual de tonos naranja
2. `contrast-check.html` - Verificador WCAG para `#F36611` como texto
3. `dark-orange-options.html` - Exploración de naranjas oscuros conformes
4. `background-contrast-check.html` - Verificador para `#F36611` como fondo ✓

**Ubicación:** `/acm2020/` (root del proyecto, herramientas temporales)

## Historical Context

- **Antes:** `#A85613` - Cumple WCAG AA pero visualmente apagado
- **Exploración:** `#FF4D00` - Demasiado vibrante, no conforme
- **Adoptado:** `#F36611` - Balance óptimo con uso restringido

---

**Next Review:** Al implementar un sistema de design tokens formal o al recibir feedback de accesibilidad de usuarios.
