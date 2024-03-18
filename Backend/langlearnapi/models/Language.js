const mongoose = require('mongoose');

const languageSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    flag: {
        type: String,
        required: true,
    },
    courses: [
        {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Course",
        },
    ],
    }); 

