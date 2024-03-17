const { textGemini, textOpenAi } = require("../data/textData");
const { quizPrompt } = require("../prompts/prompts");
exports.getQuiz = async function (language, difficulty) {
  const prompt = quizPrompt(language, difficulty);

  const response = await textOpenAi(prompt);
  return response;
};
