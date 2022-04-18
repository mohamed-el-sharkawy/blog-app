import mongoose from 'mongoose';

const postSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true,
    },
});

export const Post = mongoose.model('post', postSchema);
