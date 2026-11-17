import { examQuestions } from './data/questions.js';
import { flashcards } from './data/flashcards.js';
import { domainGuides } from './data/domains.js';
import { cheatSheets } from './data/cheatsheets.js';

// Application State
const state = {
  currentView: 'dashboard',
  theme: localStorage.getItem('aws_theme') || 'dark',

  // Exam State
  exam: {
    questions: [...examQuestions],
    currentIndex: 0,
    answers: JSON.parse(localStorage.getItem('aws_exam_answers') || '{}'),
    flagged: new Set(JSON.parse(localStorage.getItem('aws_exam_flagged') || '[]')),
    timeRemaining: parseInt(localStorage.getItem('aws_exam_time') || '5400', 10), // 90 mins = 5400s
    timerRunning: false,
    timerInterval: null,
    instantFeedback: false,
    isSubmitted: false,
    filterReview: 'all', // 'all', 'correct', 'incorrect', 'flagged'
    lastResult: JSON.parse(localStorage.getItem('aws_exam_last_result') || 'null')
  },

  // Flashcards State
  flashcards: {
    cards: [...flashcards],
    currentIndex: 0,
    isFlipped: false,
    category: 'all',
    mastered: new Set(JSON.parse(localStorage.getItem('aws_fc_mastered') || '[]'))
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

// DOM References
const elements = {
  navBtns: document.querySelectorAll('.nav-btn'),
  views: document.querySelectorAll('.view-section'),
  themeToggle: document.getElementById('theme-toggle'),
  searchBtn: document.getElementById('search-btn'),
  searchModal: document.getElementById('search-modal'),
  searchInput: document.getElementById('global-search-input'),
  searchResults: document.getElementById('search-results-list'),
  closeSearchBtn: document.getElementById('close-search-btn')
};

// ============================================================================
// Initialization & Theme
// ============================================================================
function init() {
  applyTheme(state.theme);
  setupNavigation();
  setupGlobalSearch();
  renderDashboard();
  renderStudyGuides();
  initExam();
  initFlashcards();
  renderCheatSheets();

  // Check if there's a saved view
  const savedView = window.location.hash.replace('#', '') || 'dashboard';
  switchView(savedView);
}

function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('aws_theme', theme);
  state.theme = theme;
  const icon = elements.themeToggle.querySelector('span');
  if (icon) {
    icon.textContent = theme === 'dark' ? '☀️' : '🌙';
  }
}

elements.themeToggle.addEventListener('click', () => {
  applyTheme(state.theme === 'dark' ? 'light' : 'dark');
});

// ============================================================================
// View Navigation
// ============================================================================
function setupNavigation() {
  elements.navBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetView = btn.getAttribute('data-view');
      switchView(targetView);
    });
  });

  // Action cards on dashboard
  document.querySelectorAll('[data-goto-view]').forEach(card => {
    card.addEventListener('click', () => {
      const view = card.getAttribute('data-goto-view');
      switchView(view);
    });
  });
}

export function switchView(viewName) {
  state.currentView = viewName;
  window.location.hash = viewName;

  // Update tabs
  elements.navBtns.forEach(b => {
    b.classList.toggle('active', b.getAttribute('data-view') === viewName);
  });

  // Update views
  elements.views.forEach(v => {
    v.classList.toggle('active', v.id === `view-${viewName}`);
  });

  window.scrollTo({ top: 0, behavior: 'smooth' });

  if (viewName === 'dashboard') {
    renderDashboard();
  }
}

// Make switchView accessible globally
window.switchView = switchView;

