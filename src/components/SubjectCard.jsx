const React = window.React;

function SubjectCard({ 
  subject, 
  progressEnabled, 
  progressData, 
  onClick, 
  animDelay,
  onTogglePassed,
  onPointerDown,
  onPointerMove,
  onPointerUp,
  onPointerCancel,
  isDragging,
  dragStyle
}) {
  const questions = getSubjectQuestions(subject);
  const total = questions.length;
  const correct = progressEnabled ? questions.filter(q => progressData[q.id]).length : 0;
  
  return (
    <div 
      className={`subject-card animate-fade-in-up ${subject.passed ? 'passed' : ''} ${isDragging ? 'is-dragging' : ''}`}
      onClick={onClick}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerCancel={onPointerCancel}
      data-id={subject.id}
      style={{ 
        animationDelay: animDelay,
        touchAction: 'none',
        ...dragStyle
      }}
    >
      <div 
        className={`subject-pass-checkbox ${subject.passed ? 'checked' : ''}`}
        onClick={(e) => {
          e.stopPropagation();
          onTogglePassed(subject.id);
        }}
        onPointerDown={(e) => {
          e.stopPropagation();
        }}
      >
        {subject.passed && <CheckIcon />}
      </div>

      <div className="subject-icon">{subject.icon}</div>
      <div className="subject-name">{subject.name}</div>
      <div className="subject-description">{subject.description || "Brak opisu."}</div>
      <div className="subject-meta">{total} pytań • {subject.modules ? subject.modules.length : 0} modułów</div>
      {progressEnabled && total > 0 && (
        <ProgressBar current={correct} total={total} />
      )}
      <div className="subject-arrow"><ArrowIcon/></div>
    </div>
  );
}
