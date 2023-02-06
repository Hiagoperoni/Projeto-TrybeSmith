import { Router } from 'express';
import OrdersController from '../controllers/ordersController';

const ordersController = new OrdersController();
const ordersRouter = Router();

ordersRouter.get('/', (req, res) => ordersController.getAll(req, res));

export default ordersRouter;