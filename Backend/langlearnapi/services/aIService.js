const { textGemini, textOpenAi } = require("../data/textData");
const { quizPrompt } = require("../prompts/prompts");

exports.getQuiz = async function (language, difficulty) {
  const prompt = quizPrompt(language, difficulty);

  const response = await textOpenAi(prompt);
  return response;
};

exports.getChat = async function (language, question) {
  const prompt = chatPrompt(language, question);

  const response = await textOpenAi(prompt);
  return response;
};

exports.getTranslate = async function (fromLanguage, toLanguage, text) {
  const prompt = translatePrompt(fromLanguage, toLanguage, text);

  const response = await textOpenAi(prompt);
  return response;
};
