# docs/ - ACM-2020

Documentacion interna del proyecto web acm2020.es.

## Estructura

```
docs/
  strategy/          Roadmap, vision, fases de lanzamiento
  product/           Funcionalidades, UX, user stories
  technology/        Arquitectura, ADRs, infra, seguridad
  marketing/         SEO, contenido, publicidad, marca
  operations/        Procesos, proveedores, soporte
  legal/             Privacidad, cookies, contratos, PI
  content/           Articulos, glosario, blog (borradores)
```

## Convenciones

- Un archivo por tema. Nombre en kebab-case: `launch-audit.md`
- Fechas en formato ISO al inicio del documento cuando sea relevante
- Los documentos vivos (roadmap, auditorias) se actualizan in-place con fecha de ultima revision
- Los ADRs (Architecture Decision Records) van numerados: `adr-001-*.md`
