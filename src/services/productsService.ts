import ProductModel from '../models/productsModel';
import connection from '../models/connection';
import { IProduct } from '../Interfaces/Product';

export default class ProductService {
  constructor(private productModel = new ProductModel(connection)) {}

  async getAll(): Promise<IProduct[]> {
    return this.productModel.getAll();
  }
}