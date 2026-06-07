// ══════════════════════════════════════════════════════════════════
//  VOCABULARY DATA — 60 words across 3 levels
// ══════════════════════════════════════════════════════════════════
const CARDS = {

  intermediate: [
    { word: "Ambiguous",   emoji: "🤔", translation: "Ambiguo",           example: "The message was ambiguous — nobody knew what it meant." },
    { word: "Confident",   emoji: "💪", translation: "Seguro/a",           example: "She felt confident before the job interview." },
    { word: "Exhausted",   emoji: "😴", translation: "Agotado/a",          example: "After the marathon, he was completely exhausted." },
    { word: "Generous",    emoji: "🎁", translation: "Generoso/a",         example: "It was generous of you to share your lunch." },
    { word: "Harvest",     emoji: "🌾", translation: "Cosecha",            example: "The farmers celebrated a great harvest this year." },
    { word: "Innovative",  emoji: "💡", translation: "Innovador/a",        example: "The company launched an innovative new product." },
    { word: "Journey",     emoji: "🗺️", translation: "Viaje / Camino",     example: "Learning a language is a long journey." },
    { word: "Knowledge",   emoji: "📚", translation: "Conocimiento",       example: "Her knowledge of history impressed everyone." },
    { word: "Legislation", emoji: "⚖️", translation: "Legislación",        example: "New legislation will protect the environment." },
    { word: "Milestone",   emoji: "🏁", translation: "Hito / Logro",       example: "Finishing the course was a major milestone." },
    { word: "Negotiate",   emoji: "🤝", translation: "Negociar",           example: "They had to negotiate the price before buying." },
    { word: "Obstacle",    emoji: "🚧", translation: "Obstáculo",          example: "Fear is often the biggest obstacle to success." },
    { word: "Persuade",    emoji: "🗣️", translation: "Persuadir",          example: "He tried to persuade her to join the team." },
    { word: "Reluctant",   emoji: "😬", translation: "Reticente",          example: "She was reluctant to speak in front of the class." },
    { word: "Significant", emoji: "⭐", translation: "Significativo/a",    example: "The discovery was a significant breakthrough." },
    { word: "Thrive",      emoji: "🌱", translation: "Prosperar",          example: "Plants thrive when they get enough sunlight." },
    { word: "Undermine",   emoji: "⛏️", translation: "Socavar",            example: "Constant criticism can undermine your confidence." },
    { word: "Vivid",       emoji: "🎨", translation: "Vívido/a",           example: "She had a vivid memory of her first day at school." },
    { word: "Withdraw",    emoji: "🚪", translation: "Retirarse",          example: "He decided to withdraw from the competition." },
    { word: "Yield",       emoji: "🏳️", translation: "Ceder / Producir",   example: "Sometimes you need to yield to reach an agreement." }
  ],

  upper: [
    { word: "Acknowledge",   emoji: "👋", translation: "Reconocer",          example: "She acknowledged her mistake in front of the team." },
    { word: "Diligent",      emoji: "📝", translation: "Diligente",           example: "He was diligent in completing all his assignments." },
    { word: "Eloquent",      emoji: "🎤", translation: "Elocuente",           example: "The speaker gave an eloquent speech to the crowd." },
    { word: "Feasible",      emoji: "✅", translation: "Factible",            example: "The plan seemed feasible with the right budget." },
    { word: "Gratitude",     emoji: "🙏", translation: "Gratitud",            example: "She expressed her gratitude with a heartfelt letter." },
    { word: "Inevitable",    emoji: "⏳", translation: "Inevitable",          example: "Change is inevitable in any growing company." },
    { word: "Jeopardize",    emoji: "⚠️", translation: "Poner en riesgo",     example: "His reckless actions could jeopardize the project." },
    { word: "Lenient",       emoji: "😊", translation: "Indulgente",          example: "The teacher was lenient with late assignments." },
    { word: "Meticulous",    emoji: "🔍", translation: "Meticuloso/a",        example: "She was meticulous about every detail in her work." },
    { word: "Nurture",       emoji: "🌿", translation: "Nutrir / Cultivar",   example: "Good parents nurture their children's talents." },
    { word: "Overwhelm",     emoji: "🌊", translation: "Abrumar",             example: "The amount of work began to overwhelm her." },
    { word: "Persistent",    emoji: "🏃", translation: "Persistente",         example: "Be persistent and you will reach your goals." },
    { word: "Renowned",      emoji: "🌟", translation: "Renombrado/a",        example: "She is a renowned scientist in her field." },
    { word: "Skeptical",     emoji: "🤨", translation: "Escéptico/a",         example: "He was skeptical about the new treatment." },
    { word: "Transparent",   emoji: "🪟", translation: "Transparente",        example: "The company was transparent about its finances." },
    { word: "Underestimate", emoji: "📉", translation: "Subestimar",          example: "Never underestimate the power of small habits." },
    { word: "Versatile",     emoji: "🎭", translation: "Versátil",            example: "She is a versatile musician who plays five instruments." },
    { word: "Withstand",     emoji: "🏔️", translation: "Resistir / Soportar", example: "The bridge was built to withstand earthquakes." },
    { word: "Yearn",         emoji: "💫", translation: "Anhelar",             example: "She yearned to travel the world one day." },
    { word: "Zeal",          emoji: "🔥", translation: "Celo / Entusiasmo",   example: "He approached every task with tremendous zeal." }
  ],

  advanced: [
    { word: "Alleviate",     emoji: "💊", translation: "Aliviar",              example: "The medicine helped alleviate her chronic pain." },
    { word: "Benevolent",    emoji: "👑", translation: "Benevolente",          example: "The benevolent king was loved by all his people." },
    { word: "Circumvent",    emoji: "🔄", translation: "Eludir / Sortear",     example: "He tried to circumvent the rules to gain an advantage." },
    { word: "Deteriorate",   emoji: "📉", translation: "Deteriorarse",         example: "His health began to deteriorate after the diagnosis." },
    { word: "Empathy",       emoji: "💛", translation: "Empatía",              example: "Empathy is essential for good leadership." },
    { word: "Futile",        emoji: "🚫", translation: "Fútil / Inútil",       example: "It was futile to argue with someone so stubborn." },
    { word: "Gregarious",    emoji: "🎉", translation: "Gregario/a",           example: "She was gregarious and loved meeting new people." },
    { word: "Hypothesis",    emoji: "🔬", translation: "Hipótesis",            example: "The scientist tested her hypothesis in the lab." },
    { word: "Intricate",     emoji: "🕸️", translation: "Intrincado/a",         example: "The clock had an intricate internal mechanism." },
    { word: "Juxtapose",     emoji: "🔀", translation: "Yuxtaponer",           example: "The author juxtaposed wealth and poverty in the novel." },
    { word: "Lament",        emoji: "😢", translation: "Lamentar",             example: "He lamented the loss of his old neighborhood." },
    { word: "Mitigate",      emoji: "🛡️", translation: "Mitigar",              example: "New policies aim to mitigate climate change." },
    { word: "Nuance",        emoji: "🎨", translation: "Matiz",                example: "There is an important nuance in what she said." },
    { word: "Obsolete",      emoji: "🗑️", translation: "Obsoleto/a",           example: "Fax machines are nearly obsolete in modern offices." },
    { word: "Pragmatic",     emoji: "🔧", translation: "Pragmático/a",         example: "Take a pragmatic approach and focus on results." },
    { word: "Reconcile",     emoji: "🤝", translation: "Reconciliar",          example: "It took months for them to reconcile after the argument." },
    { word: "Subsequent",    emoji: "📅", translation: "Posterior / Siguiente", example: "The first meeting led to several subsequent discussions." },
    { word: "Tenacious",     emoji: "💪", translation: "Tenaz",                example: "She was tenacious in pursuing her dreams." },
    { word: "Unprecedented", emoji: "📢", translation: "Sin precedentes",      example: "The storm caused unprecedented damage to the region." },
    { word: "Vulnerable",    emoji: "🫶", translation: "Vulnerable",           example: "Children are the most vulnerable in times of crisis." }
  ]

};