// ============================================================================
// Dashboard Rendering
// ============================================================================
function renderDashboard() {
  const answeredCount = Object.keys(state.exam.answers).length;
  const masteredCount = state.flashcards.mastered.size;
  const totalQuestions = state.exam.questions.length;
  const totalCards = state.flashcards.cards.length;

  document.getElementById('dash-answered-q').textContent = `${answeredCount}/${totalQuestions}`;
  document.getElementById('dash-mastered-fc').textContent = `${masteredCount}/${totalCards}`;

  // Calculate readiness score
  let readiness = 0;
  if (state.exam.lastResult) {
    readiness = Math.round(state.exam.lastResult.scorePercent);
  } else {
    const qProgress = (answeredCount / totalQuestions) * 40;
    const fcProgress = (masteredCount / totalCards) * 40;
    readiness = Math.round(qProgress + fcProgress);
  }

  const dialVal = document.getElementById('dash-readiness-val');
  if (dialVal) dialVal.textContent = `${readiness}%`;

  // Render Domain Progress Cards
  const domainContainer = document.getElementById('dashboard-domains-grid');
  if (domainContainer) {
    domainContainer.innerHTML = domainGuides.map(d => {
      // Calculate domain stats if exam taken
      let domainPercent = 0;
      if (state.exam.lastResult && state.exam.lastResult.domainBreakdown[d.id]) {
        domainPercent = Math.round(state.exam.lastResult.domainBreakdown[d.id].percent);
      } else {
        const qInDomain = state.exam.questions.filter(q => q.domainId === d.id);
        const answeredInDomain = qInDomain.filter(q => state.exam.answers[q.id] !== undefined);
        domainPercent = qInDomain.length > 0 ? Math.round((answeredInDomain.length / qInDomain.length) * 100) : 0;
      }

      return `
        <div class="domain-stat-card" onclick="window.openDomainGuide(${d.id})">
          <div class="domain-card-top">
            <span class="domain-badge">Domain ${d.id}</span>
            <span class="domain-weight">${d.weight} Weight</span>
          </div>
          <h4>${d.title.split(': ')[1]}</h4>
          <p style="font-size: 0.85rem; color: var(--text-secondary); margin-bottom: 0.5rem;">${d.sections.length} core topic modules</p>
          <div class="domain-progress-bar">
            <div class="domain-progress-fill" style="width: ${domainPercent}%"></div>
          </div>
          <div style="display: flex; justify-content: space-between; font-size: 0.75rem; color: var(--text-muted); margin-top: 0.35rem;">
            <span>Progress / Accuracy</span>
            <span>${domainPercent}%</span>
          </div>
        </div>
      `;
    }).join('');
  }
}

window.openDomainGuide = function(domainId) {
  state.guides.currentDomainId = domainId;
  switchView('study');
  renderStudyGuides();
};

// ============================================================================
// Study Guides Section
// ============================================================================
function renderStudyGuides() {
  const sidebarList = document.getElementById('guides-sidebar-list');
  const contentArea = document.getElementById('guides-content-area');

  if (!sidebarList || !contentArea) return;

  // Render sidebar
  sidebarList.innerHTML = domainGuides.map(d => `
    <li class="guide-nav-item ${d.id === state.guides.currentDomainId ? 'active' : ''}" 
        onclick="window.selectDomain(${d.id})">
      <span>${d.title.split(': ')[0]}</span>
      <span style="font-size: 0.75rem; opacity: 0.8;">${d.weight}</span>
    </li>
  `).join('');

  // Render current domain content
  const activeDomain = domainGuides.find(d => d.id === state.guides.currentDomainId) || domainGuides[0];

  contentArea.innerHTML = `
    <div class="guide-header">
      <div style="display: flex; gap: 0.5rem; align-items: center; margin-bottom: 0.5rem;">
        <span class="domain-badge" style="background: rgba(255, 153, 0, 0.15); color: var(--accent-aws);">Domain ${activeDomain.id}</span>
        <span class="domain-weight">${activeDomain.weight} of Examination</span>
      </div>
      <h2>${activeDomain.title}</h2>
      <p class="guide-desc">${activeDomain.description}</p>
    </div>
    <div class="guide-sections-wrapper">
      ${activeDomain.sections.map(sec => `
        <div class="guide-section-block">
          <h3>${sec.heading}</h3>
          <div>${sec.content}</div>
        </div>
      `).join('')}
    </div>
  `;
}

window.selectDomain = function(domainId) {
  state.guides.currentDomainId = domainId;
  renderStudyGuides();
  window.scrollTo({ top: 100, behavior: 'smooth' });
};

// ============================================================================
// Practice Exam Simulator
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
  if (submitBtn) submitBtn.addEventListener('click', confirmSubmitExam);

  if (feedbackToggle) {
    feedbackToggle.addEventListener('change', (e) => {
      state.exam.instantFeedback = e.target.checked;
      renderCurrentQuestion();
    });
  }

  startExamTimer();
  renderCurrentQuestion();
  renderQuestionGrid();
}

