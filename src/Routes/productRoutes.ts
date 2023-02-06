import { Router } from 'express';
import ProductController from '../controllers/productController';

const productController = new ProductController();
const productRouter = Router();

productRouter.get('/', (req, res) => productController.getAll(req, res));

export default productRouter;