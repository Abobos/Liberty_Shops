import { Router, Request, Response, NextFunction } from "express";
import { InternalServerError } from "../exceptions";
import { logger } from "../utils";

const router = Router();

router.all("/*", (req: Request, res: Response) =>
  res.status(404).send({
    status: "error",
    error: "This route is unavailable on this server"
  })
);

router.use(
  (
    error: InternalServerError,
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    if (process.env.NODE_ENV !== "production")
      logger(`Error:server`, error.stack);
    res.status(error.statusCode);
    res.send({
      status: "error",
      error: error.statusCode === 500 ? "Internal Server Error" : error.message
    });
  }
);

export default router;
