import { Router } from "express";
import { Post } from "../models/post";
import { getPosts } from "../controllers/post";
const router = Router();
router.get("/api/posts", getPosts);

export { router as getPostsRouter };
