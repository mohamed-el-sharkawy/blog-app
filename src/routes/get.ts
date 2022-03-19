import { Router } from "express";
const router = Router();
import { posts } from "../posts";

router.get("/api/posts/:id", (req, res) => {
  const post = posts.find((post) => post.id.toString() === req.params.id);
  if (!post) {
    res.status(404).send("The requested post is not found");
    return;
  }
  res.send(post);
});

export { router as getPostRouter };
