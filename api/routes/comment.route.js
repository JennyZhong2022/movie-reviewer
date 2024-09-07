import express from "express";
import { addCommentToMovie } from "../controllers/comment.controller.js";

const router = express.Router();

router.post("/:id/comments", addCommentToMovie);

export default router;
