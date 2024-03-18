const mongoose = require('mongoose');


const courseSchema = new mongoose.Schema({
    language: {
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
    courseImage: {
        type: String,
    },
    lessons: [
        {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Lesson",
        },
    ],
    });