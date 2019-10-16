import { Router, Request, Response } from "express";

import authRoute from "./auth";

import {
  sendSuccessResponse,
  sendErrorResponse
} from "../modules/sendResponse";

const router = Router();

router.use("/api/v1/auth", authRoute);

router.get("/", (req: Request, res: Response) =>
  sendSuccessResponse(res, 200, {
    message: "Welcome to Property Pro Lite REST API"
  })
);

router.all("/*", (req: Request, res: Response) =>
  sendErrorResponse(res, 200, "This route is unavailable on this server")
);

export default router;
