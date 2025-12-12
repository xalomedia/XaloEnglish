import asyncHandler from 'express-async-handler';
import Mentor from '../models/mentor.js';

// @desc    Get all mentors
// @route   GET /api/v1/mentors
// @access  Public
const getMentors = asyncHandler(async (req, res) => {
    const mentors = await Mentor.find({});
    res.json(mentors);
});

// @desc    Get single mentor
// @route   GET /api/v1/mentors/:id
// @access  Public
const getMentorById = asyncHandler(async (req, res) => {
    const mentor = await Mentor.findById(req.params.id);
    if (mentor) {
        res.json(mentor);
    } else {
        res.status(404);
        throw new Error('Mentor not found');
    }
});

// @desc    Create a mentor
// @route   POST /api/v1/mentors
// @access  Private/Admin
const createMentor = asyncHandler(async (req, res) => {
    const { name, overall, slogan_Title, slogan_Content, imageUrl, ieltsImage } = req.body;

    const mentor = new Mentor({
        name,
        overall,
        slogan_Title,
        slogan_Content,
        imageUrl,
        ieltsImage,
    });

    const createdMentor = await mentor.save();
    res.status(201).json(createdMentor);
});

// @desc    Update a mentor
// @route   PUT /api/v1/mentors/:id
// @access  Private/Admin
const updateMentor = asyncHandler(async (req, res) => {
    const mentor = await Mentor.findById(req.params.id);

    if (mentor) {
        mentor.name = req.body.name || mentor.name;
        mentor.overall = req.body.overall || mentor.overall;
        mentor.slogan_Title = req.body.slogan_Title || mentor.slogan_Title;
        mentor.slogan_Content = req.body.slogan_Content || mentor.slogan_Content;
        mentor.imageUrl = req.body.imageUrl || mentor.imageUrl;
        mentor.ieltsImage = req.body.ieltsImage || mentor.ieltsImage;

        const updatedMentor = await mentor.save();
        res.json(updatedMentor);
    } else {
        res.status(404);
        throw new Error('Mentor not found');
    }
});

// @desc    Delete a mentor
// @route   DELETE /api/v1/mentors/:id
// @access  Private/Admin
const deleteMentor = asyncHandler(async (req, res) => {
    const mentor = await Mentor.findById(req.params.id);

    if (mentor) {
        await mentor.deleteOne();
        res.json({ message: 'Mentor removed' });
    } else {
        res.status(404);
        throw new Error('Mentor not found');
    }
});

export {
    getMentors,
    getMentorById,
    createMentor,
    updateMentor,
    deleteMentor,
};
