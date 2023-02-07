import { ErrorRequestHandler, NextFunction, Request, Response } from 'express';
import UsernameNotFound from '../errors/UserNameNotFound';

const errorMidd: ErrorRequestHandler = (
  err: UsernameNotFound, 
  _req: Request, 
  res: Response, 
  _next: NextFunction,
) => {
  res.status(err.statusCode || 500).json({ message: err.message });
};

export default errorMidd;