// ══════════════════════════════════════════════════════════════════
//  SETTINGS STATE
// ══════════════════════════════════════════════════════════════════
let isDark  = false;
let isMuted = false;


// ══════════════════════════════════════════════════════════════════
//  GAME STATE
// ══════════════════════════════════════════════════════════════════
let selectedLevel = 'intermediate';
let selectedMode  = 'flashcard';

let state = {
  queue:     [],
  current:   null,
  isFlipped: false,
  quizScore: 0,
  quizTotal: 0
};

// Progress per level: { intermediate: { known:[], unknown:[] }, ... }
let progress = {};

// Streak
let streak = { count: 0, lastDate: null };

// Cumulative accuracy (across all sessions)
let accuracy = {
  quiz:    { correct: 0, answered: 0 },
  writing: { correct: 0, answered: 0 }
};

const STORAGE_KEY = 'flipenglish_v2';


// ══════════════════════════════════════════════════════════════════
//  INIT
// ══════════════════════════════════════════════════════════════════
function init() {
  loadData();
  checkStreakOnLoad();
  applyTheme();
  renderSetupStreak();
  setupOptionButtons();

  // Enter key for writing mode
  document.getElementById('writeInput').addEventListener('keydown', e => {
    if (e.key === 'Enter') checkWriting();
  });
}


