import express from 'express';
import {
    getProgramGroups,
    createProgramGroup,
    updateProgramGroup,
    deleteProgramGroup,
    getProgramTracks,
    getProgramTrackBySlug,
    createProgramTrack,
    updateProgramTrack,
    deleteProgramTrack,
} from '../controllers/programController.js';
import { protect, admin } from '../middleware/authMiddleware.js';

const router = express.Router();

// Program Groups
router
    .route('/groups')
    .get(getProgramGroups)
    .post(protect, admin, createProgramGroup);
router
    .route('/groups/:id')
    .put(protect, admin, updateProgramGroup)
    .delete(protect, admin, deleteProgramGroup);

// Program Tracks
router
    .route('/tracks')
    .get(getProgramTracks)
    .post(protect, admin, createProgramTrack);
router
    .route('/tracks/:id')
    .put(protect, admin, updateProgramTrack)
    .delete(protect, admin, deleteProgramTrack);
router.route('/tracks/:slug').get(getProgramTrackBySlug);

export default router;
