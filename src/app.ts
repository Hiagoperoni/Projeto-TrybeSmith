import express from 'express';
import loginRouter from './Routes/loginRoutes';
import ordersRouter from './Routes/ordersRoutes';
import productRouter from './Routes/productRoutes';

const app = express();

app.use(express.json());

app.use('/products', productRouter);
app.use('/orders', ordersRouter);
app.use('/users', loginRouter);

export default app;
