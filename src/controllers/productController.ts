import { Request, Response } from 'express';
import ProductService from '../services/productsService';

export default class ProductController {
  constructor(private productService = new ProductService()) {}

  async getAll(_req: Request, res: Response): Promise<void> {
    const result = await this.productService.getAll();
    
    res.status(200).json(result);
  }

  async createProduct(req: Request, res: Response): Promise<void> {
    const { name, amount } = req.body;
    const result = await this.productService.createProduct(name, amount);

    res.status(201).json(result);
  }
}