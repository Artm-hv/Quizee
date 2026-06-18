const React = window.React;

function CompletionScreen({ correctCount, totalCount, onRestart, onHome, onReview }) {
  const pct = totalCount > 0 ? Math.round((correctCount / totalCount) * 100) : 0;
  let emoji = "🎉";
  if (pct < 50) emoji = "😢";
  else if (pct < 80) emoji = "👍";

  return (
    <div className="completion-screen">
      <div className="completion-emoji">{emoji}</div>
      <h2 className="completion-title">Ćwiczenie ukończone!</h2>
      <p className="completion-subtitle">Gratulacje! Zakończyłeś całe podejście.</p>
      
      <div className="completion-stats">
        <div className="stat-card">
          <div className="stat-value">{correctCount}</div>
          <div className="stat-label">Poprawne</div>
        </div>
        <div className="stat-card">
          <div className="stat-value">{totalCount}</div>
          <div className="stat-label">Wszystkie</div>
        </div>
        <div className="stat-card">
          <div className="stat-value">{pct}%</div>
          <div className="stat-label">Wynik</div>
        </div>
      </div>

      <div className="completion-actions">
        <button className="btn btn-primary" onClick={onRestart}>Spróbuj ponownie</button>
        <button className="btn btn-secondary" onClick={onReview}>Przejrzyj odpowiedzi</button>
        <button className="btn btn-secondary" onClick={onHome}><BackIcon/> Powrót do menu</button>
      </div>
    </div>
  );
}
