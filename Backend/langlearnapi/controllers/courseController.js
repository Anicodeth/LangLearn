const courseService = require("../services/courseService");

exports.createCourse = async function (req, res) {
  try {
    const course = await courseService.createCourse(req.body);
    return res.status(200).json(course);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

exports.getCourse = async function (req, res) {
  try {
    const course = await courseService.getCourse(req.params.id);
    return res.status(200).json(course);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

exports.getCourses = async function (req, res) {
  try {
    const courses = await courseService.getCourses();
    return res.status(200).json(courses);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

exports.updateCourse = async function (req, res) {
  try {
    const course = await courseService.updateCourse(req.params.id, req.body);
    return res.status(200).json(course);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

exports.deleteCourse = async function (req, res) {
  try {
    const course = await courseService.deleteCourse(req.params.id);
    return res.status(200).json(course);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

exports.getCourseByTitle = async function (req, res) {
  try {
    const course = await courseService.getCourseByTitle(req.params.title);
    return res.status(200).json(course);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

exports.addSlideToCourse = async function (req, res) {
  try {
    const course = await courseService.addSlideToCourse(
      req.params.id,
      req.body
    );
    return res.status(200).json(course);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

exports.addSlidesToCourse = async function (req, res) {
  try {
    const course = await courseService.addSlidesToCourse(
      req.params.id,
      req.body
    );
    return res.status(200).json(course);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

exports.removeSlideFromCourse = async function (req, res) {
  try {
    const course = await courseService.removeSlideFromCourse(
      req.params.id,
      req.body.slideId
    );
    return res.status(200).json(course);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

exports.getCourseSlides = async function (req, res) {
  try {
    const slides = await courseService.getCourseSlides(req.params.id);
    return res.status(200).json(slides);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};
