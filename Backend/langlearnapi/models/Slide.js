const mongoose = require('mongoose');

const slideSchema = new mongoose.Schema({
    courseId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Course",
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