function startExamTimer() {
  if (state.exam.timerInterval) clearInterval(state.exam.timerInterval);

  state.exam.timerRunning = true;
  updateTimerDisplay();

  state.exam.timerInterval = setInterval(() => {
    if (state.exam.timeRemaining > 0 && !state.exam.isSubmitted) {
      state.exam.timeRemaining--;
      localStorage.setItem('aws_exam_time', state.exam.timeRemaining);
      updateTimerDisplay();
    } else if (state.exam.timeRemaining <= 0 && !state.exam.isSubmitted) {
      clearInterval(state.exam.timerInterval);
      alert('Time is up! Submitting your exam automatically.');
      finishExam();
    }
  }, 1000);
}

function updateTimerDisplay() {
  const timerEl = document.getElementById('exam-timer');
  if (!timerEl) return;

  const mins = Math.floor(state.exam.timeRemaining / 60);
  const secs = state.exam.timeRemaining % 60;
  timerEl.textContent = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;

  if (state.exam.timeRemaining < 300) {
    timerEl.parentElement.classList.add('warning');
  } else {
    timerEl.parentElement.classList.remove('warning');
  }
}

function renderCurrentQuestion() {
  const q = state.exam.questions[state.exam.currentIndex];
  if (!q) return;

  document.getElementById('exam-q-domain').textContent = `Domain ${q.domainId}: ${q.domain}`;
  document.getElementById('exam-q-number').textContent = `Question ${state.exam.currentIndex + 1} of ${state.exam.questions.length}`;
  document.getElementById('exam-q-text').textContent = q.question;

  const flagBtn = document.getElementById('exam-flag-btn');
  const isFlagged = state.exam.flagged.has(q.id);
  flagBtn.classList.toggle('flagged', isFlagged);
  flagBtn.innerHTML = `<span>🚩</span> ${isFlagged ? 'Flagged' : 'Flag'}`;

  const optionsContainer = document.getElementById('exam-options-container');
  const explanationBox = document.getElementById('exam-explanation-box');
  optionsContainer.innerHTML = '';

  const userAnswer = state.exam.answers[q.id];
  const prefixes = ['A', 'B', 'C', 'D', 'E'];

  q.options.forEach((optText, idx) => {
    const isSelected = q.isMulti 
      ? Array.isArray(userAnswer) && userAnswer.includes(idx)
      : userAnswer === idx;

    const optEl = document.createElement('div');
    optEl.className = `option-item ${isSelected ? 'selected' : ''}`;

    // If instant feedback is on or exam submitted, reveal answers
    if ((state.exam.instantFeedback && userAnswer !== undefined) || state.exam.isSubmitted) {
      const isCorrect = q.isMulti 
        ? q.answer.includes(idx) 
        : q.answer === idx;
      
      if (isCorrect) {
        optEl.classList.add('correct');
      } else if (isSelected && !isCorrect) {
        optEl.classList.add('incorrect');
      }
    }

    optEl.innerHTML = `
      <div class="option-prefix">${prefixes[idx]}</div>
      <div class="option-label">${optText}</div>
    `;

    optEl.addEventListener('click', () => selectOption(idx));
    optionsContainer.appendChild(optEl);
  });

  // Render Explanation
  if (((state.exam.instantFeedback && userAnswer !== undefined) || state.exam.isSubmitted) && explanationBox) {
    explanationBox.style.display = 'block';
    explanationBox.innerHTML = `
      <div class="explanation-title">
        <span>💡</span> Explanation & Reference
      </div>
      <div class="explanation-text">${q.explanation}</div>
    `;
  } else if (explanationBox) {
    explanationBox.style.display = 'none';
  }

  // Update Prev / Next button states
  const prevBtn = document.getElementById('exam-prev-btn');
  const nextBtn = document.getElementById('exam-next-btn');
  if (prevBtn) prevBtn.disabled = state.exam.currentIndex === 0;
  if (nextBtn) nextBtn.disabled = state.exam.currentIndex === state.exam.questions.length - 1;

  renderQuestionGrid();
}

