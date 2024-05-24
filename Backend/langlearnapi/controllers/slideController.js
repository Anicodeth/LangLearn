const Slide = require("../models/Slide");

exports.createSlide = async function (slide) {
  try {
    const newSlide = await Slide(slide);
    await newSlide.save();
    return newSlide;
  } catch (error) {
    throw error;
  }
};

exports.getSlide = async function (id) {
  try {
    const slide = await Slide.findById(id);
    return slide;
  } catch (error) {
    throw error;
  }
};

exports.getSlides = async function () {
  try {
    const slides = await Slide.find();
    return slides;
  } catch (error) {
    throw error;
  }
};

exports.updateSlide = async function (id, slide) {
  try {
    const updatedSlide = await Slide.findByIdAndUpdate(id, slide, {
      new: true,
    });
    await updatedSlide.save();
    return updatedSlide;
  } catch (error) {
    throw error;
  }
};

exports.deleteSlide = async function (id) {
  try {
    const slide = await Slide.findByIdAndDelete(id);
    await slide.save();
    return slide;
  } catch (error) {
    throw error;
  }
};
