import express from 'express';
import {
    getBlogs,
    getLatestBlogs,
    getBlogBySlug,
    createBlog,
    updateBlog,
    deleteBlog,
} from '../controllers/blogController.js';
import { protect, admin } from '../middleware/authMiddleware.js';

const router = express.Router();

router.route('/').get(getBlogs).post(protect, admin, createBlog);
router.get('/latest', getLatestBlogs);
router.route('/:slug').get(getBlogBySlug);
router
    .route('/:id')
    .put(protect, admin, updateBlog)
    .delete(protect, admin, deleteBlog);

export default router;
