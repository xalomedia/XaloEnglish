import express from 'express';
import {
    getCourses,
    getAllCourses,
    getCourseBySlug,
    createCourse,
    updateCourse,
    deleteCourse,
} from '../controllers/courseController.js';
import { protect, admin } from '../middleware/authMiddleware.js';

const router = express.Router();

router.route('/').get(getCourses).post(protect, admin, createCourse);
router.get('/all', protect, admin, getAllCourses);
router.route('/:slug').get(getCourseBySlug);
router
    .route('/:id')
    .put(protect, admin, updateCourse)
    .delete(protect, admin, deleteCourse);

export default router;
