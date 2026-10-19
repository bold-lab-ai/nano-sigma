"use strict";
// nanoSigma score evolution. Data: window.NS_DATA from build_data.py. One generic evolution chart,
// re-drawn for the selected score (LOB-Bench / return bench / PnL bench / LM loss).
const D = window.NS_DATA;
let HI = "#c2185b", HI_FILL = "rgba(194,24,91,0.08)", OTHER = "#f8a6b6";
const EDGE = "#222", MUTED = "#555", GRID = "#efebe5";
// speed view swaps the yellow -> pink palette for sky -> ocean blue
const setPalette = speed => { [HI, HI_FILL, OTHER] = speed ? ["#0b5c96", "rgba(11,92,150,0.08)", "#82cde6"] : ["#c2185b", "rgba(194,24,91,0.08)", "#f8a6b6"]; };
const FONT = '"CMU Serif", Georgia, serif';
const MONO = "ui-monospace, Menlo, Consolas, monospace";
Chart.defaults.font.family = FONT;
Chart.defaults.font.size = 13;
Chart.defaults.color = MUTED;

const ms = s => new Date(s).getTime();
const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]);
const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const pad = n => String(n).padStart(2, "0");
const fmtDate = t => { const d = new Date(t); return `${MONTHS[d.getUTCMonth()]} ${d.getUTCDate()} ${pad(d.getUTCHours())}:${pad(d.getUTCMinutes())}`; };
const fmtDay = t => { const d = new Date(t); return `${MONTHS[d.getUTCMonth()]} ${d.getUTCDate()}`; };
const timeTicks = step => ({ stepSize: step, includeBounds: false,
  callback: v => { const d = new Date(v); return d.getUTCHours() === 0 ? fmtDay(v) : `${pad(d.getUTCHours())}:00`; } });
// ticks on exact multiples of `step` since the epoch, i.e. aligned to UTC midnight
const utcTicks = step => s => { const out = []; for (let v = Math.ceil(s.min / step) * step; v <= s.max; v += step) out.push({ value: v }); s.ticks = out; };

const runs = D.runs;
const live = runs.filter(r => r.status === "running");
const ref = runs.find(r => r.name === "baseline r4");
const refLM = ref && ref.points.length ? ref.points[ref.points.length - 1].val : null;
const failed = runs.filter(r => r.status === "failed");

// ── state ──
const HORIZONS = [...new Set(Object.values(D.scores).filter(s => s.h).map(s => s.h))].sort((a, b) => a - b);
const S = { bench: null, lob: D.lob_default, h: HORIZONS.includes(128) ? 128 : HORIZONS[0], metric: "pearson", variant: "A", sizing: "x",
  speed: false, tgt: 1, ft: "3h" };
(function readHash() {
  let [b, ...rest] = decodeURIComponent(location.hash.slice(1)).split("/");
  if (b === "speed") {
    // speed view: one gate per bench, all at r4's own score (h 128, 3 h fine-tune, default LOB method)
    S.speed = true; S.bench = ["lob", "return", "pnl", "lm"].includes(rest[0]) ? rest[0] : "lob";
    return;
  }
  if (!["lob", "return", "pnl", "lm"].includes(b)) return;
  S.bench = b;
  if (b === "lob" && D.lob_methods.includes(rest[0])) S.lob = rest[0];
  if ((b === "return" || b === "pnl") && HORIZONS.includes(+rest[0])) S.h = +rest[0];
  if (b === "return" && ["pearson", "direction_acc"].includes(rest[1])) S.metric = rest[1];
  if (b === "pnl") { if (["A", "B"].includes(rest[1])) S.variant = rest[1]; if (["x", "y"].includes(rest[2])) S.sizing = rest[2]; }
})();
if (!S.bench) S.bench = D.scores["lob:" + S.lob].entries.length ? "lob" : "return";
const writeHash = () => {
  if (S.speed) {
    history.replaceState(null, "", "#speed/" + S.bench); return;
  }
  const parts = { lob: [S.lob], return: [S.h, S.metric], pnl: [S.h, S.variant, S.sizing], lm: [] }[S.bench];
  history.replaceState(null, "", "#" + [S.bench, ...parts].join("/"));
};

// ── series builders ──
const fmtVal = (v, unit) => v == null ? "—" : unit === "h" ? +v.toFixed(2) + " h" : (unit === "bps" ? (v > 0 ? "+" : "") + v.toFixed(2) + " bps" : v.toFixed(3));

