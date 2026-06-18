const React = window.React;

function ProgressBar({ current, total }) {
  const pct = total > 0 ? Math.round((current / total) * 100) : 0;
  return (
    <div className="progress-container">
      <div className="progress-bar-outer"><div className="progress-bar-inner" style={{ width: pct + "%" }}/></div>
      <div className="progress-text">{current} / {total} ({pct}%)</div>
    </div>
  );
}
