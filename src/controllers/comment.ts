import { Request, Response } from 'express';
import { Comment } from '../models/comment';

const createComment = async (req: Request, res: Response) => {
    const postId = req.params.postId;
    const { content } = req.body;
    console.log({ content });
    const comment = new Comment({ content, postId });
    await comment.save();
    res.status(201).send(comment);
};

export { createComment };
