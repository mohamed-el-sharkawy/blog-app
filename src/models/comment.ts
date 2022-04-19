import mongoose from 'mongoose';

interface IComment {
    content: string;
    postId: mongoose.Types.ObjectId;
}
const commentSchema = new mongoose.Schema(
    {
        content: {
            type: String,
            required: true,
        },
        postId: {
            type: mongoose.Types.ObjectId,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

export const Comment = mongoose.model('comment', commentSchema);
