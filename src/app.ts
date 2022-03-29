import express from 'express';
import { postRouter } from './routes/post';
import { deleteRouter } from './routes/delete';
import { deleteAllRouter } from './routes/delete-all';

const app = express();

app.use(express.json());

app.use(postRouter);
app.use(deleteRouter);
app.use(deleteAllRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running at localhost:${PORT}`);
});
