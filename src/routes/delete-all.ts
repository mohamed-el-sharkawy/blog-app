import { Router } from 'express';
import { Post } from '../models/post';
// import { posts } from '../posts';

const router = Router();

router.delete('/api/posts', async (req, res) => {
  // Check if there are posts in the array
  const posts = await Post.deleteMany({});
  // delete all posts
  res.status(200).send([]);
});

export { router as deleteAllRouter };
