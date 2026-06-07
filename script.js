// ══════════════════════════════════════════════════════════════════
//  VOCABULARY DATA  (60 words across 3 levels)
// ══════════════════════════════════════════════════════════════════
const CARDS = {

  intermediate: [
    { word: "Ambiguous",   emoji: "🤔", translation: "Ambiguo",           example: "The message was ambiguous — nobody knew what it meant." },
    { word: "Confident",   emoji: "💪", translation: "Seguro/a",           example: "She felt confident before the job interview." },
    { word: "Exhausted",   emoji: "😴", translation: "Agotado/a",          example: "After the marathon, he was completely exhausted." },
    { word: "Generous",    emoji: "🎁", translation: "Generoso/a",         example: "It was generous of you to share your lunch." },
    { word: "Harvest",     emoji: "🌾", translation: "Cosecha",            example: "The farmers celebrated a great harvest this year." },
    { word: "Innovative",  emoji: "💡", translation: "Innovador/a",        example: "The company launched an innovative new product." },
    { word: "Journey",     emoji: "🗺️", translation: "Viaje / Camino",    example: "Learning a language is a long journey." },
    { word: "Knowledge",   emoji: "📚", translation: "Conocimiento",       example: "Her knowledge of history impressed everyone." },
    { word: "Legislation", emoji: "⚖️", translation: "Legislación",        example: "New legislation will protect the environment." },
    { word: "Milestone",   emoji: "🏁", translation: "Hito / Logro",       example: "Finishing the course was a major milestone." },
    { word: "Negotiate",   emoji: "🤝", translation: "Negociar",           example: "They had to negotiate the price before buying." },
    { word: "Obstacle",    emoji: "🚧", translation: "Obstáculo",          example: "Fear is often the biggest obstacle to success." },
    { word: "Persuade",    emoji: "🗣️", translation: "Persuadir",          example: "He tried to persuade her to join the team." },
    { word: "Reluctant",   emoji: "😬", translation: "Reticente",          example: "She was reluctant to speak in front of the class." },
    { word: "Significant", emoji: "⭐", translation: "Significativo/a",   example: "The discovery was a significant breakthrough." },
    { word: "Thrive",      emoji: "🌱", translation: "Prosperar",          example: "Plants thrive when they get enough sunlight." },
    { word: "Undermine",   emoji: "⛏️", translation: "Socavar",            example: "Constant criticism can undermine your confidence." },
    { word: "Vivid",       emoji: "🎨", translation: "Vívido/a",           example: "She had a vivid memory of her first day at school." },
    { word: "Withdraw",    emoji: "🚪", translation: "Retirarse",          example: "He decided to withdraw from the competition." },
    { word: "Yield",       emoji: "🏳️", translation: "Ceder / Producir",  example: "Sometimes you need to yield to reach an agreement." }
  ],

  upper: [
    { word: "Acknowledge",   emoji: "👋", translation: "Reconocer",          example: "She acknowledged her mistake in front of the team." },
    { word: "Diligent",      emoji: "📝", translation: "Diligente",           example: "He was diligent in completing all his assignments on time." },
    { word: "Eloquent",      emoji: "🎤", translation: "Elocuente",           example: "The speaker gave an eloquent speech to the crowd." },
    { word: "Feasible",      emoji: "✅", translation: "Factible",            example: "The plan seemed feasible with the right budget." },
    { word: "Gratitude",     emoji: "🙏", translation: "Gratitud",            example: "She expressed her gratitude with a heartfelt letter." },
    { word: "Inevitable",    emoji: "⏳", translation: "Inevitable",          example: "Change is inevitable in any growing company." },
    { word: "Jeopardize",    emoji: "⚠️", translation: "Poner en riesgo",    example: "His reckless actions could jeopardize the entire project." },
    { word: "Lenient",       emoji: "😊", translation: "Indulgente",          example: "The teacher was lenient with late assignments." },
    { word: "Meticulous",    emoji: "🔍", translation: "Meticuloso/a",        example: "She was meticulous about every detail in her work." },
    { word: "Nurture",       emoji: "🌿", translation: "Nutrir / Cultivar",   example: "Good parents nurture their children's unique talents." },
    { word: "Overwhelm",     emoji: "🌊", translation: "Abrumar",             example: "The amount of work began to overwhelm her." },
    { word: "Persistent",    emoji: "🏃", translation: "Persistente",         example: "Be persistent and you will eventually reach your goals." },
    { word: "Renowned",      emoji: "🌟", translation: "Renombrado/a",        example: "She is a renowned scientist in her field." },
    { word: "Skeptical",     emoji: "🤨", translation: "Escéptico/a",         example: "He was skeptical about the effectiveness of the new treatment." },
    { word: "Transparent",   emoji: "🪟", translation: "Transparente",        example: "The company was transparent about its financial decisions." },
    { word: "Underestimate", emoji: "📉", translation: "Subestimar",          example: "Never underestimate the power of small daily habits." },
    { word: "Versatile",     emoji: "🎭", translation: "Versátil",            example: "She is a versatile musician who plays five instruments." },
    { word: "Withstand",     emoji: "🏔️", translation: "Resistir / Soportar", example: "The bridge was built to withstand major earthquakes." },
    { word: "Yearn",         emoji: "💫", translation: "Anhelar",             example: "She yearned to travel the world one day." },
    { word: "Zeal",          emoji: "🔥", translation: "Celo / Entusiasmo",   example: "He approached every task with tremendous zeal." }
  ],

  advanced: [
    { word: "Alleviate",     emoji: "💊", translation: "Aliviar",             example: "The medicine helped alleviate her chronic pain." },
    { word: "Benevolent",    emoji: "👑", translation: "Benevolente",         example: "The benevolent king was deeply loved by all his people." },
    { word: "Circumvent",    emoji: "🔄", translation: "Eludir / Sortear",    example: "He tried to circumvent the rules to gain an advantage." },
    { word: "Deteriorate",   emoji: "📉", translation: "Deteriorarse",        example: "His health began to deteriorate rapidly after the diagnosis." },
    { word: "Empathy",       emoji: "💛", translation: "Empatía",             example: "Empathy is essential for good leadership and teamwork." },
    { word: "Futile",        emoji: "🚫", translation: "Fútil / Inútil",      example: "It was futile to argue with someone so stubborn." },
    { word: "Gregarious",    emoji: "🎉", translation: "Gregario/a",          example: "She was gregarious and loved meeting new people." },
    { word: "Hypothesis",    emoji: "🔬", translation: "Hipótesis",           example: "The scientist carefully tested her hypothesis in the lab." },
    { word: "Intricate",     emoji: "🕸️", translation: "Intrincado/a",        example: "The clock had an intricate internal mechanism." },
    { word: "Juxtapose",     emoji: "🔀", translation: "Yuxtaponer",          example: "The author juxtaposed wealth and poverty in the novel." },
    { word: "Lament",        emoji: "😢", translation: "Lamentar",            example: "He lamented the loss of his old neighborhood." },
    { word: "Mitigate",      emoji: "🛡️", translation: "Mitigar",             example: "New policies aim to mitigate the effects of climate change." },
    { word: "Nuance",        emoji: "🎨", translation: "Matiz",               example: "There is an important nuance in what she said." },
    { word: "Obsolete",      emoji: "🗑️", translation: "Obsoleto/a",          example: "Fax machines are nearly obsolete in modern offices." },
    { word: "Pragmatic",     emoji: "🔧", translation: "Pragmático/a",        example: "Take a pragmatic approach and focus on what actually works." },
    { word: "Reconcile",     emoji: "🤝", translation: "Reconciliar",         example: "It took months for them to reconcile after the argument." },
    { word: "Subsequent",    emoji: "📅", translation: "Posterior / Siguiente", example: "The first meeting led to several subsequent discussions." },
    { word: "Tenacious",     emoji: "💪", translation: "Tenaz",               example: "She was tenacious in pursuing her dreams despite obstacles." },
    { word: "Unprecedented", emoji: "📢", translation: "Sin precedentes",     example: "The storm caused unprecedented damage to the entire region." },
    { word: "Vulnerable",    emoji: "🫶", translation: "Vulnerable",          example: "Children are the most vulnerable in times of crisis." }
  ]

};


