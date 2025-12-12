import mongoose from 'mongoose';

const programGroupSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    order: { type: Number, required: true },
  },
  { timestamps: true }
);

const ProgramGroup = mongoose.model('ProgramGroup', programGroupSchema);

export default ProgramGroup;