function lmSeries() {
  const entries = [];
  runs.forEach(r => r.points.forEach((p, i) => entries.push({
    x: ms(p.t), y: p.val, group: r.name, last: i === r.points.length - 1, live: r.status === "running" && i === r.points.length - 1,
    status: r.status, test: p.test,
    html: `<div class="t">${esc(r.name)}</div><div class="s">${fmtDate(ms(p.t))} UTC · ${esc(r.status)}</div>
      <div class="big">${p.val.toFixed(3)} <span class="u">nats/msg val</span></div>
      ${p.test != null ? `<div class="kv">test ${p.test.toFixed(3)} nats/msg</div>` : ""}
      <div class="kv">${p.hours} h · step ${p.step.toLocaleString()} · ${p.tokens_b}B tokens</div><div class="d">${esc(r.desc)}</div>`,
    desc: r.desc,
  })));
  return {
    title: "LM loss: validation cross-entropy per message", better: "lower", unit: "", log: true,
    note: "Lower is better; axis flipped so progress goes up. Only evaluations at the full 4,096-message context.",
    axis: "val cross-entropy, nats per message", entries,
    baselines: refLM ? [{ name: "baseline r4", value: refLM }] : [],
    failures: failed.concat(runs.filter(r => !r.points.length && r.status === "incomplete")),
    refName: "baseline r4", refValue: refLM,
  };
}

function benchSeries(key, title, note, axis) {
  const sc = D.scores[key];
  const entries = sc.entries.map(e => ({
    x: ms(e.t), y: e.value, group: e.model, desc: "",
    html: `<div class="t">${esc(e.model)}</div><div class="s">${fmtDate(ms(e.t))} UTC</div>
      <div class="big">${fmtVal(e.value, sc.unit)}</div>${(e.kv || []).map(k => `<div class="kv">${esc(k)}</div>`).join("")}`,
  }));
  const refB = sc.baselines.find(b => b.name === "last-trade rule");
  return { title, note, axis, better: sc.better, unit: sc.unit, log: false, entries, baselines: sc.baselines, failures: [],
    refName: refB ? refB.name : null, refValue: refB ? refB.value : null, desc: sc.desc };
}

function currentSeries() {
  if (S.bench === "lm") return lmSeries();
  if (S.bench === "lob") {
    const sc = D.scores["lob:" + S.lob];
    return benchSeries("lob:" + S.lob, `LOB-Bench: ${S.lob}`, sc.desc + " Lower is better.", `${S.lob} score (↓ better)`);
  }
  if (S.bench === "return") {
    const m = S.metric === "pearson" ? "pooled Pearson" : "direction accuracy (ties removed)";
    return benchSeries(`return:${S.h}:${S.metric}`, `Return bench: ${m}, ${S.h} messages ahead`,
      "Predicted vs realised mid-price return on the January 2026 test month. Higher is better.", m);
  }
  const sz = S.sizing === "x" ? "equal $1 bets" : "volatility-scaled bets";
  const vn = S.variant === "A" ? "PnL A, mid-to-mid (frictionless)" : "PnL B, after half the spread at entry";
  return benchSeries(`pnl:${S.h}:${S.variant}:${S.sizing}`, `PnL bench: ${vn}, ${S.h} messages`,
    `Mean return per bet, in basis points, ${sz}. Higher is better.${S.sizing === "y" ? " No-model rules were scored with equal bets only." : ""}`, "bps per bet");
}

// ── hover card ──
const card = document.getElementById("card");
function external(ctx) {
  const tt = ctx.tooltip, raw = tt.dataPoints && tt.dataPoints.length && tt.dataPoints[0].raw;
  if (!tt.opacity || !raw || !raw._html) { card.classList.remove("on"); return; }
  card.innerHTML = raw._html; card.classList.add("on");
  const rect = ctx.chart.canvas.getBoundingClientRect(), cw = card.offsetWidth, ch = card.offsetHeight;
  let x = rect.left + tt.caretX + 14, y = rect.top + tt.caretY + 14;
  if (x + cw > innerWidth - 8) x = rect.left + tt.caretX - cw - 14;
  if (y + ch > innerHeight - 8) y = rect.top + tt.caretY - ch - 14;
  card.style.left = Math.max(8, x) + "px"; card.style.top = Math.max(8, y) + "px";
}
const tooltip = () => ({ enabled: false, external, mode: "nearest", intersect: true });

