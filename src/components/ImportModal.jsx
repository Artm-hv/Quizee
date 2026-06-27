const React = window.React;
const { useState } = React;

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
            if (!["single","multiple","open","yn"].includes(q.type)) {
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
          if (!["single","multiple","open","yn"].includes(q.type)) {
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
          Wymagane pola для питання: <code>id</code>, <code>type</code> (<code>single</code>/<code>multiple</code>/<code>open</code>), <code>question</code>, <code>correctAnswers</code>, <code>explanation</code>.<br/>
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
