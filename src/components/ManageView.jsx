const React = window.React;

function ManageView({ 
  subjects, 
  onBack, 
  onImport, 
  onClearQuestions, 
  onResetAll, 
  onExport, 
  onAddModule, 
  onClearModuleQuestions, 
  onExportModule 
}) {
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