// ══════════════════════════════════════════════════════════════════
//  STATE
// ══════════════════════════════════════════════════════════════════
let selectedLevel = 'intermediate';
let selectedMode  = 'flashcard';

let state = {
  queue:      [],
  current:    null,
  isFlipped:  false,
  quizScore:  0,
  quizTotal:  0
};

// Progress stored per level: { intermediate: { known:[], unknown:[] }, ... }
let progress = {};

// Streak data
let streak = { count: 0, lastDate: null };

const STORAGE_KEY = 'flipenglish_v2';


// ══════════════════════════════════════════════════════════════════
//  INIT
// ══════════════════════════════════════════════════════════════════
function init() {
  loadData();
  checkStreakOnLoad();
  renderSetupStreak();
  setupOptionButtons();

  // Enter key support for writing mode
  document.getElementById('writeInput').addEventListener('keydown', e => {
    if (e.key === 'Enter') checkWriting();
  });
}


// ══════════════════════════════════════════════════════════════════
//  OPTION BUTTONS (level & mode selectors)
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
  // Update session badges
  const levelLabels = { intermediate: '📗 Intermedio', upper: '📘 Interm. Alto', advanced: '📕 Avanzado' };
  const modeLabels  = { flashcard: '🃏 Fichas', quiz: '🧠 Quiz', writing: '✍️ Escritura' };
  document.getElementById('levelBadge').textContent = levelLabels[selectedLevel];
  document.getElementById('modeBadge').textContent  = modeLabels[selectedMode];

  // Show correct mode area, hide others
  document.getElementById('flashcardArea').classList.toggle('hidden', selectedMode !== 'flashcard');
  document.getElementById('quizArea').classList.toggle('hidden',      selectedMode !== 'quiz');
  document.getElementById('writingArea').classList.toggle('hidden',   selectedMode !== 'writing');

  // Reset mode-specific counters
  state.quizScore = 0;
  state.quizTotal = 0;
  document.getElementById('quizScore').textContent = 0;
  document.getElementById('quizTotal').textContent = 0;

  // Switch screens
  document.getElementById('setupScreen').classList.add('hidden');
  document.getElementById('gameScreen').classList.remove('hidden');

  // Mark today as practiced (updates streak)
  markPracticed();
  updateStreakUI();

  // Build queue and show first card
  buildQueue();
  showNextCard();
  updateProgressUI();
}