// ── evolution chart ──
let evoChart = null;
function records(ser) {
  const better = ser.better === "lower" ? (a, b) => a < b : (a, b) => a > b;
  const sorted = [...ser.entries].sort((a, b) => a.x - b.x);
  let best = null; const rec = [], oth = [];
  for (const e of sorted) { if (best === null || better(e.y, best)) { best = e.y; rec.push(e); } else oth.push(e); }
  const holders = rec.filter((e, i) => i === 0 || rec[i - 1].group !== e.group);
  return { rec, oth, holders, best };
}

function drawEvo(ser) {
  if (evoChart) { evoChart.destroy(); evoChart = null; }
  const empty = document.getElementById("empty");
  const { rec, oth, holders, best } = records(ser);
  const lower = ser.better === "lower";
  const xs = ser.entries.map(e => e.x).concat(ser.failures.map(r => ms(r.end)));
  const now = ms(D.snapshot);
  const xMin = xs.length ? Math.min(...xs) : now - 3 * 86400e3, xMax = xs.length ? Math.max(...xs) : now;
  const span = Math.max(xMax - xMin, 12 * 3600e3);
  const xLo = xMin - span * 0.04, xHi = xMax + span * 0.14;
  const step = span > 2.5 * 86400e3 ? 12 * 3600e3 : 6 * 3600e3;
  const vals = ser.entries.map(e => e.y).concat(ser.baselines.map(b => b.value));
  let yLo, yHi;
  if (ser.log) { yLo = Math.min(...vals) * 0.88; yHi = Math.max(...vals) * 1.35; }
  else if (vals.length) { const lo = Math.min(...vals), hi = Math.max(...vals), pd = (hi - lo) * 0.18 || 0.05; yLo = lo - pd; yHi = hi + pd; }
  if (ser.yRange) [yLo, yHi] = ser.yRange;
  const failY = ser.log ? yHi / 1.12 : null;

  const stepData = rec.map(e => ({ x: e.x, y: e.y }));
  if (rec.length) stepData.push({ x: xHi, y: best });
  const pt = e => ({ x: e.x, y: e.y, _html: e.html, _e: e });
  const recData = rec.map(pt), othData = oth.map(pt);
  const liveData = ser.entries.filter(e => e.live).map(e => ({ x: e.x, y: e.y }));
  const failData = ser.failures.map(r => r.html ? { x: ms(r.end), y: r.y, _html: r.html } : ({ x: ms(r.end), y: failY,
    _html: `<div class="t">${esc(r.name)}</div><div class="s">${fmtDate(ms(r.end))} UTC · stopped</div><div class="d">${esc(r.note || "No score.")}</div>` }));

  const labels = {
    id: "labels",
    afterDatasetsDraw(c) {
      const g = c.ctx, a = c.chartArea;
      g.save(); g.textBaseline = "middle";
      g.font = `12px ${MONO}`; g.fillStyle = "#888"; g.textAlign = "right";
      ser.baselines.forEach(b => { const y = c.scales.y.getPixelForValue(b.value); if (y > a.top && y < a.bottom) g.fillText(`${b.name}  ${fmtVal(b.value, ser.unit)}`, a.right - 4, y + (lower ? 12 : -10)); });
      g.textAlign = "left"; g.font = `13px ${FONT}`;
      c.getDatasetMeta(1).data.forEach((el, i) => {
        const e = recData[i]._e; if (!holders.includes(e)) return;
        const isLast = i === recData.length - 1;
        const text = isLast ? `${e.group}  ${fmtVal(e.y, ser.unit)}` : e.group;
        const w = g.measureText(text).width + 12, h = 20;
        let lx = el.x + 9, ly = el.y - 28;
        if (lx + w > a.right) lx = el.x - w - 9;
        if (ly < a.top) ly = el.y + 9;
        g.fillStyle = "#fff"; g.strokeStyle = isLast ? HI : EDGE; g.lineWidth = isLast ? 1.4 : 1;
        g.beginPath(); g.roundRect(lx, ly, w, h, 4); g.fill(); g.stroke();
        g.fillStyle = isLast ? HI : EDGE; g.fillText(text, lx + 6, ly + h / 2);
      });
      g.restore();
    },
  };

  const yAxis = { type: ser.log ? "logarithmic" : "linear", reverse: lower, min: yLo, max: yHi, grid: { color: GRID },
    title: { display: true, text: ser.axis + (lower ? "  (↑ better, axis flipped)" : "  (↑ better)") } };
  if (ser.log) yAxis.ticks = { callback: v => [10, 15, 20, 30, 50, 100].includes(Math.round(v)) && Math.abs(v - Math.round(v)) < 1e-6 ? v : "" };
  if (!vals.length) { yAxis.min = 0; yAxis.max = 1; yAxis.ticks = { display: false }; }

  evoChart = new Chart(document.getElementById("evo"), {
    type: "line",
    data: { datasets: [
      { data: stepData, borderColor: HI, backgroundColor: HI_FILL, borderWidth: 2, stepped: "before", fill: lower ? "end" : "start", pointRadius: 0, pointHitRadius: 0, order: 3 },
      { type: "scatter", data: recData, backgroundColor: HI, borderColor: "#fff", borderWidth: 1.5, pointRadius: 6.5, pointHoverRadius: 8.5, order: 0, clip: false },
      { type: "scatter", data: othData, backgroundColor: OTHER, borderColor: EDGE, borderWidth: 0.8, pointRadius: 4.5, pointHoverRadius: 6.5, order: 1, clip: false },
      { type: "scatter", data: liveData, backgroundColor: "transparent", borderColor: HI, borderWidth: 2, pointRadius: 12, pointHoverRadius: 12, pointHitRadius: 0, order: 2 },
      { type: "scatter", data: failData, pointStyle: "crossRot", borderColor: MUTED, borderWidth: 2, pointRadius: 7, pointHoverRadius: 9, order: 1 },
      ...ser.baselines.map(b => ({ data: [{ x: xLo, y: b.value }, { x: xHi, y: b.value }], borderColor: "#9a9a9a", borderDash: [5, 4], borderWidth: 1.2, pointRadius: 0, pointHitRadius: 0, order: 4 })),
    ] },
    options: {
      maintainAspectRatio: false, animation: false, interaction: { mode: "nearest", intersect: true },
      plugins: { legend: { display: false }, tooltip: tooltip() },
      scales: { x: { type: "linear", min: xLo, max: xHi, grid: { color: GRID }, ticks: timeTicks(step), afterBuildTicks: utcTicks(step), title: { display: true, text: "wall-clock time (UTC)" } }, y: yAxis },
    },
    plugins: [labels],
  });

  if (!ser.entries.length) {
    empty.hidden = false;
    empty.innerHTML = S.bench === "lob"
      ? `<b>Not scored yet</b><p>No nanoSigma model has been scored with LOB-Bench <code>${esc(S.lob)}</code>. Scoring needs generated continuations and is being set up; points will appear here as models are scored.</p>`
      : `<b>No scores yet</b><p>No model has been scored on this setting.</p>`;
  } else empty.hidden = true;

  document.getElementById("legend").innerHTML = [
    `<span><i class="dot rec"></i> record (running best)</span>`,
    `<span><i class="dot oth"></i> other ${S.bench === "lm" ? "checkpoint" : "model"}</span>`,
    liveData.length ? `<span><i class="ring"></i> still training</span>` : "",
    failData.length ? `<span><i class="cross">×</i> ${S.speed ? "did not reach the target within the run" : "run stopped without a score"}</span>` : "",
    ser.baselines.length ? `<span><i class="dash"></i> ${S.bench === "lm" ? "baseline reference" : "no-model rule"}</span>` : "",
    `<span class="hint">hover a point for details</span>`,
  ].join("");
  return { rec, holders, best };
}

