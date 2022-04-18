import { Router } from "express";
import { Post } from "../models/post";
const router = Router();
router.get("/api/posts", async (req, res) => {
  const posts = await Post.find({});
  if (posts.length === 0) {
    res.status(200).send([]);
    return;
  }
  res.status(200).send(posts);
});

export { router as getPostsRouter };
