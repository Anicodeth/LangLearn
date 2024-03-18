const mongoose = require("mongoose");

// Base schema
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: function (value) {
        return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(value);
      },
      message: (props) => `${props.value} is not a valid email address!`,
    },
  },
  password: {
    type: String,
    required: true,
    minlength: [8, "Password must be at least 8 characters long"],
  },
  quizzes: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Score",
    },
  ],
  progress: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Progress",
    },
  ],
  coins: {
    type: Number,
    default: 0,
  },

  role: {
    type: String,
    default: "user",
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
