import { Request, Response } from 'express';
import OrdersService from '../services/ordersService';

export default class OrdersController {
  constructor(private ordersService = new OrdersService()) {}

  async getAll(_req: Request, res: Response): Promise<void> {
    const result = await this.ordersService.getAll();
    
    res.status(200).json(result);
  }
}