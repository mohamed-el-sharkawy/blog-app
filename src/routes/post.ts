import { Router } from 'express';
import {
    createPost,
    deletePost,
    deletePosts,
    getPost,
    getPosts,
    updatePost,
} from '../controllers/post';
const router = Router();

router.post('/api/posts', createPost);
router.put('/api/posts/:postId', updatePost);
router.get('/api/posts/:id', getPost);
router.get('/api/posts', getPosts);
router.delete('/api/posts', deletePosts);
router.delete('/api/posts/:postId', deletePost);

export { router as postRouter };
