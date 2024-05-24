const Course = require("../models/Course");
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
    await Language.findByIdAndDelete(id);
    return { message: "Language deleted successfully" };
  } catch (error) {
    throw error;
  }
};

exports.addCourseToLanguage = async function (id, course) {
  try {
    const language = await Language.findById(id);
    const courseObj = await Course(course);
    await courseObj.save();
    language.courses.push(courseObj);
    await language.save();
    return language;
  } catch (error) {
    throw error;
  }
};

exports.removeCourseFromLanguage = async function (id, courseId) {
  try {
    const language = await Language.findById(id);
    language.courses = language.courses.filter(
      (id) => id.toString() !== courseId
    );
    await language.save();
    return { message: "Course removed from language" };
  } catch (error) {
    throw error;
  }
};

exports.getLanguageCourses = async function (id) {
  try {
    const language = await Language.findById(id);
    if (!language) {
      throw new Error("Language not found");
    }

    const courses = await Promise.all(
      language.courses.map(async (courseId) => {
        return await Course.findById(courseId.toString());
      })
    );
    return courses;
  } catch (error) {
    throw error;
  }
};

// Path: LangLearn/Backend/langlearnapi/services/languageService.js
