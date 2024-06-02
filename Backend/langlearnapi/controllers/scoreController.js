
const scoreService = require("../services/scoreService");


exports.createScore = async function (req, res) {
    try {
        const score = await scoreService.createScore(req.body);
        return res.status(200).json(score);
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
    }

exports.getScore = async function (req, res) {
    try {
        const score = await scoreService.getScore(req.params.id);
        return res.status(200).json(score);
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
    }

exports.getScores = async function (req, res) {
    try {
        const scores = await scoreService.getScores();
        return res.status(200).json(scores);
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
    }

exports.updateScore = async function (req, res) {
    try {
        const score = await scoreService.updateScore(req.params.id, req.body);
        return res.status(200).json(score);
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
    }

exports.deleteScore = async function (req, res) {
    try {
        const score = await scoreService.deleteScore(req.params.id);
        return res.status(200).json(score);
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
    }

exports.addScoreToUser = async function (req, res) {
    try {
        const score = await scoreService.addScoreToUser(req.params.id, req.body);
        return res.status(200).json(score);
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
    }


