import mongoose from 'mongoose';

const scheduleSchema = new mongoose.Schema(
    {
        month: { type: Date, required: true }, // Store as Date (e.g., 2025-10-01) for sorting
        scheduleImgURL: [String], // Array of image URLs
        title: { type: String }, // Optional description
    },
    { timestamps: true }
);

const Schedule = mongoose.model('Schedule', scheduleSchema);

export default Schedule;
