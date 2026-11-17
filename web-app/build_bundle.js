const fs = require('fs');

const saaQ = fs.readFileSync('js/data/saa_questions.js', 'utf8').replace('export const saaExamQuestions =', 'const saaExamQuestions =');
const clfQ = fs.readFileSync('js/data/questions.js', 'utf8').replace('export const examQuestions =', 'const clfExamQuestions =');
const f = fs.readFileSync('js/data/flashcards.js', 'utf8').replace('export const flashcards =', 'const flashcards =');
const d = fs.readFileSync('js/data/domains.js', 'utf8').replace('export const domainGuides =', 'const domainGuides =');
const c = fs.readFileSync('js/data/cheatsheets.js', 'utf8').replace('export const cheatSheets =', 'const cheatSheets =');

const appLogic = `
// Safe Storage Wrapper
const storage = {
  get: function(key, fallback = null) {
    try {
      const val = localStorage.getItem(key);
      return val !== null ? val : fallback;
    } catch (e) {
      return fallback;
    }
  },
  set: function(key, val) {
    try {
      localStorage.setItem(key, val);
    } catch (e) {}
  },
  remove: function(key) {
    try {
      localStorage.removeItem(key);
    } catch (e) {}
  }
};

// SAA Domains
const saaDomains = [
  { id: 1, name: "Design Secure Architectures", weight: "30%", icon: "🛡️", desc: "Design secure access to AWS resources, secure workloads, and data security controls." },
  { id: 2, name: "Design Resilient Architectures", weight: "26%", icon: "⚡", desc: "Design scalable, loosely coupled, and highly available multi-AZ architectures with failover." },
  { id: 3, name: "Design High-Performing Architectures", weight: "24%", icon: "🚀", desc: "Determine high-performing storage, compute, database, and network architectures." },
  { id: 4, name: "Design Cost-Optimized Architectures", weight: "20%", icon: "💰", desc: "Design cost-optimized storage, compute, and data transfer solutions." }
];

// Application State
const state = {
  currentView: 'dashboard',
  theme: storage.get('aws_theme', 'dark'),
  currentCert: storage.get('aws_cert', 'saa'), // 'saa' or 'clf'
  sourceFilter: 'all', // 'all', 'v1', 'v2'
  domainFilter: 'all',

  // Exam State
  exam: {
    rawPool: [...saaExamQuestions],
    questions: [...saaExamQuestions],
    currentIndex: 0,
    answers: JSON.parse(storage.get('aws_exam_answers', '{}') || '{}'),
    flagged: new Set(JSON.parse(storage.get('aws_exam_flagged', '[]') || '[]')),
    timeRemaining: parseInt(storage.get('aws_exam_time', '7800'), 10), // 130 mins
    timerRunning: false,
    timerInterval: null,
    instantFeedback: true,
    isSubmitted: false,
    filterReview: 'all',
    lastResult: JSON.parse(storage.get('aws_exam_last_result', 'null') || 'null')
  },

  // Flashcards State
  flashcards: {
    cards: [...flashcards],
    currentIndex: 0,
    isFlipped: false,
    category: 'all',
    mastered: new Set(JSON.parse(storage.get('aws_fc_mastered', '[]') || '[]'))
  },

  // Study Guides State
  guides: {
    currentDomainId: 1
  },

  // Cheat Sheets State
  cheatsheets: {
    activeId: 'storage',
    searchQuery: ''
  }
};

function init() {
  applyTheme(state.theme);
  setupNavigation();
  setupGlobalSearch();
  setupCertSelector();
  applyFilters();
  renderDashboard();
  renderStudyGuides();
  initExam();
  initFlashcards();
  renderCheatSheets();

  window.addEventListener('hashchange', () => {
    const hash = window.location.hash.replace('#', '') || 'dashboard';
    if (hash && ['dashboard', 'study', 'exam', 'videos', 'flashcards', 'cheatsheets'].includes(hash)) {
      if (state.currentView !== hash) {
        switchView(hash);
      }
    }
  });

  const initialHash = window.location.hash.replace('#', '') || 'dashboard';
  switchView(initialHash);

  const themeToggle = document.getElementById('theme-toggle');
  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      applyTheme(state.theme === 'dark' ? 'light' : 'dark');
    });
  }
}

function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  storage.set('aws_theme', theme);
  state.theme = theme;
  const themeToggle = document.getElementById('theme-toggle');
  if (themeToggle) {
    const icon = themeToggle.querySelector('span');
    if (icon) {
      icon.textContent = theme === 'dark' ? '☀️' : '🌙';
    }
  }
}

function setupCertSelector() {
  const sel = document.getElementById('cert-selector');
  if (!sel) return;
  sel.value = state.currentCert;
  sel.addEventListener('change', (e) => {
    state.currentCert = e.target.value;
    storage.set('aws_cert', state.currentCert);
    if (state.currentCert === 'saa') {
      state.exam.rawPool = [...saaExamQuestions];
    } else {
      state.exam.rawPool = [...clfExamQuestions];
    }
    state.sourceFilter = 'all';
    applyFilters();
    renderDashboard();
    renderCurrentQuestion();
    renderQuestionGrid();
  });
}

function applyFilters() {
  let pool = state.exam.rawPool;
  if (state.sourceFilter === 'v1') {
    pool = pool.filter(q => (q.source || '').includes('Video 1'));
  } else if (state.sourceFilter === 'v2') {
    pool = pool.filter(q => (q.source || '').includes('Video 2'));
  }

  if (state.domainFilter !== 'all') {
    pool = pool.filter(q => String(q.domainId) === String(state.domainFilter));
  }

  state.exam.questions = pool;
  state.exam.currentIndex = 0;

  const countAll = document.getElementById('count-all');
  if (countAll) countAll.textContent = state.exam.rawPool.length;

  const totalLabel = document.getElementById('exam-q-total-label');
  if (totalLabel) totalLabel.textContent = \`\${state.exam.questions.length} Questions\`;

  const dashCount = document.getElementById('dash-answered-q');
  if (dashCount) dashCount.textContent = \`0/\${state.exam.questions.length}\`;
}

window.setSourceFilter = function(src) {
  state.sourceFilter = src;
  document.querySelectorAll('.filter-pill').forEach(el => el.classList.remove('active'));
  const activeBtn = document.getElementById('filter-src-' + src);
  if (activeBtn) activeBtn.classList.add('active');
  applyFilters();
  renderCurrentQuestion();
  renderQuestionGrid();
};

window.filterBySourceAndStart = function(srcName) {
  if (srcName.includes('Video 1') || srcName === 'v1') {
    window.setSourceFilter('v1');
  } else if (srcName.includes('Video 2') || srcName === 'v2') {
    window.setSourceFilter('v2');
  }
  switchView('exam');
};

const domFilterEl = document.getElementById('exam-domain-filter');
if (domFilterEl) {
  domFilterEl.addEventListener('change', (e) => {
    state.domainFilter = e.target.value;
    applyFilters();
    renderCurrentQuestion();
    renderQuestionGrid();
  });
}

function setupNavigation() {
  const navBtns = document.querySelectorAll('.nav-btn');
  navBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetView = btn.getAttribute('data-view');
      switchView(targetView);
    });
  });

  document.querySelectorAll('[data-goto-view]').forEach(card => {
    card.addEventListener('click', () => {
      const targetView = card.getAttribute('data-goto-view');
      switchView(targetView);
    });
  });
}

window.switchView = function(viewId) {
  const navBtns = document.querySelectorAll('.nav-btn');
  const views = document.querySelectorAll('.view-section');

  navBtns.forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-view') === viewId);
  });

  views.forEach(section => {
    section.classList.toggle('active', section.id === 'view-' + viewId);
  });

  state.currentView = viewId;
  window.location.hash = viewId;
  window.scrollTo({ top: 0, behavior: 'smooth' });

  if (viewId === 'exam') {
    renderCurrentQuestion();
    renderQuestionGrid();
    startTimer();
  } else if (viewId === 'dashboard') {
    updateReadinessScore();
  }
};

function renderDashboard() {
  const grid = document.getElementById('dashboard-domains-grid');
  if (!grid) return;

  const domainsToUse = state.currentCert === 'saa' ? saaDomains : domainGuides;
  grid.innerHTML = domainsToUse.map(d => \`
    <div class="domain-card" onclick="window.goToDomain(\${d.id})">
      <div class="domain-header">
        <span class="domain-icon">\${d.icon}</span>
        <span class="domain-weight">\${d.weight}</span>
      </div>
      <h3 class="domain-title">\${d.name}</h3>
      <p class="domain-desc">\${d.desc}</p>
      <div class="domain-progress-bar">
        <div class="domain-progress-fill" style="width: 35%;"></div>
      </div>
    </div>
  \`).join('');

  updateReadinessScore();
}

window.goToDomain = function(domainId) {
  state.guides.currentDomainId = domainId;
  switchView('study');
  renderStudyGuides();
};

function updateReadinessScore() {
  const answeredCount = Object.keys(state.exam.answers).length;
  const totalQ = state.exam.questions.length;
  const answeredEl = document.getElementById('dash-answered-q');
  if (answeredEl) answeredEl.textContent = \`\${answeredCount}/\${totalQ}\`;

  const masteredCount = state.flashcards.mastered.size;
  const masteredEl = document.getElementById('dash-mastered-fc');
  if (masteredEl) masteredEl.textContent = \`\${masteredCount}/\${state.flashcards.cards.length}\`;

  const scorePct = totalQ > 0 ? Math.round(((answeredCount / totalQ) * 0.7 + (masteredCount / state.flashcards.cards.length) * 0.3) * 100) : 0;
  const readinessEl = document.getElementById('dash-readiness-val');
  if (readinessEl) readinessEl.textContent = \`\${scorePct}%\`;
}

// ============================================================================
// Practice Exam Logic
// ============================================================================
function initExam() {
  const prevBtn = document.getElementById('exam-prev-btn');
  const nextBtn = document.getElementById('exam-next-btn');
  const flagBtn = document.getElementById('exam-flag-btn');
  const submitBtn = document.getElementById('exam-submit-btn');
  const feedbackToggle = document.getElementById('exam-feedback-toggle');

  if (prevBtn) prevBtn.addEventListener('click', () => changeQuestion(-1));
  if (nextBtn) nextBtn.addEventListener('click', () => changeQuestion(1));
  if (flagBtn) flagBtn.addEventListener('click', toggleFlagCurrentQuestion);
  if (submitBtn) submitBtn.addEventListener('click', submitExam);

  if (feedbackToggle) {
    feedbackToggle.checked = state.exam.instantFeedback;
    feedbackToggle.addEventListener('change', (e) => {
      state.exam.instantFeedback = e.target.checked;
      renderCurrentQuestion();
    });
  }

  const retakeBtn = document.getElementById('exam-retake-btn');
  if (retakeBtn) retakeBtn.addEventListener('click', resetExam);

  const reviewBtn = document.getElementById('exam-review-all-btn');
  if (reviewBtn) reviewBtn.addEventListener('click', () => {
    document.getElementById('exam-results-container').style.display = 'none';
    document.getElementById('exam-active-container').style.display = 'block';
    state.exam.currentIndex = 0;
    renderCurrentQuestion();
  });
}

function startTimer() {
  if (state.exam.timerRunning || state.exam.isSubmitted) return;
  state.exam.timerRunning = true;

  state.exam.timerInterval = setInterval(() => {
    if (state.exam.timeRemaining > 0) {
      state.exam.timeRemaining--;
      storage.set('aws_exam_time', state.exam.timeRemaining);
      updateTimerDisplay();
    } else {
      clearInterval(state.exam.timerInterval);
      submitExam();
    }
  }, 1000);
  updateTimerDisplay();
}

function updateTimerDisplay() {
  const timerEl = document.getElementById('exam-timer');
  if (!timerEl) return;
  const mins = Math.floor(state.exam.timeRemaining / 60);
  const secs = state.exam.timeRemaining % 60;
  timerEl.textContent = \`\${mins.toString().padStart(2, '0')}:\${secs.toString().padStart(2, '0')}\`;
}

function renderCurrentQuestion() {
  if (!state.exam.questions.length) return;
  const q = state.exam.questions[state.exam.currentIndex];
  if (!q) return;

  const qNumEl = document.getElementById('exam-q-number');
  if (qNumEl) qNumEl.textContent = \`Question \${state.exam.currentIndex + 1} of \${state.exam.questions.length}\`;

  const domainEl = document.getElementById('exam-q-domain');
  if (domainEl) domainEl.textContent = \`Domain \${q.domainId}: \${q.domain}\`;

  const sourceEl = document.getElementById('exam-q-source');
  if (sourceEl) sourceEl.textContent = q.source || 'Official SAA Question';

  const textEl = document.getElementById('exam-q-text');
  if (textEl) textEl.textContent = q.question;

  const isFlagged = state.exam.flagged.has(q.id);
  const flagBtn = document.getElementById('exam-flag-btn');
  if (flagBtn) flagBtn.innerHTML = \`<span>🚩</span> \${isFlagged ? 'Flagged' : 'Flag'}\`;

  const optionsContainer = document.getElementById('exam-options-container');
  const explanationBox = document.getElementById('exam-explanation-box');
  if (!optionsContainer) return;
  optionsContainer.innerHTML = '';

  const userAnswer = state.exam.answers[q.id];
  const prefixes = ['A', 'B', 'C', 'D', 'E'];

  q.options.forEach((optText, idx) => {
    const isSelected = userAnswer === idx;
    const optEl = document.createElement('div');
    optEl.className = \`option-item \${isSelected ? 'selected' : ''}\`;

    if ((state.exam.instantFeedback && userAnswer !== undefined) || state.exam.isSubmitted) {
      const isCorrect = q.answer === idx;
      if (isCorrect) optEl.classList.add('correct');
      else if (isSelected && !isCorrect) optEl.classList.add('incorrect');
    }

    optEl.innerHTML = \`
      <div class="option-prefix">\${prefixes[idx]}</div>
      <div class="option-label">\${optText}</div>
    \`;

    optEl.addEventListener('click', () => selectOption(idx));
    optionsContainer.appendChild(optEl);
  });

  if (((state.exam.instantFeedback && userAnswer !== undefined) || state.exam.isSubmitted) && explanationBox) {
    explanationBox.style.display = 'block';
    explanationBox.innerHTML = \`
      <div class="explanation-title">
        <span>💡</span> Correct Answer: Option \${prefixes[q.answer]} & In-Depth Explanation
      </div>
      <div class="explanation-text">\${q.explanation}</div>
    \`;
  } else if (explanationBox) {
    explanationBox.style.display = 'none';
  }

  const prevBtn = document.getElementById('exam-prev-btn');
  const nextBtn = document.getElementById('exam-next-btn');
  if (prevBtn) prevBtn.disabled = state.exam.currentIndex === 0;
  if (nextBtn) nextBtn.disabled = state.exam.currentIndex === state.exam.questions.length - 1;

  renderQuestionGrid();
}

function selectOption(optIndex) {
  if (state.exam.isSubmitted) return;
  const q = state.exam.questions[state.exam.currentIndex];
  state.exam.answers[q.id] = optIndex;
  storage.set('aws_exam_answers', JSON.stringify(state.exam.answers));
  renderCurrentQuestion();
}

function changeQuestion(delta) {
  const newIndex = state.exam.currentIndex + delta;
  if (newIndex >= 0 && newIndex < state.exam.questions.length) {
    state.exam.currentIndex = newIndex;
    renderCurrentQuestion();
  }
}

window.jumpToQuestion = function(index) {
  state.exam.currentIndex = index;
  renderCurrentQuestion();
};

function toggleFlagCurrentQuestion() {
  const q = state.exam.questions[state.exam.currentIndex];
  if (state.exam.flagged.has(q.id)) {
    state.exam.flagged.delete(q.id);
  } else {
    state.exam.flagged.add(q.id);
  }
  storage.set('aws_exam_flagged', JSON.stringify([...state.exam.flagged]));
  renderCurrentQuestion();
}

function renderQuestionGrid() {
  const grid = document.getElementById('exam-q-grid');
  if (!grid) return;

  grid.innerHTML = state.exam.questions.map((q, idx) => {
    const isCurrent = idx === state.exam.currentIndex;
    const isAnswered = state.exam.answers[q.id] !== undefined;
    const isFlagged = state.exam.flagged.has(q.id);

    let classes = ['q-bubble'];
    if (isCurrent) classes.push('active');
    if (isAnswered) classes.push('answered');
    if (isFlagged) classes.push('flagged');

    if (state.exam.isSubmitted) {
      classes.push(state.exam.answers[q.id] === q.answer ? 'correct' : 'incorrect');
    }

    return \`
      <button class="\${classes.join(' ')}" onclick="window.jumpToQuestion(\${idx})">
        \${idx + 1}
      </button>
    \`;
  }).join('');
}

window.speakCurrentQuestion = function() {
  if (!('speechSynthesis' in window)) {
    alert('Speech Synthesis not supported by your browser.');
    return;
  }
  window.speechSynthesis.cancel();
  const q = state.exam.questions[state.exam.currentIndex];
  if (!q) return;

  let text = \`Question. \${q.question}. \`;
  const prefixes = ['Option A', 'Option B', 'Option C', 'Option D'];
  q.options.forEach((opt, idx) => {
    text += \`\${prefixes[idx]}: \${opt}. \`;
  });

  const utter = new SpeechSynthesisUtterance(text);
  utter.rate = 0.95;

  const voices = window.speechSynthesis.getVoices();
  const afroEuro = voices.find(v => v.lang.includes('en-ZA') || v.lang.includes('en-NG') || v.lang.includes('en-GB') || v.name.toLowerCase().includes('leah') || v.name.toLowerCase().includes('ezinne'));
  if (afroEuro) utter.voice = afroEuro;

  window.speechSynthesis.speak(utter);
};

function submitExam() {
  if (state.exam.timerInterval) clearInterval(state.exam.timerInterval);
  state.exam.isSubmitted = true;
  state.exam.timerRunning = false;

  let correctCount = 0;
  state.exam.questions.forEach(q => {
    if (state.exam.answers[q.id] === q.answer) correctCount++;
  });

  const total = state.exam.questions.length;
  const pct = total > 0 ? Math.round((correctCount / total) * 100) : 0;
  const scaledScore = total > 0 ? Math.round(100 + (correctCount / total) * 900) : 100;
  const isPassed = scaledScore >= 720;

  document.getElementById('exam-active-container').style.display = 'none';
  const resultsContainer = document.getElementById('exam-results-container');
  resultsContainer.style.display = 'block';

  const badge = document.getElementById('results-score-badge');
  badge.textContent = isPassed ? 'PASSED 🚀' : 'NEEDS REVIEW ⚠️';
  badge.className = \`score-badge \${isPassed ? 'passed' : 'failed'}\`;

  document.getElementById('res-score-scaled').textContent = scaledScore;
  document.getElementById('res-accuracy').textContent = \`\${pct}%\`;
  document.getElementById('res-correct-count').textContent = \`\${correctCount} / \${total}\`;

  const timeUsed = 7800 - state.exam.timeRemaining;
  const m = Math.floor(timeUsed / 60);
  const s = timeUsed % 60;
  document.getElementById('res-time-spent').textContent = \`\${m}m \${s}s\`;
}

function resetExam() {
  state.exam.answers = {};
  state.exam.flagged.clear();
  state.exam.isSubmitted = false;
  state.exam.timeRemaining = 7800;
  storage.remove('aws_exam_answers');
  storage.remove('aws_exam_flagged');
  storage.remove('aws_exam_time');

  document.getElementById('exam-results-container').style.display = 'none';
  document.getElementById('exam-active-container').style.display = 'block';
  state.exam.currentIndex = 0;
  renderCurrentQuestion();
  renderQuestionGrid();
  startTimer();
}

// ============================================================================
// Study Guides, Flashcards, Cheatsheets
// ============================================================================
function renderStudyGuides() {
  const list = document.getElementById('guides-sidebar-list');
  const content = document.getElementById('guides-content-area');
  if (!list || !content) return;

  list.innerHTML = domainGuides.map(d => \`
    <li class="guide-nav-item \${d.id === state.guides.currentDomainId ? 'active' : ''}" onclick="window.switchGuideDomain(\${d.id})">
      <span>\${d.icon}</span> \${d.name}
    </li>
  \`).join('');

  const activeDomain = domainGuides.find(d => d.id === state.guides.currentDomainId) || domainGuides[0];
  content.innerHTML = \`
    <div style="background: var(--card-bg); padding: 2rem; border-radius: var(--radius-lg); border: 1px solid var(--border-color);">
      <h2>\${activeDomain.icon} \${activeDomain.name} (\${activeDomain.weight})</h2>
      <p style="color: var(--text-secondary); margin-top: 0.5rem; margin-bottom: 1.5rem;">\${activeDomain.desc}</p>
      <div>\${activeDomain.contentHtml || '<p>Comprehensive architectural guide covering all in-scope AWS services, design patterns, and exam qualifiers.</p>'}</div>
    </div>
  \`;
}

window.switchGuideDomain = function(id) {
  state.guides.currentDomainId = id;
  renderStudyGuides();
};

function initFlashcards() {
  const flipBtn = document.getElementById('fc-flip-btn');
  const prevBtn = document.getElementById('fc-prev-btn');
  const nextBtn = document.getElementById('fc-next-btn');
  const card = document.getElementById('active-flashcard');

  if (flipBtn) flipBtn.addEventListener('click', toggleCardFlip);
  if (card) card.addEventListener('click', toggleCardFlip);
  if (prevBtn) prevBtn.addEventListener('click', () => changeFlashcard(-1));
  if (nextBtn) nextBtn.addEventListener('click', () => changeFlashcard(1));

  renderFlashcard();
}

function toggleCardFlip() {
  const card = document.getElementById('active-flashcard');
  if (!card) return;
  state.flashcards.isFlipped = !state.flashcards.isFlipped;
  card.classList.toggle('is-flipped', state.flashcards.isFlipped);
}

function changeFlashcard(delta) {
  const newIdx = state.flashcards.currentIndex + delta;
  if (newIdx >= 0 && newIdx < state.flashcards.cards.length) {
    state.flashcards.currentIndex = newIdx;
    state.flashcards.isFlipped = false;
    const card = document.getElementById('active-flashcard');
    if (card) card.classList.remove('is-flipped');
    renderFlashcard();
  }
}

function renderFlashcard() {
  if (!state.flashcards.cards.length) return;
  const fc = state.flashcards.cards[state.flashcards.currentIndex];
  if (!fc) return;

  const fPrompt = document.getElementById('fc-front-prompt');
  const bAns = document.getElementById('fc-back-answer');
  const bDesc = document.getElementById('fc-back-desc');
  const countLbl = document.getElementById('fc-counter-label');

  if (fPrompt) fPrompt.textContent = fc.front;
  if (bAns) bAns.textContent = fc.back;
  if (bDesc) bDesc.textContent = fc.explanation || 'Key trigger rule for AWS exams.';
  if (countLbl) countLbl.textContent = \`Card \${state.flashcards.currentIndex + 1} of \${state.flashcards.cards.length}\`;
}

function renderCheatSheets() {
  const container = document.getElementById('cs-tabs-container');
  const tableDisplay = document.getElementById('cs-table-display');
  if (!container || !tableDisplay) return;

  container.innerHTML = cheatSheets.map(cs => \`
    <button class="cs-pill \${cs.id === state.cheatsheets.activeId ? 'active' : ''}" onclick="window.switchCheatSheet('\${cs.id}')">
      \${cs.title}
    </button>
  \`).join('');

  const activeCs = cheatSheets.find(cs => cs.id === state.cheatsheets.activeId) || cheatSheets[0];
  tableDisplay.innerHTML = \`
    <div style="background: var(--card-bg); padding: 1.5rem; border-radius: var(--radius-lg); border: 1px solid var(--border-color); overflow-x: auto;">
      <h3 style="margin-bottom: 1rem;">\${activeCs.title}</h3>
      \${activeCs.tableHtml || '<p>Comparison matrix loaded.</p>'}
    </div>
  \`;
}

window.switchCheatSheet = function(id) {
  state.cheatsheets.activeId = id;
  renderCheatSheets();
};

function setupGlobalSearch() {
  const searchBtn = document.getElementById('search-btn');
  const searchModal = document.getElementById('search-modal');
  const closeBtn = document.getElementById('close-search-btn');
  const input = document.getElementById('global-search-input');
  const list = document.getElementById('search-results-list');

  if (searchBtn && searchModal) {
    searchBtn.addEventListener('click', () => searchModal.classList.add('active'));
  }
  if (closeBtn && searchModal) {
    closeBtn.addEventListener('click', () => searchModal.classList.remove('active'));
  }

  if (input && list) {
    input.addEventListener('input', (e) => {
      const q = e.target.value.toLowerCase().trim();
      if (!q) {
        list.innerHTML = '<div style="padding: 1.5rem; text-align: center; color: var(--text-muted);">Type to search...</div>';
        return;
      }
      const matches = state.exam.questions.filter(item => 
        (item.question || '').toLowerCase().includes(q) ||
        (item.explanation || '').toLowerCase().includes(q)
      ).slice(0, 10);

      list.innerHTML = matches.map((m, i) => \`
        <div style="padding: 0.75rem 1rem; border-bottom: 1px solid var(--border-color); cursor: pointer;" onclick="window.jumpToQuestion(\${m.id - 1}); document.getElementById('search-modal').classList.remove('active'); window.switchView('exam');">
          <div style="font-weight: 600; font-size: 0.85rem; color: var(--accent-aws);">\${m.source || 'Exam Question'}</div>
          <div style="font-size: 0.82rem; margin-top: 0.25rem;">\${m.question.substring(0, 120)}...</div>
        </div>
      \`).join('');
    });
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
`;

fs.writeFileSync('js/bundle.js', saaQ + '\n' + clfQ + '\n' + f + '\n' + d + '\n' + c + '\n' + appLogic, 'utf8');
console.log('Build complete! js/bundle.js written with SAA-C03 262 Questions and Afro-Euro Voice Narration.');
