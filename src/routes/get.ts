import { Router } from "express";
import { Post } from "../models/post";
import mongoose from "mongoose";
const router = Router();
router.get("/api/posts/:id", async (req, res) => {
  const postId = req.params.id;
  if (!mongoose.Types.ObjectId.isValid(postId)) {
    return res.status(400).send("Invalid post id");
  }
  const post = await Post.findById(postId);
  if (!post) {
    res.status(404).send("The requested post is not found");
    return;
  }
  res.status(200).send(post);
});

export { router as getPostRouter };
