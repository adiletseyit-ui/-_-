/* ===== Ойын деректері (осы жерде өзгертуге болады) ===== */
const RESULT_TEXTS = {
  high: "Тамаша! Сен цифрлық қауіпсіздікті жақсы білесің!",
  mid: "Жақсы нәтиже! Тағы бір рет қайталап, біліміңді нығайт.",
  low: "Мазмұнын қайта оқып, қайта ойнап көр."
};

const QUIZ_GAMES = {
  game1: {
    title: "Қауіпті тап!",
    hint: "Жағдайды оқып, қауіпсіз немесе қауіпті екенін таңда.",
    layout: "duo",
    options: ["👍 Қауіпсіз", "👎 Қауіпті"],
    items: [
      { q: "Айдос құпия сөзін ешкіммен бөліспейді және оны күрделі етіп қояды.", correct: 0, explain: "Күрделі құпия сөз аккаунтты қорғайды. Оны досыңа, сыныптастарыңа немесе бейтаныс адамдарға айтпа." },
      { q: "Әлия бейтаныс адам жіберген сілтемені басып, ондағы сұрақтарға жауап берді.", correct: 1, explain: "Бейтаныс сілтеме фишинг немесе зиянды сайт болуы мүмкін. Мұндай сілтемені ашпай, ата-анасына немесе мұғалімге айт." },
      { q: "Данияр әлеуметтік желіде үй мекенжайын, мектебін және ата-анасының жұмыс орнын жариялады.", correct: 1, explain: "Жеке ақпаратты интернетке жарияламау керек. Оны көрген бейтаныс адам сені немесе отбасыңды қауіпке ұшыратуы мүмкін." },
      { q: "Мәдина интернеттен жүктеген ойынын тек ресми дүкеннен алды.", correct: 0, explain: "Ресми дүкеннен жүктелген қосымшалар қауіпсіздеу. Белгісіз сайттардан ойын немесе файл жүктеме." },
      { q: "Ерлан чаттағы бейтаныс адамға өз фотосуретін жіберді.", correct: 1, explain: "Жеке фотосуретті бейтаныс адамға жіберме. Оны басқа адамдарға таратуы немесе зиян келтіру үшін пайдалануы мүмкін." },
      { q: "Сен құпия сөзіңді “12345” деп қойдың.", correct: 1, explain: "“12345” — өте оңай құпия сөз. Оның ішінде әріп, сан және таңба болуы керек." },
      { q: "Сен қосымшаны тек ресми дүкеннен жаңарттың.", correct: 0, explain: "Қосымшаны ресми дүкеннен жаңарту қауіпсіз. Белгісіз сілтемеден немесе бейтаныс сайттан жаңартпа." }
    ]
  },
  game2: {
    title: "Сен не істер едің?",
    hint: "Жағдайды оқып, ең дұрыс шешімді таңда.",
    items: [
      { q: "Саған бейтаныс адам хабарлама жазды: “Сен ұттың! Сыйлық алу үшін ата-анаңның картасының нөмірін жаз”.",
        options: ["Картамен байланысты ақпаратты жазу.", "Хабарламаны елемеу және ата-анасына айту.", "Бейтаныс адаммен сөйлесіп, сыйлықтың қандай екенін сұрау."],
        correct: 1, explain: "Бұл алаяқтық белгісі. Карта деректерін ешкімге жазба. Хабарламаны жауапсыз қалдырып, ата-анаңа немесе мұғаліміңе айт." },
      { q: "Саған әлеуметтік желіден бейтаныс адам жазып, кездесуге шақырды.",
        options: ["Жеке кездесуге бару.", "Мекенжайыңды және мектебіңді жіберу.", "Кездеспеу, хабарламаны тоқтату және ата-анасына айту."],
        correct: 2, explain: "Интернеттегі бейтаныс адам кім екенін білмейсің. Жеке кездеспе, өз мекенжайың мен мектебіңді жазба. Ата-анаңа немесе сенімді ересек адамға айт." },
      { q: "Сен интернетте біреуді қорлайтын немесе қорқытатын хабарламалар көрдің.",
        options: ["Оған дәл солай жауап беруді бастау.", "Хабарламалардың скриншотын алып, ата-анасына, мұғалімге айту немесе қажет болса 102 нөміріне хабарлау.", "Ешкімге айтпау, себебі “өзің кінәлісің” деп ойлау."],
        correct: 1, explain: "Бұл кибербуллинг болуы мүмкін. Жауап берме, скриншот сақта және сенімді ересек адамға айт. Қауіп нақты болса, 102 нөміріне хабарлауға болады." }
    ]
  },
  game4: {
    title: "Блиц-викторина",
    hint: "Бес сұрақ. Әр дұрыс жауап — 1 балл.",
    items: [
      { q: "Құпия сөз қандай болуы керек?", options: ["Оңай және қысқа.", "Күрделі және жеке.", "Атыңмен бірдей."], correct: 1, explain: "Күрделі құпия сөз аккаунтты қорғайды. Оны ешкімге айтпа." },
      { q: "Бейтаныс адам сілтеме жіберсе, не істеу керек?", options: ["Дереу басу.", "Досыңа жіберу.", "Ашпау және ересек адамға айту."], correct: 2, explain: "Бейтаныс сілтеме қауіпті сайт немесе алаяқтық болуы мүмкін." },
      { q: "Интернетте қандай ақпаратты жарияламау керек?", options: ["Сүйікті спорт түрі.", "Үй мекенжайы.", "Сүйікті кітап."], correct: 1, explain: "Үй мекенжайы — жеке ақпарат. Оны жарияламау керек." },
      { q: "Қосымшаны қайдан жүктеген дұрыс?", options: ["Белгісіз сайттан.", "Ресми дүкеннен.", "Чаттағы сілтемеден."], correct: 1, explain: "Ресми дүкендегі қосымшалар тексеріледі және қауіпсіздеу." },
      { q: "Нақты қауіп төнгенде қай нөмірге қоңырау шалуға болады?", options: ["102.", "12345.", "555."], correct: 0, explain: "102 — полицияның шұғыл көмек нөмірі. Оны тек нақты қауіп немесе құқық бұзушылық болғанда пайдалану керек." }
    ]
  }
};

