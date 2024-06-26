const User = require("../models/User");

exports.createUser = async function (user) {
  try {
    const newUser = await User(user);
    await newUser.save();

    return newUser;
  } catch (error) {
    throw error;
  }
};

exports.getUser = async function (id) {
  try {
    const user = await User.findById(id);
    return user;
  } catch (error) {
    throw error;
  }
};

exports.getUsers = async function () {
  try {
    const users = await User.find();
    return users;
  } catch (error) {
    throw error;
  }
};

exports.updateUser = async function (id, user) {
  try {
    const updatedUser = await User.findByIdAndUpdate(id, user, { new: true });
    await updatedUser.save();
    return updatedUser;
  } catch (error) {
    throw error;
  }
};

exports.deleteUser = async function (id) {
  try {
    const user = await User.findByIdAndDelete(id);
    return user;
  } catch (error) {
    throw error;
  }
};

exports.addCoins = async function (id, coins) {
  try {
    const user = await User.findById(id);
    user.coins += coins;
    await user.save();
    return user;
  } catch (error) {
    throw error;
  }
};


exports.deductCoins = async function (id, coins) {
  try {
    const user = await User.findById(id);
    user.coins -= coins;
    await user.save();
    return user;
  } catch (error) {
    throw error;
  }
}

exports.getCoinBalance = async function (id) {
  try {
    const user = await User.findById(id);
    return user.coins;
  } catch (error) {
    throw error;
  }
}