// ══════════════════════════════════════════════════════════════════
//  DARK MODE
// ══════════════════════════════════════════════════════════════════
function toggleDark() {
  isDark = !isDark;
  applyTheme();
  saveData();
}

function applyTheme() {
  document.body.classList.toggle('dark', isDark);
  const icon = isDark ? '☀️' : '🌙';
  ['darkToggle', 'gameDarkToggle'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.textContent = icon;
  });
}


// ══════════════════════════════════════════════════════════════════
//  SOUND EFFECTS  (Web Audio API — no external files)
// ══════════════════════════════════════════════════════════════════
function toggleSound() {
  isMuted = !isMuted;
  saveData();
  updateSoundUI();
}

function updateSoundUI() {
  const icon = isMuted ? '🔇' : '🔊';
  ['soundToggle', 'gameSoundToggle'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.textContent = icon;
  });
}

function playCorrect() {
  if (isMuted) return;
  const ctx = new (window.AudioContext || window.webkitAudioContext)();
  // Two ascending notes: C5 → E5
  [523.25, 659.25].forEach((freq, i) => {
    const osc  = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.type = 'sine';
    osc.frequency.value = freq;
    const t = ctx.currentTime + i * 0.13;
    gain.gain.setValueAtTime(0, t);
    gain.gain.linearRampToValueAtTime(0.22, t + 0.02);
    gain.gain.exponentialRampToValueAtTime(0.001, t + 0.38);
    osc.start(t);
    osc.stop(t + 0.4);
  });
}

function playWrong() {
  if (isMuted) return;
  const ctx = new (window.AudioContext || window.webkitAudioContext)();
  const osc  = ctx.createOscillator();
  const gain = ctx.createGain();
  osc.connect(gain);
  gain.connect(ctx.destination);
  osc.type = 'sawtooth';
  osc.frequency.setValueAtTime(240, ctx.currentTime);
  osc.frequency.linearRampToValueAtTime(160, ctx.currentTime + 0.2);
  gain.gain.setValueAtTime(0.12, ctx.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.25);
  osc.start(ctx.currentTime);
  osc.stop(ctx.currentTime + 0.25);
}

function playComplete() {
  if (isMuted) return;
  const ctx   = new (window.AudioContext || window.webkitAudioContext)();
  const notes = [523.25, 659.25, 783.99, 1046.5]; // C5 E5 G5 C6
  notes.forEach((freq, i) => {
    const osc  = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.type = 'sine';
    osc.frequency.value = freq;
    const t = ctx.currentTime + i * 0.16;
    gain.gain.setValueAtTime(0, t);
    gain.gain.linearRampToValueAtTime(0.25, t + 0.02);
    gain.gain.exponentialRampToValueAtTime(0.001, t + 0.55);
    osc.start(t);
    osc.stop(t + 0.6);
  });
}


