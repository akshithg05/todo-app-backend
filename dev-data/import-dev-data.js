const mongoose = require("mongoose");
const fs = require("fs");
const Task = require("../models/taskModel");
const User = require("../models/userModel");
const dotenv = require("dotenv");

dotenv.config({ path: "../config.env" });

const mongodbUrl = process.env.MONGODB_URL.replace(
  "<MONGODB_PASSWORD>",
  process.env.MONGODB_PASSWORD
);

mongoose
  .connect(mongodbUrl)
  .then(console.log("DB connection successful"))
  .catch((err) => console.error("DB connection failed:", err));

const tasks = JSON.parse(fs.readFileSync(`${__dirname}/tasks.json`, "utf-8"));
const users = JSON.parse(fs.readFileSync(`${__dirname}/users.json`, "utf-8"));

const importData = async () => {
  try {
    await Task.create(tasks);
    await User.create(users);
  } catch (err) {
    console.log(err);
  } finally {
    console.log("Data imported successfully");
    process.exit();
  }
};

const deleteData = async () => {
  try {
    await Task.deleteMany();
    await User.deleteMany();
  } catch (err) {
    console.log(err);
  } finally {
    console.log("Data deleted successfully");
    process.exit();
  }
};

if (process.argv[2] == "--import") {
  importData();
}

if (process.argv[2] == "--delete") {
  deleteData();
}
