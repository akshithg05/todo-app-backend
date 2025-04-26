const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "A user must have a name!"],
  },
  petName: {
    type: String,
  },
  email: {
    type: String,
    required: [true, "A user must have an email id !"],
  },
  password: {
    type: String,
    required: [true, "A user must have a password"],
  },
  role: {
    type: String,
    enum: ["user", "admin"],
    default: "user",
  },
  tasks: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Task",
    },
  ],
});

const User = mongoose.model("User", userSchema);

module.exports = User;
