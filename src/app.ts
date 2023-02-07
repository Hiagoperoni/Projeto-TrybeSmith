import express from 'express';
import 'express-async-errors';
import userRouter from './Routes/usersRoutes';
import ordersRouter from './Routes/ordersRoutes';
import productRouter from './Routes/productRoutes';
import loginRouter from './Routes/loginRoutes';
import errorMidd from './Middlewares/errorMidd';

const app = express();

app.use(express.json());

app.use('/products', productRouter);
app.use('/orders', ordersRouter);
app.use('/users', userRouter);
app.use('/login', loginRouter);
app.use(errorMidd);

export default app;
