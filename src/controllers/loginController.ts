import { Request, Response } from 'express';
import LoginService from '../services/loginService';

export default class LoginController {
  constructor(private loginService = new LoginService()) {}

  async createUser(req: Request, res: Response): Promise<void> {
    const { username, vocation, level, password } = req.body;
    const token = await this.loginService.createUser(username, vocation, level, password);
    req.headers.authorization = token;
    const tokenObj = {
      token,
    };
    res.status(201).json(tokenObj);
  }

  async verifyLogin(req: Request, res: Response): Promise<void> {
    const { username, password } = req.body;
    const token = await this.loginService.verifyLogin(username, password);
    req.headers.authorization = token;
    const tokenObj = {
      token,
    };
    res.status(200).json(tokenObj);
  }
}