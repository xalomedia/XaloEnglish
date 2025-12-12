import asyncHandler from 'express-async-handler';
import Schedule from '../models/schedule.js';

// @desc    Get all schedules
// @route   GET /api/v1/schedules
// @access  Public
const getSchedules = asyncHandler(async (req, res) => {
    const schedules = await Schedule.find({}).sort({ month: -1 });
    res.json(schedules);
});

// @desc    Create a schedule
// @route   POST /api/v1/schedules
// @access  Private/Admin
const createSchedule = asyncHandler(async (req, res) => {
    const { month, scheduleImgURL, title } = req.body;

    // Ensure scheduleImgURL is an array
    const images = Array.isArray(scheduleImgURL) ? scheduleImgURL : [scheduleImgURL];

    const schedule = new Schedule({
        month,
        scheduleImgURL: images,
        title,
    });

    const createdSchedule = await schedule.save();
    res.status(201).json(createdSchedule);
});

// @desc    Delete a schedule
// @route   DELETE /api/v1/schedules/:id
// @access  Private/Admin
const deleteSchedule = asyncHandler(async (req, res) => {
    const schedule = await Schedule.findById(req.params.id);

    if (schedule) {
        await schedule.deleteOne();
        res.json({ message: 'Schedule removed' });
    } else {
        res.status(404);
        throw new Error('Schedule not found');
    }
});

export { getSchedules, createSchedule, deleteSchedule };
