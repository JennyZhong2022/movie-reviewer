import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

mongoose
  .connect(process.env.DATABASE_URL)
  .then(() => {
    console.log("connect mongodb");
  })
  .catch((e) => console.log(e));

// const db = mongoose.connection;

// db.on("connected", function () {
//   console.log(`Connected to MongoDB ${db.name} at ${db.host}:${db.port}`);
// });

const app = express();

app.listen(3000, () => {
  console.log("Server is running on port 3000!");
});