// ══════════════════════════════════════════════════════════════════
//  OPTION BUTTONS (level & mode)
// ══════════════════════════════════════════════════════════════════
function setupOptionButtons() {
  document.querySelectorAll('#levelGroup .option-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('#levelGroup .option-btn').forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');
      selectedLevel = btn.dataset.level;
    });
  });

  document.querySelectorAll('#modeGroup .option-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('#modeGroup .option-btn').forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');
      selectedMode = btn.dataset.mode;
    });
  });
}


// ══════════════════════════════════════════════════════════════════
//  NAVIGATION
// ══════════════════════════════════════════════════════════════════
function startGame() {
  const levelLabels = { intermediate: '📗 Intermedio', upper: '📘 Interm. Alto', advanced: '📕 Avanzado' };
  const modeLabels  = { flashcard: '🃏 Fichas', quiz: '🧠 Quiz', writing: '✍️ Escritura' };
  document.getElementById('levelBadge').textContent = levelLabels[selectedLevel];
  document.getElementById('modeBadge').textContent  = modeLabels[selectedMode];

  document.getElementById('flashcardArea').classList.toggle('hidden', selectedMode !== 'flashcard');
  document.getElementById('quizArea').classList.toggle('hidden',      selectedMode !== 'quiz');
  document.getElementById('writingArea').classList.toggle('hidden',   selectedMode !== 'writing');

  state.quizScore = 0;
  state.quizTotal = 0;
  document.getElementById('quizScore').textContent = 0;
  document.getElementById('quizTotal').textContent = 0;

  document.getElementById('setupScreen').classList.add('hidden');
  document.getElementById('statsScreen').classList.add('hidden');
  document.getElementById('gameScreen').classList.remove('hidden');

  markPracticed();
  updateStreakUI();
  buildQueue();
  showNextCard();
  updateProgressUI();
}

function goToMenu() {
  document.getElementById('completionScreen').classList.remove('visible');
  document.getElementById('gameScreen').classList.add('hidden');
  document.getElementById('statsScreen').classList.add('hidden');
  document.getElementById('setupScreen').classList.remove('hidden');
  renderSetupStreak();
}

function showStats() {
  document.getElementById('setupScreen').classList.add('hidden');
  document.getElementById('statsScreen').classList.remove('hidden');
  renderStats();
}


// ══════════════════════════════════════════════════════════════════
//  STATISTICS SCREEN
// ══════════════════════════════════════════════════════════════════
function renderStats() {
  // Streak
  document.getElementById('statStreakVal').textContent = streak.count;

  // Total known across all levels
  const totalKnown = ['intermediate', 'upper', 'advanced']
    .reduce((sum, lvl) => sum + progress[lvl].known.length, 0);
  document.getElementById('statTotalVal').textContent = `${totalKnown}/60`;

  // Per-level bars
  const levelIds = { intermediate: 'Intermediate', upper: 'Upper', advanced: 'Advanced' };
  ['intermediate', 'upper', 'advanced'].forEach(lvl => {
    const known  = progress[lvl].known.length;
    const total  = CARDS[lvl].length;
    const pct    = Math.round((known / total) * 100);
    const suffix = lvl.charAt(0).toUpperCase() + lvl.slice(1);
    document.getElementById(`statBar${suffix}`).style.width    = pct + '%';
    document.getElementById(`statCount${suffix}`).textContent  = `${known} / ${total}`;
  });

  // Accuracy
  const q = accuracy.quiz;
  const w = accuracy.writing;
  document.getElementById('statQuizPct').textContent  =
    q.answered > 0 ? Math.round((q.correct / q.answered) * 100) + '%' : '—';
  document.getElementById('statWritePct').textContent =
    w.answered > 0 ? Math.round((w.correct / w.answered) * 100) + '%' : '—';
}


