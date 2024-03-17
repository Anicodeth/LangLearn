function quizPrompt(language, difficulty) {
  return `Prepare a language quiz using ${language} with a difficulty of ${difficulty}. 
  Return in the form of a list of jsons. 
  do not include anyother text other than the list in your response.
  they must be multiple choice questions.
  the question is always english. the choices are the specified language.`;
}

function chatPrompt(language, question) {
  return `reply to this question: "${question}". use only the following language: "${language}".`;
}

function translatePrompt(fromlanguage, toLanguage, text) {
  return `Translate this text: ${text}", from ${fromlanguage} to ${toLanguage}`;
}

function speechPrompt(text) {
  return text;
}

module.exports = {
  quizPrompt,
  chatPrompt,
  translatePrompt,
  speechPrompt,
};
