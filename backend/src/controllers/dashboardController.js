import asyncHandler from 'express-async-handler';
import Lead from '../models/leadModel.js';
import BlogPost from '../models/blogPost.js';
import ProgramGroup from '../models/programGroup.js';
import StudentResult from '../models/StudentResult.js';

// @desc    Get dashboard statistics
// @route   GET /api/v1/dashboard/stats
// @access  Private/Admin
const getDashboardStats = asyncHandler(async (req, res) => {

    // Run counts in parallel for performance
    const [leadCount, blogCount, programCount, resultCount] = await Promise.all([
        Lead.countDocuments({}),
        BlogPost.countDocuments({}),
        ProgramGroup.countDocuments({}),
        StudentResult.countDocuments({})
    ]);

    // Get recent leads for "Recent Activity"
    const recentLeads = await Lead.find({})
        .sort({ createdAt: -1 })
        .limit(5);

    res.json({
        counts: {
            leads: leadCount,
            blogs: blogCount,
            programs: programCount,
            results: resultCount
        },
        recentLeads
    });
});

export { getDashboardStats };
