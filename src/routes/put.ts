import { Router } from "express";
import mongoose from "mongoose";
import { Post } from "../models/post";

const router = Router();

router.put("/api/posts/:postId", async (req, res) => {
  const content = req.body.content;
  const postId = req.params.postId;

  if (!mongoose.Types.ObjectId.isValid(postId)) {
    return res.status(400).send("Invalid post id");
  }

  const post = await Post.findById(postId);

  if (!post) {
    return res.status(404).send("The post is not found");
  }
  post.content = content || post.content;
  await post.save();

  return res.status(201).send(post);
});

export { router as UpdatePostRouter };
