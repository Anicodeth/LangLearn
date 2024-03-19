const { getQuiz, getChat, getTranslate } = require("../services/aiService");

exports.getQuiz = async function (req, res) {
  try {
    const response = await getQuiz(req.params.language, req.params.difficulty);
    return res.status(200).json(response);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

exports.getChat = async function (req, res) {
  try {
    const response = await getChat(req.params.language, req.params.question);
    return res.status(200).json(response);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

exports.getTranslate = async function (req, res) {
  try {
    const response = await getTranslate(
      req.params.fromLanguage,
      req.params.toLanguage,
      req.params.text
    );
    return res.status(200).json(response);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};