function selectOption(optIndex) {
  if (state.exam.isSubmitted) return;

  const q = state.exam.questions[state.exam.currentIndex];
  if (q.isMulti) {
    let current = Array.isArray(state.exam.answers[q.id]) ? [...state.exam.answers[q.id]] : [];
    if (current.includes(optIndex)) {
      current = current.filter(i => i !== optIndex);
    } else {
      current.push(optIndex);
    }
    state.exam.answers[q.id] = current;
  } else {
    state.exam.answers[q.id] = optIndex;
  }

  localStorage.setItem('aws_exam_answers', JSON.stringify(state.exam.answers));
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
  localStorage.setItem('aws_exam_flagged', JSON.stringify([...state.exam.flagged]));
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
      const isCorrect = isQuestionCorrect(q);
      classes.push(isCorrect ? 'correct' : 'incorrect');
    }

    return `
      <button class="${classes.join(' ')}" onclick="window.jumpToQuestion(${idx})">
        ${idx + 1}
      </button>
    `;
  }).join('');
}

function isQuestionCorrect(q) {
  const userAns = state.exam.answers[q.id];
  if (userAns === undefined) return false;
  if (q.isMulti) {
    if (!Array.isArray(userAns) || userAns.length !== q.answer.length) return false;
    return q.answer.every(ans => userAns.includes(ans));
  }
  return userAns === q.answer;
}

function confirmSubmitExam() {
  const answeredCount = Object.keys(state.exam.answers).length;
  const total = state.exam.questions.length;
  const unanswered = total - answeredCount;

  let msg = `Are you sure you want to submit your exam?\n\nAnswered: ${answeredCount} / ${total}`;
  if (unanswered > 0) {
    msg += `\nWarning: You have ${unanswered} unanswered questions!`;
  }

  if (confirm(msg)) {
    finishExam();
  }
}

function finishExam() {
  state.exam.isSubmitted = true;
  clearInterval(state.exam.timerInterval);

  let correctCount = 0;
  const domainStats = {
    1: { name: 'Cloud Concepts', correct: 0, total: 0 },
    2: { name: 'Security & Compliance', correct: 0, total: 0 },
    3: { name: 'Technology & Services', correct: 0, total: 0 },
    4: { name: 'Billing & Support', correct: 0, total: 0 }
  };

  state.exam.questions.forEach(q => {
    domainStats[q.domainId].total++;
    if (isQuestionCorrect(q)) {
      correctCount++;
      domainStats[q.domainId].correct++;
    }
  });

  const percent = (correctCount / state.exam.questions.length) * 100;
  // Scaled score formula: 100 to 1000 scale
  const scaledScore = Math.round(100 + (percent / 100) * 900);
  const isPass = scaledScore >= 700;

  const domainBreakdown = {};
  for (const [id, stats] of Object.entries(domainStats)) {
    domainBreakdown[id] = {
      name: stats.name,
      correct: stats.correct,
      total: stats.total,
      percent: (stats.correct / stats.total) * 100
    };
  }

  const resultData = {
    correctCount,
    totalQuestions: state.exam.questions.length,
    scaledScore,
    scorePercent: percent,
    isPass,
    domainBreakdown,
    submittedAt: new Date().toISOString()
  };

  state.exam.lastResult = resultData;
  localStorage.setItem('aws_exam_last_result', JSON.stringify(resultData));

  showExamResults(resultData);
}

