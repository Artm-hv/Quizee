const React = window.React;
const { useState, useEffect } = React;

function Toast({ message, type, onDone }) {
  const [hiding, setHiding] = useState(false);
  useEffect(() => {
    const t1 = setTimeout(() => setHiding(true), 2500);
    const t2 = setTimeout(onDone, 2800);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);
  return <div className={"toast " + type + (hiding ? " hide" : "")}>{message}</div>;
}
