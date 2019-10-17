import { Request, Response, NextFunction, Application } from "express";

import { InternalServerError } from "../exceptions";
import { logger } from "../utils";

export const defaultErrorHandler = (app: Application) =>
  app.use(
    (
      error: InternalServerError,
      req: Request,
      res: Response,
      next: NextFunction
    ) => {
      process.env.NODE_ENV !== "production" &&
        (error.statusCode === 500 && logger(`Error:server`, error.stack));

      res.status(error.statusCode).send({
        status: "error",
        error:
          error.statusCode === 500 ? "Internal Server Error" : error.message
      });
    }
  );
