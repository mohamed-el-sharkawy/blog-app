import express from 'express';
import { helloRouter } from './routes/hello';
import { deleteRouter } from './routes/delete';
import { deleteAllRouter } from './routes/delete-all';

const app = express();

app.use(express.json());

app.use(helloRouter);
app.use(deleteRouter);
app.use(deleteAllRouter);

app.listen(3000, () => {
  console.log('Server running at localhost:3000');
});