function showExamResults(res) {
  const examContainer = document.getElementById('exam-active-container');
  const resultsContainer = document.getElementById('exam-results-container');

  if (examContainer) examContainer.style.display = 'none';
  if (resultsContainer) {
    resultsContainer.style.display = 'block';

    resultsContainer.innerHTML = `
      <div class="results-card">
        <div class="result-badge ${res.isPass ? 'result-pass' : 'result-fail'}">
          ${res.isPass ? '🎉 PASSED — READY FOR REAL EXAM' : '⚠️ DID NOT PASS — REVIEW NEEDED'}
        </div>
        <div class="score-display">${res.scaledScore} <span style="font-size: 1.5rem; color: var(--text-secondary); font-weight: 500;">/ 1000</span></div>
        <div class="score-sub">${res.correctCount} of ${res.totalQuestions} correct (${Math.round(res.scorePercent)}%) • Minimum passing score is 700</div>

        <div class="domain-breakdown">
          <h4 style="margin-bottom: 1rem; border-bottom: 1px solid var(--border-color); padding-bottom: 0.5rem;">Domain Performance Breakdown</h4>
          ${Object.entries(res.domainBreakdown).map(([id, d]) => `
            <div class="domain-row">
              <div class="domain-row-header">
                <span>Domain ${id}: ${d.name}</span>
                <span>${d.correct}/${d.total} (${Math.round(d.percent)}%)</span>
              </div>
              <div class="domain-progress-bar">
                <div class="domain-progress-fill" style="width: ${d.percent}%; background: ${d.percent >= 70 ? 'var(--accent-green)' : 'var(--accent-red)'}"></div>
              </div>
            </div>
          `).join('')}
        </div>

        <div class="results-action-bar">
          <button class="btn btn-primary" onclick="window.reviewExamQuestions()">🔍 Review All Answers & Explanations</button>
          <button class="btn btn-secondary" onclick="window.retakeExam()">🔄 Retake Full Exam</button>
          <button class="btn btn-secondary" onclick="window.switchView('dashboard')">🏠 Return to Dashboard</button>
        </div>
      </div>
    `;
  }
}

window.reviewExamQuestions = function() {
  document.getElementById('exam-active-container').style.display = 'block';
  document.getElementById('exam-results-container').style.display = 'none';
  state.exam.currentIndex = 0;
  renderCurrentQuestion();
};

window.retakeExam = function() {
  if (confirm('Reset your exam answers and retake?')) {
    state.exam.answers = {};
    state.exam.flagged.clear();
    state.exam.timeRemaining = 5400;
    state.exam.isSubmitted = false;
    state.exam.currentIndex = 0;
    localStorage.removeItem('aws_exam_answers');
    localStorage.removeItem('aws_exam_flagged');
    localStorage.removeItem('aws_exam_time');

    document.getElementById('exam-active-container').style.display = 'block';
    document.getElementById('exam-results-container').style.display = 'none';

    startExamTimer();
    renderCurrentQuestion();
    renderQuestionGrid();
  }
};

// ============================================================================
// Flashcards Section
// ============================================================================
function initFlashcards() {
  const cardStage = document.getElementById('fc-card-stage');
  const cardInner = document.getElementById('fc-card-inner');
  const nextBtn = document.getElementById('fc-next-btn');
  const prevBtn = document.getElementById('fc-prev-btn');
  const shuffleBtn = document.getElementById('fc-shuffle-btn');
  const masteredBtn = document.getElementById('fc-btn-mastered');
  const reviewBtn = document.getElementById('fc-btn-review');
  const filterSelect = document.getElementById('fc-category-filter');

  if (cardStage && cardInner) {
    cardStage.addEventListener('click', () => {
      state.flashcards.isFlipped = !state.flashcards.isFlipped;
      cardInner.classList.toggle('flipped', state.flashcards.isFlipped);
    });
  }

  if (nextBtn) nextBtn.addEventListener('click', () => navigateFlashcard(1));
  if (prevBtn) prevBtn.addEventListener('click', () => navigateFlashcard(-1));

  if (shuffleBtn) {
    shuffleBtn.addEventListener('click', () => {
      state.flashcards.cards.sort(() => Math.random() - 0.5);
      state.flashcards.currentIndex = 0;
      state.flashcards.isFlipped = false;
      renderCurrentFlashcard();
    });
  }

  if (masteredBtn) {
    masteredBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const current = getFilteredCards()[state.flashcards.currentIndex];
      if (current) {
        state.flashcards.mastered.add(current.id);
        localStorage.setItem('aws_fc_mastered', JSON.stringify([...state.flashcards.mastered]));
        navigateFlashcard(1);
      }
    });
  }

  if (reviewBtn) {
    reviewBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const current = getFilteredCards()[state.flashcards.currentIndex];
      if (current) {
        state.flashcards.mastered.delete(current.id);
        localStorage.setItem('aws_fc_mastered', JSON.stringify([...state.flashcards.mastered]));
        navigateFlashcard(1);
      }
    });
  }

  // Populate categories
  if (filterSelect) {
    const categories = ['all', ...new Set(flashcards.map(c => c.category))];
    filterSelect.innerHTML = categories.map(cat => `
      <option value="${cat}">${cat === 'all' ? 'All Categories (' + flashcards.length + ')' : cat}</option>
    `).join('');

    filterSelect.addEventListener('change', (e) => {
      state.flashcards.category = e.target.value;
      state.flashcards.currentIndex = 0;
      state.flashcards.isFlipped = false;
      renderCurrentFlashcard();
    });
  }

  // Keyboard navigation
  window.addEventListener('keydown', (e) => {
    if (state.currentView !== 'flashcards') return;
    if (e.code === 'Space') {
      e.preventDefault();
      state.flashcards.isFlipped = !state.flashcards.isFlipped;
      document.getElementById('fc-card-inner')?.classList.toggle('flipped', state.flashcards.isFlipped);
    } else if (e.code === 'ArrowRight') {
      navigateFlashcard(1);
    } else if (e.code === 'ArrowLeft') {
      navigateFlashcard(-1);
    }
  });

  renderCurrentFlashcard();
}

