import { Router } from 'express';
import { Post } from '../models/post';
const router = Router();

router.post('/api/posts', async (req, res) => {
    const content = req.body.content;
    if (!content) return res.status(400).json({ message: 'Must send content' });
    const post = new Post({ content });
    await post.save();
    res.status(201).send(post);
});

export { router as postRouter };