// ── leaderboard, records ──
function drawBoard(ser) {
  const lower = ser.better === "lower";
  const byGroup = new Map();
  ser.entries.forEach(e => { const b = byGroup.get(e.group); if (!b || (lower ? e.y < b.y : e.y > b.y)) byGroup.set(e.group, e); });
  const rows = [...byGroup.values()].sort((a, b) => lower ? a.y - b.y : b.y - a.y);
  const lm = S.bench === "lm";
  const refTxt = ser.refName ? `vs ${ser.refName}` : "";
  document.getElementById("boardNote").textContent = lm
    ? "Best validation score of each training run. Test scores exist only for finished runs."
    : "Best score of each model on the selected setting; no-model rules in grey.";
  const rel = v => {
    if (ser.refValue == null || v == null) return "—";
    if (ser.unit === "bps" || !lm) { const d = v - ser.refValue; return (d > 0 ? "+" : "") + d.toFixed(3); }
    const d = (v / ser.refValue - 1) * 100; return (d > 0 ? "+" : "") + d.toFixed(1) + "%";
  };
  const runOf = name => runs.find(r => r.name === name);
  let html = `<thead><tr><th>#</th><th>Model</th><th>Score</th>${lm ? "<th>Test</th>" : ""}<th>${esc(refTxt)}</th><th>${S.bench === "lob" ? "Checkpoint (UTC)" : "Scored (UTC)"}</th>${lm ? "<th>Status</th>" : ""}</tr></thead><tbody>`;
  html += rows.map((e, i) => {
    const r = lm ? runOf(e.group) : null;
    const fin = r && r.points.find(p => p.final);
    return `<tr class="${i === 0 ? "lead" : ""}"><td class="rank">${i + 1}</td>
      <td><b>${esc(e.group)}</b>${e.desc ? `<br><span class="sub">${esc(e.desc)}</span>` : ""}</td>
      <td class="num">${fmtVal(e.y, ser.unit)}</td>${lm ? `<td class="num">${fin && fin.test != null ? fin.test.toFixed(3) : "—"}</td>` : ""}
      <td class="num">${rel(e.y)}</td><td class="num">${fmtDate(e.x)}</td>${lm ? `<td><span class="chip ${r.status}">${r.status}</span></td>` : ""}</tr>`;
  }).join("");
  if (!lm) html += ser.baselines.map(b => `<tr class="base"><td class="rank">–</td><td>${esc(b.name)}</td><td class="num">${fmtVal(b.value, ser.unit)}</td><td class="num">${rel(b.value)}</td><td class="num">—</td></tr>`).join("");
  if (!rows.length && (lm || !ser.baselines.length)) html += `<tr><td colspan="6" class="sub">No scores yet.</td></tr>`;
  if (!rows.length && !lm && ser.baselines.length === 0) {}
  document.getElementById("board").innerHTML = html + "</tbody>";
}

