import express from 'express';
import {
    getBlogPosts,
    getBlogPostBySlug,
    createBlogPost,
    updateBlogPost,
    deleteBlogPost,
} from '../controllers/blogPostController.js';
import { protect, admin } from '../middleware/authMiddleware.js';

const router = express.Router();

router.route('/').get(getBlogPosts).post(protect, admin, createBlogPost);
router
    .route('/:id')
    .put(protect, admin, updateBlogPost)
    .delete(protect, admin, deleteBlogPost);
router.route('/:slug').get(getBlogPostBySlug);

export default router;
