import express from 'express';
import { helloRouter } from './routes/hello';

const app = express();

app.use(express.json());

app.use(helloRouter);
app.listen(3000, () => {
    console.log('Server running at localhost:3000');
});
