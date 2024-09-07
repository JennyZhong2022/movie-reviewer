import mongoose from "mongoose";
const { Schema } = mongoose;

const commentSchema = new mongoose.Schema({
  movieId: {
    type: String, // Store the TMDb movie ID
    required: true,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    // required: true,
  },
  commentText: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Comment = mongoose.model("Comment", commentSchema);
export default Comment;
