/* @ds-bundle: {"format":4,"namespace":"EquipoVirtual","components":[{"name":"AgentAvatar"},{"name":"Button"},{"name":"StatusPill"},{"name":"SkillState"},{"name":"Sparkline"},{"name":"GoalCard"},{"name":"EvidenceItem"},{"name":"QuickReplies"},{"name":"ChallengeCard"},{"name":"SituationEntry"},{"name":"AlertBanner"},{"name":"ScaleInput"},{"name":"RoleSwitcher"},{"name":"AgentNote"},{"name":"StepProgress"}]} */
(function () {
  var React = window.React;
  var h = React.createElement;
  var useState = React.useState;

  function cx() {
    var out = [];
    for (var i = 0; i < arguments.length; i++) if (arguments[i]) out.push(arguments[i]);
    return out.join(' ');
  }
  function useMaybeControlled(value, onChange, initial) {
    var s = useState(initial);
    var controlled = value !== undefined;
    return [controlled ? value : s[0], function (v) { if (!controlled) s[1](v); if (onChange) onChange(v); }];
  }

  /* ---------- Agentes ---------- */
  var AGENTS = {
    ivan: { name: 'Iván', role: 'Coordinador' },
    clara: { name: 'Clara', role: 'Lenguaje' },
    andrea: { name: 'Andrea', role: 'Análisis conductual' },
    olivia: { name: 'Olivia', role: 'Regulación sensorial y autonomía' },
    sofia: { name: 'Sofía', role: 'Desarrollo social y emocional' },
    elena: { name: 'Elena', role: 'Observadora de salud mental' },
    vera: { name: 'Vera', role: 'Revisión de seguridad' }
  };

  var CAP = 'M13 26C13 17 19 13 24 13C30 13 35 17 35 25C32 21 27 19.5 22 20C18 20.5 15 22.5 13 26Z';
  function hairBack(a) {
    if (a === 'sofia') return h('path', { className: 'ev-av-hair', d: 'M11 41C10 20 16 12 24 12C32 12 38 20 37 41Z' });
    if (a === 'andrea') return h('ellipse', { className: 'ev-av-hair', cx: 36, cy: 23, rx: 4, ry: 7 });
    if (a === 'elena') return h('circle', { className: 'ev-av-hair', cx: 24, cy: 11.5, r: 4.5 });
    return null;
  }
  function hairFront(a) {
    switch (a) {
      case 'clara': return h('path', { className: 'ev-av-hair', d: 'M12 33C11 18 17 13 24 13C31 13 37 18 36 33L33 33C33 26 31 21.5 24 21C17 21.5 15 26 15 33Z' });
      case 'olivia': return h('g', { className: 'ev-av-hair' },
        h('circle', { cx: 14.5, cy: 23, r: 4 }), h('circle', { cx: 18.5, cy: 17, r: 4.5 }), h('circle', { cx: 24.5, cy: 14.5, r: 5 }),
        h('circle', { cx: 30.5, cy: 17, r: 4.5 }), h('circle', { cx: 34, cy: 23, r: 4 }));
      case 'sofia': return h('path', { className: 'ev-av-hair', d: 'M14 25C15 18 20 15 24 15C28 15 33 18 34 25C30 22 26 21 24 21C21 21 17 22 14 25Z' });
      case 'vera': return h('path', { className: 'ev-av-hair', d: 'M13 25C13 17 19 13 25 13C31 13 35 17 35 24C30 23 27 20 26 18C24 21 18 23 13 25Z' });
      default: return h('path', { className: 'ev-av-hair', d: CAP });
    }
  }
  function extras(a) {
    if (a === 'ivan') return h('g', { className: 'ev-av-line' },
      h('circle', { cx: 20, cy: 27.5, r: 3.2 }), h('circle', { cx: 28, cy: 27.5, r: 3.2 }), h('path', { d: 'M23.2 27.5H24.8' }));
    if (a === 'vera') return h('path', { className: 'ev-av-hair', d: 'M36 33L41 34.5V38C41 41 38.8 43 36 44C33.2 43 31 41 31 38V34.5Z' });
    return null;
  }

  function AgentAvatar(props) {
    var a = AGENTS[props.agent] ? props.agent : 'ivan';
    var size = props.size || 40;
    var info = AGENTS[a];
    var svg = h('svg', { className: 'ev-av', width: size, height: size, viewBox: '0 0 48 48', 'data-agent': a, role: 'img', 'aria-label': info.name + ', agente de IA' },
      h('circle', { className: 'ev-av-bg', cx: 24, cy: 24, r: 24 }),
      hairBack(a),
      h('circle', { className: 'ev-av-face', cx: 24, cy: 27, r: 11 }),
      hairFront(a),
      h('circle', { className: 'ev-av-eye', cx: 20, cy: 27.5, r: 1.4 }),
      h('circle', { className: 'ev-av-eye', cx: 28, cy: 27.5, r: 1.4 }),
      h('path', { className: 'ev-av-smile', d: 'M20.5 31.2Q24 34 27.5 31.2' }),
      extras(a));
    if (!props.label) return svg;
    return h('span', { className: 'ev-agent', 'data-agent': a }, svg,
      h('span', { className: 'ev-agent-text' },
        h('span', { className: 'ev-agent-name' }, info.name, h('span', { className: 'ev-ia' }, 'IA')),
        props.label === 'name' ? null : h('span', { className: 'ev-agent-role' }, props.role || info.role)));
  }

  /* ---------- Básicos ---------- */
  function Button(props) {
    var v = props.variant || 'primary';
    return h('button', { type: props.type || 'button', className: cx('ev-btn', 'ev-btn-' + v, props.block && 'ev-btn-block'), onClick: props.onClick, disabled: props.disabled },
      props.icon ? h('span', { className: 'ev-btn-icon', 'aria-hidden': true }, props.icon) : null, props.children);
  }

  var STATUS = {
    avanzando: { label: 'Avanzando', icon: '↗' },
    estancado: { label: 'Estancado', icon: '→' },
    retrocediendo: { label: 'Retrocediendo', icon: '↘' },
    midiendo: { label: 'En medición', icon: '◌' }
  };
  function StatusPill(props) {
    var s = STATUS[props.status] || STATUS.midiendo;
    var k = STATUS[props.status] ? props.status : 'midiendo';
    return h('span', { className: 'ev-pill ev-status-' + k }, h('span', { 'aria-hidden': true, className: 'ev-pill-icon' }, s.icon), props.children || s.label);
  }

  var SKILL = { consolidada: 'Consolidada', emergente: 'Emergente', ausente: 'Ausente', 'sin-datos': 'Sin datos' };
  function SkillState(props) {
    var k = SKILL[props.state] ? props.state : 'sin-datos';
    return h('span', { className: 'ev-skill' }, h('span', { className: 'ev-skill-dot ev-skill-' + k, 'aria-hidden': true }),
      h('span', null, props.children || SKILL[k]),
      props.children ? h('span', { className: 'ev-sr' }, ' — ' + SKILL[k]) : null);
  }

  /* ---------- Gráfico ---------- */
  function Sparkline(props) {
    var data = props.data || [];
    var w = props.width || 120, hh = props.height || 40, pad = 4;
    var max = props.max != null ? props.max : Math.max.apply(null, data.concat([props.goal || 0, 1]));
    var min = props.min != null ? props.min : 0;
    function x(i) { return pad + (data.length < 2 ? 0 : i * (w - 2 * pad) / (data.length - 1)); }
    function y(v) { return hh - pad - (v - min) * (hh - 2 * pad) / (max - min || 1); }
    var pts = data.map(function (v, i) { return x(i) + ',' + y(v); }).join(' ');
    var measuring = props.status === 'midiendo';
    return h('svg', { className: cx('ev-spark', measuring && 'ev-spark-measuring'), width: w, height: hh, viewBox: '0 0 ' + w + ' ' + hh, role: 'img', 'aria-label': props.label || ('Tendencia: ' + data.join(', ')) },
      props.baseline != null ? h('line', { className: 'ev-spark-base', x1: pad, x2: w - pad, y1: y(props.baseline), y2: y(props.baseline) }) : null,
      props.goal != null && !measuring ? h('line', { className: 'ev-spark-goal', x1: pad, x2: w - pad, y1: y(props.goal), y2: y(props.goal) }) : null,
      h('polyline', { className: 'ev-spark-line', points: pts }),
      data.length ? h('circle', { className: 'ev-spark-dot', cx: x(data.length - 1), cy: y(data[data.length - 1]), r: 3.5 }) : null);
  }

  /* ---------- Objetivo ---------- */
  function GoalCard(props) {
    var measuring = props.status === 'midiendo';
    return h(props.href ? 'a' : 'article', { className: 'ev-card ev-goal', href: props.href },
      h('div', { className: 'ev-goal-top' },
        h(AgentAvatar, { agent: props.agent, size: 32 }),
        h(StatusPill, { status: props.status })),
      h('h3', { className: 'ev-goal-title' }, props.title),
      h('div', { className: 'ev-goal-bottom' },
        h('div', { className: 'ev-goal-metric' },
          measuring ? h('span', { className: 'ev-goal-measuring' }, props.metric || 'Construyendo la línea base') : props.metric),
        h(Sparkline, { data: props.data, goal: props.goal, baseline: props.baseline, status: props.status, max: props.max, width: 104, height: 36 })));
  }

  /* ---------- Evidencia ---------- */
  var SOURCES = {
    aba: { label: 'Terapeuta ABA', d: 'M4 5h12v8H9l-3 3v-3H4z' },
    casa: { label: 'Casa', d: 'M3 10l7-6 7 6M5 8.5V16h10V8.5M8.5 16v-4h3v4' },
    colegio: { label: 'Colegio', d: 'M2 7l8-3.5L18 7l-8 3.5zM5 8.5V13c1.5 1.5 3 2 5 2s3.5-.5 5-2V8.5' },
    psiquiatra: { label: 'Psiquiatra', d: 'M3 10h3l2-4 3 8 2-4h4' }
  };
  function SourceIcon(props) {
    var s = SOURCES[props.source] || SOURCES.casa;
    return h('span', { className: 'ev-source', 'data-source': props.source },
      h('svg', { width: 20, height: 20, viewBox: '0 0 20 20', 'aria-hidden': true }, h('path', { d: s.d })),
      h('span', null, s.label));
  }
  function EvidenceItem(props) {
    return h('li', { className: 'ev-evidence' },
      h('div', { className: 'ev-evidence-meta' }, h(SourceIcon, { source: props.source }), props.date ? h('span', { className: 'ev-muted' }, props.date) : null),
      h('blockquote', { className: 'ev-quote' }, '“' + props.quote + '”'),
      props.href ? h('a', { className: 'ev-link', href: props.href }, props.kind === 'audio' ? '▶ Escuchar audio' : 'Ver registro') : null);
  }

  /* ---------- Respuestas rápidas ---------- */
  function QuickReplies(props) {
    var st = useMaybeControlled(props.value, props.onChange, null);
    var opts = (props.options || []).slice();
    if (props.allowUnknown !== false) opts.push('No sé');
    return h('div', { className: 'ev-replies', role: 'radiogroup', 'aria-label': props.label },
      opts.map(function (o) {
        var on = st[0] === o;
        return h('button', { key: o, type: 'button', role: 'radio', 'aria-checked': on, className: cx('ev-reply', on && 'is-on', o === 'No sé' && 'ev-reply-unknown'), onClick: function () { st[1](o); } }, o);
      }));
  }

  /* ---------- Desafío ---------- */
  function ChallengeCard(props) {
    var done = useMaybeControlled(props.done, props.onToggle, false);
    return h('article', { className: cx('ev-card ev-challenge', done[0] && 'is-done') },
      h('label', { className: 'ev-check' },
        h('input', { type: 'checkbox', checked: done[0], onChange: function (e) { done[1](e.target.checked); } }),
        h('span', { className: 'ev-check-box', 'aria-hidden': true }, done[0] ? '✓' : ''),
        h('span', { className: 'ev-challenge-text' }, props.text)),
      h('div', { className: 'ev-challenge-meta' },
        props.moment ? h('span', { className: 'ev-tag' }, props.moment) : null,
        props.agent ? h(AgentAvatar, { agent: props.agent, size: 20 }) : null,
        props.goal ? h('span', { className: 'ev-muted' }, props.goal) : null),
      done[0] ? h('div', { className: 'ev-challenge-log' },
        h('span', { className: 'ev-small' }, '¿Cómo respondió?'),
        h(QuickReplies, { options: props.responses || ['Bien', 'Con ayuda', 'No quiso'], allowUnknown: false, value: props.response, onChange: props.onResponse, label: '¿Cómo respondió?' })) : null);
  }

  /* ---------- Guía de situaciones ---------- */
  function SituationEntry(props) {
    return h('article', { className: 'ev-card ev-situation' },
      h('div', { className: 'ev-situation-head' },
        props.area ? h('span', { className: 'ev-muted' }, props.area) : null,
        h('span', { className: cx('ev-tag', props.confirmed ? 'ev-tag-confirmed' : 'ev-tag-general') }, props.confirmed ? '✓ Confirmada para Tomás' : 'Estrategia general')),
      h('p', { className: 'ev-if' }, h('span', { className: 'ev-if-label' }, 'Si pasa esto'), props.when),
      h('p', { className: 'ev-then' }, h('span', { className: 'ev-if-label' }, 'Haz esto'), props.doThis));
  }

  /* ---------- Alerta ---------- */
  function AlertBanner(props) {
    return h('div', { className: 'ev-alert', role: 'status' },
      h('span', { className: 'ev-alert-icon', 'aria-hidden': true }, '!'),
      h('span', { className: 'ev-alert-text' }, props.children),
      props.action ? h('a', { className: 'ev-alert-action', href: props.href || '#' }, props.action) : null);
  }

  /* ---------- Escala ---------- */
  function ScaleInput(props) {
    var st = useMaybeControlled(props.value, props.onChange, null);
    var n = props.steps || 5, items = [];
    for (var i = 1; i <= n; i++) items.push(i);
    return h('fieldset', { className: 'ev-scale' },
      h('legend', { className: 'ev-scale-label' }, props.label),
      h('div', { className: 'ev-scale-row' }, items.map(function (i) {
        return h('button', { key: i, type: 'button', 'aria-pressed': st[0] === i, className: cx('ev-scale-step', st[0] === i && 'is-on'), onClick: function () { st[1](i); } }, i);
      })),
      h('div', { className: 'ev-scale-ends' }, h('span', null, props.low || 'Mal'), h('span', null, props.high || 'Muy bien')));
  }

  /* ---------- Rol ---------- */
  var ROLES = [['padres', 'Padres'], ['terapeutas', 'Terapeutas'], ['psiquiatra', 'Psiquiatra'], ['colegio', 'Colegio']];
  function RoleSwitcher(props) {
    var st = useMaybeControlled(props.value, props.onChange, 'padres');
    return h('div', { className: 'ev-roles', role: 'tablist', 'aria-label': 'Ver como' },
      ROLES.map(function (r) {
        var on = st[0] === r[0];
        return h('button', { key: r[0], type: 'button', role: 'tab', 'aria-selected': on, className: cx('ev-role', on && 'is-on'), onClick: function () { st[1](r[0]); } }, r[1]);
      }));
  }

  /* ---------- Nota de agente ---------- */
  function AgentNote(props) {
    var a = AGENTS[props.agent] ? props.agent : 'ivan';
    return h('article', { className: cx('ev-note', props.synthesis && 'ev-note-synthesis'), 'data-agent': a },
      h(AgentAvatar, { agent: a, size: 40, label: true, role: props.role }),
      h('div', { className: 'ev-note-body' }, props.children));
  }

  /* ---------- Pasos ---------- */
  function StepProgress(props) {
    var steps = props.steps || [];
    var cur = props.current || 1;
    return h('div', { className: 'ev-steps' },
      h('div', { className: 'ev-steps-label' }, 'Paso ' + cur + ' de ' + steps.length, steps[cur - 1] ? h('strong', null, ' · ' + steps[cur - 1]) : null),
      h('ol', { className: 'ev-steps-bar' }, steps.map(function (s, i) {
        return h('li', { key: i, className: cx('ev-step', i + 1 < cur && 'is-done', i + 1 === cur && 'is-current'), title: s }, h('span', { className: 'ev-sr' }, s));
      })));
  }

  var api = { AGENTS: AGENTS, AgentAvatar: AgentAvatar, Button: Button, StatusPill: StatusPill, SkillState: SkillState, Sparkline: Sparkline, GoalCard: GoalCard, EvidenceItem: EvidenceItem, SourceIcon: SourceIcon, QuickReplies: QuickReplies, ChallengeCard: ChallengeCard, SituationEntry: SituationEntry, AlertBanner: AlertBanner, ScaleInput: ScaleInput, RoleSwitcher: RoleSwitcher, AgentNote: AgentNote, StepProgress: StepProgress };
  window.EquipoVirtual = Object.assign(window.EquipoVirtual || {}, api);
})();
