import { Router } from 'express';
import { Post } from '../models/post';
// import { posts } from '../posts';

const router = Router();

router.delete('/api/posts', async (req, res) => {
  await Post.deleteMany({});
  // delete all posts
  res.status(204);
});

export { router as deleteAllRouter };
