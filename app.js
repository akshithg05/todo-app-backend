const express = require("express");
const taskRouter = require("./routes/taskRouter");
const userRouter = require("./routes/userRouter");

const app = express();
app.use(express.json());

app.use("/api/v1/tasks", taskRouter);
app.use("/api/v1/users", userRouter);

module.exports = app;
