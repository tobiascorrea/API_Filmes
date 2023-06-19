import express from 'express';
import setupMiddleware from './middlewares';
import setupRouter from './router';

const app = express();
app.use(express.json());
setupMiddleware(app);
setupRouter(app);
export default app;
