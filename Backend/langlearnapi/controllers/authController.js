
const authService = require('../services/authService');

exports.createUser = async function (req, res) {
    try {
        const user = await authService.createUser(req.body.name, req.body.email, req.body.password);
        return res.status(200).json(user);
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
}

exports.loginUser = async function (req, res) {
    try {
        const token = await authService.loginUser(req.body.email, req.body.password);
        return res.status(200).json(token);
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
}