function drawRecords(ser, info) {
  const el = document.getElementById("records");
  if (!el) return;
  if (!info.holders.length) { el.innerHTML = `<li><p>No records yet on this score.</p></li>`; return; }
  el.innerHTML = info.holders.map((e, i) => {
    const prev = i ? info.holders[i - 1] : null;
    const lastOf = info.rec.filter(z => z.group === e.group).pop();
    const delta = prev ? ` <span class="delta">${ser.better === "lower" ? "−" : "+"}${Math.abs(prev.y - e.y).toFixed(3)}</span>` : "";
    return `<li><div class="when">${fmtDate(e.x)} UTC</div><div><span class="what">${esc(e.group)}</span> takes the lead at ${fmtVal(e.y, ser.unit)}${delta}${lastOf !== e ? `, improves to ${fmtVal(lastOf.y, ser.unit)}` : ""}</div>${e.desc ? `<p>${esc(e.desc)}</p>` : ""}</li>`;
  }).join("");
}

// ── speed view: training time until a model first reaches a fixed target ──
// Time is wall-clock hours of pretraining on 8 GPUs (GPU-hours / 8). Each model is scored only at some
// checkpoints, so t* is the first scored checkpoint that reaches the target: an upper bound when it is the
// first checkpoint scored, bracketed when an earlier scored checkpoint missed.
const LOBERT = "one token per message", LOBERT_PASS1_H = 7.56; // snapshot "pass1" at train_hours 7.5625 (lobert_r3_10pass metrics.jsonl)
const pretrainH = name => {
  const [grp, part] = name.split(" · ");
  if (grp === LOBERT) { if (/1 pass/.test(part)) return LOBERT_PASS1_H; const m = /(\d+) h/.exec(part || ""); return m ? +m[1] : null; }
  const r = runs.find(x => x.name === grp); return r && r.points.length ? r.points[r.points.length - 1].hours : (r ? r.budget_h : null);
};
// training throughput, messages per second on 8 GPUs, whole 10 h run: tokens / (tokens per message) / seconds (each run's final.json)
const MSG_PER_S = { "baseline r4": 34054, "no-book ablation": 42462, "field embedding": 35861, "new tokens (a)": 80892,
  "full book state (Q)": 73179, "level-total book state (A)": 72821, "no book state (N)": 79119,
  [LOBERT]: 523023 }; // lobert_r3_10pass final.json, 13 h clock on 8 GPUs
const fmtTput = g => MSG_PER_S[g] ? (MSG_PER_S[g] / 1000).toFixed(1) + "k msg/s" : "—";
const runDesc = g => (runs.find(r => r.name === g) || {}).desc || (g === LOBERT ? "One token per message (LOBERT); next-message coarse token only." : "");

