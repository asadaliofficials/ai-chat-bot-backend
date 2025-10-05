import express from 'express';
import messageRouter from './routes/message.route.js';

const app = express();
app.use(express.json());

app.use('/api/v1', messageRouter);

export default app;
