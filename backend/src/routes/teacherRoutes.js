import express from 'express';
import {
    getTeachers,
    createTeacher,
    updateTeacher,
    deleteTeacher,
} from '../controllers/teacherController.js';
import { protect, admin } from '../middleware/authMiddleware.js';

const router = express.Router();

router.route('/').get(getTeachers).post(protect, admin, createTeacher);
router
    .route('/:id')
    .put(protect, admin, updateTeacher)
    .delete(protect, admin, deleteTeacher);

export default router;