function speedSource() {
  Object.assign(S, { lob: D.lob_default, h: 128, ft: "3h", tgt: 1 }); // the single, shared base of the speed view
  const groups = new Map();
  const add = (g, h, v, kv, t) => { if (h == null) return; if (!groups.has(g)) groups.set(g, []); groups.get(g).push({ h, v, kv, t }); };
  let key, src;
  if (S.bench === "lm") {
    runs.forEach(r => r.points.forEach(p => add(r.name, p.hours, p.val, null, p.t)));
    src = { metric: "validation cross-entropy per message", short: "val CE", better: "lower", unit: " nats", ref: refLM, dp: 2,
      note: "Message-level perplexity = e^CE, so a CE target is a perplexity target. LM evaluations start at 6 h (full 4,096-message context), so any run already under the target at 6 h shows as ≤ 6 h." };
  } else if (S.bench === "lob") {
    key = "lob:" + S.lob;
    D.scores[key].entries.forEach(e => add(e.model, pretrainH(e.model), e.value, e.kv, e.t));
    src = { metric: `LOB-Bench ${S.lob}`, short: S.lob, better: "lower", unit: "", dp: 3,
      note: "Only the final checkpoint of each run has been scored on LOB-Bench so far, so every time here is an upper bound (≤ 10 h); scoring earlier checkpoints would tighten it." };
  } else {
    key = S.bench === "return" ? `return:${S.h}:pearson` : `pnl:${S.h}:A:x`;
    const ftOk = kv => S.ft === "3h" ? /fine-tune 3 h/.test(kv[0] || "") : /1,119 steps/.test(kv[0] || "");
    D.scores[key].entries.filter(e => !/frozen/.test(e.model) && ftOk(e.kv || []))
      .forEach(e => add(e.model.split(" · ")[0], pretrainH(e.model), e.value, e.kv, e.t));
    src = S.bench === "return"
      ? { metric: `return-bench pooled Pearson, ${S.h} messages`, short: "Pearson", better: "higher", unit: "", dp: 3 }
      : { metric: `PnL A per bet, ${S.h} messages, equal bets`, short: "PnL A", better: "higher", unit: " bps", dp: 3 };
    src.note = `Time = pretraining of the backbone; every model then gets the same fine-tune (${S.ft === "3h" ? "3 h on 8 GPUs" : "1,119 steps, as r4"}), not counted.`;
  }
  if (key) { const r4 = D.scores[key].entries.find(e => /^baseline r4( · end-to-end)?/.test(e.model) && !/frozen/.test(e.model)); src.ref = r4 ? r4.value : null; }
  return { src, groups };
}

function speedTargets(src) {
  if (src.ref == null) return [];
  const sgn = src.better === "lower" ? -1 : 1;
  return [[-0.1, "easier"], [0, "= r4"], [0.1, "10% better"], [0.2, "20% better"]]
    .map(([f, lab]) => ({ v: f === 0 ? src.ref : +(src.ref * (1 + sgn * f)).toFixed(src.dp), lab })); // "= r4" stays exact so r4 reaches its own score
}

function speedRows(src, groups, T) {
  const pass = v => src.better === "lower" ? v <= T : v >= T;
  const rows = [...groups.entries()].map(([g, pts]) => {
    pts.sort((a, b) => a.h - b.h);
    const i = pts.findIndex(p => pass(p.v));
    const maxH = pts[pts.length - 1].h;
    if (i < 0) return { g, pts, kind: "miss", t: null, maxH };
    return { g, pts, kind: i > 0 ? "resolved" : "upper", t: pts[i].h, lo: i > 0 ? pts[i - 1].h : null, maxH, v: pts[i].v };
  });
  const ref = rows.find(r => r.g === "baseline r4");
  rows.forEach(r => {
    r.speedup = "—";
    if (!ref || r.kind === "miss") return;
    if (r === ref) { r.speedup = "1.0×"; return; }
    if (ref.kind === "miss") { r.speedup = `> ${(ref.maxH / r.t).toFixed(1)}×`; return; }
    const x = (ref.t / r.t).toFixed(1) + "×";
    r.speedup = r.kind === "upper" && ref.kind === "resolved" ? "≥ " + x : r.kind === "resolved" && ref.kind === "upper" ? "≤ " + x
      : r.kind === "upper" && ref.kind === "upper" ? "?" : x;
  });
  rows.sort((a, b) => (a.t == null) - (b.t == null) || (a.t ?? a.maxH) - (b.t ?? b.maxH) || a.g.localeCompare(b.g));
  return rows;
}
const tTxt = r => r.kind === "miss" ? `not reached by ${r.maxH} h` : r.kind === "upper" ? `≤ ${r.t} h` : `${r.lo}–${r.t} h`;

