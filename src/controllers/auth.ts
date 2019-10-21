import { Request, Response, NextFunction } from "express";

import UserRepository from "../repositories/user";

import { sendSuccessResponse } from "../modules/sendResponse";
import { createToken, hashPassword } from "../utils";
import { ConflictError } from "../exceptions";

class AuthController {
  static async signup(req: Request, res: Response, next: NextFunction) {
    try {
      const { name, email, password, phone_number, address } = req.body;

      const selectedColumns = "*";
      const condition = `email = ${email}`;

      const user = await UserRepository.findOne(selectedColumns, condition);

      if (user) throw new ConflictError("This email already exists");

      const hashedPassword = hashPassword(password);

      const column = "name, email, password, phone_number, address";
      const values = `'${name}', '${email}', '${hashedPassword}', '${phone_number}', '${address}'`;

      const createdUser = await UserRepository.create(column, values);

      return sendSuccessResponse(
        res,
        201,
        createToken({
          id: createdUser.id,
          name: createdUser.name,
          email: createdUser.email,
          is_admin: createdUser.is_admin
        })
      );
    } catch (err) {
      return next(err);
    }
  }
}

export default AuthController;
