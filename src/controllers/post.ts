import { Request, Response } from 'express';
import { Post } from '../models/post';

const createPost = async (req: Request, res: Response) => {
    const content = req.body.content;
    if (!content) return res.status(400).json({ message: 'Must send content' });
    const post = new Post({ content });
    await post.save();
    res.status(201).send(post);
};

export { createPost };
