import express from 'express';
import {
    getMentors,
    getMentorById,
    createMentor,
    updateMentor,
    deleteMentor,
} from '../controllers/mentorController.js';
import { protect, admin } from '../middleware/authMiddleware.js';

const router = express.Router();

router.route('/').get(getMentors).post(protect, admin, createMentor);
router
    .route('/:id')
    .get(getMentorById)
    .put(protect, admin, updateMentor)
    .delete(protect, admin, deleteMentor);

export default router;
