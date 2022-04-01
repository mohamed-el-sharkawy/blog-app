import { Router } from "express";
import { posts } from "../posts";

const router = Router();

router.put("/api/posts/:postId", (req, res) => {
  const content = req.body.content;
  const postId = req.params.postId;
  const id = parseInt(postId);
  const found = posts.find((element) => element.id === id);
  if (!found) {
    return res.status(404).send("the post is not found");
  }
  found!.content = content || found!.content;
  res.status(201).send(content);
});

export { router as UpdatePostRouter };
