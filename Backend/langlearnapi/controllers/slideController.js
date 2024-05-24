const slideService = require("../services/slideService");
exports.createSlide = async function (req, res) {
  try {
    const slide = await slideService.createSlide(req.body);
    return res.status(201).json(slide);
  } catch (error) {
    return res.status(400).json(error.message);
  }
};

exports.getSlide = async function (req, res) {
  try {
    const slide = await slideService.getSlide(req.params.id);
    return res.status(200).json(slide);
  } catch (error) {
    return res.status(404).json(error.message);
  }
};

exports.getSlides = async function (req, res) {
  try {
    const slides = await slideService.getSlides();
    return res.status(200).json(slides);
  } catch (error) {
    return res.status(404).json(error.message);
  }
};

exports.updateSlide = async function (req, res) {
  try {
    const slide = await slideService.updateSlide(req.params.id, req.body);
    return res.status(200).json(slide);
  } catch (error) {
    return res.status(400).json(error.message);
  }
};

exports.deleteSlide = async function (req, res) {
  try {
    const slide = await slideService.deleteSlide(req.params.id);
    return res.status(200).json(slide);
  } catch (error) {
    return res.status(404).json(error.message);
  }
};
