// import { RowDataPacket } from 'mysql2';
import { Pool, ResultSetHeader, RowDataPacket } from 'mysql2/promise';
import { ILogin } from '../Interfaces/Login';

export default class LoginModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  async createUser(
    username: string,
    vocation: string,
    level: number,
    password: string,
  ): Promise<void> {
    await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.users(username, vocation, level, password) VALUES(?, ?, ?, ?)',
      [username, vocation, level, password],
    );
  }

  async verifyLogin(
    username: string,
    password: string,
  ): Promise<object> {
    const [[result]] = await this.connection.execute<ILogin & RowDataPacket[]>(
      'SELECT * FROM Trybesmith.users WHERE username = ? AND password = ?',
      [username, password],
    );
    return result;
  }
}