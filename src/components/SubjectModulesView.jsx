const React = window.React;
const { useState, useEffect } = React;

function SubjectModulesView({ 
  subject, 
  progressEnabled, 
  progressData, 
  incorrectData = {}, 
  onSelectModule, 
  onStartSubjectExam, 
  onStartIncorrectExam, 
  onStartModuleIncorrectQuiz, 
  onBack 
}) {
  const subjectQs = getSubjectQuestions(subject);
  const totalQuestions = subjectQs.length;
  const incorrectQuestions = subjectQs.filter(q => incorrectData[q.id]);
  const totalIncorrect = incorrectQuestions.length;
  const [examMode, setExamMode] = useState("random");
  const [activeTab, setActiveTab] = useState("modules");

  // Reset active tab to modules if there are no incorrect questions
  useEffect(() => {
    if (totalIncorrect === 0) {
      setActiveTab("modules");
    }
  }, [totalIncorrect]);

  return (
    <div className="animate-fade-in">
      <button className="nav-back" onClick={onBack}><BackIcon/> Powrót</button>
      
      {/* Clean header with title and description */}
      <div style={{ marginBottom: "28px" }}>
        <h2 style={{ fontSize: "2rem", fontWeight: 800, marginBottom: "6px", display: "flex", alignItems: "center", gap: "12px" }}>
          <span>{subject.icon}</span>
          <span>{subject.name}</span>
        </h2>
        <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem", lineHeight: "1.5" }}>{subject.description}</p>
      </div>

      {/* Tabs selector (only visible if there are incorrect questions) */}
      {totalIncorrect > 0 && (
        <div className="tab-container" style={{ display: "flex", gap: "12px", borderBottom: "1px solid var(--border-glass)", paddingBottom: "12px", marginBottom: "24px" }}>
          <button 
            className={`tab-btn ${activeTab === "modules" ? "active" : ""}`} 
            onClick={() => setActiveTab("modules")}
            style={{
              background: activeTab === "modules" ? "var(--accent-primary-glow)" : "transparent",
              color: activeTab === "modules" ? "var(--text-primary)" : "var(--text-secondary)",
              border: "none",
              padding: "8px 16px",
              borderRadius: "var(--radius-md)",
              fontWeight: 600,
              cursor: "pointer",
              transition: "all var(--transition-fast)"
            }}
          >
            📚 Moduły nauki
          </button>
          <button 
            className={`tab-btn ${activeTab === "incorrect" ? "active" : ""}`} 
            onClick={() => setActiveTab("incorrect")}
            style={{
              background: activeTab === "incorrect" ? "var(--error-bg)" : "transparent",
              color: activeTab === "incorrect" ? "var(--error)" : "var(--text-secondary)",
              border: "none",
              padding: "8px 16px",
              borderRadius: "var(--radius-md)",
              fontWeight: 600,
              cursor: "pointer",
              transition: "all var(--transition-fast)"
            }}
          >
            ❌ Błędne pytania ({totalIncorrect})
          </button>
        </div>
      )}

      {/* Content depending on active tab */}
      {activeTab === "modules" ? (
        <div className="subject-column">
          <div>
            <div className="modules-grid" style={{ marginBottom: 0 }}>
              {(subject.modules || []).map((mod) => {
                const modQs = mod.questions;
                const modTotal = modQs.length;
                const modCorrect = progressEnabled ? modQs.filter(q => progressData[q.id]).length : 0;
                const isEmpty = modTotal === 0;
                
                return (
                  <div 
                    key={mod.id} 
                    className={"module-card animate-fade-in-up" + (isEmpty ? " empty-card" : "")}
                    onClick={isEmpty ? undefined : () => onSelectModule(mod)}
                  >
                    <div>
                      <h4 className="module-name">{mod.name}</h4>
                      {progressEnabled && !isEmpty && <ProgressBar current={modCorrect} total={modTotal}/>}
                    </div>
                    <div className="module-meta">
                      <span className="module-qcount">{modTotal} pytań</span>
                      {!isEmpty && (
                        <span className="module-start-btn">
                          Ćwicz <ArrowIcon/>
                        </span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {totalQuestions > 0 && (
            <div className="exam-panel" style={{ marginTop: "12px", padding: "20px", borderLeft: "4px solid var(--success)" }}>
              <h3 className="exam-title" style={{ fontSize: "1.15rem" }}>🏆 Egzamin Końcowy Przedmiotu</h3>
              <p className="exam-desc" style={{ fontSize: "0.85rem", marginBottom: "16px" }}>Generuje test ze wszystkich pytań we wszystkich modułach przedmiotu.</p>
              
              <div style={{ display: "flex", gap: "16px", alignItems: "center", flexWrap: "wrap" }}>
                <div style={{ display: "flex", gap: "6px" }}>
                  <button 
                    className={`btn btn-sm ${examMode === "sequential" ? "btn-primary" : "btn-secondary"}`}
                    onClick={() => setExamMode("sequential")}
                    style={{ padding: "8px 16px", fontSize: "0.8rem" }}
                  >
                    Po kolei
                  </button>
                  <button 
                    className={`btn btn-sm ${examMode === "random" ? "btn-primary" : "btn-secondary"}`}
                    onClick={() => setExamMode("random")}
                    style={{ padding: "8px 16px", fontSize: "0.8rem" }}
                  >
                    Losowo
                  </button>
                </div>
                <button className="btn btn-success btn-sm" onClick={() => onStartSubjectExam(examMode)} style={{ width: "auto", padding: "8px 20px" }}>
                  Uruchom Egzamin <ArrowIcon/>
                </button>
              </div>
            </div>
          )}
        </div>
      ) : (
        <div className="subject-column animate-fade-in">
          <button 
            className="btn btn-danger" 
            style={{ 
              color: "#fff",
              background: "linear-gradient(135deg,#ff4d6a,#ff1a40)", 
              boxShadow: "0 4px 15px rgba(255,77,106,0.2)",
              width: "100%",
              padding: "14px 28px",
              border: "none"
            }} 
            onClick={onStartIncorrectExam}
          >
            Test Wszystkich Błędów ({totalIncorrect}) <ArrowIcon/>
          </button>
          
          <h4 style={{ fontSize: "1rem", fontWeight: 700, color: "var(--text-secondary)", marginTop: "12px", marginBottom: "4px" }}>
            Błędy według modułów:
          </h4>
          
          <div className="modules-grid">
            {(subject.modules || []).map(mod => {
              const modIncorrect = mod.questions.filter(q => incorrectData[q.id]).length;
              if (modIncorrect === 0) return null;
              return (
                <div key={mod.id} className="module-card animate-fade-in-up" style={{ borderLeft: "4px solid var(--error)" }}>
                  <div>
                    <h4 className="module-name">{mod.name}</h4>
                    <span style={{ fontSize: "0.825rem", color: "var(--error)", fontWeight: 600 }}>
                      Liczba błędów: {modIncorrect}
                    </span>
                  </div>
                  <div className="module-meta">
                    <button 
                      className="btn btn-danger btn-sm" 
                      style={{ 
                        color: "#fff",
                        background: "linear-gradient(135deg,#ff4d6a,#ff1a40)", 
                        border: "none",
                        padding: "8px 16px", 
                        fontSize: "0.8rem",
                        width: "auto"
                      }} 
                      onClick={() => onStartModuleIncorrectQuiz(mod)}
                    >
                      Ćwicz błędy (❌)
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
