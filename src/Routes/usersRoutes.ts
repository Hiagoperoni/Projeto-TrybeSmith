import { Router } from 'express';
import LoginController from '../controllers/loginController';

const loginController = new LoginController();
const userRouter = Router();

userRouter.post('/', (req, res) => loginController.createUser(req, res));

export default userRouter;