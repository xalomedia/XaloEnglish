import mongoose from 'mongoose';

const mentorSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    overall: { type: Number, required: true },
    slogan_Title: { type: String, required: true },
    slogan_Content: { type: String, required: true },
    imageUrl: { type: String, required: true },
    ieltsImage: { type: String }, // Optional IELTS certificate/score image
  },
  { timestamps: true }
);

const Mentor = mongoose.model('Mentor', mentorSchema);

export default Mentor;
