import { Application, Request, Response, NextFunction } from "express";
import morgan from "morgan";
import express from "express";
import cors from "cors";
import { errorHandler } from "./middlewares/error/errorHandler";
import { HTTPCODE, appError } from "./utils/appError";
import godRouter from "./routes/goRoutes";

export const appConfig = (app: Application) => {
  app
    .use(morgan("dev"))
    .use(express.json())
    .use(cors())
    .use("/api/god", godRouter)
    // catch wrong routes
    .all("*", (req: Request, res: Response, next: NextFunction) => {
      next(
        new appError({
          message: `This route${req.originalUrl} does not exist`,
          httpCode: HTTPCODE.NOT_FOUND,
        })
      );
    })

    //error middleware
    .use(errorHandler);
};
