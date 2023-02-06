import LoginModel from '../models/loginModel';
import connection from '../models/connection';
import generateToken from '../Utils/JWT';

export default class LoginService {
  constructor(private loginModel = new LoginModel(connection)) {}

  async createUser(
    username: string,
    vocation: string,
    level: number,
    password: string,
  ): Promise<string> {
    await this.loginModel.createUser(username, vocation, level, password);
    const numToken = generateToken(username);
    return numToken;
  }
}