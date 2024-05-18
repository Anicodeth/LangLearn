const User = require("../models/User");
const jwt = require("jsonwebtoken");

exports.createUser = async function (name, email, password) {
  try {
    const user = await User({
      name: name,
      email: email,
      password: password,
    });
    await user.save();
    return user;
  } catch (error) {
    throw error;
  }
};

//Auth with jwt token
exports.loginUser = async function (email, password) {
  try {
    const user = await User.findOne({ email: email });
    if (!user) {
      throw new Error("User not found");
    }
    if (user.password !== password) {
       
      throw new Error("Password incorrect");
    }
    const token = jwt.sign({ email: email }, process.env.JWT_SECRET);
    return token;
  } catch (error) {
    throw error;
  }
};