// ══════════════════════════════════════════════════════════════════
//  DATA PERSISTENCE
// ══════════════════════════════════════════════════════════════════
function loadData() {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved) {
    try {
      const p        = JSON.parse(saved);
      progress       = p.progress  || {};
      streak.count   = p.streak?.count    || 0;
      streak.lastDate= p.streak?.lastDate || null;
      accuracy       = p.accuracy  || { quiz: {correct:0, answered:0}, writing: {correct:0, answered:0} };
      isDark         = p.isDark    || false;
      isMuted        = p.isMuted   || false;
    } catch (e) {}
  }

  ['intermediate', 'upper', 'advanced'].forEach(lvl => {
    if (!progress[lvl]) progress[lvl] = { known: [], unknown: [] };
  });

  if (!accuracy.quiz)    accuracy.quiz    = { correct: 0, answered: 0 };
  if (!accuracy.writing) accuracy.writing = { correct: 0, answered: 0 };

  updateSoundUI();
}

function saveData() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify({
    progress, streak, accuracy, isDark, isMuted
  }));
}


// ══════════════════════════════════════════════════════════════════
//  STREAK LOGIC
// ══════════════════════════════════════════════════════════════════
function checkStreakOnLoad() {
  if (!streak.lastDate) return;
  const today     = todayStr();
  const yesterday = yesterdayStr();
  if (streak.lastDate !== today && streak.lastDate !== yesterday) {
    streak.count    = 0;
    streak.lastDate = null;
    saveData();
  }
}

function markPracticed() {
  const today = todayStr();
  if (streak.lastDate === today) return;
  streak.count    = (streak.lastDate === yesterdayStr()) ? streak.count + 1 : 1;
  streak.lastDate = today;
  saveData();
}

function todayStr()     { return new Date().toISOString().slice(0, 10); }
function yesterdayStr() { const d = new Date(); d.setDate(d.getDate() - 1); return d.toISOString().slice(0, 10); }

function renderSetupStreak() {
  document.getElementById('setupStreakCount').textContent = streak.count;
  document.getElementById('setupStreak').style.display   = streak.count > 0 ? 'inline-flex' : 'none';
}

function updateStreakUI() {
  document.getElementById('gameStreakCount').textContent = streak.count;
  document.getElementById('gameStreak').style.display   = streak.count > 0 ? 'inline-flex' : 'none';
}


// ══════════════════════════════════════════════════════════════════
//  QUEUE
// ══════════════════════════════════════════════════════════════════
function buildQueue() {
  const known     = progress[selectedLevel].known;
  const remaining = CARDS[selectedLevel].map((_, i) => i).filter(i => !known.includes(i));
  state.queue = shuffle(remaining);
}

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}


// ══════════════════════════════════════════════════════════════════
//  SHOW NEXT CARD
// ══════════════════════════════════════════════════════════════════
function showNextCard() {
  if (state.queue.length === 0) {
    if (progress[selectedLevel].known.length >= CARDS[selectedLevel].length) {
      playComplete();
      showCompletion();
      return;
    }
    buildQueue();
    showNextCard();
    return;
  }

  state.current = state.queue.shift();

  if (selectedMode === 'flashcard') showFlashcard();
  else if (selectedMode === 'quiz') showQuiz();
  else                              showWriting();
}


// ══════════════════════════════════════════════════════════════════
//  FLASHCARD MODE
// ══════════════════════════════════════════════════════════════════
function showFlashcard() {
  const c = CARDS[selectedLevel][state.current];
  setFlipped(false);
  hideActionButtons();
  document.getElementById('cardEmoji').textContent       = c.emoji;
  document.getElementById('cardWord').textContent        = c.word;
  document.getElementById('cardEmojiBack').textContent   = c.emoji;
  document.getElementById('cardTranslation').textContent = c.translation;
  document.getElementById('cardExample').textContent     = `"${c.example}"`;
}

function flipCard() {
  state.isFlipped = !state.isFlipped;
  setFlipped(state.isFlipped);
  if (state.isFlipped) showActionButtons();
  else hideActionButtons();
}

function setFlipped(val) {
  state.isFlipped = val;
  document.getElementById('cardInner').classList.toggle('flipped', val);
}

