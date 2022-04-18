import { Router } from "express";
import { Post } from "../models/post";
import mongoose from "mongoose";
import { getPost } from "../controllers/post";
const router = Router();
router.get("/api/posts/:id", getPost);

export { router as getPostRouter };