const PUZZLE_GAME = {
  title: "Қауіпсіздік пазлы",
  hint: "Қауіпті дұрыс шешіммен байланыстыр.",
  pairs: [
    ["Құпия сөзді басқалармен бөлісу", "Құпия сөзді тек өзің сақта"],
    ["Бейтаныс сілтемені басу", "Сілтемені ашпай, ересек адамға айту"],
    ["Жеке ақпаратты жариялау", "Мекенжай, мектеп және телефон нөмірін жасыру"],
    ["Белгісіз сайттан ойын жүктеу", "Қосымшаны ресми дүкеннен жүктеу"],
    ["Чаттағы бейтаныс адаммен сөйлесу", "Сөйлесуді тоқтатып, ата-анасына айту"]
  ]
};

/* ===== Көмекші функциялар ===== */
function el(tag, cls, text) {
  const node = document.createElement(tag);
  if (cls) node.className = cls;
  if (text !== undefined) node.textContent = text;
  return node;
}
function button(label, cls, onClick) {
  const b = el("button", cls, label);
  b.type = "button";
  b.addEventListener("click", onClick);
  return b;
}
function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
const TONES = { game1: "danger", game2: "accent", game3: "success", game4: "warning" };
function gameShell(root, game) {
  root.replaceChildren();
  const wrap = el("div", "game");
  const back = el("a", "btn ghost back", "Басты бет");
  back.href = "#home";
  const h1 = el("h1", "", game.title);
  h1.tabIndex = -1;
  const head = el("div", "game-head");
  head.append(back, h1, el("p", "hint", game.hint));
  const body = el("div", "card");
  wrap.append(head, body);
  root.dataset.tone = TONES[root.id];
  root.append(wrap);
  return body;
}

