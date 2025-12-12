import asyncHandler from 'express-async-handler';
import ProgramGroup from '../models/programGroup.js';
import ProgramTrack from '../models/programTrack.js';

// --- Program Groups ---

// @desc    Get all program groups
// @route   GET /api/v1/programs/groups
// @access  Public
const getProgramGroups = asyncHandler(async (req, res) => {
    const groups = await ProgramGroup.find({}).sort({ order: 1 });
    const tracks = await ProgramTrack.find({}).sort({ order: 1 });

    const groupsWithTracks = groups.map(group => {
        const groupTracks = tracks.filter(track => track.group.toString() === group._id.toString());
        return { ...group.toObject(), tracks: groupTracks };
    });

    res.json(groupsWithTracks);
});

// @desc    Create a program group
// @route   POST /api/v1/programs/groups
// @access  Private/Admin
const createProgramGroup = asyncHandler(async (req, res) => {
    const { name, slug, order } = req.body;
    const group = new ProgramGroup({ name, slug, order });
    const createdGroup = await group.save();
    res.status(201).json(createdGroup);
});

// @desc    Update a program group
// @route   PUT /api/v1/programs/groups/:id
// @access  Private/Admin
const updateProgramGroup = asyncHandler(async (req, res) => {
    const group = await ProgramGroup.findById(req.params.id);
    if (group) {
        group.name = req.body.name || group.name;
        group.slug = req.body.slug || group.slug;
        group.order = req.body.order || group.order;
        const updatedGroup = await group.save();
        res.json(updatedGroup);
    } else {
        res.status(404);
        throw new Error('Program Group not found');
    }
});

// @desc    Delete a program group
// @route   DELETE /api/v1/programs/groups/:id
// @access  Private/Admin
const deleteProgramGroup = asyncHandler(async (req, res) => {
    const group = await ProgramGroup.findById(req.params.id);
    if (group) {
        await group.deleteOne();
        res.json({ message: 'Program Group removed' });
    } else {
        res.status(404);
        throw new Error('Program Group not found');
    }
});

// --- Program Tracks ---

// @desc    Get all program tracks
// @route   GET /api/v1/programs/tracks
// @access  Public
const getProgramTracks = asyncHandler(async (req, res) => {
    const tracks = await ProgramTrack.find({}).populate('group').sort({ order: 1 });
    res.json(tracks);
});

// @desc    Get single program track by slug
// @route   GET /api/v1/programs/tracks/:slug
// @access  Public
const getProgramTrackBySlug = asyncHandler(async (req, res) => {
    const track = await ProgramTrack.findOne({ slug: req.params.slug }).populate(
        'group'
    );
    if (track) {
        res.json(track);
    } else {
        res.status(404);
        throw new Error('Program Track not found');
    }
});

// @desc    Create a program track
// @route   POST /api/v1/programs/tracks
// @access  Private/Admin
const createProgramTrack = asyncHandler(async (req, res) => {
    const {
        group,
        name,
        slug,
        order,
        entryBandText,
        exitBandText,
        durationText,
        targetAudience,
        syllabusItems,
        detailIllustrationUrl,
        formats,
        courseLink,
    } = req.body;

    const track = new ProgramTrack({
        group,
        name,
        slug,
        order,
        entryBandText,
        exitBandText,
        durationText,
        targetAudience,
        syllabusItems,
        detailIllustrationUrl,
        formats,
        courseLink,
    });

    const createdTrack = await track.save();
    res.status(201).json(createdTrack);
});

// @desc    Update a program track
// @route   PUT /api/v1/programs/tracks/:id
// @access  Private/Admin
const updateProgramTrack = asyncHandler(async (req, res) => {
    const track = await ProgramTrack.findById(req.params.id);

    if (track) {
        track.group = req.body.group || track.group;
        track.name = req.body.name || track.name;
        track.slug = req.body.slug || track.slug;
        track.description = req.body.description || track.description;
        track.order = req.body.order || track.order;
        track.entryBandText = req.body.entryBandText || track.entryBandText;
        track.exitBandText = req.body.exitBandText || track.exitBandText;
        track.durationText = req.body.durationText || track.durationText;
        track.targetAudience = req.body.targetAudience || track.targetAudience;
        track.syllabusItems = req.body.syllabusItems || track.syllabusItems;
        track.detailIllustrationUrl =
            req.body.detailIllustrationUrl || track.detailIllustrationUrl;
        track.formats = req.body.formats || track.formats;
        track.courseLink = req.body.courseLink || track.courseLink;

        const updatedTrack = await track.save();
        res.json(updatedTrack);
    } else {
        res.status(404);
        throw new Error('Program Track not found');
    }
});

// @desc    Delete a program track
// @route   DELETE /api/v1/programs/tracks/:id
// @access  Private/Admin
const deleteProgramTrack = asyncHandler(async (req, res) => {
    const track = await ProgramTrack.findById(req.params.id);
    if (track) {
        await track.deleteOne();
        res.json({ message: 'Program Track removed' });
    } else {
        res.status(404);
        throw new Error('Program Track not found');
    }
});

export {
    getProgramGroups,
    createProgramGroup,
    updateProgramGroup,
    deleteProgramGroup,
    getProgramTracks,
    getProgramTrackBySlug,
    createProgramTrack,
    updateProgramTrack,
    deleteProgramTrack,
};
