# ADR-001: Datos estaticos en TypeScript en lugar de CMS o base de datos

Fecha: 2026-09-10
Estado: Aceptado

## Contexto

El sitio necesita gestionar ~20 servicios, 200+ municipios, glosario, FAQs y traducciones en 4 idiomas. El volumen de contenido es alto pero la frecuencia de actualizacion es baja.

## Decision

Todo el contenido reside en archivos TypeScript (`data/*.ts`) y JSON (`messages/*.json`) dentro del repositorio. No se usa CMS ni base de datos.

## Consecuencias

**Positivas:**
- Build completamente estatico: rendimiento maximo, coste cero de infra backend
- Tipado fuerte: errores de contenido se detectan en compilacion
- Versionado con git: historial completo de cambios
- Sin dependencia de servicios externos para servir la web

**Negativas:**
- Actualizar contenido requiere commit + deploy
- No hay interfaz visual para editar contenido (solo codigo)
- Los archivos de traduccion (messages/*.json) pueden crecer mucho
