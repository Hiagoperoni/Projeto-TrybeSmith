import express from 'express';
import ordersRouter from './Routes/ordersRoutes';
import productRouter from './Routes/productRoutes';

const app = express();

app.use(express.json());

app.use('/products', productRouter);
app.use('/orders', ordersRouter);

export default app;
