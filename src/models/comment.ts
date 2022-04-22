import mongoose from 'mongoose';

interface IComment {
    content: string;
    postId: mongoose.Types.ObjectId;
}
const commentSchema = new mongoose.Schema<IComment>(
    {
        content: {
            type: String,
            required: true,
        },
        postId: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

export const Comment = mongoose.model('comment', commentSchema);
