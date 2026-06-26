const React = window.React;

function StatsStrip({ subjects, progressData, progressEnabled }) {
  const activeSubjects = subjects.filter(s => !s.passed);
  const allQs = getAllQuestions(subjects);
  const totalQuestions = allQs.length;
  const totalCorrect = progressEnabled ? allQs.filter(q => progressData[q.id]).length : 0;
  const pct = totalQuestions > 0 ? Math.round((totalCorrect / totalQuestions) * 100) : 0;

  return (
    <div className="stats-strip">
      <div className="stats-strip-card">
        <div className="stats-strip-value purple">{activeSubjects.length}</div>
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