/* ===== Геймификация: ұпай, деңгей, жұлдыздар ===== */
const PRAISE = ["Керемет!", "Дәл тауып қойдың!", "Тамаша жауап!", "Өте жақсы!", "Сенімдісің!"];
const SOFT = ["Ештеңе етпейді, келесіде шығады!", "Қателесу — үйренудің бір жолы.", "Жақын болды, түсіндірмені оқып көр."];
const LEVELS = [
  { xp: 0, name: "Жаңа қатысушы" },
  { xp: 50, name: "Сақ пайдаланушы" },
  { xp: 120, name: "Желі зерттеушісі" },
  { xp: 220, name: "Қауіпсіздік сарбазы" },
  { xp: 350, name: "Цифрлық қорғаушы" }
];
const POINTS = { correct: 10, streakBonus: 5, streakFrom: 3, perfectBonus: 20 };
const STORE_KEY = "qcw-progress";

function loadProgress() {
  try { return Object.assign({ xp: 0, stars: {} }, JSON.parse(localStorage.getItem(STORE_KEY))); }
  catch { return { xp: 0, stars: {} }; }
}
function saveProgress() {
  try { localStorage.setItem(STORE_KEY, JSON.stringify(progress)); } catch {}
}
const progress = loadProgress();
const pick = arr => arr[Math.floor(Math.random() * arr.length)];

function levelInfo() {
  let i = 0;
  LEVELS.forEach((l, k) => { if (progress.xp >= l.xp) i = k; });
  const cur = LEVELS[i], nxt = LEVELS[i + 1];
  return { i, cur, pct: nxt ? ((progress.xp - cur.xp) / (nxt.xp - cur.xp)) * 100 : 100 };
}
function renderLevel() {
  const { cur, pct } = levelInfo();
  const box = document.getElementById("level");
  const bar = el("div", "level-bar");
  bar.append(el("i"));
  bar.firstChild.style.width = `${pct}%`;
  box.replaceChildren(el("span", "", `${cur.name} · ${progress.xp} XP`), bar);
}
function addXp(n) {
  const before = levelInfo().i;
  progress.xp += n;
  saveProgress();
  renderLevel();
  const after = levelInfo();
  if (after.i > before) toast(`Жаңа деңгей: ${after.cur.name}!`);
}
function toast(text) {
  const t = el("div", "toast", text);
  document.body.append(t);
  setTimeout(() => t.remove(), 2800);
}
function starsEl(count, big) {
  const wrap = el("div", big ? "stars big" : "stars");
  wrap.setAttribute("aria-label", `${count} / 3 жұлдыз`);
  for (let i = 0; i < 3; i++) {
    wrap.insertAdjacentHTML("beforeend",
      `<svg class="icon star${i < count ? " on" : ""}" viewBox="0 0 24 24"><path d="m12 3 2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1L3.2 9.5l6.1-.9z"/></svg>`);
  }
  return wrap;
}
function confetti() {
  const box = el("div", "confetti");
  const colors = ["#1E5AA8", "#1F8A5B", "#E7B449", "#C6453B"];
  for (let i = 0; i < 24; i++) {
    const p = el("i");
    p.style.left = `${Math.random() * 100}%`;
    p.style.background = colors[i % 4];
    p.style.animationDelay = `${Math.random() * 0.5}s`;
    box.append(p);
  }
  return box;
}
function saveStars(id, count) {
  progress.stars[id] = Math.max(progress.stars[id] || 0, count);
  saveProgress();
}
function renderHomeStars() {
  document.querySelectorAll(".stars[data-game]").forEach(n =>
    n.replaceChildren(...starsEl(progress.stars[n.dataset.game] || 0).children));
}

