import { Router } from 'express';
import LoginController from '../controllers/loginController';
import usernameMidd from '../Middlewares/usernameMidd';
import vocationMidd from '../Middlewares/vocationMidd';
import levelMidd from '../Middlewares/levelMidd';
import passwordMidd from '../Middlewares/passwordMidd';

const loginController = new LoginController();
const userRouter = Router();

userRouter.post(
  '/',
  usernameMidd,

  vocationMidd,

  levelMidd,

  passwordMidd,

  (req, res) => loginController.createUser(req, res),
);

export default userRouter;