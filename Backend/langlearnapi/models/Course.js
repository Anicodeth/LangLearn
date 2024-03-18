const mongoose = require('mongoose');


const courseSchema = new mongoose.Schema({
  languageId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Language",
  },
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  difficulty: {
    type: String,
    required: true,
  },
  courseImage: {
    type: String,
  },
  slides: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Slide",
    },
  ],
});

const Course = mongoose.model("Course", courseSchema);

module.exports = Course;