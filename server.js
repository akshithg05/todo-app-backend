const dotenv = require("dotenv");
const mongoose = require("mongoose");
const app = require("./app");

dotenv.config({ path: "./config.env" });

const mongodbUrl = process.env.MONGODB_URL.replace(
  "<MONGODB_PASSWORD>",
  process.env.MONGODB_PASSWORD
);

mongoose
  .connect(mongodbUrl)
  .then(console.log("DB connection successful"))
  .catch((err) => console.error("DB connection failed:", err));

app.listen(process.env.PORT, () => {
  console.log(`Listening on port ${process.env.PORT}`);
});
