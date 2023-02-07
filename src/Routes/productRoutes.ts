import { Router } from 'express';
import ProductController from '../controllers/productController';
import productNameMidd from '../Middlewares/productNameMidd';
import productAmountMidd from '../Middlewares/productAmountMidd';

const productController = new ProductController();
const productRouter = Router();

productRouter.get('/', (req, res) => productController.getAll(req, res));
productRouter.post(
  '/', 
  productNameMidd,

  productAmountMidd,

  (req, res) => productController.createProduct(req, res),
);

export default productRouter;