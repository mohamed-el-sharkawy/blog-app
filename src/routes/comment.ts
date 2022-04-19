import { Router } from 'express';
import { createComment } from '../controllers/comment';

const router = Router();

router.post('/api/posts/:postId/comments', createComment);

export { router as commentRouter };
