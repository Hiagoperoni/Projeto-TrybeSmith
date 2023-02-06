import OrdersModel from '../models/ordersModel';
import connection from '../models/connection';
import { IOrders } from '../Interfaces/Orders';

export default class OrdersService {
  constructor(private ordersModel = new OrdersModel(connection)) {}

  async getAll(): Promise<IOrders[]> {
    return this.ordersModel.getAll();
  }
}