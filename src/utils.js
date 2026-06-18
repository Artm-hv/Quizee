function shuffleArray(arr) {
  const s = [...arr];
  for (let i = s.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [s[i], s[j]] = [s[j], s[i]];
  }
  return s;
}

function getSubjectQuestions(subject) {
  if (!subject.modules) return [];
  return subject.modules.reduce((acc, m) => [...acc, ...m.questions], []);
}

function getAllQuestions(subjectsList) {
  return subjectsList.reduce((acc, s) => [...acc, ...getSubjectQuestions(s)], []);
}

function loadFromStorage(key, fallback) {
  try {
    let r = localStorage.getItem(key);
    if (!r) {
      const oldKey = key.replace("quizee_", "studypro_");
      r = localStorage.getItem(oldKey);
    }
    return r ? JSON.parse(r) : fallback;
  } catch (e) {
    return fallback;
  }
}

function saveToStorage(key, data) {
  try { localStorage.setItem(key, JSON.stringify(data)); } catch (e) {}
}
