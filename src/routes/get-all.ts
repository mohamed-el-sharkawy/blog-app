import { Router } from "express";
import { posts } from "../posts";
const router = Router();
router.get("/api/posts", (req, res) => {
  if (posts.length === 0) {
    res.status(200).send([]);
    return;
  }
  res.status(200).send(posts);
});

export { router as getPostsRouter };