/* ===== Викторина қозғалтқышы (1, 2, 4-ойындар) ===== */
function startQuiz(id) {
  const game = QUIZ_GAMES[id];
  const body = gameShell(document.getElementById(id), game);
  let index = 0, score = 0, streak = 0, earned = 0;

  function showQuestion() {
    const item = game.items[index];
    const options = item.options || game.options;
    body.replaceChildren();

    const status = el("div", "status");
    const scoreEl = el("span", "", `Дұрыс жауап: ${score}`);
    const streakEl = el("span", "streak", streak >= 2 ? `Серия ×${streak}` : "");
    status.append(el("span", "", `${index + 1} / ${game.items.length}`), streakEl, scoreEl);
    const bar = el("div", "bar");
    bar.append(el("i"));
    bar.firstChild.style.width = `${(index / game.items.length) * 100}%`;

    const list = el("div", game.layout === "duo" ? "options duo" : "options");
    const feedback = el("div");
    feedback.setAttribute("aria-live", "polite");
    const actions = el("div", "actions");

    options.forEach((text, i) => {
      list.append(button(text, "opt", () => choose(i)));
    });

    function choose(i) {
      const buttons = [...list.children];
      buttons.forEach(b => (b.disabled = true));
      const ok = i === item.correct;
      let gain = 0;
      if (ok) {
        score++; streak++;
        gain = POINTS.correct + (streak >= POINTS.streakFrom ? POINTS.streakBonus : 0);
        earned += gain;
      } else streak = 0;
      buttons[item.correct].classList.add("right");
      if (!ok) buttons[i].classList.add("wrong");
      const box = el("div", `feedback ${ok ? "right" : "wrong"}`);
      box.append(el("strong", "", ok ? `${pick(PRAISE)}${streak >= POINTS.streakFrom ? ` Серия ×${streak}` : ""}` : pick(SOFT)));
      if (!ok && item.options) box.append(el("p", "", `Дұрыс жауап: ${options[item.correct]}`));
      box.append(el("p", "", item.explain));
      feedback.replaceChildren(box);
      scoreEl.textContent = `Дұрыс жауап: ${score}`;
      streakEl.textContent = streak >= 2 ? `Серия ×${streak}` : "";
      if (gain) status.append(el("span", "xp-pop", `+${gain} XP`));
      actions.replaceChildren(button("Келесі", "btn", next));
      actions.firstChild.focus();
    }

    body.append(status, bar, el("p", "question", item.q), list, feedback, actions);
  }

  function next() {
    index++;
    index < game.items.length ? showQuestion() : showResult();
  }

  function showResult() {
    const total = game.items.length;
    const ratio = score / total;
    const text = ratio === 1 ? RESULT_TEXTS.high : ratio >= 0.6 ? RESULT_TEXTS.mid : RESULT_TEXTS.low;
    const stars = ratio === 1 ? 3 : ratio >= 0.6 ? 2 : ratio >= 0.4 ? 1 : 0;
    if (ratio === 1) earned += POINTS.perfectBonus;
    addXp(earned);
    saveStars(id, stars);
    body.replaceChildren();
    const box = el("div", "result");
    const actions = el("div", "actions");
    actions.style.justifyContent = "center";
    const home = el("a", "btn ghost", "Басты бет");
    home.href = "#home";
    actions.append(button("Қайта ойнау", "btn", () => startQuiz(id)), home);
    box.append(starsEl(stars, true), el("div", "score", `${score} / ${total}`), el("p", "", text),
      el("p", "xp-line", `+${earned} XP жиналды`), actions);
    if (stars === 3) box.append(confetti());
    body.append(box);
  }

  showQuestion();
}

