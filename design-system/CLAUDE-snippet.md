## Sistema de diseño

La UI de este proyecto sigue el sistema "Equipo Virtual", que está en `design-system/`.

- Antes de crear o modificar UI, lee `design-system/README.md` (principios, voz, color, tipografía y lo que no se debe hacer).
- Usa solo variables CSS de `design-system/tokens.css` (`var(--primary)`, `var(--space-4)`, `var(--radius-lg)`…). No escribas colores hex a mano.
- Los valores y el uso de cada token están en `design-system/tokens.json`.
- Componentes de referencia: `design-system/components/<Nombre>/README.md` (guía de uso) y `preview.html` (ejemplo). Tipos en `components/index.d.ts`, implementación en `components/bundle.js` y estilos en `components/bundle.css`. Si el proyecto usa React, reescríbelos como componentes propios que respeten las mismas clases y tokens.
- Fuente: Nunito (Google Fonts), pesos 500–800.
- Reglas no negociables: agentes siempre con la etiqueta "IA"; estados siempre con ícono + palabra, nunca solo color; toda afirmación enlaza a su fuente; objetivos táctiles de mínimo 48px.
