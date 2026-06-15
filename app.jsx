const { useState, useEffect, useCallback, useMemo } = React;

function shuffleArray(arr) {
  const shuffled = [...arr];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

function loadProgress() {
  try {
    const raw = localStorage.getItem("studypro_progress");
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

function saveProgress(data) {
  try {
    localStorage.setItem("studypro_progress", JSON.stringify(data));
  } catch {}
}

function CheckIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="2.5 7 5.5 10 11.5 4" />
    </svg>
  );
}

function CrossIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
      <line x1="2" y1="2" x2="10" y2="10" />
      <line x1="10" y1="2" x2="2" y2="10" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="3" y1="8" x2="13" y2="8" />
      <polyline points="9 4 13 8 9 12" />
    </svg>
  );
}

function BackIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="9 2 4 7 9 12" />
    </svg>
  );
}

function Toggle({ checked, onChange, label }) {
  return (
    <div className="toggle-wrapper" onClick={() => onChange(!checked)}>
      <div className={`toggle-track ${checked ? "active" : ""}`}>
        <div className="toggle-knob" />
      </div>
      <span className="toggle-label-text">{label}</span>
    </div>
  );
}

function ProgressBar({ current, total }) {
  const pct = total > 0 ? Math.round((current / total) * 100) : 0;
  return (
    <div className="progress-container">
      <div className="progress-bar-outer">
        <div className="progress-bar-inner" style={{ width: `${pct}%` }} />
      </div>
      <div className="progress-text">
        {current} / {total} ({pct}%)
      </div>
    </div>
  );
}

function SubjectCard({ subject, progressEnabled, progressData, onClick, animDelay }) {
  const totalQuestions = subject.questions.length;
  const answeredCorrectly = progressEnabled
    ? subject.questions.filter((q) => progressData[q.id]).length
    : 0;

  return (
    <div
      className="subject-card animate-fade-in-up"
      style={{ animationDelay: `${animDelay}ms` }}
      onClick={onClick}
      id={`subject-${subject.id}`}
    >
      <span className="subject-icon">{subject.icon}</span>
      <h2 className="subject-name">{subject.name}</h2>
      <p className="subject-description">{subject.description}</p>
      {progressEnabled && (
        <ProgressBar current={answeredCorrectly} total={totalQuestions} />
      )}
      <div className="subject-meta">
        <span className="subject-count">{totalQuestions} pytań</span>
        <div className="subject-arrow">
          <ArrowIcon />
        </div>
      </div>
    </div>
  );
}

function QuizSetup({ subject, onStart, onBack }) {
  const [mode, setMode] = useState("sequential");

  return (
    <div>
      <button className="nav-back" onClick={onBack} id="btn-back-setup">
        <BackIcon /> Powrót
      </button>
      <div className="setup-panel">
        <div style={{ fontSize: "2.5rem", marginBottom: "16px" }}>
          {subject.icon}
        </div>
        <h2 className="setup-title">{subject.name}</h2>
        <p className="setup-subtitle">{subject.description}</p>

        <label className="settings-label" style={{ marginBottom: "10px", display: "block" }}>
          Tryb ćwiczenia
        </label>
        <div className="mode-selector">
          <div
            className={`mode-option ${mode === "sequential" ? "selected" : ""}`}
            onClick={() => setMode("sequential")}
            id="mode-sequential"
          >
            <span className="mode-icon">📋</span>
            <div className="mode-name">Po kolei</div>
            <div className="mode-desc">Pytania w ustalonej kolejności</div>
          </div>
          <div
            className={`mode-option ${mode === "random" ? "selected" : ""}`}
            onClick={() => setMode("random")}
            id="mode-random"
          >
            <span className="mode-icon">🎲</span>
            <div className="mode-name">Losowo</div>
            <div className="mode-desc">Pytania w losowej kolejności</div>
          </div>
        </div>

        <button
          className="btn btn-primary"
          onClick={() => onStart(mode)}
          id="btn-start-quiz"
        >
          Rozpocznij ćwiczenie
          <ArrowIcon />
        </button>
      </div>
    </div>
  );
}

