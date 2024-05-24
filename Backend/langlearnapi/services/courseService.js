const Course = require("../models/Course");
const Slide = require("../models/Slide");

exports.createCourse = async function (course) {
  try {
    const newCourse = await Course(course);
    await newCourse.save();
    return newCourse;
  } catch (error) {
    throw error;
  }
};

exports.getCourse = async function (id) {
  try {
    const course = await Course.findById(id);
    return course;
  } catch (error) {
    throw error;
  }
};

exports.getCourses = async function () {
  try {
    const courses = await Course.find();
    return courses;
  } catch (error) {
    throw error;
  }
};

exports.updateCourse = async function (id, course) {
  try {
    const updatedCourse = await Course.findByIdAndUpdate(id, course, {
      new: true,
    });
    await updatedCourse.save();
    return updatedCourse;
  } catch (error) {
    throw error;
  }
};

exports.deleteCourse = async function (id) {
  try {
    const course = await Course.findByIdAndDelete(id);
    await course.save();
    return course;
  } catch (error) {
    throw error;
  }
};

exports.getCourseByTitle = async function (title) {
  try {
    const course = await Course.findOne({ courseTitle: title });
    return course;
  } catch (error) {
    throw error;
  }
};

exports.addSlidesToCourse = async function (courseId, slides) {
  try {
    const course = await Course.findById(courseId);
    slides.forEach((slide) => {
      let slideObj = new Slide(slide);
      course.slides.push(slideObj);
      slideObj.save();
    });
    await course.save();
    return course;
  } catch (error) {
    throw error;
  }
};

exports.addSlideToCourse = async function (courseId, slide) {
  try {
    const course = await Course.findById(courseId);
    let slideObj = new Slide(slide);
    course.slides.push(slideObj);
    await slideObj.save();
    await course.save();
    return { message: "Slide added successfully" };
  } catch (error) {
    throw error;
  }
};

exports.removeSlideFromCourse = async function (courseId, slideId) {
  try {
    const course = await Course.findById(courseId);
    course.slides.pull(slideId);
    await course.save();
    return course;
  } catch (error) {
    throw error;
  }
};

exports.getCourseSlides = async function (courseId) {
  try {
    const course = await Course.findById(courseId);
    const slides = await Promise.all(
      course.slides.map(async (slideId) => {
        return await Slide.findById(slideId.toString());
      })
    );

    return slides;
  } catch (error) {
    throw error;
  }
};
