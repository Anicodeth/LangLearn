const {
  createUser,
  getUser,
  updateUser,
  deleteUser,
  getUsers,
  deductCoins,
  addCoins,
} = require("../services/userService");

exports.createUser = async function (req, res) {
  try {
    const user = await createUser(req.body);
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getUser = async function (req, res) {
  try {
    const user = await getUser(req.params.id);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getUsers = async function (req, res) {
  try {
    const users = await getUsers();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateUser = async function (req, res) {
  try {
    const user = await updateUser(req.params.id, req.body);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteUser = async function (req, res) {
  try {
    const user = await deleteUser(req.params.id);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.addCoins = async function (req, res) {
  try {
    const user = await addCoins(req.params.id, req.body.coins);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

exports.deductCoins = async function (req, res) {
  try {
    const user = await deductCoins(req.params.id, req.body.coins);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}