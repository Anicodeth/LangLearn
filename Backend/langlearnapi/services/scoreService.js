const Score = require("../models/Score");

exports.createScore = async function (score) {
  try {
    const newScore = await Score(score);
    await newScore.save();
    return newScore;
  } catch (error) {
    throw error;
  }
};

exports.getScore = async function (id) {
  try {
    const score = await Score.findById(id);
    return score;
  } catch (error) {
    throw error;
  }
};

exports.getScores = async function () {
  try {
    const scores = await Score.find();
    return scores;
  } catch (error) {
    throw error;
  }
};

exports.updateScore = async function (id, score) {
  try {
    const updatedScore = await Score.findByIdAndUpdate(id, score, {
      new: true,
    });
    await updatedScore.save();
    return updatedScore;
  } catch (error) {
    throw error;
  }
};

exports.deleteScore = async function (id) {
  try {
    const score = await Score.findByIdAndDelete(id);
    await score.save();
    return score;
  } catch (error) {
    throw error;
  }
};
// Path: LangLearn/Backend/langlearnapi/services/slideService.js
