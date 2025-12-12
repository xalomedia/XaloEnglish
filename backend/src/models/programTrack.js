import mongoose from 'mongoose';
import ProgramGroup from './programGroup.js';

const programTrackSchema = new mongoose.Schema(
  {
    group: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'ProgramGroup',
      required: true,
    },

    name: { type: String, required: true },
    slug: { type: String, required: true },
    description: { type: String },
    order: { type: Number, required: true },

    entryBandText: String,
    exitBandText: String,
    durationText: String,
    targetAudience: [
      {
        title: String,
        bullets: [String],
      },
    ],

    syllabusItems: [
      {
        code: String,
        title: String,
        description: String,
        bullets: [String],
      },
    ],

    detailIllustrationUrl: String,
    formats: [{ type: String, enum: ['Online', 'Offline'] }],
    courseLink: { type: String },
  },
  { timestamps: true }
);

const ProgramTrack = mongoose.model('ProgramTrack', programTrackSchema);

export default ProgramTrack;
