import { Response, Request, NextFunction } from "express";
import { appError } from "../../utils/appError";

const devError = (err: appError, res: Response) => {
  return res.status(err.httpCode).json({
    httpCode: err.httpCode,
    error: err,
    message: err.message,
    stack: err.stack,
  });
};

export const errorHandler = (
  err: appError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  devError(err, res);
};