function showActionButtons()  { document.getElementById('actionButtons').classList.add('visible'); }
function hideActionButtons()  { document.getElementById('actionButtons').classList.remove('visible'); }

function markCard(knew) {
  if (knew) playCorrect(); else playWrong();
  updateProgress(state.current, knew);
  saveData();
  updateProgressUI();
  showNextCard();
}


// ══════════════════════════════════════════════════════════════════
//  QUIZ MODE
// ══════════════════════════════════════════════════════════════════
function showQuiz() {
  const c = CARDS[selectedLevel][state.current];
  document.getElementById('quizEmoji').textContent = c.emoji;
  document.getElementById('quizWord').textContent  = c.word;

  const wrongIdx = shuffle(
    CARDS[selectedLevel].map((_, i) => i).filter(i => i !== state.current)
  ).slice(0, 3);

  const options = shuffle([
    { text: c.translation, correct: true },
    ...wrongIdx.map(i => ({ text: CARDS[selectedLevel][i].translation, correct: false }))
  ]);

  const container = document.getElementById('quizOptions');
  container.innerHTML = '';
  options.forEach(opt => {
    const btn       = document.createElement('button');
    btn.className   = 'quiz-option-btn';
    btn.textContent = opt.text;
    btn.onclick     = () => selectQuizOption(btn, opt.correct);
    container.appendChild(btn);
  });
}

function selectQuizOption(clicked, isCorrect) {
  document.querySelectorAll('.quiz-option-btn').forEach(b => b.disabled = true);

  state.quizTotal++;
  accuracy.quiz.answered++;

  if (isCorrect) {
    clicked.classList.add('correct');
    state.quizScore++;
    accuracy.quiz.correct++;
    updateProgress(state.current, true);
    playCorrect();
  } else {
    clicked.classList.add('wrong');
    const correctText = CARDS[selectedLevel][state.current].translation;
    document.querySelectorAll('.quiz-option-btn').forEach(b => {
      if (b.textContent === correctText) b.classList.add('correct');
    });
    updateProgress(state.current, false);
    playWrong();
  }

  document.getElementById('quizScore').textContent = state.quizScore;
  document.getElementById('quizTotal').textContent = state.quizTotal;

  saveData();
  updateProgressUI();
  setTimeout(showNextCard, 1300);
}


// ══════════════════════════════════════════════════════════════════
//  WRITING MODE
// ══════════════════════════════════════════════════════════════════
function showWriting() {
  const c = CARDS[selectedLevel][state.current];
  document.getElementById('writeEmoji').textContent = c.emoji;
  document.getElementById('writeWord').textContent  = c.word;

  const input    = document.getElementById('writeInput');
  const feedback = document.getElementById('writingFeedback');
  input.value          = '';
  input.disabled       = false;
  feedback.textContent = '';
  feedback.className   = 'writing-feedback';
  document.getElementById('checkBtn').disabled = false;
  document.getElementById('writingNext').classList.add('hidden');
  input.focus();
}

function checkWriting() {
  const input   = document.getElementById('writeInput');
  const userAns = input.value.trim();
  if (!userAns) return;

  const c         = CARDS[selectedLevel][state.current];
  const isCorrect = isAnswerCorrect(userAns, c.translation);

  const feedback = document.getElementById('writingFeedback');
  feedback.className = 'writing-feedback ' + (isCorrect ? 'correct' : 'wrong');
  feedback.textContent = isCorrect
    ? '¡Correcto! 🎉'
    : `Casi. La respuesta es: "${c.translation}"`;

  input.disabled = true;
  document.getElementById('checkBtn').disabled = true;
  document.getElementById('writingNext').classList.remove('hidden');

  accuracy.writing.answered++;
  if (isCorrect) accuracy.writing.correct++;

  if (isCorrect) playCorrect(); else playWrong();

  updateProgress(state.current, isCorrect);
  saveData();
  updateProgressUI();
}

function nextWriting() { showNextCard(); }

