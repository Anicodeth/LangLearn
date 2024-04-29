const Progress = require("../models/Progress");

exports.createProgress = async function (progress) {
    try {
        const newProgress = await Progress(progress);
        await newProgress.save();
        return newProgress;
    } catch (error) {
        throw error;
    }
    }

exports.getProgress = async function (id) {
    try {
        const progress = await Progress.findById(id);
        return progress;
    } catch (error) {
        throw error;
    }
}

exports.getProgresses = async function () {
    try {
        const progresses = await Progress.find();
        return progresses;
    } catch (error) {
        throw error;
    }
}

exports.updateProgress = async function (id, progress) {
    try {
        const updatedProgress = await Progress.findByIdAndUpdate
        (id, progress, { new: true });
        await updatedProgress.save();
        return updatedProgress;
    }
    catch (error) {
        throw error;
    }
}

exports.deleteProgress = async function (id) {
    try {
        const progress = await Progress.findByIdAndDelete(id);
        await progress.save();
        return progress;
    } catch (error) {
        throw error;
    }
}
// Path: LangLearn/Backend/langlearnapi/services/progressService.js
