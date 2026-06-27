const React = window.React;
const { useState, useEffect } = React;

function QuestionView({
  question,
  questionIndex,
  totalQuestions,
  questions,
  onNext,
  onRecordAnswer,
  progressEnabled,
  isAlreadyCorrect,
  isDifficult,
  onToggleDifficult,
  onQuit,
  sessionAnswers,
  setCurrentQI,
  subjectName,
  moduleName,
  onComplete,
  difficultData
}) {
   const [selectedOptions, setSelectedOptions] = useState([]);
  const [selectedYN, setSelectedYN] = useState({});
  const [openAnswer, setOpenAnswer] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [timeLeft, setTimeLeft] = useState(2700); // 45 minutes in seconds

  useEffect(() => {
    const saved = sessionAnswers[questionIndex];
    if (saved) {
      if (question.type === "yn") {
        setSelectedYN(saved.selectedOptions || {});
        setSelectedOptions([]);
      } else {
        setSelectedOptions(saved.selectedOptions || []);
        setSelectedYN({});
      }
      setOpenAnswer(saved.openAnswer || "");
      setIsSubmitted(true);
      setIsCorrect(saved.isCorrect || false);
    } else {
      setSelectedOptions([]);
      setSelectedYN({});
      setOpenAnswer("");
      setIsSubmitted(false);
      setIsCorrect(false);
    }
  }, [question.id, questionIndex, sessionAnswers]);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          clearInterval(timer);
          alert("Czas minął! Zakończenie testu.");
          onComplete();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [onComplete]);

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Enter" && !e.shiftKey && !isSubmitted && canSubmit) {
        e.preventDefault(); handleSubmit();
      }
      if ((e.key === "ArrowRight" || e.key === "Enter") && isSubmitted) {
        e.preventDefault(); onNext();
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  });

  const handleOptionToggle = (index) => {
    if (isSubmitted) return;
    if (question.type === "single") setSelectedOptions([index]);
    else setSelectedOptions(prev => prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]);
  };

  const handleSubmit = () => {
    if (isSubmitted) return;
    let correct = false;
    if (question.type === "open") {
      const norm = openAnswer.trim().toLowerCase();
      correct = question.correctAnswers.some(a => a.toLowerCase() === norm);
    } else if (question.type === "yn") {
      correct = question.options.every((_, idx) => {
        const correctVal = question.correctAnswers.includes(idx);
        const userVal = selectedYN[idx];
        return userVal === correctVal;
      });
    } else {
      const ss = [...selectedOptions].sort();
      const sc = [...question.correctAnswers].sort();
      correct = ss.length === sc.length && ss.every((v, i) => v === sc[i]);
    }
    setIsCorrect(correct); setIsSubmitted(true);
    onRecordAnswer(question.id, question.type === "yn" ? selectedYN : selectedOptions, openAnswer, correct);
  };

  const handleSkip = () => {
    onRecordAnswer(question.id, question.type === "yn" ? selectedYN : selectedOptions, openAnswer, false);
    onNext();
  };

  const canSubmit = question.type === "open"
    ? openAnswer.trim().length > 0
    : question.type === "yn"
    ? Object.keys(selectedYN).length === question.options.length
    : selectedOptions.length > 0;

  const formatTime = (seconds) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  const getOptionClass = (i) => {
    if (!isSubmitted) return "moodle-option-item" + (selectedOptions.includes(i) ? " selected" : "");
    const sel = selectedOptions.includes(i), ans = question.correctAnswers.includes(i);
    if (sel && ans) return "moodle-option-item correct";
    if (sel && !ans) return "moodle-option-item incorrect";
    if (!sel && ans) return "moodle-option-item missed";
    return "moodle-option-item";
  };

  const getOptionInputType = () => {
    return question.type === "single" ? "radio" : "checkbox";
  };

  const getLetterPrefix = (idx) => {
    return String.fromCharCode(97 + idx) + "."; // a., b., c., etc.
  };

  const getNavBtnClass = (idx) => {
    let cls = "moodle-nav-btn";
    if (idx === questionIndex) cls += " active";
    if (sessionAnswers[idx]) {
      cls += " answered";
      if (sessionAnswers[idx].isCorrect) cls += " correct";
      else cls += " incorrect";
    }
    if (difficultData && questions && questions[idx] && difficultData[questions[idx].id]) cls += " flagged";
    return cls;
  };

  const instructionLabel = question.type === "single"
    ? "Wybierz jedną odpowiedź:"
    : question.type === "multiple"
    ? "Wybierz jedną lub więcej odpowiedzi:"
    : question.type === "yn"
    ? "Dla każdego stwierdzenia wybierz TAK lub NIE:"
    : "Wpisz odpowiedź:";

  return (
    <div className="moodle-quiz-view">
      <div className="moodle-breadcrumbs" style={{ marginBottom: "20px" }}>
        <a href="#" onClick={(e) => { e.preventDefault(); onQuit(); }}>Pulpit</a>
        <span>/</span>
        <span>Moje kursy</span>
        <span>/</span>
        <span>{subjectName}</span>
        <span>/</span>
        <span>{moduleName}</span>
      </div>

      <div className="moodle-layout">
        <div className="moodle-sidebar">
          <div className="moodle-card">
            <div className="moodle-card-title">Nawigacja w teście</div>
            <div className="moodle-nav-grid">
              {Array.from({ length: totalQuestions }).map((_, idx) => (
                <button
                  key={idx}
                  className={getNavBtnClass(idx)}
                  onClick={() => setCurrentQI(idx)}
                >
                  {idx + 1}
                </button>
              ))}
            </div>
            
            <div className={`moodle-timer ${timeLeft < 300 ? "warning" : ""}`} style={{ marginBottom: "12px" }}>
              Pozostały czas: {formatTime(timeLeft)}
            </div>
            
            <a href="#" className="moodle-finish-link" onClick={(e) => { e.preventDefault(); onComplete(); }}>
              Dokończ podejście...
            </a>
          </div>
        </div>

        <div className="moodle-main">
          <div className="moodle-question-row">
            <div className="moodle-q-info">
              <div className="moodle-q-num">Pytanie {questionIndex + 1}</div>
              <div className="moodle-q-status">
                {isSubmitted ? "Odpowiedź zapisana" : "Jeszcze brak odpowiedzi"}
              </div>
              <div className="moodle-q-score">Punkty: 1,00</div>
              <button
                className={`moodle-q-flag-btn ${isDifficult ? "active" : ""}`}
                onClick={onToggleDifficult}
              >
                🚩 {isDifficult ? "Usuń oznaczenie" : "Oznacz pytanie"}
              </button>
            </div>

            <div className="moodle-q-block">
              {isAlreadyCorrect && progressEnabled && (
                <div className="result-indicator correct" style={{ marginBottom: "16px", background: "#d4edda", border: "1px solid #c3e6cb", color: "#155724", padding: "10px", borderRadius: "4px" }}>
                  Już odpowiedziano poprawnie
                </div>
              )}
              
              <div className="moodle-q-text">{question.question}</div>
              <div className="moodle-q-instruction">{instructionLabel}</div>

              {question.type === "yn" ? (
                <div className="moodle-options-list yn-mode">
                  {question.options.map((opt, idx) => {
                    const userVal = selectedYN[idx];
                    const correctVal = question.correctAnswers.includes(idx);
                    const isCorrectYN = isSubmitted ? (userVal === correctVal) : null;
                    let rowClass = "moodle-yn-option-item";
                    if (isSubmitted) {
                      rowClass += isCorrectYN ? " correct" : " incorrect";
                    }
                    return (
                      <div key={idx} className={rowClass}>
                        <div className="moodle-yn-button-group">
                          <button
                            className={`moodle-yn-btn tak ${userVal === true ? "selected" : ""}`}
                            onClick={() => {
                              if (isSubmitted) return;
                              setSelectedYN(prev => ({ ...prev, [idx]: true }));
                            }}
                            disabled={isSubmitted}
                            type="button"
                          >
                            TAK
                          </button>
                          <button
                            className={`moodle-yn-btn nie ${userVal === false ? "selected" : ""}`}
                            onClick={() => {
                              if (isSubmitted) return;
                              setSelectedYN(prev => ({ ...prev, [idx]: false }));
                            }}
                            disabled={isSubmitted}
                            type="button"
                          >
                            NIE
                          </button>
                        </div>
                        <span className="moodle-option-letter">{getLetterPrefix(idx)}</span>
                        <span className="moodle-option-text">{opt}</span>
                        {isSubmitted && (
                          <span className={`yn-row-indicator ${isCorrectYN ? "correct" : "incorrect"}`}>
                            {isCorrectYN ? " ✔" : " ✘"}
                          </span>
                        )}
                      </div>
                    );
                  })}
                </div>
              ) : question.type !== "open" ? (
                <div className="moodle-options-list">
                  {question.options.map((opt, idx) => (
                    <div
                      key={idx}
                      className={getOptionClass(idx)}
                      onClick={() => handleOptionToggle(idx)}
                    >
                      <input
                        type={getOptionInputType()}
                        className="moodle-option-input"
                        checked={selectedOptions.includes(idx)}
                        disabled={isSubmitted}
                        readOnly
                      />
                      <span className="moodle-option-letter">{getLetterPrefix(idx)}</span>
                      <span className="moodle-option-text">{opt}</span>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="open-input-wrapper" style={{ marginBottom: "20px" }}>
                  <textarea
                    className={"open-textarea" + (isSubmitted ? (isCorrect ? " correct" : " incorrect") : "")}
                    value={openAnswer}
                    onChange={(e) => setOpenAnswer(e.target.value)}
                    placeholder="Wpisz swoją odpowiedź tutaj..."
                    disabled={isSubmitted}
                    style={{ width: "100%", minHeight: "100px", padding: "10px", borderRadius: "4px", border: "1px solid #ced4da" }}
                  />
                  {isSubmitted && !isCorrect && (
                    <div className="open-expected-answer animate-slide-down" style={{ marginTop: "10px", background: "#f8d7da", border: "1px solid #f5c6cb", padding: "10px", borderRadius: "4px", color: "#721c24" }}>
                      <div className="open-expected-label" style={{ fontWeight: "bold" }}>Prawidłowa odpowiedź:</div>
                      {question.correctAnswers[0]}
                    </div>
                  )}
                </div>
              )}

              {isSubmitted && (
                <div className={`moodle-feedback ${isCorrect ? "correct" : "incorrect"}`}>
                  <div className="moodle-feedback-title" style={{ fontWeight: "bold", fontSize: "1.05rem" }}>
                    {isCorrect ? "✔ Poprawna odpowiedź!" : "✖ Niepoprawna odpowiedź"}
                  </div>
                  {question.explanation && (
                    <div className="moodle-explanation">
                      <div className="moodle-explanation-title">Wyjaśnienie:</div>
                      <div className="moodle-explanation-text">{question.explanation}</div>
                    </div>
                  )}
                </div>
              )}

              <div className="moodle-actions" style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                <div className="moodle-actions-left" style={{ display: "flex", gap: "8px", flexWrap: "wrap", width: "100%" }}>
                  {!isSubmitted ? (
                    <>
                      <button
                        className="moodle-btn moodle-btn-primary"
                        onClick={handleSubmit}
                        disabled={!canSubmit}
                      >
                        Sprawdź
                      </button>
                      <button
                        className="moodle-btn"
                        onClick={handleSkip}
                      >
                        Pomiń pytanie
                      </button>
                    </>
                  ) : (
                    <button className="moodle-btn moodle-btn-success" onClick={onNext}>
                      {questionIndex + 1 < totalQuestions ? "Następne pytanie →" : "Zakończ ćwiczenie →"}
                    </button>
                  )}
                </div>

                <div className="moodle-actions-right" style={{ display: "flex", justifyContent: "space-between", gap: "8px", flexWrap: "wrap", width: "100%", borderTop: "1px solid #dee2e6", paddingTop: "12px" }}>
                  <button
                    className="moodle-btn"
                    onClick={() => setCurrentQI(p => Math.max(0, p - 1))}
                    disabled={questionIndex === 0}
                  >
                    ← Poprzednia strona
                  </button>
                  <button
                    className="moodle-btn"
                    onClick={() => setCurrentQI(p => Math.min(totalQuestions - 1, p + 1))}
                    disabled={questionIndex === totalQuestions - 1}
                  >
                    Następna strona →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
