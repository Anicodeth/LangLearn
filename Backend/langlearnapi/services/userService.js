
const User = require('../models/User');

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

exports.updateUser = async function (id, user) {
    try {
        const updatedUser = await User.findByIdAndUpdate(id, user, { new: true });
        await updatedUser.save()
        return updatedUser;
            }
    catch (error) {
        throw error;
    }
}

exports.deleteUser = async function (id) {
    try {
        const user = await User.findByIdAndDelete(id);
        await user.save();
        return user;
    } catch (error) {
        throw error;
    }
}