// Flexible answer validation: handles accents, case, gender variants (/a), and "/" alternatives
function isAnswerCorrect(userAnswer, correctTranslation) {
  const norm = s => s
    .toLowerCase().trim()
    .normalize('NFD').replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9 ]/g, '').replace(/\s+/g, ' ').trim();

  const userNorm = norm(userAnswer);

  // Split by "/" — filter out single-letter parts (gender suffixes like "a")
  const parts = correctTranslation
    .split('/').map(p => norm(p.trim())).filter(p => p.length > 1);

  // Add gender variants for single-word adjectives (agotado → also accept agotada)
  const expanded = [...parts];
  parts.forEach(p => {
    if (!p.includes(' ')) {
      if (p.endsWith('o')) expanded.push(p.slice(0, -1) + 'a');
      if (p.endsWith('a') && p.length > 3) expanded.push(p.slice(0, -1) + 'o');
    }
  });

  return expanded.some(p => userNorm === p);
}


// ══════════════════════════════════════════════════════════════════
//  PRONUNCIATION
// ══════════════════════════════════════════════════════════════════
function speakWord(event) {
  if (event) event.stopPropagation();
  const word = CARDS[selectedLevel][state.current]?.word;
  if (!word || !('speechSynthesis' in window)) return;
  window.speechSynthesis.cancel();
  const utt  = new SpeechSynthesisUtterance(word);
  utt.lang   = 'en-US';
  utt.rate   = 0.85;
  window.speechSynthesis.speak(utt);
}


// ══════════════════════════════════════════════════════════════════
//  PROGRESS HELPERS
// ══════════════════════════════════════════════════════════════════
function updateProgress(idx, knew) {
  const lvl = progress[selectedLevel];
  if (knew) {
    if (!lvl.known.includes(idx))   lvl.known.push(idx);
    lvl.unknown = lvl.unknown.filter(i => i !== idx);
  } else {
    if (!lvl.unknown.includes(idx)) lvl.unknown.push(idx);
    lvl.known = lvl.known.filter(i => i !== idx);
  }
}

function updateProgressUI() {
  const total   = CARDS[selectedLevel].length;
  const known   = progress[selectedLevel].known.length;
  const unknown = progress[selectedLevel].unknown.length;
  const pct     = Math.round((known / total) * 100);
  document.getElementById('progressBar').style.width  = pct + '%';
  document.getElementById('progressText').textContent = `${known} / ${total} dominadas`;
  document.getElementById('knownCount').textContent   = known;
  document.getElementById('unknownCount').textContent = unknown;
}


// ══════════════════════════════════════════════════════════════════
//  RESET
// ══════════════════════════════════════════════════════════════════
function confirmReset() {
  const names = { intermediate: 'Intermedio', upper: 'Interm. Alto', advanced: 'Avanzado' };
  if (confirm(`¿Reiniciar el progreso del nivel ${names[selectedLevel]}?`)) {
    progress[selectedLevel] = { known: [], unknown: [] };
    state.quizScore = 0;
    state.quizTotal = 0;
    document.getElementById('quizScore').textContent = 0;
    document.getElementById('quizTotal').textContent = 0;
    saveData();
    buildQueue();
    showNextCard();
    updateProgressUI();
  }
}


// ══════════════════════════════════════════════════════════════════
//  COMPLETION SCREEN
// ══════════════════════════════════════════════════════════════════
function showCompletion() {
  const total = CARDS[selectedLevel].length;
  document.getElementById('completionMessage').textContent =
    `¡Dominaste las ${total} palabras de este nivel! Sigue así 🚀`;
  document.getElementById('completionScreen').classList.add('visible');
}

function restartSession() {
  document.getElementById('completionScreen').classList.remove('visible');
  progress[selectedLevel] = { known: [], unknown: [] };
  state.quizScore = 0;
  state.quizTotal = 0;
  document.getElementById('quizScore').textContent = 0;
  document.getElementById('quizTotal').textContent = 0;
  saveData();
  buildQueue();
  showNextCard();
  updateProgressUI();
}


// ══════════════════════════════════════════════════════════════════
//  START
// ══════════════════════════════════════════════════════════════════
init();
