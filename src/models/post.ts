import mongoose from 'mongoose';

const postSchema = new mongoose.Schema(
    {
        content: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

export const Post = mongoose.model('post', postSchema);
