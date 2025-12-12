import asyncHandler from 'express-async-handler';
import StudentResult from '../models/StudentResult.js';

// @desc    Get all student results
// @route   GET /api/v1/student-results
// @access  Public
const getStudentResults = asyncHandler(async (req, res) => {
    const results = await StudentResult.find({}).sort({ createdAt: -1 });
    res.json(results);
});

// @desc    Get single student result
// @route   GET /api/v1/student-results/:id
// @access  Public
const getStudentResultById = asyncHandler(async (req, res) => {
    const result = await StudentResult.findById(req.params.id);
    if (result) {
        res.json(result);
    } else {
        res.status(404);
        throw new Error('Student Result not found');
    }
});

// @desc    Create a student result
// @route   POST /api/v1/student-results
// @access  Private/Admin
const createStudentResult = asyncHandler(async (req, res) => {
    const {
        name,
        inputScore,
        overall,
        listening,
        reading,
        writing,
        speaking,
        className,
        studyTime,
        testimonial,
        certificateImageUrl,
        profileImgURL,
    } = req.body;

    const result = new StudentResult({
        name,
        inputScore,
        overall,
        listening,
        reading,
        writing,
        speaking,
        className,
        studyTime,
        testimonial,
        certificateImageUrl,
        profileImgURL,
    });

    const createdResult = await result.save();
    res.status(201).json(createdResult);
});

// @desc    Update a student result
// @route   PUT /api/v1/student-results/:id
// @access  Private/Admin
const updateStudentResult = asyncHandler(async (req, res) => {
    const result = await StudentResult.findById(req.params.id);

    if (result) {
        result.name = req.body.name || result.name;
        result.inputScore = req.body.inputScore || result.inputScore;
        result.overall = req.body.overall || result.overall;
        result.listening = req.body.listening || result.listening;
        result.reading = req.body.reading || result.reading;
        result.writing = req.body.writing || result.writing;
        result.speaking = req.body.speaking || result.speaking;
        result.className = req.body.className || result.className;
        result.studyTime = req.body.studyTime || result.studyTime;
        result.testimonial = req.body.testimonial || result.testimonial;
        result.certificateImageUrl =
            req.body.certificateImageUrl || result.certificateImageUrl;
        result.profileImgURL = req.body.profileImgURL || result.profileImgURL;

        const updatedResult = await result.save();
        res.json(updatedResult);
    } else {
        res.status(404);
        throw new Error('Student Result not found');
    }
});

// @desc    Delete a student result
// @route   DELETE /api/v1/student-results/:id
// @access  Private/Admin
const deleteStudentResult = asyncHandler(async (req, res) => {
    const result = await StudentResult.findById(req.params.id);

    if (result) {
        await result.deleteOne();
        res.json({ message: 'Student Result removed' });
    } else {
        res.status(404);
        throw new Error('Student Result not found');
    }
});

export {
    getStudentResults,
    getStudentResultById,
    createStudentResult,
    updateStudentResult,
    deleteStudentResult,
};
