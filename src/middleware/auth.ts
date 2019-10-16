import { Request, Response, NextFunction } from "express";

import {
  validateAgainstRegex,
  emailRegex,
  passwordRegex,
  errorChecker
} from "../modules/validator";
import { sendErrorResponse } from "../modules/sendResponse";

class Auth {
  static signup(req: Request, res: Response, next: NextFunction) {
    const { email, password } = req.body;

    const schema = {
      email: validateAgainstRegex(email, emailRegex, "email"),
      password: validateAgainstRegex(password, passwordRegex, "password")
    };

    const errors = errorChecker(schema);

    if (errors) return sendErrorResponse(res, 422, errors);

    next();
  }
}

export default Auth;
