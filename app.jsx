// Quizee React Application Logic
const { useState, useEffect, useCallback, useMemo } = React;

function shuffleArray(arr) {
  const s = [...arr];
  for (let i = s.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [s[i], s[j]] = [s[j], s[i]];
  }
  return s;
}

function getSubjectQuestions(subject) {
  if (!subject.modules) return [];
  return subject.modules.reduce((acc, m) => [...acc, ...m.questions], []);
}

function getAllQuestions(subjectsList) {
  return subjectsList.reduce((acc, s) => [...acc, ...getSubjectQuestions(s)], []);
}

function loadFromStorage(key, fallback) {
  try {
    let r = localStorage.getItem(key);
    if (!r) {
      const oldKey = key.replace("quizee_", "studypro_");
      r = localStorage.getItem(oldKey);
    }
    return r ? JSON.parse(r) : fallback;
  } catch (e) {
    return fallback;
  }
}

function saveToStorage(key, data) {
  try { localStorage.setItem(key, JSON.stringify(data)); } catch (e) {}
}

function CheckIcon() {
  return (<svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="2.5 7 5.5 10 11.5 4"/></svg>);
}
function CrossIcon() {
  return (<svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><line x1="2" y1="2" x2="10" y2="10"/><line x1="10" y1="2" x2="2" y2="10"/></svg>);
}
function ArrowIcon() {
  return (<svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="8" x2="13" y2="8"/><polyline points="9 4 13 8 9 12"/></svg>);
}
function BackIcon() {
  return (<svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 2 4 7 9 12"/></svg>);
}
function GearIcon() {
  return (<svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="8" cy="8" r="2.5"/><path d="M13.3 9.7a1.2 1.2 0 00.24 1.32l.04.04a1.44 1.44 0 11-2.04 2.04l-.04-.04a1.2 1.2 0 00-1.32-.24 1.2 1.2 0 00-.72 1.1v.12a1.44 1.44 0 01-2.88 0v-.06a1.2 1.2 0 00-.78-1.1 1.2 1.2 0 00-1.32.24l-.04.04a1.44 1.44 0 11-2.04-2.04l.04-.04a1.2 1.2 0 00.24-1.32 1.2 1.2 0 00-1.1-.72H1.44a1.44 1.44 0 010-2.88h.06a1.2 1.2 0 001.1-.78 1.2 1.2 0 00-.24-1.32l-.04-.04a1.44 1.44 0 112.04-2.04l.04.04a1.2 1.2 0 001.32.24h.06a1.2 1.2 0 00.72-1.1V1.44a1.44 1.44 0 012.88 0v.06a1.2 1.2 0 00.72 1.1 1.2 1.2 0 001.32-.24l.04-.04a1.44 1.44 0 112.04 2.04l-.04.04a1.2 1.2 0 00-.24 1.32v.06a1.2 1.2 0 001.1.72h.12a1.44 1.44 0 010 2.88h-.06a1.2 1.2 0 00-1.1.72z"/></svg>);
}
function PlusIcon() {
  return (<svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="7" y1="2" x2="7" y2="12"/><line x1="2" y1="7" x2="12" y2="7"/></svg>);
}
function TrashIcon() {
  return (<svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="2 3.5 12 3.5"/><path d="M4.5 3.5V2.5a1 1 0 011-1h3a1 1 0 011 1v1"/><path d="M11 3.5v8a1 1 0 01-1 1H4a1 1 0 01-1-1v-8"/></svg>);
}
function DownloadIcon() {
  return (<svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M7 1.5v8"/><polyline points="3.5 6 7 9.5 10.5 6"/><path d="M1.5 11.5h11"/></svg>);
}

function Toggle({ checked, onChange, label }) {
  return (
    <div className="toggle-wrapper" onClick={() => onChange(!checked)}>
      <div className={"toggle-track" + (checked ? " active" : "")}><div className="toggle-knob"/></div>
      <span className="toggle-label-text">{label}</span>
    </div>
  );
}

function ProgressBar({ current, total }) {
  const pct = total > 0 ? Math.round((current / total) * 100) : 0;
  return (
    <div className="progress-container">
      <div className="progress-bar-outer"><div className="progress-bar-inner" style={{ width: pct + "%" }}/></div>
      <div className="progress-text">{current} / {total} ({pct}%)</div>
    </div>
  );
}

function Toast({ message, type, onDone }) {
  const [hiding, setHiding] = useState(false);
  useEffect(() => {
    const t1 = setTimeout(() => setHiding(true), 2500);
    const t2 = setTimeout(onDone, 2800);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);
  return <div className={"toast " + type + (hiding ? " hide" : "")}>{message}</div>;
}

function StatsStrip({ subjects, progressData, progressEnabled }) {
  const allQs = getAllQuestions(subjects);
  const totalQuestions = allQs.length;
  const totalCorrect = progressEnabled ? allQs.filter(q => progressData[q.id]).length : 0;
  const pct = totalQuestions > 0 ? Math.round((totalCorrect / totalQuestions) * 100) : 0;

  return (
    <div className="stats-strip">
      <div className="stats-strip-card">
        <div className="stats-strip-value purple">{subjects.length}</div>
        <div className="stats-strip-label">Przedmioty</div>
      </div>
      <div className="stats-strip-card">
        <div className="stats-strip-value cyan">{totalQuestions}</div>
        <div className="stats-strip-label">Pytania</div>
      </div>
      <div className="stats-strip-card">
        <div className="stats-strip-value green">{progressEnabled ? totalCorrect : "—"}</div>
        <div className="stats-strip-label">Opanowane</div>
      </div>
      <div className="stats-strip-card">
        <div className="stats-strip-value orange">{progressEnabled ? pct + "%" : "—"}</div>
        <div className="stats-strip-label">Postęp</div>
      </div>
    </div>
  );
}

function ImportModal({ subjectId, moduleId, subjectName, onImport, onClose }) {
  const [jsonText, setJsonText] = useState("");
  const [error, setError] = useState("");

  const handleImport = () => {
    setError("");
    try {
      const parsed = JSON.parse(jsonText);
      if (!Array.isArray(parsed)) {
        setError("Oczekiwano tablicy w formacie JSON.");
        return;
      }
      if (parsed.length === 0) {
        setError("Tablica jest pusta.");
        return;
      }
      
      const isModular = parsed[0].questions !== undefined;
      
      if (isModular) {
        for (let i = 0; i < parsed.length; i++) {
          const mod = parsed[i];
          if (!mod.id || !mod.name || !Array.isArray(mod.questions)) {
            setError("Moduł #" + (i+1) + " — brak wymaganych pól (id, name, questions) lub 'questions' nie jest tablicą.");
            return;
          }
          for (let j = 0; j < mod.questions.length; j++) {
            const q = mod.questions[j];
            if (!q.id || !q.type || !q.question || !q.correctAnswers) {
              setError(`Moduł "${mod.name}", pytanie #${j+1} — brak pól (id, type, question, correctAnswers).`);
              return;
            }
            if (!["single","multiple","open"].includes(q.type)) {
              setError(`Moduł "${mod.name}", pytanie #${j+1} — nieprawidłowy typ: "${q.type}".`);
              return;
            }
          }
        }
      } else {
        for (let i = 0; i < parsed.length; i++) {
          const q = parsed[i];
          if (!q.id || !q.type || !q.question || !q.correctAnswers) {
            setError("Pytanie #" + (i+1) + " — brak wymaganych pól (id, type, question, correctAnswers).");
            return;
          }
          if (!["single","multiple","open"].includes(q.type)) {
            setError("Pytanie #" + (i+1) + " — nieprawidłowy typ: \"" + q.type + "\".");
            return;
          }
        }
      }
      onImport(subjectId, moduleId, parsed);
    } catch (e) { setError("Błąd parsowania JSON: " + e.message); }
  };

  return (
    <div className="modal-overlay" onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}>
      <div className="modal-content">
        <h3 className="modal-title">Importuj pytania — {subjectName}</h3>
        <p className="modal-subtitle">Wklej poniżej zestaw w formacie JSON (płaska lista pytań lub tablica modułów).</p>
        <textarea className="json-textarea" value={jsonText} onChange={(e) => setJsonText(e.target.value)}
          placeholder={'[\n  {\n    "id": "q-001",\n    "type": "single",\n    "question": "Treść pytania?",\n    "options": ["A", "B", "C", "D"],\n    "correctAnswers": [0],\n    "explanation": "Wyjaśnienie..."\n  }\n]'}
        />
        {error && (
          <div style={{ marginTop:"10px", padding:"10px 14px", background:"var(--error-bg)", border:"1px solid var(--error-border)", borderRadius:"var(--radius-sm)", color:"var(--error)", fontSize:"0.825rem" }}>
            {error}
          </div>
        )}
        <div className="import-format-hint">
          Wymagane pola dla pytania: <code>id</code>, <code>type</code> (<code>single</code>/<code>multiple</code>/<code>open</code>), <code>question</code>, <code>correctAnswers</code>, <code>explanation</code>.<br/>
          Dla <code>single</code>/<code>multiple</code> dodaj <code>options</code> (tablica).
        </div>
        <div className="modal-actions">
          <button className="btn btn-secondary" onClick={onClose}>Anuluj</button>
          <button className="btn btn-primary" onClick={handleImport} disabled={!jsonText.trim()}>Importuj</button>
        </div>
      </div>
    </div>
  );
}

function ManageView({ subjects, onBack, onImport, onClearQuestions, onResetAll, onExport, onAddModule, onClearModuleQuestions, onExportModule }) {
  const total = subjects.reduce((s, sub) => s + getSubjectQuestions(sub).length, 0);
  return (
    <div>
      <button className="nav-back" onClick={onBack}><BackIcon/> Powrót</button>
      <div className="manage-header">
        <h2 className="manage-title">⚙️ Zarządzaj bazami pytań</h2>
        <span style={{ fontSize:"0.8rem", color:"var(--text-muted)" }}>Łącznie: {total} pytań</span>
      </div>
      {subjects.map((subject) => {
        const subjectQs = getSubjectQuestions(subject);
        return (
          <div className="manage-card animate-fade-in-up" key={subject.id} style={{ marginBottom: "24px" }}>
            <div className="manage-card-header" style={{ borderBottom: "1px solid var(--border-glass)", paddingBottom: "14px", marginBottom: "14px" }}>
              <div className="manage-card-left">
                <span className="manage-card-icon">{subject.icon}</span>
                <div>
                  <div className="manage-card-name">{subject.name}</div>
                  <div className="manage-card-count">{subjectQs.length} pytań, {subject.modules ? subject.modules.length : 0} modułów</div>
                </div>
              </div>
              <div className="manage-card-actions">
                <button className="btn btn-sm btn-secondary" onClick={() => onAddModule(subject.id)}><PlusIcon/> Dodaj moduł</button>
                <button className="btn btn-sm btn-secondary" onClick={() => onExport(subject.id)} disabled={subjectQs.length === 0}><DownloadIcon/></button>
                <button className="btn btn-sm btn-danger" onClick={() => onClearQuestions(subject.id)} disabled={subjectQs.length === 0}><TrashIcon/></button>
              </div>
            </div>
            
            <div className="manage-modules-list" style={{ display: "flex", flexDirection: "column", gap: "10px", paddingLeft: "12px" }}>
              {(subject.modules || []).map(mod => (
                <div key={mod.id} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", background: "rgba(255,255,255,0.02)", padding: "8px 12px", borderRadius: "var(--radius-sm)", border: "1px solid var(--border-glass)" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <span style={{ fontSize: "0.85rem", fontWeight: 600 }}>{mod.name}</span>
                    <span style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>({mod.questions.length} pytań)</span>
                  </div>
                  <div style={{ display: "flex", gap: "6px" }}>
                    <button className="btn btn-sm btn-primary" style={{ padding: "4px 8px", fontSize: "0.7rem" }} onClick={() => onImport(subject.id, mod.id)}><PlusIcon/> Importuj</button>
                    <button className="btn btn-sm btn-secondary" style={{ padding: "4px 8px", fontSize: "0.7rem" }} onClick={() => onExportModule(subject.id, mod.id)} disabled={mod.questions.length === 0}><DownloadIcon/></button>
                    <button className="btn btn-sm btn-danger" style={{ padding: "4px 8px", fontSize: "0.7rem" }} onClick={() => onClearModuleQuestions(subject.id, mod.id)} disabled={mod.questions.length === 0}><TrashIcon/></button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      })}
      <div style={{ marginTop:"32px", borderTop:"1px solid var(--border-glass)", paddingTop:"24px" }}>
        <button className="btn btn-danger btn-sm" onClick={onResetAll} style={{ width:"auto" }}>
          <TrashIcon/> Resetuj wszystko do domyślnych
        </button>
      </div>
    </div>
  );
}

function SubjectCard({ subject, progressEnabled, progressData, onClick, animDelay }) {
  const questions = getSubjectQuestions(subject);
  const total = questions.length;
  const correct = progressEnabled ? questions.filter(q => progressData[q.id]).length : 0;
  const isEmpty = total === 0;
  return (
    <div className={"subject-card animate-fade-in-up" + (isEmpty ? " empty-card" : "")}
      style={{ animationDelay: animDelay + "ms" }}
      onClick={isEmpty ? undefined : onClick}
      id={"subject-" + subject.id}>
      <span className="subject-icon">{subject.icon}</span>
      <h2 className="subject-name">{subject.name}</h2>
      <p className="subject-description">{subject.description}</p>
      {isEmpty && <div className="subject-empty-badge">⚠️ Brak pytań — dodaj w ustawieniach</div>}
      {progressEnabled && !isEmpty && <ProgressBar current={correct} total={total}/>}
      <div className="subject-meta">
        <span className="subject-count">{total} pytań</span>
        {!isEmpty && <div className="subject-arrow"><ArrowIcon/></div>}
      </div>
    </div>
  );
}

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

function QuizSetup({ title, subtitle, icon, questionsList = [], difficultData = {}, incorrectData = {}, onStart, onBack }) {
  const [onlyDifficult, setOnlyDifficult] = useState(false);
  const [onlyIncorrect, setOnlyIncorrect] = useState(false);
  const [mode, setMode] = useState("sequential");
  
  const difficultQuestions = questionsList.filter(q => difficultData[q.id]);
  const hasDifficult = difficultQuestions.length > 0;
  
  const incorrectQuestions = questionsList.filter(q => incorrectData[q.id]);
  const hasIncorrect = incorrectQuestions.length > 0;

  return (
    <div>
      <button className="nav-back" onClick={onBack}><BackIcon/> Powrót</button>
      <div className="setup-panel">
        <div style={{ fontSize:"2.5rem", marginBottom:"16px" }}>{icon}</div>
        <h2 className="setup-title">{title}</h2>
        <p className="setup-subtitle">{subtitle}</p>
        
        {(hasDifficult || hasIncorrect) && (
          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginBottom: "28px" }}>
            {hasDifficult && (
              <div style={{ padding: "12px 16px", background: "rgba(255,179,71,0.06)", border: "1px solid rgba(255,179,71,0.25)", borderRadius: "var(--radius-md)", display: "flex", alignItems: "center", gap: "10px" }}>
                <input 
                  type="checkbox" 
                  id="setup-only-difficult" 
                  checked={onlyDifficult} 
                  onChange={(e) => {
                    setOnlyDifficult(e.target.checked);
                    if (e.target.checked) setOnlyIncorrect(false);
                  }}
                  style={{ width: "18px", height: "18px", accentColor: "var(--warning)", cursor: "pointer" }}
                />
                <label htmlFor="setup-only-difficult" style={{ fontSize: "0.9rem", fontWeight: 600, color: "var(--warning)", cursor: "pointer", display: "flex", alignItems: "center", gap: "4px" }}>
                  Tylko trudne (⭐) <span style={{ fontSize: "0.8rem", color: "var(--text-secondary)" }}>({difficultQuestions.length})</span>
                </label>
              </div>
            )}
            {hasIncorrect && (
              <div style={{ padding: "12px 16px", background: "rgba(255,77,106,0.06)", border: "1px solid rgba(255,77,106,0.25)", borderRadius: "var(--radius-md)", display: "flex", alignItems: "center", gap: "10px" }}>
                <input 
                  type="checkbox" 
                  id="setup-only-incorrect" 
                  checked={onlyIncorrect} 
                  onChange={(e) => {
                    setOnlyIncorrect(e.target.checked);
                    if (e.target.checked) setOnlyDifficult(false);
                  }}
                  style={{ width: "18px", height: "18px", accentColor: "var(--error)", cursor: "pointer" }}
                />
                <label htmlFor="setup-only-incorrect" style={{ fontSize: "0.9rem", fontWeight: 600, color: "var(--error)", cursor: "pointer", display: "flex", alignItems: "center", gap: "4px" }}>
                  Tylko błędne (❌) <span style={{ fontSize: "0.8rem", color: "var(--text-secondary)" }}>({incorrectQuestions.length})</span>
                </label>
              </div>
            )}
          </div>
        )}

        <div style={{ display: "flex", gap: "24px", flexWrap: "wrap", marginBottom: "28px" }}>
          <div style={{ flex: 1, minWidth: "200px" }}>
            <label className="settings-label" style={{ marginBottom:"10px", display:"block", fontSize:"0.875rem", color:"var(--text-secondary)", fontWeight:500 }}>
              Tryb ćwiczenia
            </label>
            <div className="mode-selector" style={{ gridTemplateColumns: "1fr 1fr", margin: 0 }}>
              <div className={"mode-option" + (mode === "sequential" ? " selected" : "")} onClick={() => setMode("sequential")}>
                <span className="mode-icon">📋</span>
                <div className="mode-name">Po kolei</div>
              </div>
              <div className={"mode-option" + (mode === "random" ? " selected" : "")} onClick={() => setMode("random")}>
                <span className="mode-icon">🎲</span>
                <div className="mode-name">Losowo</div>
              </div>
            </div>
          </div>
        </div>

        <button className="btn btn-primary" onClick={() => onStart(mode, onlyDifficult, onlyIncorrect)}>Rozpocznij ćwiczenie <ArrowIcon/></button>
      </div>
    </div>
  );
}

function QuestionView({ question, questionIndex, totalQuestions, onNext, onRecordAnswer, progressEnabled, isAlreadyCorrect, isDifficult, onToggleDifficult, onQuit }) {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [openAnswer, setOpenAnswer] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  useEffect(() => {
    setSelectedOptions([]); setOpenAnswer(""); setIsSubmitted(false); setIsCorrect(false);
  }, [question.id]);

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
    } else {
      const ss = [...selectedOptions].sort();
      const sc = [...question.correctAnswers].sort();
      correct = ss.length === sc.length && ss.every((v, i) => v === sc[i]);
    }
    setIsCorrect(correct); setIsSubmitted(true);
    onRecordAnswer(question.id, selectedOptions, openAnswer, correct);
  };

  const handleSkip = () => {
    onRecordAnswer(question.id, selectedOptions, openAnswer, false);
    onNext();
  };

  const canSubmit = question.type === "open" ? openAnswer.trim().length > 0 : selectedOptions.length > 0;

  const badge = question.type === "single"
    ? { label: "Wybierz jedną odpowiedź", cls: "type-single" }
    : question.type === "multiple"
    ? { label: "Wybierz kilka odpowiedzi", cls: "type-multiple" }
    : { label: "Wpisz odpowiedź", cls: "type-open" };

  const progressPct = ((questionIndex + 1) / totalQuestions) * 100;

  const getOptionClass = (i) => {
    if (!isSubmitted) return "option-item" + (selectedOptions.includes(i) ? " selected" : "");
    const sel = selectedOptions.includes(i), ans = question.correctAnswers.includes(i);
    if (sel && ans) return "option-item locked correct";
    if (sel && !ans) return "option-item locked incorrect";
    if (!sel && ans) return "option-item locked missed-correct";
    return "option-item locked";
  };

  const getIndicator = (i) => {
    if (!isSubmitted) return selectedOptions.includes(i) ? <CheckIcon/> : null;
    const sel = selectedOptions.includes(i), ans = question.correctAnswers.includes(i);
    if (sel && ans) return <CheckIcon/>;
    if (sel && !ans) return <CrossIcon/>;
    if (!sel && ans) return <CheckIcon/>;
    return null;
  };

  return (
    <div>
      <button className="nav-back" onClick={onQuit} style={{ marginBottom: "16px" }} id="btn-back-quiz">
        <BackIcon/> Przerwij test
      </button>
      <div className="quiz-header">
        <span className="quiz-progress-text">Pytanie <span>{questionIndex + 1}</span> z <span>{totalQuestions}</span></span>
        <span className={"quiz-type-badge " + badge.cls}>{badge.label}</span>
      </div>
      <div className="quiz-progress-bar"><div className="quiz-progress-fill" style={{ width: progressPct + "%" }}/></div>
      <div className="quiz-card" key={question.id}>
        <button className={"difficulty-star" + (isDifficult ? " active" : "")} onClick={onToggleDifficult} title="Oznacz jako trudne">★</button>
        {isAlreadyCorrect && progressEnabled && (
          <div className="result-indicator correct" style={{ marginBottom:"16px" }}>
            <div className="result-icon correct"><CheckIcon/></div>Już odpowiedziano poprawnie
          </div>
        )}
        <p className="question-text">{question.question}</p>
        {question.type !== "open" ? (
          <div className="options-list">
            {question.options.map((opt, idx) => (
              <div key={idx} className={getOptionClass(idx)} onClick={() => handleOptionToggle(idx)}>
                <div className={"option-indicator" + (question.type === "multiple" ? " checkbox" : "")}>{getIndicator(idx)}</div>
                <span className="option-text">{opt}</span>
              </div>
            ))}
          </div>
        ) : (
          <div className="open-input-wrapper">
            <textarea className={"open-textarea" + (isSubmitted ? (isCorrect ? " correct" : " incorrect") : "")}
              value={openAnswer} onChange={(e) => setOpenAnswer(e.target.value)}
              placeholder="Wpisz swoją odpowiedź tutaj..." disabled={isSubmitted}/>
            {isSubmitted && !isCorrect && (
              <div className="open-expected-answer animate-slide-down">
                <div className="open-expected-label">Prawidłowa odpowiedź</div>{question.correctAnswers[0]}
              </div>
            )}
          </div>
        )}
        {isSubmitted && (
          <div className="animate-slide-down">
            <div className={"result-indicator " + (isCorrect ? "correct" : "incorrect")}>
              <div className={"result-icon " + (isCorrect ? "correct" : "incorrect")}>{isCorrect ? <CheckIcon/> : <CrossIcon/>}</div>
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
            <>
              <button className="btn btn-primary" onClick={handleSubmit} disabled={!canSubmit}>
                Sprawdź <span className="kbd">Enter</span>
              </button>
              <button className="btn btn-secondary" onClick={handleSkip} style={{ marginTop: "4px" }}>
                Pomiń pytanie
              </button>
            </>
          ) : (
            <button className="btn btn-success" onClick={onNext}>
              {questionIndex + 1 < totalQuestions ? "Następne pytanie →" : "Zakończ ćwiczenie →"}
              <span className="kbd">→</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

function CompletionScreen({ correctCount, totalCount, onRestart, onHome, onReview }) {
  const pct = totalCount > 0 ? Math.round((correctCount / totalCount) * 100) : 0;
  const inc = totalCount - correctCount;
  let emoji, msg;
  if (pct === 100) { emoji = "🏆"; msg = "Perfekcyjny wynik! Jesteś gotowy na egzamin!"; }
  else if (pct >= 80) { emoji = "🎉"; msg = "Świetna robota! Jeszcze trochę i będziesz mistrzem!"; }
  else if (pct >= 50) { emoji = "💪"; msg = "Dobry start! Kontynuuj naukę, aby poprawić wynik."; }
  else { emoji = "📚"; msg = "Nie poddawaj się! Powtórz materiał i spróbuj ponownie."; }

  return (
    <div className="completion-screen">
      <div className="completion-emoji">{emoji}</div>
      <h2 className="completion-title">Ćwiczenie zakończone!</h2>
      <p className="completion-subtitle">{msg}</p>
      <div className="completion-stats">
        <div className="stat-card animate-fade-in-up" style={{ animationDelay:"0.1s" }}><div className="stat-value green">{correctCount}</div><div className="stat-label">Poprawne</div></div>
        <div className="stat-card animate-fade-in-up" style={{ animationDelay:"0.2s" }}><div className="stat-value red">{inc}</div><div className="stat-label">Niepoprawne</div></div>
        <div className="stat-card animate-fade-in-up" style={{ animationDelay:"0.3s" }}><div className="stat-value purple">{pct}%</div><div className="stat-label">Wynik</div></div>
      </div>
      <div className="completion-actions" style={{ maxWidth: "400px" }}>
        <button className="btn btn-primary" onClick={onReview}>Przejrzyj odpowiedzi</button>
        <button className="btn btn-secondary" onClick={onRestart}>Rozpocznij ponownie</button>
        <button className="btn btn-secondary" onClick={onHome}><BackIcon/> Powrót do listy</button>
      </div>
    </div>
  );
}

function ReviewView({ questions, sessionAnswers, onBack, difficultData, onToggleDifficult }) {
  const [currentRI, setCurrentRI] = useState(0);

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
  
  const badge = question.type === "single"
    ? { label: "Pytanie jednokrotnego wyboru", cls: "type-single" }
    : question.type === "multiple"
    ? { label: "Pytanie wielokrotnego wyboru", cls: "type-multiple" }
    : { label: "Pytanie otwarte", cls: "type-open" };

  const progressPct = ((currentRI + 1) / questions.length) * 100;

  const getOptionClass = (i) => {
    const sel = ans.selectedOptions.includes(i), isCorrectAns = question.correctAnswers.includes(i);
    if (sel && isCorrectAns) return "option-item locked correct";
    if (sel && !isCorrectAns) return "option-item locked incorrect";
    if (!sel && isCorrectAns) return "option-item locked missed-correct";
    return "option-item locked";
  };

  const getIndicator = (i) => {
    const sel = ans.selectedOptions.includes(i), isCorrectAns = question.correctAnswers.includes(i);
    if (sel && isCorrectAns) return <CheckIcon/>;
    if (sel && !isCorrectAns) return <CrossIcon/>;
    if (!sel && isCorrectAns) return <CheckIcon/>;
    return null;
  };

  return (
    <div className="animate-fade-in">
      <div className="review-header">
        <span className="quiz-progress-text">Przegląd: Pytanie <span>{currentRI + 1}</span> z <span>{questions.length}</span></span>
        <span className={"quiz-type-badge " + badge.cls}>{badge.label}</span>
      </div>
      <div className="quiz-progress-bar">
        <div className="quiz-progress-fill" style={{ width: progressPct + "%" }}/>
      </div>
      <div className="quiz-card">
        <button className={"difficulty-star" + (difficultData[question.id] ? " active" : "")} onClick={() => onToggleDifficult(question.id)} title="Oznacz jako trudne">★</button>
        <div className={"review-badge-user " + (ans.isCorrect ? "correct" : "incorrect")}>
          {ans.isCorrect ? <CheckIcon/> : <CrossIcon/>} {ans.isCorrect ? "Udzielono poprawnej odpowiedzi" : "Udzielono błędnej odpowiedzi"}
        </div>
        
        <p className="question-text">{question.question}</p>
        
        {question.type !== "open" ? (
          <div className="options-list">
            {question.options.map((opt, idx) => (
              <div key={idx} className={getOptionClass(idx)}>
                <div className={"option-indicator" + (question.type === "multiple" ? " checkbox" : "")}>{getIndicator(idx)}</div>
                <span className="option-text">{opt}</span>
              </div>
            ))}
          </div>
        ) : (
          <div className="open-input-wrapper">
            <textarea 
              className={"open-textarea " + (ans.isCorrect ? "correct" : "incorrect")} 
              value={ans.openAnswer} 
              disabled 
              placeholder="Brak odpowiedzi"
            />
            {!ans.isCorrect && (
              <div className="open-expected-answer">
                <div className="open-expected-label">Prawidłowa odpowiedź</div>
                {question.correctAnswers[0]}
              </div>
            )}
          </div>
        )}

        <div className="explanation-box">
          <div className="explanation-title">Wyjaśnienie</div>
          <p className="explanation-text">{question.explanation}</p>
        </div>

        <div className="review-actions-row">
          <button className="review-btn" onClick={handlePrev} disabled={currentRI === 0}>
            ← Poprzednie
          </button>
          {currentRI + 1 < questions.length ? (
            <button className="review-btn" onClick={handleNext}>
              Następne →
            </button>
          ) : (
            <button className="btn btn-secondary btn-sm" onClick={onBack}>
              Powrót do podsumowania
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

function App() {
  const [subjects, setSubjects] = useState(() => {
    const saved = loadFromStorage(STORAGE_KEY_SUBJECTS, null);
    let data = saved || DEFAULT_SUBJECTS;
    
    // Auto-migration: update 'jezyki-skryptowe' and 'sieci-komputerowe' if they have been updated in DEFAULT_SUBJECTS
    if (saved) {
      data = data.map(s => {
        if (s.id === "jezyki-skryptowe") {
          const defaultJs = DEFAULT_SUBJECTS.find(ds => ds.id === "jezyki-skryptowe");
          const currentModule = s.modules && s.modules[0];
          if (defaultJs && (!s.modules || s.modules.length !== 1 || currentModule.id !== "js-wyk-zadania-v3")) {
            console.log("Migrated 'jezyki-skryptowe' module database.");
            return defaultJs;
          }
        }
        if (s.id === "sieci-komputerowe") {
          const defaultSk = DEFAULT_SUBJECTS.find(ds => ds.id === "sieci-komputerowe");
          if (defaultSk && (!s.modules || s.modules.length < 5)) {
            console.log("Migrated 'sieci-komputerowe' module database to 16 modules.");
            return defaultSk;
          }
        }
        return s;
      });
    }

    const needsMigration = data.some(s => !s.modules);
    if (!needsMigration) return data;
    return data.map(s => {
      if (s.modules) return s;
      return {
        ...s,
        modules: [
          {
            id: s.id + "-m-default",
            name: "Domyślny moduł",
            questions: s.questions || []
          }
        ]
      };
    });
  });
  const [view, setView] = useState("home");
  const [selectedSubject, setSelectedSubject] = useState(null);
  const [selectedModule, setSelectedModule] = useState(null);
  const [quizType, setQuizType] = useState("module"); // "module" | "subject_exam" | "global"
  const [quizMode, setQuizMode] = useState("sequential");
  const [currentQI, setCurrentQI] = useState(0);
  const [questions, setQuestions] = useState([]);
  const [progressEnabled, setProgressEnabled] = useState(true);
  const [progressData, setProgressData] = useState(loadFromStorage(STORAGE_KEY_PROGRESS, {}));
  const [sessionAnswers, setSessionAnswers] = useState([]);
  const [toast, setToast] = useState(null);
  const [importTarget, setImportTarget] = useState(null);
  const [difficultData, setDifficultData] = useState(() => loadFromStorage(STORAGE_KEY_DIFFICULT, {}));
  const [incorrectData, setIncorrectData] = useState(() => loadFromStorage(STORAGE_KEY_INCORRECT, {}));
  const [quizOnlyDifficult, setQuizOnlyDifficult] = useState(false);
  const [quizOnlyIncorrect, setQuizOnlyIncorrect] = useState(false);

  useEffect(() => { saveToStorage(STORAGE_KEY_SUBJECTS, subjects); }, [subjects]);
  useEffect(() => { if (progressEnabled) saveToStorage(STORAGE_KEY_PROGRESS, progressData); }, [progressData, progressEnabled]);
  useEffect(() => { saveToStorage(STORAGE_KEY_DIFFICULT, difficultData); }, [difficultData]);
  useEffect(() => { saveToStorage(STORAGE_KEY_INCORRECT, incorrectData); }, [incorrectData]);

  const showToast = (message, type) => setToast({ message, type, key: Date.now() });

  const handleSelectSubject = (s) => {
    setSelectedSubject(s);
    setView("subject-modules");
  };

  const handleSelectModule = (m) => {
    setSelectedModule(m);
    setQuizType("module");
    setView("setup");
  };

  const handleStartSubjectExam = (mode) => {
    setSelectedModule(null);
    setQuizType("subject_exam");
    setQuizMode(mode);
    setQuizOnlyDifficult(false);
    setQuizOnlyIncorrect(false);
    const subQs = getSubjectQuestions(selectedSubject);
    const pool = mode === "random" ? shuffleArray(subQs) : [...subQs];
    setQuestions(pool);
    setCurrentQI(0);
    setSessionAnswers([]);
    setView("quiz");
  };

  const handleStartIncorrectExam = () => {
    setSelectedModule(null);
    setQuizType("subject_exam");
    setQuizMode("random");
    setQuizOnlyDifficult(false);
    setQuizOnlyIncorrect(true);
    const subQs = getSubjectQuestions(selectedSubject);
    const pool = subQs.filter(q => incorrectData[q.id]);
    setQuestions(shuffleArray(pool));
    setCurrentQI(0);
    setSessionAnswers([]);
    setView("quiz");
  };

  const handleStartModuleIncorrectQuiz = (m) => {
    setSelectedModule(m);
    setQuizType("module");
    setQuizMode("random");
    setQuizOnlyDifficult(false);
    setQuizOnlyIncorrect(true);
    const pool = m.questions.filter(q => incorrectData[q.id]);
    setQuestions(shuffleArray(pool));
    setCurrentQI(0);
    setSessionAnswers([]);
    setView("quiz");
  };

  const handleStartGlobalExamSetup = () => {
    setSelectedSubject(null);
    setSelectedModule(null);
    setQuizType("global");
    setView("setup");
  };

  const handleStartQuiz = (mode, onlyDifficult, onlyIncorrect) => {
    setQuizMode(mode);
    setQuizOnlyDifficult(onlyDifficult);
    setQuizOnlyIncorrect(onlyIncorrect);
    let pool = [];
    if (quizType === "module") {
      pool = selectedModule.questions;
    } else if (quizType === "global") {
      pool = getAllQuestions(subjects);
    }
    if (onlyDifficult) {
      pool = pool.filter(q => difficultData[q.id]);
    } else if (onlyIncorrect) {
      pool = pool.filter(q => incorrectData[q.id]);
    }
    const finalPool = mode === "random" ? shuffleArray(pool) : [...pool];
    setQuestions(finalPool);
    setCurrentQI(0);
    setSessionAnswers([]);
    setView("quiz");
  };

  const handleRecordAnswer = (questionId, selectedOptions, openAnswer, isCorrect) => {
    if (isCorrect) {
      if (progressEnabled) {
        setProgressData(p => ({ ...p, [questionId]: true }));
      }
      setIncorrectData(prev => {
        const next = { ...prev };
        delete next[questionId];
        return next;
      });
    } else {
      setIncorrectData(prev => ({ ...prev, [questionId]: true }));
    }

    setSessionAnswers(prev => {
      const next = [...prev];
      next[currentQI] = { selectedOptions, openAnswer, isCorrect };
      return next;
    });
  };

  const handleNextQuestion = () => {
    if (currentQI + 1 < questions.length) {
      setCurrentQI(p => p + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      setView("complete");
    }
  };

  const handleRestart = () => {
    let pool = [];
    if (quizType === "module") {
      pool = selectedModule.questions;
    } else if (quizType === "subject_exam") {
      pool = getSubjectQuestions(selectedSubject);
    } else if (quizType === "global") {
      pool = getAllQuestions(subjects);
    }
    
    if (quizOnlyDifficult) {
      pool = pool.filter(q => difficultData[q.id]);
    } else if (quizOnlyIncorrect) {
      pool = pool.filter(q => incorrectData[q.id]);
    }
    
    const finalPool = quizMode === "random" ? shuffleArray(pool) : [...pool];
    setQuestions(finalPool);
    setCurrentQI(0);
    setSessionAnswers([]);
    setView("quiz");
  };

  const handleGoHome = () => {
    setSelectedSubject(null);
    setSelectedModule(null);
    setView("home");
  };

  const handleGoBackFromSetup = () => {
    if (quizType === "module") setView("subject-modules");
    else setView("home");
  };

  const handleQuitQuiz = () => {
    if (confirm("Czy na pewno chcesz przerwać test? Twój postęp w tej sesji zostanie utracony.")) {
      if (quizType === "module") {
        setView("subject-modules");
      } else if (quizType === "subject_exam") {
        setView("subject-modules");
      } else if (quizType === "global") {
        setView("home");
      } else {
        setView("home");
      }
    }
  };

  const handleToggleProgress = (en) => {
    setProgressEnabled(en);
    if (!en) { setProgressData({}); localStorage.removeItem(STORAGE_KEY_PROGRESS); }
  };

  const handleAddModule = (subjectId) => {
    const name = prompt("Wpisz nazwę nowego modułu:");
    if (!name || !name.trim()) return;
    setSubjects(prev => prev.map(s => {
      if (s.id !== subjectId) return s;
      const newId = s.id + "-m" + (s.modules.length + 1);
      return {
        ...s,
        modules: [...s.modules, { id: newId, name: name.trim(), questions: [] }]
      };
    }));
    showToast("Dodano moduł \"" + name + "\".", "success");
  };

  const handleImportQuestions = (subjectId, moduleId, importedData) => {
    setSubjects(prev => prev.map(s => {
      if (s.id !== subjectId) return s;
      const isModular = Array.isArray(importedData) && importedData.length > 0 && importedData[0].questions !== undefined;
      
      if (isModular) {
        const updatedModules = [...s.modules];
        importedData.forEach(importedMod => {
          const existingMod = updatedModules.find(m => m.id === importedMod.id || m.name === importedMod.name);
          if (existingMod) {
            const existingIds = new Set(existingMod.questions.map(q => q.id));
            existingMod.questions = [
              ...existingMod.questions,
              ...importedMod.questions.filter(q => !existingIds.has(q.id))
            ];
          } else {
            updatedModules.push(importedMod);
          }
        });
        return { ...s, modules: updatedModules };
      } else {
        if (!moduleId) {
          let updatedModules = [...s.modules];
          let importMod = updatedModules.find(m => m.id === "imported" || m.name === "Zaimportowane pytania");
          if (!importMod) {
            importMod = { id: "imported", name: "Zaimportowane pytania", questions: [] };
            updatedModules.push(importMod);
          }
          const existingIds = new Set(getSubjectQuestions(s).map(q => q.id));
          importMod.questions = [
            ...importMod.questions,
            ...importedData.filter(q => !existingIds.has(q.id))
          ];
          return { ...s, modules: updatedModules };
        } else {
          const updatedModules = s.modules.map(m => {
            if (m.id !== moduleId) return m;
            const existingIds = new Set(m.questions.map(q => q.id));
            return {
              ...m,
              questions: [
                ...m.questions,
                ...importedData.filter(q => !existingIds.has(q.id))
              ]
            };
          });
          return { ...s, modules: updatedModules };
        }
      }
    }));
    setImportTarget(null);
    showToast("Zaimportowano pytania!", "success");
  };

  const handleClearQuestions = (subjectId) => {
    const subj = subjects.find(s => s.id === subjectId);
    if (!subj || !getSubjectQuestions(subj).length || !confirm("Czy na pewno chcesz usunąć wszystkie pytania z przedmiotu \"" + subj.name + "\"?")) return;
    setSubjects(prev => prev.map(s => s.id === subjectId ? { ...s, modules: s.modules.map(m => ({ ...m, questions: [] })) } : s));
    showToast("Usunięto pytania z \"" + subj.name + "\".", "success");
  };

  const handleClearModuleQuestions = (subjectId, moduleId) => {
    const subj = subjects.find(s => s.id === subjectId);
    const mod = subj ? subj.modules.find(m => m.id === moduleId) : null;
    if (!subj || !mod || !mod.questions.length || !confirm("Czy na pewno chcesz usunąć wszystkie pytania z modułu \"" + mod.name + "\"?")) return;
    setSubjects(prev => prev.map(s => {
      if (s.id !== subjectId) return s;
      return {
        ...s,
        modules: s.modules.map(m => m.id === moduleId ? { ...m, questions: [] } : m)
      };
    }));
    showToast("Usunięto pytania z modułu \"" + mod.name + "\".", "success");
  };

  const handleExport = (subjectId) => {
    const subj = subjects.find(s => s.id === subjectId);
    if (!subj) return;
    const blob = new Blob([JSON.stringify(subj.modules, null, 2)], { type: "application/json" });
    const a = document.createElement("a"); a.href = URL.createObjectURL(blob);
    a.download = subj.id + "_modules.json"; a.click();
    showToast("Wyeksportowano przedmioty z \"" + subj.name + "\".", "success");
  };

  const handleExportModule = (subjectId, moduleId) => {
    const subj = subjects.find(s => s.id === subjectId);
    const mod = subj ? subj.modules.find(m => m.id === moduleId) : null;
    if (!subj || !mod) return;
    const blob = new Blob([JSON.stringify(mod.questions, null, 2)], { type: "application/json" });
    const a = document.createElement("a"); a.href = URL.createObjectURL(blob);
    a.download = subj.id + "_" + mod.id + "_questions.json"; a.click();
    showToast("Wyeksportowano pytania z modułu \"" + mod.name + "\".", "success");
  };

  const handleResetAll = () => {
    if (!confirm("Resetować wszystkie bazy pytań do domyślnych? Zaimportowane pytania zostaną utracone.")) return;
    setSubjects(DEFAULT_SUBJECTS); setProgressData({});
    localStorage.removeItem(STORAGE_KEY_PROGRESS);
    showToast("Zresetowano do ustawień domyślnych.", "success");
  };

  const importSubject = importTarget ? subjects.find(s => s.id === importTarget.subjectId) : null;
  const sessionCorrect = sessionAnswers.filter(a => a && a.isCorrect).length;

  return (
    <div className="app-container">
      <header className="app-header">
        <div className="app-logo">
          <div className="logo-icon">📖</div>
          <span className="logo-text">Quizee</span>
        </div>
      </header>

      {view === "home" && (
        <div className="animate-fade-in">
          <div className="settings-bar">
            <div className="settings-left">
              <Toggle checked={progressEnabled} onChange={handleToggleProgress} label="Zapisuj postęp"/>
            </div>
            <div className="settings-right">
              <button className="btn btn-sm btn-secondary" onClick={() => setView("manage")}>
                <GearIcon/> Zarządzaj
              </button>
            </div>
          </div>
          <StatsStrip subjects={subjects} progressData={progressData} progressEnabled={progressEnabled}/>
          


          <div className="subjects-grid">
            {subjects.map((s, idx) => (
              <SubjectCard key={s.id} subject={s} progressEnabled={progressEnabled} progressData={progressData}
                onClick={() => handleSelectSubject(s)} animDelay={idx * 80}/>
            ))}
          </div>
        </div>
      )}

      {view === "subject-modules" && selectedSubject && (
        <SubjectModulesView 
          subject={selectedSubject} 
          progressEnabled={progressEnabled} 
          progressData={progressData}
          incorrectData={incorrectData}
          onSelectModule={handleSelectModule}
          onStartSubjectExam={handleStartSubjectExam}
          onStartIncorrectExam={handleStartIncorrectExam}
          onStartModuleIncorrectQuiz={handleStartModuleIncorrectQuiz}
          onBack={handleGoHome}
        />
      )}

      {view === "manage" && (
        <ManageView 
          subjects={subjects} 
          onBack={handleGoHome} 
          onImport={(subId, modId) => setImportTarget({ subjectId: subId, moduleId: modId })}
          onClearQuestions={handleClearQuestions} 
          onResetAll={handleResetAll} 
          onExport={handleExport}
          onAddModule={handleAddModule}
          onClearModuleQuestions={handleClearModuleQuestions}
          onExportModule={handleExportModule}
        />
      )}
      
      {view === "setup" && (
        <QuizSetup 
          title={quizType === "global" ? "Egzamin Globalny" : selectedModule ? selectedModule.name : ""}
          subtitle={quizType === "global" ? "Test wiedzy ze wszystkich przedmiotów." : "Wybierz parametry ćwiczenia dla tego modułu."}
          icon={quizType === "global" ? "🏆" : selectedSubject ? selectedSubject.icon : "🌐"}
          questionsList={quizType === "global" ? getAllQuestions(subjects) : selectedModule ? selectedModule.questions : []}
          difficultData={difficultData}
          incorrectData={incorrectData}
          onStart={handleStartQuiz} 
          onBack={handleGoBackFromSetup}
        />
      )}
      
      {view === "quiz" && questions.length > 0 && (
        <QuestionView question={questions[currentQI]} questionIndex={currentQI} totalQuestions={questions.length}
          onNext={handleNextQuestion} onRecordAnswer={handleRecordAnswer} progressEnabled={progressEnabled}
          isAlreadyCorrect={progressData[questions[currentQI] && questions[currentQI].id]}
          isDifficult={!!difficultData[questions[currentQI]?.id]}
          onToggleDifficult={() => {
            const qid = questions[currentQI]?.id;
            if (!qid) return;
            setDifficultData(prev => {
              const next = { ...prev };
              if (next[qid]) delete next[qid];
              else next[qid] = true;
              return next;
            });
          }}
          onQuit={handleQuitQuiz}
        />
      )}
      
      {view === "complete" && (
        <CompletionScreen correctCount={sessionCorrect} totalCount={questions.length} onRestart={handleRestart} onHome={handleGoHome} onReview={() => setView("review")}/>
      )}

      {view === "review" && questions.length > 0 && (
        <ReviewView 
          questions={questions} 
          sessionAnswers={sessionAnswers} 
          onBack={() => setView("complete")}
          difficultData={difficultData}
          onToggleDifficult={(qid) => {
            setDifficultData(prev => {
              const next = { ...prev };
              if (next[qid]) delete next[qid];
              else next[qid] = true;
              return next;
            });
          }}
        />
      )}

      {importTarget && importSubject && (
        <ImportModal 
          subjectId={importTarget.subjectId} 
          moduleId={importTarget.moduleId} 
          subjectName={importSubject.name} 
          onImport={handleImportQuestions} 
          onClose={() => setImportTarget(null)}
        />
      )}
      
      {toast && <Toast key={toast.key} message={toast.message} type={toast.type} onDone={() => setToast(null)}/>}
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>);
