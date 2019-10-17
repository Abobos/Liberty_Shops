import { Router } from "express";

import Auth from "../middlewares/auth";
import AuthController from "../controllers/auth";

const authRouter = Router();

authRouter.post("/signup", Auth.signup, AuthController.signup);

export default authRouter;
