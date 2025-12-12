import asyncHandler from 'express-async-handler';
import Course from '../models/courseModel.js';

// @desc    Fetch all active courses
// @route   GET /api/v1/courses
// @access  Public
const getCourses = asyncHandler(async (req, res) => {
    const courses = await Course.find({ is_active: true });
    res.json(courses);
});

// @desc    Fetch all courses (admin)
// @route   GET /api/v1/courses/all
// @access  Private/Admin
const getAllCourses = asyncHandler(async (req, res) => {
    const courses = await Course.find({});
    res.json(courses);
});

// @desc    Fetch single course by slug
// @route   GET /api/v1/courses/:slug
// @access  Public
const getCourseBySlug = asyncHandler(async (req, res) => {
    const course = await Course.findOne({ slug: req.params.slug });

    if (course) {
        res.json(course);
    } else {
        res.status(404);
        throw new Error('Course not found');
    }
});

// @desc    Create a course
// @route   POST /api/v1/courses
// @access  Private/Admin
const createCourse = asyncHandler(async (req, res) => {
    const {
        name,
        short_description,
        price,
        image_url,
        full_content,
        teacher_id,
        category_id,
    } = req.body;

    const course = new Course({
        name,
        short_description,
        price,
        image_url,
        full_content,
        teacher_id,
        category_id,
    });

    const createdCourse = await course.save();
    res.status(201).json(createdCourse);
});

// @desc    Update a course
// @route   PUT /api/v1/courses/:id
// @access  Private/Admin
const updateCourse = asyncHandler(async (req, res) => {
    const {
        name,
        short_description,
        price,
        is_active,
        image_url,
        full_content,
        teacher_id,
        category_id,
    } = req.body;

    const course = await Course.findById(req.params.id);

    if (course) {
        course.name = name || course.name;
        course.short_description = short_description || course.short_description;
        course.price = price !== undefined ? price : course.price;
        course.is_active = is_active !== undefined ? is_active : course.is_active;
        course.image_url = image_url || course.image_url;
        course.full_content = full_content || course.full_content;
        course.teacher_id = teacher_id || course.teacher_id;
        course.category_id = category_id || course.category_id;

        const updatedCourse = await course.save();
        res.json(updatedCourse);
    } else {
        res.status(404);
        throw new Error('Course not found');
    }
});

// @desc    Delete a course
// @route   DELETE /api/v1/courses/:id
// @access  Private/Admin
const deleteCourse = asyncHandler(async (req, res) => {
    const course = await Course.findById(req.params.id);

    if (course) {
        await course.deleteOne();
        res.json({ message: 'Course removed' });
    } else {
        res.status(404);
        throw new Error('Course not found');
    }
});

export {
    getCourses,
    getAllCourses,
    getCourseBySlug,
    createCourse,
    updateCourse,
    deleteCourse,
};