function goToMenu() {
  document.getElementById('completionScreen').classList.remove('visible');
  document.getElementById('gameScreen').classList.add('hidden');
  document.getElementById('setupScreen').classList.remove('hidden');
  renderSetupStreak();
}


// ══════════════════════════════════════════════════════════════════
//  DATA PERSISTENCE
// ══════════════════════════════════════════════════════════════════
function loadData() {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved) {
    try {
      const parsed = JSON.parse(saved);
      progress       = parsed.progress || {};
      streak.count   = parsed.streak?.count    || 0;
      streak.lastDate= parsed.streak?.lastDate || null;
    } catch (e) {
      progress = {};
    }
  }
  // Ensure every level has an entry
  ['intermediate', 'upper', 'advanced'].forEach(lvl => {
    if (!progress[lvl]) progress[lvl] = { known: [], unknown: [] };
  });
}

function saveData() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify({
    progress,
    streak: { count: streak.count, lastDate: streak.lastDate }
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
    // Missed at least one day — reset streak
    streak.count    = 0;
    streak.lastDate = null;
    saveData();
  }
}

function markPracticed() {
  const today = todayStr();
  if (streak.lastDate === today) return; // already counted today

  const yesterday = yesterdayStr();
  streak.count    = (streak.lastDate === yesterday) ? streak.count + 1 : 1;
  streak.lastDate = today;
  saveData();
}

function todayStr() {
  return new Date().toISOString().slice(0, 10);
}

