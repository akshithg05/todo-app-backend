const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  input: {
    type: String,
    required: [true, "A task item must have some text!"],
  },
  complete: {
    type: Boolean,
    required: [true, "A task must be complete or incomplete"],
    default: false,
  },
  doneBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: [
      function () {
        return this.complete === true;
      },
      "If task is complete it needs to be done by a user",
    ],
  },
});

const Task = mongoose.model("Task", taskSchema);

module.exports = Task;
