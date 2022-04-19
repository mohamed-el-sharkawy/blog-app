import { Router } from "express";
import {
  createComment,
  updateComment,
  getComments,
  getComment,
} from "../controllers/comment";

const router = Router();

router.post("/api/posts/:postId/comments", createComment);
router.put("/api/posts/:postId/comments/:commentId", updateComment);
router.get("/api/posts/:postId/comments", getComments);
router.get("/api/posts/:postId/comments/:commentId", getComment);

export { router as commentRouter };
