const { useState, useEffect, useCallback, useRef } = React;






function App() {
  const [subjects, setSubjects] = useState(() => {
    const saved = loadFromStorage(STORAGE_KEY_SUBJECTS, null);
    let data = saved || DEFAULT_SUBJECTS;
    
    // Auto-migration: update 'jezyki-skryptowe', 'sieci-komputerowe' and 'systemy-dynamiczne' if they have been updated in DEFAULT_SUBJECTS
    if (saved) {
      data = data.map(s => {
        const defaultSubject = DEFAULT_SUBJECTS.find(ds => ds.id === s.id);
        const currentVer = s.dbVersion || 0;
        const defaultVer = defaultSubject ? (defaultSubject.dbVersion || 0) : 0;
        const versionOutdated = defaultVer > currentVer;

        if (s.id === "jezyki-skryptowe") {
          const defaultJs = DEFAULT_SUBJECTS.find(ds => ds.id === "jezyki-skryptowe");
          const m1 = s.modules ? s.modules.find(m => m.id === "js-pe2-m1") : null;
          const m3 = s.modules ? s.modules.find(m => m.id === "js-pe2-m3") : null;
          const pe1m1 = s.modules ? s.modules.find(m => m.id === "js-pe1-m1") : null;
          const pe1m2 = s.modules ? s.modules.find(m => m.id === "js-pe1-m2") : null;
          const hasExplanations = pe1m1 && pe1m1.questions.some(q => q.explanation && q.explanation.trim());
          const hasScreenReaders = pe1m2 && pe1m2.questions.some(q => q.options.some(opt => opt.includes("1 of 4")));
          if (defaultJs && (!s.modules || s.modules.length < 12 || !s.modules.some(m => m.id === "js-pe2-final") || !m1 || m1.questions.length !== 18 || !m3 || m3.questions.length !== 17 || !hasExplanations || hasScreenReaders || versionOutdated)) {
            console.log("Migrated 'jezyki-skryptowe' module database to include PE1 and PE2 modules with explanations, clean formatting and correct question counts.");
            return defaultJs;
          }
        }
        if (s.id === "sieci-komputerowe") {
          const defaultSk = DEFAULT_SUBJECTS.find(ds => ds.id === "sieci-komputerowe");
          const hasSkScreenReaders = s.modules && s.modules.some(m => m.questions.some(q => q.options.some(opt => opt.includes("1 of 4"))));
          if (defaultSk && (!s.modules || s.modules.length < 5 || hasSkScreenReaders || versionOutdated)) {
            console.log("Migrated 'sieci-komputerowe' module database with clean formatting.");
            return defaultSk;
          }
        }
        if (s.id === "systemy-dynamiczne") {
          const defaultSd = DEFAULT_SUBJECTS.find(ds => ds.id === "systemy-dynamiczne");
          if (defaultSd && (!s.modules || s.modules.length < 7 || !s.modules.some(m => m.id === "sd-mod-w1") || versionOutdated)) {
            console.log("Migrated 'systemy-dynamiczne' module database to include Wykład 1 and 2.");
            return defaultSd;
          }
        }
        if (versionOutdated && defaultSubject) {
          console.log(`Migrated '${s.id}' module database due to version bump.`);
          return defaultSubject;
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
  const [questions, rawSetQuestions] = useState([]);

  const setQuestions = useCallback((pool) => {
    const shuffledPool = pool.map(q => {
      if (q.type === "open" || !q.options || q.options.length === 0) {
        return q;
      }
      const indices = q.options.map((_, idx) => idx);
      const shuffledIndices = shuffleArray(indices);
      return {
        ...q,
        options: shuffledIndices.map(idx => q.options[idx]),
        correctAnswers: q.correctAnswers.map(c => shuffledIndices.indexOf(c)).filter(idx => idx !== -1)
      };
    });
    rawSetQuestions(shuffledPool);
  }, []);

  const [progressEnabled, setProgressEnabled] = useState(true);
  const [progressData, setProgressData] = useState(() => loadFromStorage(STORAGE_KEY_PROGRESS, {}));
  const [sessionAnswers, setSessionAnswers] = useState([]);
  const [toast, setToast] = useState(null);
  const [importTarget, setImportTarget] = useState(null);
  const [difficultData, setDifficultData] = useState(() => loadFromStorage(STORAGE_KEY_DIFFICULT, {}));
  const [incorrectData, setIncorrectData] = useState(() => loadFromStorage(STORAGE_KEY_INCORRECT, {}));
  const [quizOnlyDifficult, setQuizOnlyDifficult] = useState(false);
  const [quizOnlyIncorrect, setQuizOnlyIncorrect] = useState(false);

  // Drag and Drop & Subject Completion State
  const [draggedId, setDraggedId] = useState(null);
  const [pointerStart, setPointerStart] = useState({ x: 0, y: 0 });
  const [pointerCurrent, setPointerCurrent] = useState({ x: 0, y: 0 });
  const [isDraggingActive, setIsDraggingActive] = useState(false);
  const pressStateRef = useRef(null);
  const ignoreClickRef = useRef(false);

  const handleTogglePassed = (subjectId) => {
    setSubjects(prev => {
      let list = prev.map(s => s.id === subjectId ? { ...s, passed: !s.passed } : s);
      const target = list.find(s => s.id === subjectId);
      if (!target) return list;
      
      list = list.filter(s => s.id !== subjectId);
      if (target.passed) {
        list.push(target);
      } else {
        const firstPassedIdx = list.findIndex(s => s.passed);
        if (firstPassedIdx === -1) {
          list.push(target);
        } else {
          list.splice(firstPassedIdx, 0, target);
        }
      }
      return list;
    });
    
    // Briefly show a success toast if marked as passed
    const targetSub = subjects.find(s => s.id === subjectId);
    if (targetSub && !targetSub.passed) {
      showToast(`Przedmiot "${targetSub.name}" oznaczono jako zdany!`, "success");
    }
  };

  const handlePointerDown = (e, id) => {
    if (e.pointerType === 'mouse' && e.button !== 0) return;
    const startX = e.clientX;
    const startY = e.clientY;
    const target = e.currentTarget;
    const pointerId = e.pointerId;
    
    const timer = setTimeout(() => {
      if (navigator.vibrate) navigator.vibrate(50);
      setDraggedId(id);
      setPointerStart({ x: startX, y: startY });
      setPointerCurrent({ x: startX, y: startY });
      setIsDraggingActive(true);
      try {
        target.setPointerCapture(pointerId);
      } catch (err) {}
    }, 400);
    
    pressStateRef.current = {
      timer,
      id,
      startX,
      startY,
      target,
      pointerId
    };
  };

  const handlePointerMove = (e) => {
    const state = pressStateRef.current;
    if (!state) return;
    
    const dx = e.clientX - state.startX;
    const dy = e.clientY - state.startY;
    
    if (!isDraggingActive && draggedId !== state.id) {
      if (Math.hypot(dx, dy) > 10) {
        clearTimeout(state.timer);
      }
    }
    
    if (draggedId === state.id) {
      e.preventDefault();
      setPointerCurrent({ x: e.clientX, y: e.clientY });
      
      const el = document.elementFromPoint(e.clientX, e.clientY);
      const card = el ? el.closest('.subject-card') : null;
      const targetId = card ? card.getAttribute('data-id') : null;
      
      if (targetId && targetId !== state.id) {
        setSubjects(prev => {
          const list = [...prev];
          const idx1 = list.findIndex(s => s.id === state.id);
          const idx2 = list.findIndex(s => s.id === targetId);
          if (idx1 !== -1 && idx2 !== -1) {
            [list[idx1], list[idx2]] = [list[idx2], list[idx1]];
          }
          return list;
        });
      }
    }
  };

  const handlePointerUp = (e) => {
    const state = pressStateRef.current;
    if (!state) return;
    
    clearTimeout(state.timer);
    
    if (draggedId === state.id) {
      try {
        state.target.releasePointerCapture(state.pointerId);
      } catch (err) {}
      
      setDraggedId(null);
      setIsDraggingActive(false);
      ignoreClickRef.current = true;
      
      setSubjects(prev => {
        let list = [...prev];
        let hasActiveLater = false;
        for (let i = list.length - 1; i >= 0; i--) {
          if (!list[i].passed) {
            hasActiveLater = true;
          } else if (list[i].passed && hasActiveLater) {
            list[i] = { ...list[i], passed: false };
          }
        }
        return list;
      });
    }
    
    pressStateRef.current = null;
  };

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
      if (quizType === "module" || quizType === "subject_exam") {
        setView("subject-modules");
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
    setSubjects(DEFAULT_SUBJECTS); 
    setProgressData({});
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
            {subjects.map((s, idx) => {
              const isDragged = draggedId === s.id;
              const dragStyle = isDragged ? {
                position: 'relative',
                zIndex: 1000,
                transform: `translate3d(${pointerCurrent.x - pointerStart.x}px, ${pointerCurrent.y - pointerStart.y}px, 0)`,
                pointerEvents: 'none',
                boxShadow: 'var(--shadow-lg), 0 0 30px var(--accent-primary-glow)'
              } : {};
              return (
                <SubjectCard 
                  key={s.id} 
                  subject={s} 
                  progressEnabled={progressEnabled} 
                  progressData={progressData}
                  onClick={() => {
                    if (ignoreClickRef.current) {
                      ignoreClickRef.current = false;
                      return;
                    }
                    handleSelectSubject(s);
                  }} 
                  animDelay={idx * 80}
                  onTogglePassed={handleTogglePassed}
                  onPointerDown={(e) => handlePointerDown(e, s.id)}
                  onPointerMove={handlePointerMove}
                  onPointerUp={handlePointerUp}
                  onPointerCancel={handlePointerUp}
                  isDragging={isDragged}
                  dragStyle={dragStyle}
                />
              );
            })}
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
          questions={questions}
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
          sessionAnswers={sessionAnswers}
          setCurrentQI={setCurrentQI}
          subjectName={selectedSubject ? selectedSubject.name : ""}
          moduleName={selectedModule ? selectedModule.name : ""}
          onComplete={() => setView("complete")}
          difficultData={difficultData}
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
          subjectName={selectedSubject ? selectedSubject.name : ""}
          moduleName={selectedModule ? selectedModule.name : ""}
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