function getFilteredCards() {
  if (state.flashcards.category === 'all') {
    return state.flashcards.cards;
  }
  return state.flashcards.cards.filter(c => c.category === state.flashcards.category);
}

function renderCurrentFlashcard() {
  const cards = getFilteredCards();
  const card = cards[state.flashcards.currentIndex];
  const cardInner = document.getElementById('fc-card-inner');

  if (!card) return;

  state.flashcards.isFlipped = false;
  if (cardInner) cardInner.classList.remove('flipped');

  document.getElementById('fc-front-cat').textContent = card.category;
  document.getElementById('fc-back-cat').textContent = card.category;
  document.getElementById('fc-front-text').textContent = card.front;
  document.getElementById('fc-back-text').textContent = card.back;
  document.getElementById('fc-counter').textContent = `Card ${state.flashcards.currentIndex + 1} of ${cards.length}`;

  const isMastered = state.flashcards.mastered.has(card.id);
  const statusEl = document.getElementById('fc-card-status');
  if (statusEl) {
    statusEl.innerHTML = isMastered 
      ? '<span style="color: var(--accent-green);">★ Mastered</span>' 
      : '<span style="color: var(--text-muted);">☆ Learning</span>';
  }
}

function navigateFlashcard(delta) {
  const cards = getFilteredCards();
  const newIndex = state.flashcards.currentIndex + delta;
  if (newIndex >= 0 && newIndex < cards.length) {
    state.flashcards.currentIndex = newIndex;
    renderCurrentFlashcard();
  } else if (newIndex >= cards.length) {
    // Loop around
    state.flashcards.currentIndex = 0;
    renderCurrentFlashcard();
  } else if (newIndex < 0) {
    state.flashcards.currentIndex = cards.length - 1;
    renderCurrentFlashcard();
  }
}

// ============================================================================
// Comparison Cheat Sheets
// ============================================================================
function renderCheatSheets() {
  const tabsContainer = document.getElementById('cs-tabs-container');
  const searchInput = document.getElementById('cs-search-input');

  if (tabsContainer) {
    tabsContainer.innerHTML = cheatSheets.map(cs => `
      <button class="cs-pill ${cs.id === state.cheatsheets.activeId ? 'active' : ''}" 
              onclick="window.selectCheatSheet('${cs.id}')">
        ${cs.title.replace(' Matrix', '').replace(' Breakdown', '')}
      </button>
    `).join('');
  }

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      state.cheatsheets.searchQuery = e.target.value.toLowerCase().trim();
      renderCheatSheetTable();
    });
  }

  renderCheatSheetTable();
}

window.selectCheatSheet = function(sheetId) {
  state.cheatsheets.activeId = sheetId;
  renderCheatSheets();
};