function renderSpeed() {
  if (evoChart) { evoChart.destroy(); evoChart = null; }
  const { src, groups } = speedSource();
  const targets = speedTargets(src);
  if (S.tgt >= targets.length) S.tgt = 1;
  const T = targets.length ? targets[S.tgt].v : null;
  const fv = v => v.toFixed(src.dp) + src.unit;
  const cmp = src.better === "lower" ? "≤" : "≥";
  document.getElementById("scoreTitle").textContent = T == null ? "Speed: no reference score yet"
    : `Speed: training time until ${src.metric} ${cmp} ${fv(T)}`;
  document.getElementById("scoreNote").textContent = "Lower time = reaches the same quality with less training; the line is the running best. " + src.note;
  const rows = T == null ? [] : speedRows(src, groups, T);
  const empty = document.getElementById("empty");
  empty.hidden = rows.length > 0;
  if (!rows.length) empty.innerHTML = `<b>No scores yet</b><p>No model has been scored on this setting.</p>`;

  // same Score Evolution chart as the score view: x = when the model was trained, y = time to reach the target
  const statusTxt = { miss: "not reached", upper: "upper bound", resolved: "bracketed" };
  const card = r => `<div class="t">${esc(r.g)}</div><div class="s">${fmtDate(r.x)} UTC · ${statusTxt[r.kind]}</div>
    <div class="big">${tTxt(r)}</div><div class="kv">${r.t != null ? (r.kind === "upper" ? "≤ " : "") + Math.round(r.t * 8) + " GPU-hours" : "no time to target"}</div>
    <div class="kv">throughput ${fmtTput(r.g)}</div><div class="kv">scored at ${r.pts.map(p => p.h).join(", ")} h</div>`;
  rows.forEach(r => { const p = r.t != null ? r.pts.find(q => q.h === r.t) : r.pts[r.pts.length - 1]; r.x = ms(p.t); });
  const budget = Math.max(10, ...rows.map(r => r.maxH));
  const ser = {
    title: "", note: "", axis: "time to reach target, hours on 8 GPUs", better: "lower", unit: "h", log: false,
    yRange: [0, budget * 1.2],
    entries: rows.filter(r => r.t != null).map(r => ({ x: r.x, y: r.t, group: r.g, html: card(r), desc: "" })),
    baselines: [], refName: null, refValue: null,
    failures: rows.filter(r => r.t == null).map(r => ({ end: r.x, y: budget * 1.1, html: card(r) })),
  };
  drawEvo(ser);
  document.getElementById("boardNote").textContent = "Models ordered by time to reach the target. Throughput = training messages per second on 8 GPUs, averaged over the run.";
  let html = `<thead><tr><th>#</th><th>Model</th><th>Time to reach target</th><th>GPU-hours</th><th>Throughput</th><th>Scored at (h)</th><th>Status</th></tr></thead><tbody>`;
  html += rows.map((r, i) => `<tr class="${i === 0 && r.t != null ? "lead" : ""}"><td class="rank">${r.t != null ? i + 1 : "–"}</td>
    <td><b>${esc(r.g)}</b>${runDesc(r.g) ? `<br><span class="sub">${esc(runDesc(r.g))}</span>` : ""}</td>
    <td class="num">${tTxt(r)}</td><td class="num">${r.t != null ? (r.kind === "upper" ? "≤ " : "") + Math.round(r.t * 8) : "—"}</td>
    <td class="num">${fmtTput(r.g)}</td><td class="num">${r.pts.map(p => p.h).join(", ")}</td>
    <td><span class="chip ${r.kind}">${{ miss: "not reached", upper: "upper bound", resolved: "bracketed" }[r.kind]}</span></td></tr>`).join("");
  if (!rows.length) html += `<tr><td colspan="7" class="sub">No scores yet.</td></tr>`;
  document.getElementById("board").innerHTML = html + "</tbody>";
}

function drawSpeedOpts(o, H) {
  return; // one gate per bench (r4's score); the threshold / horizon / fine-tune choices stay in code, not shown
  const { src } = speedSource();
  const targets = speedTargets(src);
  if (S.bench === "lob") o.appendChild(seg("method", D.lob_methods.map(m => [m, m + (m === D.lob_default ? " (default)" : "")]), S.lob, v => { S.lob = v; S.tgt = 1; render(); }));
  if (S.bench === "return" || S.bench === "pnl") {
    o.appendChild(seg("horizon (messages)", H, S.h, v => { S.h = v; S.tgt = 1; render(); }));
    o.appendChild(seg("fine-tune", [["3h", "3 h (default)"], ["eq", "1,119 steps"]], S.ft, v => { S.ft = v; render(); }));
  }
  if (targets.length) {
    const cmp = src.better === "lower" ? "≤" : "≥";
    o.appendChild(seg(`target ${src.short} ${cmp}`, targets.map((t, i) => [i, `${t.v.toFixed(src.dp)} ${t.lab}${i === 1 ? " (default)" : ""}`]), S.tgt, v => { S.tgt = v; render(); }));
  }
}

