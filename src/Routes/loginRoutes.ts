import { Router } from 'express';
import LoginController from '../controllers/loginController';

const loginController = new LoginController();
const loginRouter = Router();

loginRouter.post('/', (req, res) => loginController.createUser(req, res));

export default loginRouter;