/* ===== Қауіпсіздік пазлы (3-ойын) ===== */
function startPuzzle() {
  const body = gameShell(document.getElementById("game3"), PUZZLE_GAME);
  const pairs = PUZZLE_GAME.pairs;
  let attempts = 0, matched = 0, selected = null, locked = false;

  const status = el("div", "status");
  const counter = el("span", "", "Әрекет саны: 0");
  status.append(el("span", "", "Қауіпті дұрыс шешіммен байланыстыр"), counter);

  const left = el("div", "col"), right = el("div", "col");
  const msg = el("p", "msg");
  msg.setAttribute("aria-live", "polite");
  const actions = el("div", "actions");

  pairs.forEach(([danger], i) => {
    const b = button(danger, "pz left", () => pickLeft(b));
    b.dataset.id = i;
    left.append(b);
  });
  shuffle(pairs.map((p, i) => [p[1], i])).forEach(([solution, i]) => {
    const b = button(solution, "pz rightcol", () => pickRight(b));
    b.dataset.id = i;
    right.append(b);
  });

  function pickLeft(b) {
    if (locked) return;
    left.querySelectorAll(".selected").forEach(n => n.classList.remove("selected"));
    b.classList.add("selected");
    selected = b;
    msg.textContent = "";
  }

  function pickRight(b) {
    if (locked) return;
    if (!selected) {
      msg.className = "msg";
      msg.textContent = "Алдымен сол жақтан қауіпті таңда.";
      return;
    }
    attempts++;
    counter.textContent = `Әрекет саны: ${attempts}`;
    const pair = selected;
    if (pair.dataset.id === b.dataset.id) {
      [pair, b].forEach(n => { n.classList.remove("selected"); n.classList.add("matched"); n.disabled = true; });
      selected = null;
      matched++; addXp(10);
      msg.className = "msg right";
      msg.textContent = "Дұрыс! Бұл шешім қауіпті болдырмауға көмектеседі";
      if (matched === pairs.length) finish();
    } else {
      locked = true;
      [pair, b].forEach(n => n.classList.add("miss"));
      msg.className = "msg wrong";
      msg.textContent = "Бұл жұп сәйкес емес. Тағы ойлан";
      setTimeout(() => {
        [pair, b].forEach(n => n.classList.remove("miss", "selected"));
        selected = null;
        locked = false;
      }, 650);
    }
  }

  function finish() {
    msg.className = "msg right";
    msg.textContent = "Керемет! Барлық қауіпсіздік пазлын дұрыс жинадың";
    const home = el("a", "btn ghost", "Басты бет");
    home.href = "#home";
    const bonus = attempts === pairs.length ? POINTS.perfectBonus : attempts <= pairs.length + 2 ? 10 : 0;
    const stars = attempts === pairs.length ? 3 : attempts <= pairs.length + 2 ? 2 : 1;
    addXp(bonus);
    saveStars("game3", stars);
    const res = el("div", "result");
    res.append(starsEl(stars, true), el("p", "xp-line", `+${pairs.length * 10 + bonus} XP жиналды`));
    if (stars === 3) res.append(confetti());
    actions.before(res);
    actions.append(button("Қайта ойнау", "btn", startPuzzle), home);
  }

  const cols = el("div", "puzzle");
  cols.append(left, right);
  body.append(status, cols, msg, actions);
}

/* ===== Навигация ===== */
const STARTERS = {
  game1: () => startQuiz("game1"),
  game2: () => startQuiz("game2"),
  game3: startPuzzle,
  game4: () => startQuiz("game4")
};

function route() {
  renderHomeStars();
  const id = location.hash.slice(1) || "home";
  const target = document.getElementById(id) ? id : "home";
  document.querySelectorAll(".view").forEach(v => (v.hidden = v.id !== target));
  if (STARTERS[target]) STARTERS[target]();
  window.scrollTo(0, 0);
  const h1 = document.querySelector(`#${target} h1`);
  if (h1) h1.focus({ preventScroll: true });
}
renderLevel();
window.addEventListener("hashchange", route);
route();
