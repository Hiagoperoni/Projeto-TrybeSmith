import LoginModel from '../models/loginModel';
import connection from '../models/connection';
import generateToken from '../Utils/JWT';
import UsernameNotFound from '../errors/UserNameNotFound';

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

  async verifyLogin(
    username: string,
    password: string,
  ): Promise<string | undefined> {
    const result = await this.loginModel.verifyLogin(username, password);
    if (!result) {
      throw new UsernameNotFound(401, 'Username or password invalid');
    }
    const numToken = generateToken(username);
    return numToken;
  }
}