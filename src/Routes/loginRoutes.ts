import { Router } from 'express';
import LoginController from '../controllers/loginController';
import usernameNotFound from '../Middlewares/userNameErrorMidd';

const loginController = new LoginController();
const loginRouter = Router();

loginRouter.post('/', usernameNotFound, (req, res) => loginController.verifyLogin(req, res));

export default loginRouter;