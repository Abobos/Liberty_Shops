import { Request, Response, NextFunction } from "express";

import {
  emailRegex,
  passwordRegex,
  nameRegex,
  addressRegex,
  phoneNumberRegex,
  validateAgainstRegex,
  errorChecker,
  magicTrimmer
} from "../modules/validator";
import { sendErrorResponse } from "../modules/sendResponse";

class Auth {
  static signup(req: Request, res: Response, next: NextFunction) {
    const userData = magicTrimmer(req.body);

    const {
      name,
      email,
      password,
      address,
      phone_number: phoneNumber
    } = userData;

    const schema = {
      name: validateAgainstRegex(name, nameRegex, "name"),
      email: validateAgainstRegex(email, emailRegex, "email"),
      password: validateAgainstRegex(password, passwordRegex, "password"),
      address: validateAgainstRegex(address, addressRegex, "address"),
      phone_number: validateAgainstRegex(
        phoneNumber,
        phoneNumberRegex,
        "phonenumber"
      )
    };

    const errors = errorChecker(schema);

    if (errors) return sendErrorResponse(res, 422, errors);

    next();
  }
}

export default Auth;
