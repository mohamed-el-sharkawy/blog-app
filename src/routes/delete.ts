import { Router } from 'express';
import { Post } from '../models/post';
import { posts } from '../posts';

const router = Router();

router.delete('/api/posts/:postId', async (req, res) => {
  // Check if the post already exists
  const { postId } = req.params;
  const post = await Post.findById(postId);
  if (!post) return res.status(404).send("The requested post doesn't exist.");

  // delete the requested post
  await post.delete();
  res.status(200).send(post);
});

export { router as deleteRouter };
