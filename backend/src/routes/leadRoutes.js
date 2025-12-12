import express from 'express';
import {
    createLead,
    getLeads,
    exportLeads,
} from '../controllers/leadController.js';
import { protect, admin } from '../middleware/authMiddleware.js';

const router = express.Router();

router.route('/').post(createLead).get(protect, admin, getLeads);
router.get('/export', protect, admin, exportLeads);

export default router;
