const Course = require("../models/Course");

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
