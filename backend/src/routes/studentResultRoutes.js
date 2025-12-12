import express from 'express';
import {
    getStudentResults,
    getStudentResultById,
    createStudentResult,
    updateStudentResult,
    deleteStudentResult,
} from '../controllers/studentResultController.js';
import { protect, admin } from '../middleware/authMiddleware.js';

const router = express.Router();

router
    .route('/')
    .get(getStudentResults)
    .post(protect, admin, createStudentResult);
router
    .route('/:id')
    .get(getStudentResultById)
    .put(protect, admin, updateStudentResult)
    .delete(protect, admin, deleteStudentResult);

export default router;
