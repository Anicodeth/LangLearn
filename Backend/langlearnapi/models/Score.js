const mongoose = require('mongoose');

const scoreSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    quizDetails: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Course",
    },
    score: {
        type: Number,
        required: true,
    },

    });

const Score = mongoose.model("Score", scoreSchema);

module.exports = Score;

