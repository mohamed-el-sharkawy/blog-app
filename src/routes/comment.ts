import { Router } from 'express';
import { createComment, updateComment } from '../controllers/comment';

const router = Router();

router.post('/api/posts/:postId/comments', createComment);
router.put('/api/posts/:postId/comments/:commentId', updateComment);

export { router as commentRouter };
