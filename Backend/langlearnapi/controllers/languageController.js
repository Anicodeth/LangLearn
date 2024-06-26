const languageService = require("../services/languageService");

exports.createLanguage = async function (req, res) {
  try {
    const language = await languageService.createLanguage(req.body);
    return res.status(200).json(language);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

exports.getLanguage = async function (req, res) {
  try {
    const language = await languageService.getLanguage(req.params.id);
    return res.status(200).json(language);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

exports.getLanguages = async function (req, res) {
  try {
    const languages = await languageService.getLanguages();
    return res.status(200).json(languages);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

exports.updateLanguage = async function (req, res) {
  try {
    const language = await languageService.updateLanguage(
      req.params.id,
      req.body
    );
    return res.status(200).json(language);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

exports.deleteLanguage = async function (req, res) {
  try {
    const language = await languageService.deleteLanguage(req.params.id);
    return res.status(200).json(language);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

exports.addCourseToLanguage = async function (req, res) {
  try {
    const language = await languageService.addCourseToLanguage(
      req.params.id,
      req.body
    );
    return res.status(200).json(language);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

exports.removeCourseFromLanguage = async function (req, res) {
  try {
    const language = await languageService.removeCourseFromLanguage(
      req.params.id,
      req.body.courseId
    );
    return res.status(200).json(language);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

exports.getLanguageCourses = async function (req, res) {
  try {
    const courses = await languageService.getLanguageCourses(req.params.id);
    return res.status(200).json(courses);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

// Path: LangLearn/Backend/langlearnapi/services/languageService.js
