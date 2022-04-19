import { Request, Response } from "express";
import { Post } from "../models/post";
import { Comment } from "../models/comment";
import mongoose from "mongoose";

const createPost = async (req: Request, res: Response) => {
  const content = req.body.content;
  if (!content) return res.status(400).json({ message: "Must send content" });
  const post = new Post({ content });
  await post.save();
  res.status(201).send(post);
};

const updatePost = async (req: Request, res: Response) => {
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
};
const getPost = async (req: Request, res: Response) => {
  const postId = req.params.id;
  if (!mongoose.Types.ObjectId.isValid(postId)) {
    return res.status(400).send("Invalid post id");
  }
  const post = await Post.findById(postId);
  const comments = await Comment.find({ postId: postId });
  if (!post) {
    res.status(404).send("The requested post is not found");
    return;
  }
  const response = {...post,comments};
  res.status(200).send(response);
};
const getPosts = async (req: Request, res: Response) => {
  const posts = await Post.find({});
  res.status(200).send(posts);
};

const deletePost = async (req: Request, res: Response) => {
  // Check if the post already exists
  const { postId } = req.params;

  if (!mongoose.Types.ObjectId.isValid(postId)) {
    return res.status(400).send("Invalid post id");
  }

  const post = await Post.findById(postId);
  if (!post) return res.status(404).send("The requested post doesn't exist.");

  // delete the requested post
  await post.delete();
  res.status(200).send(post);
};

const deletePosts = async (req: Request, res: Response) => {
  await Post.deleteMany({});
  // delete all posts
  res.status(204).send();
};

export { createPost, updatePost, getPost, getPosts, deletePost, deletePosts };
