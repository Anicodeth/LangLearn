const mongoose = require('mongoose');

const slideSchema = new mongoose.Schema({
    courseId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Course",
    },
    slideTitle: {
        type: String,
        required: true,
    },
    slideImage: {
        type: String,
    },
    slideText: {
        type: String,
    },
    slideAudio: {
        type: String,
    },
    slideNewWord: {
        type: String,
    },
    slideVideo: {
        type: String,
    },
    slideQuestion: {
        type: String,
    },
    slideCorrectAnswer: {
        type: String,
    },
    slideExplanation: {
        type: String,
    },
    });


const Slide = mongoose.model("Slide", slideSchema);

module.exports = Slide;