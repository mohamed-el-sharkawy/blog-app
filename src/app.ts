import express from 'express';
import { postRouter } from './routes/post';
import { UpdatePostRouter } from './routes/put';
import { getPostsRouter } from './routes/get-all';
import { getPostRouter } from './routes/get';
import { deleteRouter } from './routes/delete';
import { deleteAllRouter } from './routes/delete-all';
import mongoose from 'mongoose';

const app = express();

app.use(express.json());
app.use(UpdatePostRouter);
app.use(postRouter);
app.use(getPostsRouter);
app.use(getPostRouter);
app.use(deleteRouter);
app.use(deleteAllRouter);

async function run() {
    await mongoose.connect('mongodb://localhost:27017');
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
        console.log(`Server running at localhost:${PORT}`);
    });
}
