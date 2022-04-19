import { Request, Response } from "express";
import mongoose from "mongoose";
import { Comment } from "../models/comment";

const createComment = async (req: Request, res: Response) => {
  const postId = req.params.postId;
  const { content } = req.body;
  console.log({ content });
  const comment = new Comment({ content, postId });
  await comment.save();
  res.status(201).send(comment);
};

const updateComment = async (req: Request, res: Response) => {
  const { postId, commentId } = req.params;
  const content = req.body.content;
  if (!mongoose.Types.ObjectId.isValid(postId)) {
    return res.status(400).send("Invalid post id");
  }
  if (!mongoose.Types.ObjectId.isValid(commentId)) {
    return res.status(400).send("Invalid comment id");
  }
  const comment = await Comment.findById(commentId);

  if (comment.postId.toString() !== postId) {
    return res.status(400).send("Invalid post");
  }

  comment.content = content || comment.content;
  await comment.save();

  res.status(201).send(comment);
};

const getComments = async (req: Request, res: Response) => {
  const { postId } = req.params;
  if (!mongoose.Types.ObjectId.isValid(postId)) {
    return res.status(400).send("Invalid post id");
  }
  const comments = await Comment.find({ postId: postId });
  res.status(200).send(comments);
};

const getComment = async (req: Request, res: Response) => {
  const { postId, commentId } = req.params;
  if (!mongoose.Types.ObjectId.isValid(postId)) {
    return res.status(400).send("Invalid post id");
  }
  if (!mongoose.Types.ObjectId.isValid(commentId)) {
    return res.status(400).send("Invalid comment id");
  }
  const comment = await Comment.findById(commentId);
  if (!comment || postId != comment.postId) {
    res.status(404).send("The requested comment is not found");
    return;
  }
  res.status(200).send(comment);
};
export { createComment, updateComment, getComments, getComment };
