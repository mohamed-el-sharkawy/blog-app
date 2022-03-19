import { Router } from 'express';
import { posts } from '../posts';

const router = Router();

router.post('/posts', (req, res) => {
    const content = req.body.content;
    if (!content) return res.status(400).json({ message: 'Must send content' });
    posts.push({ id: posts.length + 1, content: content });
    res.status(201).send(posts[posts.length - 1]);
});

export { router as postRouter };
