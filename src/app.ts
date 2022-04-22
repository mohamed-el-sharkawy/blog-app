import express from 'express';
import { postRouter } from './routes/post';
import { commentRouter } from './routes/comment';
import mongoose from 'mongoose';
import 'dotenv/config';

const app = express();

app.use(express.json());
app.use(postRouter);
app.use(commentRouter);

async function run() {
    await mongoose.connect(process.env.MONGO_URI!);
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
        console.log(`Server running at localhost:${PORT}`);
    });
}

run();
