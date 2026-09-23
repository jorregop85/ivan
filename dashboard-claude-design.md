# Brief de diseño: Dashboard del Equipo Multidisciplinario Virtual

## Contexto

Prototipo de un dashboard de seguimiento para un niño autista de 12 años. Lo comparten la familia, las terapeutas ABA, el psiquiatra y más adelante el colegio. Detrás hay un equipo virtual de agentes de IA coordinado por **Iván**, con cinco especialistas: **Clara** (lenguaje), **Andrea** (análisis conductual), **Olivia** (regulación sensorial y autonomía), **Sofía** (desarrollo social y emocional) y **Elena** (observadora de salud mental). **Vera** revisa la seguridad de todo lo que se publica.

Objetivo central: que lo que se trabaja en terapia se traslade a la casa y a la vida diaria, y que todos vean el mismo avance.

Usar datos ficticios. El niño se llama **Tomás**.

## Tono visual

- Cálido, calmado y claro. Nada de estética hospitalaria fría ni de dashboard financiero recargado.
- Colores suaves, alta legibilidad, mucho espacio en blanco.
- Lenguaje simple en español neutro.
- Funciona muy bien en celular (las terapeutas lo usan desde el teléfono).
- El foco está en el progreso y las fortalezas, no solo en los problemas.
- Cada agente tiene un avatar simple e ilustrado (no fotorrealista) y un color propio suave.

## Pantallas

### 1. Bienvenida y punto de partida
- Recorrido en 6 pasos, con indicador de progreso: contexto de la familia, documentos, entrevista por áreas, chequeo de alertas, perfil, propuesta de objetivos.
- Iván conduce la entrevista en formato conversación, una pregunta a la vez, con botones de respuesta rápida y opción "no sé".
- Resultado: **perfil de punto de partida** con habilidades por área en tres estados, con color: consolidada, emergente, ausente (más "sin datos").
- Sección de fortalezas destacada.

### 2. Vista general
- Encabezado: nombre del niño, semana actual y resumen de Iván en 1 o 2 frases (ej: "Tomás usó bien el 'me' en 6 de 10 ocasiones, mejor que la semana pasada").
- Tarjetas de 3 a 5 objetivos activos: nombre, especialista a cargo (avatar), mini gráfico de tendencia y semáforo (avanzando / estancado / retrocediendo / en medición).
- Accesos rápidos: desafíos de la semana, preguntas pendientes, guía de situaciones, registro diario.
- Banner discreto de alertas, si existen.

### 3. Ficha de objetivo
- Qué se busca, cómo se mide, línea base, meta, estado actual.
- Gráfico de evolución.
- Línea de tiempo de evidencia con ícono de origen (terapeuta ABA, casa, colegio, psiquiatra) y cita literal; cada una enlaza a su fuente (audio o registro).
- Estrategias que funcionan para este objetivo.
- Quién lo propuso y quién lo validó.

### 4. Desafíos de la semana
- 2 o 3 microprácticas concretas, cada una ligada a un objetivo y a un momento del día.
- Casilla para marcar realizado y registro rápido de cómo respondió el niño.

### 5. Preguntas del equipo
- 2 o 3 preguntas de la semana, seleccionadas por Iván, indicando qué especialista la originó.
- Respuesta por botones, texto o audio.
- Historial de preguntas respondidas.

### 6. Junta de caso semanal
- Una nota breve de cada especialista (avatar, nombre, 2 a 3 líneas).
- Síntesis de Iván.
- Contradicciones detectadas, presentadas como "preguntas para el equipo real".

### 7. Guía de situaciones
- Consulta rápida "si pasa esto → haz esto", organizada por área.
- Etiqueta en cada entrada: "estrategia general" o "confirmada para Tomás".

### 8. Registro diario (máximo 2 minutos)
- Casi todo botones y escalas: sueño, ánimo, momentos de desconexión (cantidad y si volvía al llamarlo), uso del "yo/me" (acertó / no acertó, contexto: tranquilo o cansado, pregunta directa o conversación libre), crisis, algo positivo del día.
- Botón para enviar audio.

### 9. Informe bajo demanda
- Botón "Pedir informe a Iván" con selector de período y destinatario (familia, terapeutas, psiquiatra, colegio).
- Vista previa del informe organizado por objetivo, con fuentes enlazadas.

### 10. Selector de vista por rol
- Padres: ven y editan todo.
- Terapeutas: proponen y validan objetivos, agregan observaciones, responden preguntas.
- Psiquiatra: solo lectura, foco en tendencias de sueño, ánimo y conducta entre controles.
- Colegio: estrategias para el aula y su propia entrada.
- Mostrar cómo cambia la vista general según el rol.

## Datos de ejemplo

**Objetivos activos**
1. Uso del "me" y el "yo" al hablar de sí mismo — Clara — avanzando.
2. Contar algo que pasó ayer usando el pasado, con apoyo visual — Clara — en medición.
3. Entender sus momentos de desconexión — Olivia — en medición.
4. Participar en una actividad estructurada con otros niños una vez por semana — Sofía — estancado.
5. Reconocer "luces rojas" en situaciones practicadas — Sofía — avanzando.

Los objetivos "en medición" no muestran meta numérica, solo un indicador de que se está construyendo la línea base.

**Desafíos de la semana**
- Cada vez que diga "no le gusta", devolverle "no me gusta" con calma.
- En la cena, contar juntos una cosa que pasó ayer usando el calendario del refrigerador.
- Ver un capítulo de su serie favorita y preguntarle qué quería lograr un personaje.

**Preguntas de la semana**
- (Clara) "Cuando dijo 'no me gusta' bien, ¿estaba tranquilo o cansado?"
- (Olivia) "Cuando se queda con la mirada perdida, ¿vuelve si le tocas el hombro?"
- (Andrea, para terapeutas) "¿Qué objetivo de sesión quieren que practiquemos en casa esta semana?"

**Evidencia de ejemplo**
- Terapeuta ABA: "Hoy pidió ayuda con 'yo quiero' en 7 de 10 intentos."
- Casa: "Le preguntamos si le gustaba estudiar y respondió 'no le gusta'."
- Casa: "En la tarde dijo 'no me gusta el ruido' sin ayuda."

## Prioridades de diseño

1. Que un padre entienda en 10 segundos cómo va su hijo.
2. Que una terapeuta agregue una observación en menos de un minuto desde el celular.
3. Que el equipo virtual se sienta cercano y humano, sin ocultar que son agentes de IA.
4. Que siempre se vea de dónde viene cada afirmación.
