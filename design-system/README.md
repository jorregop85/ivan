# Equipo Virtual

Sistema de diseño del dashboard que comparten la familia, las terapeutas ABA, el psiquiatra y el colegio para seguir el avance de un niño, con un equipo virtual de agentes de IA coordinado por Iván. Su trabajo es uno solo: que lo que se practica en terapia llegue a la casa y que todos vean el mismo avance. Cálido, calmado y claro; primero el progreso y las fortalezas, después los problemas.

## Principios

1. **Diez segundos.** Un padre entiende cómo va su hijo sin hacer scroll: nombre, semana, resumen de Iván y semáforo de cada objetivo.
2. **Un minuto, con el pulgar.** Una terapeuta agrega una observación desde el celular en menos de un minuto. Todo objetivo táctil mide al menos `tap-min` (48px); el registro diario es casi todo botones y escalas.
3. **Cercanos, pero IA.** Los agentes tienen nombre, avatar ilustrado y color propio, y siempre llevan la etiqueta **IA**. Nunca fingen ser personas.
4. **Toda afirmación tiene origen.** Cada cifra o conclusión enlaza a su evidencia: cita literal, fuente (ABA, casa, colegio, psiquiatra) y audio o registro.

## Voz y contenido

- Español neutro, frases cortas, tú. "Tomás usó bien el ‘me’ en 6 de 10 ocasiones, mejor que la semana pasada."
- Números reales antes que adjetivos: "6 de 10", no "bastante bien".
- Se describe lo observado, no se diagnostica. Elena observa; no etiqueta.
- Fortalezas primero. "Ausente" y "retrocediendo" se dicen sin dramatismo y con una próxima acción.
- Las contradicciones entre especialistas se presentan como **preguntas para el equipo real**, nunca como errores de alguien.
- Instrucciones en imperativo amable: "Devuélvele ‘no me gusta’ con calma."
- Sin emojis en la interfaz; los íconos son de línea simple.

## Color

Base crema cálida (`surface`), tarjetas blancas (`surface-raised`), tinta café oscuro (`ink`). Nada de blanco clínico ni azul hospital. El color de marca es el verde azulado de Iván (`primary`), usado para la acción principal, el foco y las líneas de los gráficos.

**Agentes.** Cada agente tiene un par: fondo suave `agent-<nombre>` y tinta `agent-<nombre>-ink` (cabello del avatar, nombre, detalles). Iván verde azulado, Clara azul, Andrea lavanda, Olivia salvia, Sofía durazno, Elena miel, Vera gris pizarra. El color identifica, no califica: nunca se usa para estados.

**Semáforo de objetivos.** `status-avanzando` (verde), `status-estancado` (ámbar), `status-retrocediendo` (terracota suave) y `status-midiendo` (gris azulado), cada uno con su `-ink`. Siempre con ícono y palabra (↗ → ↘ ◌), nunca solo color.

**Habilidades.** `skill-consolidada`, `skill-emergente`, `skill-ausente`, `skill-sin-datos`: se distinguen por luminosidad y borde (lleno oscuro → medio → claro → vacío punteado), legibles también en escala de grises.

**Alertas y fortalezas.** `alert`/`alert-ink` es terracota, discreto, una sola a la vez. `strength`/`strength-ink` es un amarillo luminoso reservado a la sección de fortalezas.

Todo texto cumple 4.5:1 sobre su fondo en claro y oscuro; los bordes de control (`line-strong`) cumplen 3:1.

## Tipografía

Una familia: **Nunito** (Google Fonts), redondeada y muy legible. Peso base 500 para que no se vea frágil en celular. `display` solo para el nombre del niño; `title` para pantallas; `heading` para tarjetas; `body-lg` para el resumen de Iván y las preguntas de la entrevista; `quote` (itálica) exclusivamente para citas literales de evidencia. Nunca texto de lectura bajo 16px; `caption` (13px) solo para rótulos.

## Espacio, forma y profundidad

- Escala de 4px: `space-1` a `space-8`. Margen lateral en celular `space-4`; padding de tarjeta `space-5`; entre secciones `space-6`.
- Mucho aire: la jerarquía viene del espacio, no de líneas ni sombras.
- Formas blandas: `radius-lg` en tarjetas, `radius-md` en botones y campos, `radius-pill` en píldoras, respuestas rápidas y avatares.
- `shadow-card` es apenas perceptible; `shadow-sheet` solo para hojas inferiores en celular.
- Una columna de hasta `content-max` (720px). En celular todo apila; nada hace scroll horizontal salvo el selector de rol.

## Agentes y avatares

Avatares ilustrados y geométricos, nunca fotos: disco en el color suave del agente, cara simple (dos puntos y una sonrisa) y un rasgo propio. Iván lleva anteojos, Clara melena, Andrea cola, Olivia rulos, Sofía pelo largo, Elena moño y Vera un pequeño escudo (revisa la seguridad de todo lo publicado). La primera vez que un agente aparece en una pantalla va con nombre, etiqueta IA y especialidad (`AgentAvatar label`).

## Iconografía

Íconos de línea de 20px, trazo 1.6, puntas redondeadas, en `primary` sobre `primary-soft`. Orígenes de evidencia: burbuja (terapeuta ABA), casa, birrete (colegio), pulso (psiquiatra). Estados con flechas tipográficas ↗ → ↘ y el círculo ◌ de "en medición".

## Datos y gráficos

Mini tendencias (`Sparkline`) en las tarjetas; gráfico de evolución en la ficha. Línea `primary`, línea base punteada `ink-muted`, meta en `status-avanzando-ink`. Los objetivos en medición no muestran meta: línea punteada y el texto "Construyendo la línea base". Todo gráfico va acompañado de la cifra en texto.

## Roles

Padres ven y editan todo. Terapeutas proponen y validan objetivos, agregan observaciones y responden preguntas. Psiquiatra: solo lectura, con sueño, ánimo y conducta entre controles al frente. Colegio: estrategias para el aula y su propia entrada. `RoleSwitcher` cambia la vista general, no la marca.

## No hacer

- Rojo alarma, degradados, estética financiera o de hospital.
- Estados comunicados solo con color.
- Afirmaciones sin fuente, resúmenes que reescriban una cita.
- Ocultar que los agentes son IA o darles fotos realistas.
- Más de una acción `primary` por pantalla.
