import Comment from "../models/comment.model.js";

export const addCommentToMovie = async (req, res) => {
  const { commentText } = req.body;
  const { id } = req.params; // Movie ID from TMDb

  try {
    const newComment = new Comment({
      movieId: id,
      commentText,
    });

    await newComment.save();
    res
      .status(201)
      .json({ message: "Comment added successfully", comment: newComment });
  } catch (error) {
    console.error("Error adding comment:", error);
    res.status(500).json({ message: "Error adding comment", error });
  }
};
