import { Request, Response } from 'express';
import mongoose from 'mongoose';
import { Comment } from '../models/comment';
import { Post } from '../models/post';

const createComment = async (req: Request, res: Response) => {
    const postId = req.params.postId;
    if (!mongoose.Types.ObjectId.isValid(postId))
        return res.status(400).send({ error: 'Invalid post id' });
    const post = await Post.findById(postId);
    if (!post) return res.status(404).send({ message: 'Post not found' });
    const { content } = req.body;
    const comment = new Comment({ content, postId });
    await comment.save();
    res.status(201).send(comment);
};

const updateComment = async (req: Request, res: Response) => {
    const { postId, commentId } = req.params;
    const content = req.body.content;
    if (!mongoose.Types.ObjectId.isValid(postId)) {
        return res.status(400).send('Invalid post id');
    }
    if (!mongoose.Types.ObjectId.isValid(commentId)) {
        return res.status(400).send('Invalid comment id');
    }
    const post = await Post.findById(postId);
    if (!post) {
        return res.status(404).send('Post not found');
    }
    const comment = await Comment.findById(commentId);
    if (!comment) return res.status(404).send('Comment not found');
    if (comment.postId.toString() !== postId) {
        return res.status(400).send('Invalid post');
    }

    comment.content = content || comment.content;
    await comment.save();

    res.status(201).send(comment);
};

const getComment = async (req: Request, res: Response) => {
    const { postId, commentId } = req.params;
    const post = await Post.findById(postId);
    if (!post) return res.status(404).send("The requested post doesn't exist.");
    if (!mongoose.Types.ObjectId.isValid(postId)) {
        return res.status(400).send('Invalid post id');
    }
    if (!mongoose.Types.ObjectId.isValid(commentId)) {
        return res.status(400).send('Invalid comment id');
    }
    const comment = await Comment.findById(commentId);
    if (!comment || comment.postId.equals(postId)) {
        res.status(404).send('The requested comment is not found');
        return;
    }
    res.status(200).send(comment);
};

const getComments = async (req: Request, res: Response) => {
    const { postId } = req.params;
    const post = await Post.findById(postId);
    if (!post) return res.status(404).send("The requested post doesn't exist.");
    if (!mongoose.Types.ObjectId.isValid(postId)) {
        return res.status(400).send('Invalid post id');
    }
    const comments = await Comment.find({ postId: postId });
    res.status(200).send(comments);
};

const deleteComment = async (req: Request, res: Response) => {
    const { postId, commentId } = req.params;
    if (!mongoose.Types.ObjectId.isValid(postId)) {
        return res.status(400).send('Invalid post id');
    }
    if (!mongoose.Types.ObjectId.isValid(commentId)) {
        return res.status(400).send('Invalid comment id');
    }
    const post = await Post.findById(postId);
    if (!post) return res.status(404).send("The requested post doesn't exist.");
    const comment = await Comment.findById(commentId);
    if (!comment) {
        return res.status(404).send("The requested comment doesn't exist.");
    }
    await comment.delete();
    res.status(204).send(comment);
};

const deleteComments = async (req: Request, res: Response) => {
    const { postId } = req.params;
    const post = await Post.findById(postId);
    if (!post) return res.status(404).send("The requested post doesn't exist.");
    if (!mongoose.Types.ObjectId.isValid(postId)) {
        return res.status(400).send('Invalid post id');
    }
    await Comment.deleteMany({ postId });
    res.status(204).send();
};

export {
    createComment,
    updateComment,
    getComment,
    getComments,
    deleteComment,
    deleteComments,
};