function yesterdayStr() {
  const d = new Date();
  d.setDate(d.getDate() - 1);
  return d.toISOString().slice(0, 10);
}

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
  const remaining = CARDS[selectedLevel]
    .map((_, i) => i)
    .filter(i => !known.includes(i));

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
//  SHOW NEXT CARD (dispatches to mode)
// ══════════════════════════════════════════════════════════════════
function showNextCard() {
  if (state.queue.length === 0) {
    const total = CARDS[selectedLevel].length;
    const known = progress[selectedLevel].known.length;
    if (known >= total) { showCompletion(); return; }
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
  const card = CARDS[selectedLevel][state.current];
  setFlipped(false);
  hideActionButtons();

  document.getElementById('cardEmoji').textContent       = card.emoji;
  document.getElementById('cardWord').textContent        = card.word;
  document.getElementById('cardEmojiBack').textContent   = card.emoji;
  document.getElementById('cardTranslation').textContent = card.translation;
  document.getElementById('cardExample').textContent     = `"${card.example}"`;
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
  updateProgress(state.current, knew);
  saveData();
  updateProgressUI();
  showNextCard();
}


// ══════════════════════════════════════════════════════════════════
//  QUIZ MODE
// ══════════════════════════════════════════════════════════════════
function showQuiz() {
  const card = CARDS[selectedLevel][state.current];

  document.getElementById('quizEmoji').textContent = card.emoji;
  document.getElementById('quizWord').textContent  = card.word;

  // Build 4 options: 1 correct + 3 random wrong
  const wrongIndices = CARDS[selectedLevel]
    .map((_, i) => i)
    .filter(i => i !== state.current);

  const options = shuffle([
    { text: card.translation, correct: true },
    ...shuffle(wrongIndices).slice(0, 3).map(i => ({
      text: CARDS[selectedLevel][i].translation,
      correct: false
    }))
  ]);

  // Render buttons
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

function selectQuizOption(clickedBtn, isCorrect) {
  // Disable all buttons
  document.querySelectorAll('.quiz-option-btn').forEach(b => b.disabled = true);

  state.quizTotal++;

  if (isCorrect) {
    clickedBtn.classList.add('correct');
    state.quizScore++;
    updateProgress(state.current, true);
  } else {
    clickedBtn.classList.add('wrong');
    // Highlight the correct answer
    const correctText = CARDS[selectedLevel][state.current].translation;
    document.querySelectorAll('.quiz-option-btn').forEach(b => {
      if (b.textContent === correctText) b.classList.add('correct');
    });
    updateProgress(state.current, false);
  }

  document.getElementById('quizScore').textContent = state.quizScore;
  document.getElementById('quizTotal').textContent = state.quizTotal;

  saveData();
  updateProgressUI();

  // Auto-advance after 1.3 seconds
  setTimeout(showNextCard, 1300);
}


// ══════════════════════════════════════════════════════════════════
//  WRITING MODE
// ══════════════════════════════════════════════════════════════════
function showWriting() {
  const card = CARDS[selectedLevel][state.current];

  document.getElementById('writeEmoji').textContent = card.emoji;
  document.getElementById('writeWord').textContent  = card.word;

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
  const input    = document.getElementById('writeInput');
  const userAns  = input.value.trim();
  if (!userAns) return;

  const card      = CARDS[selectedLevel][state.current];
  const isCorrect = isAnswerCorrect(userAns, card.translation);

  const feedback = document.getElementById('writingFeedback');
  feedback.className = 'writing-feedback ' + (isCorrect ? 'correct' : 'wrong');
  feedback.textContent = isCorrect
    ? '¡Correcto! 🎉'
    : `Casi. La respuesta correcta es: "${card.translation}"`;

  input.disabled = true;
  document.getElementById('checkBtn').disabled = true;
  document.getElementById('writingNext').classList.remove('hidden');

  updateProgress(state.current, isCorrect);
  saveData();
  updateProgressUI();
}

function nextWriting() {
  showNextCard();
}

// Check if the user's typed answer matches any valid form of the translation
function isAnswerCorrect(userAnswer, correctTranslation) {
  const normalize = s => s
    .toLowerCase()
    .trim()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '') // remove accents
    .replace(/[^a-z0-9 ]/g, '')      // remove punctuation
    .replace(/\s+/g, ' ')
    .trim();

  const userNorm = normalize(userAnswer);

  // Split by "/" to get each valid alternative
  const parts = correctTranslation
    .split('/')
    .map(p => normalize(p.trim()))
    .filter(p => p.length > 1); // ignore single-letter gender suffixes ("a", "o")

  // Also add gender variants for single-word adjectives (e.g. "agotado" → also accept "agotada")
  const expanded = [...parts];
  parts.forEach(p => {
    if (!p.includes(' ')) { // single word only
      if (p.endsWith('o')) expanded.push(p.slice(0, -1) + 'a');
      if (p.endsWith('a') && p.length > 3) expanded.push(p.slice(0, -1) + 'o');
    }
  });

  return expanded.some(p => userNorm === p);
}


// ══════════════════════════════════════════════════════════════════
//  PRONUNCIATION (Web Speech API)
// ══════════════════════════════════════════════════════════════════
function speakWord(event) {
  if (event) event.stopPropagation(); // prevent card flip
  const word = CARDS[selectedLevel][state.current]?.word;
  if (!word || !('speechSynthesis' in window)) return;
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(word);
  utterance.lang  = 'en-US';
  utterance.rate  = 0.85;
  window.speechSynthesis.speak(utterance);
}


// ══════════════════════════════════════════════════════════════════
//  PROGRESS
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
