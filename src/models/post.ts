import mongoose from 'mongoose';

const postSchema = new mongoose.Schema(
    {
        content: {
            type: String,
            required: true,
        },
        comments: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'comment',
            },
        ],
    },
    {
        timestamps: true,
    }
);

export const Post = mongoose.model('post', postSchema);