function QuestionView({
  question,
  questionIndex,
  totalQuestions,
  onNext,
  onSaveCorrect,
  progressEnabled,
  isAlreadyCorrect,
}) {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [openAnswer, setOpenAnswer] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  useEffect(() => {
    setSelectedOptions([]);
    setOpenAnswer("");
    setIsSubmitted(false);
    setIsCorrect(false);
  }, [question.id]);

  const handleOptionToggle = (index) => {
    if (isSubmitted) return;

    if (question.type === "single") {
      setSelectedOptions([index]);
    } else {
      setSelectedOptions((prev) =>
        prev.includes(index)
          ? prev.filter((i) => i !== index)
          : [...prev, index]
      );
    }
  };

  const handleSubmit = () => {
    if (isSubmitted) return;

    let correct = false;

    if (question.type === "open") {
      const userNormalized = openAnswer.trim().toLowerCase();
      correct = question.correctAnswers.some(
        (ans) => ans.toLowerCase() === userNormalized
      );
    } else {
      const sortedSelected = [...selectedOptions].sort();
      const sortedCorrect = [...question.correctAnswers].sort();
      correct =
        sortedSelected.length === sortedCorrect.length &&
        sortedSelected.every((val, idx) => val === sortedCorrect[idx]);
    }

    setIsCorrect(correct);
    setIsSubmitted(true);

    if (correct && progressEnabled) {
      onSaveCorrect(question.id);
    }
  };

  const canSubmit =
    question.type === "open"
      ? openAnswer.trim().length > 0
      : selectedOptions.length > 0;

  const getTypeBadge = () => {
    switch (question.type) {
      case "single":
        return { label: "Wybierz jedną odpowiedź", className: "type-single" };
      case "multiple":
        return { label: "Wybierz kilka odpowiedzi", className: "type-multiple" };
      case "open":
        return { label: "Wpisz odpowiedź", className: "type-open" };
      default:
        return { label: "", className: "" };
    }
  };

  const badge = getTypeBadge();
  const progressPct = ((questionIndex + 1) / totalQuestions) * 100;

  const getOptionClass = (index) => {
    if (!isSubmitted) {
      const selected = selectedOptions.includes(index);
      return selected ? "option-item selected" : "option-item";
    }

    const isSelected = selectedOptions.includes(index);
    const isAnswer = question.correctAnswers.includes(index);

    if (isSelected && isAnswer) return "option-item locked correct";
    if (isSelected && !isAnswer) return "option-item locked incorrect";
    if (!isSelected && isAnswer) return "option-item locked missed-correct";
    return "option-item locked";
  };

  const getIndicatorContent = (index) => {
    if (!isSubmitted) {
      return selectedOptions.includes(index) ? <CheckIcon /> : "";
    }
    const isSelected = selectedOptions.includes(index);
    const isAnswer = question.correctAnswers.includes(index);
    if (isSelected && isAnswer) return <CheckIcon />;
    if (isSelected && !isAnswer) return <CrossIcon />;
    if (!isSelected && isAnswer) return <CheckIcon />;
    return "";
  };

  return (
    <div>
      <button className="nav-back" onClick={onNext} id="btn-back-quiz" style={{ visibility: "hidden", height: 0, margin: 0, padding: 0 }}>
        <BackIcon />
      </button>

      <div className="quiz-header">
        <span className="quiz-progress-text">
          Pytanie <span>{questionIndex + 1}</span> z <span>{totalQuestions}</span>
        </span>
        <span className={`quiz-type-badge ${badge.className}`}>{badge.label}</span>
      </div>

      <div className="quiz-progress-bar">
        <div className="quiz-progress-fill" style={{ width: `${progressPct}%` }} />
      </div>

      <div className="quiz-card" key={question.id}>
        {isAlreadyCorrect && progressEnabled && (
          <div className="result-indicator correct" style={{ marginBottom: "16px" }}>
            <div className="result-icon correct"><CheckIcon /></div>
            Już odpowiedziano poprawnie
          </div>
        )}

        <p className="question-text">{question.question}</p>

        {question.type !== "open" ? (
          <div className="options-list">
            {question.options.map((option, idx) => (
              <div
                key={idx}
                className={getOptionClass(idx)}
                onClick={() => handleOptionToggle(idx)}
                id={`option-${idx}`}
              >
                <div
                  className={`option-indicator ${question.type === "multiple" ? "checkbox" : ""}`}
                >
                  {getIndicatorContent(idx)}
                </div>
                <span className="option-text">{option}</span>
              </div>
            ))}
          </div>
        ) : (
          <div className="open-input-wrapper">
            <textarea
              className={`open-textarea ${
                isSubmitted ? (isCorrect ? "correct" : "incorrect") : ""
              }`}
              value={openAnswer}
              onChange={(e) => setOpenAnswer(e.target.value)}
              placeholder="Wpisz swoją odpowiedź tutaj..."
              disabled={isSubmitted}
              id="open-answer-input"
            />
            {isSubmitted && !isCorrect && (
              <div className="open-expected-answer animate-slide-down">
                <div className="open-expected-label">Prawidłowa odpowiedź</div>
                {question.correctAnswers[0]}
              </div>
            )}
          </div>
        )}

        {isSubmitted && (
          <div className="animate-slide-down">
            <div className={`result-indicator ${isCorrect ? "correct" : "incorrect"}`}>
              <div className={`result-icon ${isCorrect ? "correct" : "incorrect"}`}>
                {isCorrect ? <CheckIcon /> : <CrossIcon />}
              </div>
              {isCorrect ? "Poprawna odpowiedź!" : "Niepoprawna odpowiedź"}
            </div>
            <div className="explanation-box">
              <div className="explanation-title">Wyjaśnienie</div>
              <p className="explanation-text">{question.explanation}</p>
            </div>
          </div>
        )}

        <div className="quiz-actions">
          {!isSubmitted ? (
            <button
              className="btn btn-primary"
              onClick={handleSubmit}
              disabled={!canSubmit}
              id="btn-submit"
            >
              Sprawdź
            </button>
          ) : (
            <button className="btn btn-success" onClick={onNext} id="btn-next">
              {questionIndex + 1 < totalQuestions
                ? "Następne pytanie →"
                : "Zakończ ćwiczenie →"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

function CompletionScreen({ correctCount, totalCount, onRestart, onHome }) {
  const pct = totalCount > 0 ? Math.round((correctCount / totalCount) * 100) : 0;
  const incorrectCount = totalCount - correctCount;

  let emoji, message;
  if (pct === 100) {
    emoji = "🏆";
    message = "Perfekcyjny wynik! Jesteś gotowy na egzamin!";
  } else if (pct >= 80) {
    emoji = "🎉";
    message = "Świetna robota! Jeszcze trochę i będziesz mistrzem!";
  } else if (pct >= 50) {
    emoji = "💪";
    message = "Dobry start! Kontynuuj naukę, aby poprawić wynik.";
  } else {
    emoji = "📚";
    message = "Nie poddawaj się! Powtórz materiał i spróbuj ponownie.";
  }

  return (
    <div className="completion-screen">
      <div className="completion-emoji">{emoji}</div>
      <h2 className="completion-title">Ćwiczenie zakończone!</h2>
      <p className="completion-subtitle">{message}</p>

      <div className="completion-stats">
        <div className="stat-card animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
          <div className="stat-value green">{correctCount}</div>
          <div className="stat-label">Poprawne</div>
        </div>
        <div className="stat-card animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          <div className="stat-value red">{incorrectCount}</div>
          <div className="stat-label">Niepoprawne</div>
        </div>
        <div className="stat-card animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
          <div className="stat-value purple">{pct}%</div>
          <div className="stat-label">Wynik</div>
        </div>
      </div>

      <div className="completion-actions">
        <button className="btn btn-primary" onClick={onRestart} id="btn-restart">
          Rozpocznij ponownie
        </button>
        <button className="btn btn-secondary" onClick={onHome} id="btn-home">
          <BackIcon /> Powrót do listy
        </button>
      </div>
    </div>
  );
}

function App() {
  const [view, setView] = useState("home");
  const [selectedSubject, setSelectedSubject] = useState(null);
  const [quizMode, setQuizMode] = useState("sequential");
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [questions, setQuestions] = useState([]);
  const [progressEnabled, setProgressEnabled] = useState(true);
  const [progressData, setProgressData] = useState(loadProgress());
  const [sessionCorrect, setSessionCorrect] = useState(0);

  const subjects = window.QUESTION_DATA.subjects;

  useEffect(() => {
    if (progressEnabled) {
      saveProgress(progressData);
    }
  }, [progressData, progressEnabled]);

  const handleSelectSubject = (subject) => {
    setSelectedSubject(subject);
    setView("setup");
  };

  const handleStartQuiz = (mode) => {
    setQuizMode(mode);
    const orderedQuestions =
      mode === "random"
        ? shuffleArray(selectedSubject.questions)
        : [...selectedSubject.questions];
    setQuestions(orderedQuestions);
    setCurrentQuestionIndex(0);
    setSessionCorrect(0);
    setView("quiz");
  };

  const handleSaveCorrect = (questionId) => {
    setProgressData((prev) => ({ ...prev, [questionId]: true }));
    setSessionCorrect((prev) => prev + 1);
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex + 1 < questions.length) {
      setCurrentQuestionIndex((prev) => prev + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      setView("complete");
    }
  };

  const handleRestart = () => {
    const orderedQuestions =
      quizMode === "random"
        ? shuffleArray(selectedSubject.questions)
        : [...selectedSubject.questions];
    setQuestions(orderedQuestions);
    setCurrentQuestionIndex(0);
    setSessionCorrect(0);
    setView("quiz");
  };

  const handleGoHome = () => {
    setSelectedSubject(null);
    setView("home");
  };

  const handleToggleProgress = (enabled) => {
    setProgressEnabled(enabled);
    if (!enabled) {
      setProgressData({});
      localStorage.removeItem("studypro_progress");
    }
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <div className="app-logo">
          <div className="logo-icon">📖</div>
          <span className="logo-text">Quizezee</span>
        </div>
        <p className="app-subtitle">
          Przygotuj się do egzaminów z interaktywnymi zestawami pytań
        </p>
      </header>

      {view === "home" && (
        <div className="animate-fade-in">
          <div className="settings-bar">
            <div className="settings-left">
              <Toggle
                checked={progressEnabled}
                onChange={handleToggleProgress}
                label="Zapisuj postęp"
              />
            </div>
          </div>

          <div className="subjects-grid">
            {subjects.map((subject, idx) => (
              <SubjectCard
                key={subject.id}
                subject={subject}
                progressEnabled={progressEnabled}
                progressData={progressData}
                onClick={() => handleSelectSubject(subject)}
                animDelay={idx * 80}
              />
            ))}
          </div>

          {subjects.length === 0 && (
            <div className="empty-state">
              <div className="empty-state-icon">📭</div>
              <p className="empty-state-text">
                Brak dostępnych zestawów pytań. Dodaj pliki JSON, aby rozpocząć naukę.
              </p>
            </div>
          )}
        </div>
      )}

      {view === "setup" && selectedSubject && (
        <QuizSetup
          subject={selectedSubject}
          onStart={handleStartQuiz}
          onBack={handleGoHome}
        />
      )}

      {view === "quiz" && questions.length > 0 && (
        <QuestionView
          question={questions[currentQuestionIndex]}
          questionIndex={currentQuestionIndex}
          totalQuestions={questions.length}
          onNext={handleNextQuestion}
          onSaveCorrect={handleSaveCorrect}
          progressEnabled={progressEnabled}
          isAlreadyCorrect={progressData[questions[currentQuestionIndex]?.id]}
        />
      )}

      {view === "complete" && (
        <CompletionScreen
          correctCount={sessionCorrect}
          totalCount={questions.length}
          onRestart={handleRestart}
          onHome={handleGoHome}
        />
      )}
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(React.createElement(App));