function renderCheatSheetTable() {
  const container = document.getElementById('cs-table-display');
  if (!container) return;

  const activeSheet = cheatSheets.find(s => s.id === state.cheatsheets.activeId) || cheatSheets[0];
  const query = state.cheatsheets.searchQuery;

  const filteredRows = query 
    ? activeSheet.rows.filter(row => row.some(cell => cell.toLowerCase().includes(query)))
    : activeSheet.rows;

  container.innerHTML = `
    <div class="cs-table-card">
      <div class="cs-title-box">
        <h3>${activeSheet.title}</h3>
        <p>${activeSheet.description}</p>
      </div>
      <div class="table-responsive">
        <table class="data-table">
          <thead>
            <tr>
              ${activeSheet.headers.map(h => `<th>${h}</th>`).join('')}
            </tr>
          </thead>
          <tbody>
            ${filteredRows.length > 0 ? filteredRows.map(row => `
              <tr>
                ${row.map((cell, idx) => `
                  <td>${idx === 0 ? `<strong>${cell}</strong>` : cell}</td>
                `).join('')}
              </tr>
            `).join('') : `
              <tr>
                <td colspan="${activeSheet.headers.length}" style="text-align: center; padding: 2rem; color: var(--text-muted);">
                  No matches found for "${query}"
                </td>
              </tr>
            `}
          </tbody>
        </table>
      </div>
    </div>
  `;
}

// ============================================================================
// Global Search Modal
// ============================================================================
function setupGlobalSearch() {
  elements.searchBtn.addEventListener('click', openSearch);
  elements.closeSearchBtn?.addEventListener('click', closeSearch);

  elements.searchModal.addEventListener('click', (e) => {
    if (e.target === elements.searchModal) closeSearch();
  });

  window.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
      e.preventDefault();
      openSearch();
    } else if (e.key === 'Escape' && elements.searchModal.classList.contains('active')) {
      closeSearch();
    }
  });

  elements.searchInput.addEventListener('input', (e) => {
    const q = e.target.value.toLowerCase().trim();
    if (!q) {
      elements.searchResults.innerHTML = '<div style="padding: 1.5rem; text-align: center; color: var(--text-muted);">Type to search services, questions, flashcards, or topics...</div>';
      return;
    }

    const results = [];

    // Search flashcards
    flashcards.forEach(fc => {
      if (fc.front.toLowerCase().includes(q) || fc.back.toLowerCase().includes(q)) {
        results.push({
          type: 'Flashcard',
          title: fc.front,
          snippet: fc.back,
          action: () => {
            closeSearch();
            switchView('flashcards');
            state.flashcards.category = 'all';
            state.flashcards.currentIndex = flashcards.findIndex(f => f.id === fc.id);
            renderCurrentFlashcard();
          }
        });
      }
    });

    // Search questions
    examQuestions.forEach((eq, idx) => {
      if (eq.question.toLowerCase().includes(q) || eq.explanation.toLowerCase().includes(q) || eq.options.some(o => o.toLowerCase().includes(q))) {
        results.push({
          type: 'Practice Question',
          title: `Question ${idx + 1}: ${eq.question.substring(0, 70)}...`,
          snippet: eq.explanation.substring(0, 100) + '...',
          action: () => {
            closeSearch();
            switchView('exam');
            jumpToQuestion(idx);
          }
        });
      }
    });

    // Search Cheat Sheets
    cheatSheets.forEach(cs => {
      cs.rows.forEach(row => {
        if (row.some(c => c.toLowerCase().includes(q))) {
          results.push({
            type: 'Cheat Sheet',
            title: `${cs.title}: ${row[0]}`,
            snippet: row[row.length - 1],
            action: () => {
              closeSearch();
              switchView('cheatsheets');
              selectCheatSheet(cs.id);
            }
          });
        }
      });
    });

    if (results.length === 0) {
      elements.searchResults.innerHTML = `<div style="padding: 1.5rem; text-align: center; color: var(--text-muted);">No results found for "${q}".</div>`;
      return;
    }

    elements.searchResults.innerHTML = results.slice(0, 10).map((r, i) => `
      <div class="search-result-item" id="search-item-${i}">
        <span class="search-res-type">${r.type}</span>
        <div class="search-res-title">${r.title}</div>
        <div class="search-res-snippet">${r.snippet}</div>
      </div>
    `).join('');

    results.slice(0, 10).forEach((r, i) => {
      document.getElementById(`search-item-${i}`).addEventListener('click', r.action);
    });
  });
}

function openSearch() {
  elements.searchModal.classList.add('active');
  elements.searchInput.value = '';
  elements.searchInput.focus();
}

function closeSearch() {
  elements.searchModal.classList.remove('active');
}

// Start App on DOM Ready
document.addEventListener('DOMContentLoaded', init);
