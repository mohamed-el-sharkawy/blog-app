import { Router } from 'express';
import mongoose from 'mongoose';
import { Post } from '../models/post';

const router = Router();

router.delete('/api/posts/:postId', async (req, res) => {
  // Check if the post already exists
  const { postId } = req.params;

  if (!mongoose.Types.ObjectId.isValid(postId)) {
    return res.status(400).send('Invalid post id');
  }

  const post = await Post.findById(postId);
  if (!post) return res.status(404).send("The requested post doesn't exist.");

  // delete the requested post
  await post.delete();
  res.status(200).send(post);
});

export { router as deleteRouter };
