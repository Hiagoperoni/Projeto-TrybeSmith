import express from 'express';
import productRouter from './Routes/productRoutes';

const app = express();

app.use(express.json());

app.use('/products', productRouter);

export default app;
