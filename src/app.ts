import express from 'express';
import { postRouter } from './routes/post';

const app = express();

app.use(express.json());

app.use(postRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running at localhost:${PORT}`);
});
