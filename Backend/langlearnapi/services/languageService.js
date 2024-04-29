const Language = require("../models/Language");

exports.createLanguage = async function (language) {
  try {
    const newLanguage = await Language(language);
    await newLanguage.save();
    return newLanguage;
  } catch (error) {
    throw error;
  }
};

exports.getLanguage = async function (id) {
  try {
    const language = await Language.findById(id);
    return language;
  } catch (error) {
    throw error;
  }
};

exports.getLanguages = async function () {
  try {
    const languages = await Language.find();
    return languages;
  } catch (error) {
    throw error;
  }
};

exports.updateLanguage = async function (id, language) {
  try {
    const updatedLanguage = await Language.findByIdAndUpdate(id, language, {
      new: true,
    });
    await updatedLanguage.save();
    return updatedLanguage;
  } catch (error) {
    throw error;
  }
};

exports.deleteLanguage = async function (id) {
  try {
    const language = await Language.findByIdAndDelete(id);
    await language.save();
    return language;
  } catch (error) {
    throw error;
  }
};
// Path: LangLearn/Backend/langlearnapi/services/languageService.js
