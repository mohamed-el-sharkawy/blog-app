import mongoose from 'mongoose';

interface IPost {
    content: string;
}
const postSchema = new mongoose.Schema<IPost>(
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
