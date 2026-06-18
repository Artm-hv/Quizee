const React = window.React;

function Toggle({ checked, onChange, label }) {
  return (
    <div className="toggle-wrapper" onClick={() => onChange(!checked)}>
      <div className={"toggle-track" + (checked ? " active" : "")}><div className="toggle-knob"/></div>
      <span className="toggle-label-text">{label}</span>
    </div>
  );
}
