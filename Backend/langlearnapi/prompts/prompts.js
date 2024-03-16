function quizPrompt(language, difficulty) {
  return `Prepare a language quiz using ${language} with a difficulty of ${difficulty}. 
  Return in the form of a list of jsons. 
  do not include anyother text other than the list in your response.`;
}

function chatPrompt(language, question) {
  return `reply to this question: "${question}". use only the following language: "${language}".`;
}

function translatePrompt(fromlanguage, toLanguage, text) {
  return;
}

function speechPrompt(text) {
  return text;
}


module.exports = {
    quizPrompt,
    chatPrompt,
    translatePrompt,
    speechPrompt
}