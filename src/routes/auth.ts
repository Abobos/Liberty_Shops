import { Router } from "express";

import Auth from "../middleware/auth";

const authRouter = Router();

authRouter.post("/signup", Auth.signup);

export default authRouter;
