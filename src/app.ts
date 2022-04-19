import express from 'express';
import { postRouter } from './routes/post';
import mongoose from 'mongoose';

const app = express();

app.use(express.json());
app.use(postRouter);

async function run() {
    await mongoose.connect('mongodb://localhost:27017');
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
        console.log(`Server running at localhost:${PORT}`);
    });
}

run();
