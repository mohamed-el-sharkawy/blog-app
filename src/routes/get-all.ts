import { Router } from "express";
const router = Router();
import { posts } from "../posts";

router.get("/api/posts", (req, res) => {
  if (posts.length === 0) {
    res.status(404).send("No posts found");
    return;
  }
  res.status(200).send(posts);
});

export { router as getPostsRouter };
