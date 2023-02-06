import { RowDataPacket } from 'mysql2';
import { Pool } from 'mysql2/promise';
import { IOrders } from '../Interfaces/Orders';

export default class OrdersModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  async getAll(): Promise<IOrders[]> {
    const [result] = await this.connection.execute<IOrders[] & RowDataPacket[]>(
      `SELECT orders.id AS id,
      orders.user_id AS userId,
      JSON_ARRAYAGG(products.id) AS productsIds
      FROM Trybesmith.orders AS orders
      INNER JOIN Trybesmith.products AS products
      ON orders.id = products.order_id
      GROUP BY products.order_id`,
    );
    return result;
  }
}
