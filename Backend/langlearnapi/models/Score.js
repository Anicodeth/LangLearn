const mongoose = require('mongoose');

const scoreSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    quizLanguage: {
        type: String,
        required: true,
    },
    quizDifficulty: {
        type: String,
        required: true,
    },
    score: {
        type: Number,
        required: true,
    },

    });

const Score = mongoose.model("Score", scoreSchema);

module.exports = Score;

