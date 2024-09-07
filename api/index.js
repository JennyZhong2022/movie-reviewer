import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.route.js";
import movieRoutes from "./routes/comment.route.js";

dotenv.config();

mongoose
  .connect(process.env.DATABASE_URL)
  .then(() => {
    console.log("connect mongodb");
  })
  .catch((e) => console.log(e));

const app = express();

app.use(express.json());

app.listen(3000, () => {
  console.log("Server is running on port 3000!");
});

app.use("/api/auth", authRoutes);
app.use("/api/movies", movieRoutes);

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal server Error";
  res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});
