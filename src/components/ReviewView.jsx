const React = window.React;
const { useState, useEffect } = React;

function ReviewView({
  questions,
  sessionAnswers,
  onBack,
  difficultData,
  onToggleDifficult,
  subjectName,
  moduleName,
  onQuitToHome,
  onQuitToModules
}) {
  const [currentRI, setCurrentRI] = useState(0);
  
  const ITEMS_PER_PAGE = 40;
  const totalQuestions = questions.length;
  const totalPages = Math.ceil(totalQuestions / ITEMS_PER_PAGE);
  const [navPage, setNavPage] = useState(0);

  useEffect(() => {
    setNavPage(Math.floor(currentRI / ITEMS_PER_PAGE));
  }, [currentRI]);

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        handlePrev();
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        handleNext();
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  });

  const handlePrev = () => {
    if (currentRI > 0) {
      setCurrentRI(p => p - 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleNext = () => {
    if (currentRI + 1 < questions.length) {
      setCurrentRI(p => p + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const question = questions[currentRI];
  const ans = sessionAnswers[currentRI] || { selectedOptions: [], openAnswer: "", isCorrect: false };

  const getOptionClass = (i) => {
    const sel = ans.selectedOptions.includes(i), isCorrectAns = question.correctAnswers.includes(i);
    if (sel && isCorrectAns) return "moodle-option-item correct";
    if (sel && !isCorrectAns) return "moodle-option-item incorrect";
    if (!sel && isCorrectAns) return "moodle-option-item missed";
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
    if (idx === currentRI) cls += " active";
    const itemAns = sessionAnswers[idx];
    if (itemAns) {
      cls += " answered";
      if (itemAns.isCorrect) cls += " correct";
      else cls += " incorrect";
    }
    if (difficultData && difficultData[questions[idx]?.id]) cls += " flagged";
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
        <a href="#" onClick={(e) => { e.preventDefault(); onQuitToHome(); }}>Pulpit</a>
        <span>/</span>
        <a href="#" onClick={(e) => { e.preventDefault(); onQuitToModules(); }}>{subjectName}</a>
        <span>/</span>
        <span>{moduleName}</span>
        <span>/</span>
        <span>Podgląd</span>
      </div>

      <div className="moodle-layout">
        <div className="moodle-sidebar">
          <div className="moodle-card">
            <div className="moodle-card-title">Nawigacja w teście</div>
            <div className="moodle-nav-grid">
              {questions.map((_, idx) => {
                if (idx < navPage * ITEMS_PER_PAGE || idx >= (navPage + 1) * ITEMS_PER_PAGE) return null;
                return (
                  <button
                    key={idx}
                    className={getNavBtnClass(idx)}
                    onClick={() => {
                      setCurrentRI(idx);
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                  >
                    {idx + 1}
                  </button>
                );
              })}
            </div>
            
            {totalPages > 1 && (
              <div style={{ display: "flex", justifyContent: "space-between", marginTop: "8px", marginBottom: "16px" }}>
                <button 
                  className="moodle-btn" 
                  style={{ padding: "4px 12px", fontSize: "0.8rem", minWidth: "40px" }}
                  onClick={() => setNavPage(p => Math.max(0, p - 1))}
                  disabled={navPage === 0}
                >←</button>
                <span style={{ fontSize: "0.8rem", color: "var(--text-secondary)", alignSelf: "center", fontWeight: 600 }}>
                  {navPage + 1} / {totalPages}
                </span>
                <button 
                  className="moodle-btn" 
                  style={{ padding: "4px 12px", fontSize: "0.8rem", minWidth: "40px" }}
                  onClick={() => setNavPage(p => Math.min(totalPages - 1, p + 1))}
                  disabled={navPage === totalPages - 1}
                >→</button>
              </div>
            )}
            
            <a href="#" className="moodle-finish-link" onClick={(e) => { e.preventDefault(); onBack(); }}>
              Koniec podglądu
            </a>
          </div>
        </div>

        <div className="moodle-main">
          <div className="moodle-question-row">
            <div className="moodle-q-info">
              <div className="moodle-q-num">Pytanie {currentRI + 1}</div>
              <div className="moodle-q-status">
                {ans.isCorrect ? "Poprawna" : "Niepoprawna"}
              </div>
              <div className="moodle-q-score">Ocena: {ans.isCorrect ? "1,00 na 1,00" : "0,00 na 1,00"}</div>
              <button
                className={`moodle-q-flag-btn ${difficultData[question.id] ? "active" : ""}`}
                onClick={() => onToggleDifficult(question.id)}
              >
                🚩 {difficultData[question.id] ? "Usuń oznaczenie" : "Oznacz pytanie"}
              </button>
            </div>

            <div className="moodle-q-block">
              <div className="moodle-q-text">{question.question}</div>
              <div className="moodle-q-instruction">{instructionLabel}</div>

              {question.type === "yn" ? (
                <div className="moodle-options-list yn-mode">
                  {question.options.map((opt, idx) => {
                    const savedOptions = ans.selectedOptions || {};
                    const userVal = savedOptions[idx];
                    const correctVal = question.correctAnswers.includes(idx);
                    const isCorrectYN = userVal === correctVal;
                    let rowClass = "moodle-yn-option-item";
                    rowClass += isCorrectYN ? " correct" : " incorrect";
                    return (
                      <div key={idx} className={rowClass}>
                        <span className="moodle-option-letter">{getLetterPrefix(idx)}</span>
                        <span className="moodle-option-text">{opt}</span>
                        <div className="moodle-yn-button-group">
                          <button
                            className={`moodle-yn-btn tak ${userVal === true ? "selected" : ""}`}
                            disabled
                            type="button"
                          >
                            TAK
                          </button>
                          <button
                            className={`moodle-yn-btn nie ${userVal === false ? "selected" : ""}`}
                            disabled
                            type="button"
                          >
                            NIE
                          </button>
                        </div>
                        <span className={`yn-row-indicator ${isCorrectYN ? "correct" : "incorrect"}`}>
                          {isCorrectYN ? " ✔" : " ✘"}
                        </span>
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
                      style={{ cursor: "default" }}
                    >
                      <input
                        type={getOptionInputType()}
                        className="moodle-option-input"
                        checked={Array.isArray(ans.selectedOptions) && ans.selectedOptions.includes(idx)}
                        disabled
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
                    className={"open-textarea " + (ans.isCorrect ? "correct" : "incorrect")}
                    value={ans.openAnswer}
                    placeholder="Brak odpowiedzi"
                    disabled
                    style={{ width: "100%", minHeight: "100px", padding: "10px", borderRadius: "4px", border: "1px solid #ced4da", cursor: "default" }}
                  />
                  {!ans.isCorrect && (
                    <div className="open-expected-answer" style={{ marginTop: "10px", background: "#f8d7da", border: "1px solid #f5c6cb", padding: "10px", borderRadius: "4px", color: "#721c24" }}>
                      <div className="open-expected-label" style={{ fontWeight: "bold" }}>Prawidłowa odpowiedź:</div>
                      {question.correctAnswers[0]}
                    </div>
                  )}
                </div>
              )}

              <div className={`moodle-feedback ${ans.isCorrect ? "correct" : "incorrect"}`}>
                <div className="moodle-feedback-title" style={{ fontWeight: "bold", fontSize: "1.05rem" }}>
                  {ans.isCorrect ? "✔ Poprawna odpowiedź!" : "✖ Niepoprawna odpowiedź"}
                </div>
                {question.explanation && (
                  <div className="moodle-explanation">
                    <div className="moodle-explanation-title">Wyjaśnienie:</div>
                    <div className="moodle-explanation-text">{question.explanation}</div>
                  </div>
                )}
              </div>

              <div className="moodle-actions" style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                <div className="moodle-actions-right" style={{ display: "flex", justifyContent: "space-between", gap: "8px", flexWrap: "wrap", width: "100%" }}>
                  <button
                    className="moodle-btn"
                    onClick={handlePrev}
                    disabled={currentRI === 0}
                  >
                    ← Poprzednia strona
                  </button>
                  {currentRI + 1 < questions.length ? (
                    <button
                      className="moodle-btn"
                      onClick={handleNext}
                    >
                      Następna strona →
                    </button>
                  ) : (
                    <button className="moodle-btn moodle-btn-success" onClick={onBack}>
                      Koniec podglądu
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
