import mongoose from 'mongoose';

const studentResultSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    inputScore: Number,
    overall: Number,
    listening: Number,
    reading: Number,
    writing: Number,
    speaking: Number,
    className: String,
    studyTime: String,
    testimonial: String,
    certificateImageUrl: String,
    profileImgURL: String,
  },
  { timestamps: true }
);

const StudentResult = mongoose.model('StudentResult', studentResultSchema);

export default StudentResult;
