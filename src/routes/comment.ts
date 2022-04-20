import { Router } from 'express';
import {
    createComment,
    updateComment,
    getComments,
    getComment,
    deleteComment,
} from '../controllers/comment';

const router = Router();

router.post('/api/posts/:postId/comments', createComment);
router.put('/api/posts/:postId/comments/:commentId', updateComment);
router.get('/api/posts/:postId/comments', getComments);
router.get('/api/posts/:postId/comments/:commentId', getComment);
router.delete('/api/posts/:postId/comments/:commentId', deleteComment);

export { router as commentRouter };