// ── controls ──
function seg(label, options, cur, onPick) {
  const wrap = document.createElement("span"); wrap.className = "grp";
  wrap.innerHTML = `<label>${label}</label>`;
  const s = document.createElement("span"); s.className = "seg";
  options.forEach(([v, text]) => {
    const b = document.createElement("button"); b.type = "button"; b.textContent = text;
    b.setAttribute("aria-pressed", String(v === cur)); b.onclick = () => onPick(v); s.appendChild(b);
  });
  wrap.appendChild(s); return wrap;
}
function drawOpts() {
  const o = document.getElementById("opts"); o.innerHTML = "";
  const H = HORIZONS.map(h => [h, String(h)]);
  if (S.speed) { drawSpeedOpts(o, H); return; }
  if (S.bench === "lob") {
    o.appendChild(seg("method", D.lob_methods.map(m => [m, m + (m === D.lob_default ? " (default)" : "")]), S.lob, v => { S.lob = v; render(); }));
  } else if (S.bench === "return") {
    o.appendChild(seg("horizon (messages)", H, S.h, v => { S.h = v; render(); }));
    o.appendChild(seg("metric", [["pearson", "Pearson"], ["direction_acc", "direction"]], S.metric, v => { S.metric = v; render(); }));
  } else if (S.bench === "pnl") {
    o.appendChild(seg("horizon (messages)", H, S.h, v => { S.h = v; render(); }));
    o.appendChild(seg("PnL", [["A", "A mid-to-mid"], ["B", "B after spread"]], S.variant, v => { S.variant = v; render(); }));
    o.appendChild(seg("sizing", [["x", "equal"], ["y", "vol-scaled"]], S.sizing, v => { S.sizing = v; render(); }));
  }
}
document.querySelectorAll("#benchTabs button").forEach(b => {
  b.dataset.score = b.querySelector("span").textContent;
  b.onclick = () => { if (S.bench !== b.dataset.bench) S.tgt = 1; S.bench = b.dataset.bench; render(); };
});
document.getElementById("speedBtn").onclick = () => { S.speed = !S.speed; if (S.speed) S.bench = "lob"; render(); };

function render() {
  document.body.classList.toggle("speed", S.speed);
  document.getElementById("speedBtn").setAttribute("aria-pressed", String(S.speed));
  setPalette(S.speed);
  // intro figures: same content, blue copies (figures/*_blue.png) in the speed view
  document.querySelectorAll(".intro-body figure a").forEach(a => {
    const base = a.getAttribute("href").replace(/_blue\.png$/, ".png"), src = S.speed ? base.replace(/\.png$/, "_blue.png") : base;
    a.setAttribute("href", src); a.querySelector("img").setAttribute("src", src);
  });
  document.querySelectorAll(".bench-fig").forEach(f => { f.hidden = f.dataset.bench !== (S.speed ? "speed-" + S.bench : S.bench); });
  document.querySelectorAll("#benchTabs button").forEach(b => {
    b.setAttribute("aria-selected", String(b.dataset.bench === S.bench));
    b.querySelector("span").textContent = S.speed ? b.dataset.speed : b.dataset.score;
  });
  drawOpts();
  if (S.speed) { renderSpeed(); writeHash(); return; }
  const ser = currentSeries();
  document.getElementById("scoreTitle").textContent = ser.title;
  document.getElementById("scoreNote").textContent = ser.note;
  const info = drawEvo(ser);
  drawBoard(ser); drawRecords(ser, info); writeHash();
}

// ── static parts ──
document.getElementById("foot").textContent = `nanoSigma · snapshot ${fmtDate(ms(D.snapshot))} UTC`;
if (document.getElementById("failures")) document.getElementById("failures").innerHTML = failed.map(r =>
  `<li><div class="when">${fmtDate(ms(r.end))} UTC</div><div class="what">${esc(r.name)}</div><p>${esc(r.note)}</p></li>`).join("");
render();
