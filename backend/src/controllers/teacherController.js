import asyncHandler from 'express-async-handler';
import Teacher from '../models/teacherModel.js';

// @desc    Fetch all teachers
// @route   GET /api/v1/teachers
// @access  Public
const getTeachers = asyncHandler(async (req, res) => {
    const teachers = await Teacher.find({});
    res.json(teachers);
});

// @desc    Create a teacher
// @route   POST /api/v1/teachers
// @access  Private/Admin
const createTeacher = asyncHandler(async (req, res) => {
    const { name, bio, expertise, profile_image_url } = req.body;

    const teacher = new Teacher({
        name,
        bio,
        expertise,
        profile_image_url,
    });

    const createdTeacher = await teacher.save();
    res.status(201).json(createdTeacher);
});

// @desc    Update a teacher
// @route   PUT /api/v1/teachers/:id
// @access  Private/Admin
const updateTeacher = asyncHandler(async (req, res) => {
    const { name, bio, expertise, profile_image_url } = req.body;

    const teacher = await Teacher.findById(req.params.id);

    if (teacher) {
        teacher.name = name || teacher.name;
        teacher.bio = bio || teacher.bio;
        teacher.expertise = expertise || teacher.expertise;
        teacher.profile_image_url = profile_image_url || teacher.profile_image_url;

        const updatedTeacher = await teacher.save();
        res.json(updatedTeacher);
    } else {
        res.status(404);
        throw new Error('Teacher not found');
    }
});

// @desc    Delete a teacher
// @route   DELETE /api/v1/teachers/:id
// @access  Private/Admin
const deleteTeacher = asyncHandler(async (req, res) => {
    const teacher = await Teacher.findById(req.params.id);

    if (teacher) {
        await teacher.deleteOne();
        res.json({ message: 'Teacher removed' });
    } else {
        res.status(404);
        throw new Error('Teacher not found');
    }
});

export { getTeachers, createTeacher, updateTeacher, deleteTeacher };
