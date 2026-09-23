# Pantallas del dashboard y reglas de la interfaz

Referencia para construir el dashboard. Las reglas de proceso (agentes, flujo, datos) están en el `CLAUDE.md` del proyecto; aquí está cómo se ven y se comportan en la interfaz.

Los archivos `*.dc.html` son las maquetas del lienzo de diseño (formato del editor de Claude, no código de producción). Úsalos como referencia de estructura, textos y tokens (`var(--...)`). Los componentes `EquipoVirtual.*` que montan están en `../components/`.

| Archivo | Pantalla | Tamaño |
|---|---|---|
| `Main.dc.html` | Vista general | celular 390 px |
| `Objetivo.dc.html` | Ficha de objetivo | celular 390 px |
| `Registro.dc.html` | Registro diario (menos de 2 minutos) | celular 390 px |
| `Junta.dc.html` | Junta de caso semanal | celular 390 px |
| `Equipo.dc.html` | Cómo trabaja el equipo (explicativa) | escritorio 1440 px |

Pendientes de diseñar (usar el brief original y estos patrones): bienvenida y perfil de punto de partida, desafíos de la semana, preguntas del equipo, guía de situaciones, informe bajo demanda, variación de la vista general por rol.

## Vista general
- Selector de rol arriba. Encabezado: semana, nombre del niño, resumen de Iván (1 a 2 frases con números) y enlace "Ver de dónde sale esto".
- Banner de alerta solo si existe una, una a la vez.
- Tarjetas de objetivos activos (3 a 5) con agente a cargo, semáforo, cifra y tendencia. Accesos rápidos. Acceso a la junta de caso.
- Botón fijo inferior: "Hacer el registro de hoy".

## Ficha de objetivo (medir para cambiar el rumbo)
Orden de las secciones:
1. **Hoy, meta, brecha** en grande + barra 0–10 con inicio, hoy y meta (tramo de brecha marcado). Frase: avance desde la línea base (%) y fecha estimada de llegada al ritmo actual vs. fecha acordada.
2. **Día a día:** últimos 14 días; punto por día marcado por contexto (relleno = tranquilo, hueco = cansado), promedio móvil 7 días, línea de meta y "ruta a la meta" punteada. Registro rápido "+ Acertó / + No acertó".
3. **Dónde está la brecha:** la métrica separada por contexto, con marca de la meta en cada barra y una frase que diga dónde se concentra.
4. **Cambio de rumbo propuesto:** lo presenta Iván ("Iván te presenta una propuesta de Clara"); la autora aparece con su avatar. Ajustes concretos, efecto esperado y fecha de revisión. Estados:
   - **Con respaldo humano:** "Propuesto · enviado a la <profesional>. Se activa cuando lo valide." Los padres no lo activan.
   - **Sin respaldo humano (IA a cargo):** texto "Clara asume el rol completo y la decisión es de ustedes" + botones "Aprobar ajuste" (primario) y "Ahora no".
   - **Activo:** confirmación con quién lo validó o aprobó.
   Debajo, historial de ajustes anteriores con su resultado (↗ mantenido, → descartado).
5. **Evidencia reciente** con contexto y fuente enlazada.
6. Pie: quién propuso y quién validó (o "aprobado por los padres" si la IA está a cargo) y la meta acordada.
- Chip en el encabezado: "Respaldo humano: <profesión>" o "IA a cargo · sin respaldo profesional". En la maqueta se alterna con el ajuste `conRespaldoHumano`.
- Objetivos en medición: solo "hoy"; sin meta, brecha, pronóstico ni cambio de rumbo.

## Registro diario
Casi todo botones y escalas: sueño y ánimo (1–5), desconexiones (cantidad y si volvía), uso del yo/me (resultado, estado, contexto), crisis, algo positivo (texto) y audio. Botón fijo "Enviar registro".

## Junta de caso
Síntesis de Iván primero, luego una nota breve por especialista, "Pregunta para el equipo real" cuando hay contradicción, y la constancia de revisión de Vera.

## Reglas de interfaz que vienen del proceso
- Iván es el único que habla con la familia: toda propuesta de una especialista se muestra presentada por Iván, con su autora visible.
- Todo agente lleva la etiqueta IA. Todo objetivo y ajuste muestra si tiene respaldo humano o si la IA está a cargo.
- Un ajuste o un objetivo con respaldo humano sin validar se muestra como "propuesto", nunca como activo.
- Elena nunca muestra diagnósticos ni contenido sobre medicación, haya o no psiquiatra.
- Toda cifra o afirmación enlaza a su fuente.
