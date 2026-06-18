const React = window.React;
const { useState } = React;

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
