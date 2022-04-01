import { Router } from 'express';
import { posts } from '../posts';

const router = Router();

router.delete('/api/posts/:id', (req, res) => {
  // Check if the post already exists
  const post = posts.find((post) => post.id === +req.params.id);
  if (!post) return res.status(404).send("The requested post doesn't exist.");

  // delete the requested post
  const index = posts.indexOf(post);
  posts.splice(index, 1);
  res.status(200).send(post);
});

export { router as deleteRouter };
