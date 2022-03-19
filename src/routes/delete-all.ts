import { Router } from 'express';
import { posts } from '../posts';

const router = Router();

router.delete('/api/posts', (req, res) => {
  // Check if there are posts in the array
  if (!posts.length)
    return res.status(404).send('There are no posts to delete.');

  // delete all posts
  const deletedPosts = posts.splice(0);
  res.status(200).send(deletedPosts);
});

export { router as deleteAllRouter };
