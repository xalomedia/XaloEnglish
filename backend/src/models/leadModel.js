import mongoose from 'mongoose';

const leadSchema = mongoose.Schema(
    {
        name: { type: String, required: true },
        email: { type: String, required: true },
        phone: { type: String, required: true },
        message: { type: String },
        goals: [{ type: String }],
        consultationTime: [{ type: String }],
        status: {
            type: String,
            enum: ['new', 'contacted', 'converted', 'closed'],
            default: 'new',
        },
    },
    {
        timestamps: true,
    }
);

const Lead = mongoose.model('Lead', leadSchema);

export default Lead;
