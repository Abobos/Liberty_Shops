import { Request, Response, NextFunction } from "express";

import UserRepository from "@repositories/user";

import { sendSuccessResponse } from "@modules/sendResponse";
import { createToken, hashPassword, comparePassword, logger } from "../utils";

import { ConflictError, AuthenticationError } from "../exceptions";

class AuthController {
  static async signup(req: Request, res: Response, next: NextFunction) {
    try {
      const {
        name: userName,
        email: userEmail,
        password: userPassword,
        phone_number: userPhoneNumber,
        address: userAddress,
      } = req.body;

      const selectedColumns = "*";
      const condition = `email = '${userEmail}'`;

      const user = await UserRepository.findOne(selectedColumns, condition);

      if (user) throw new ConflictError("This email already exists");

      const hashedPassword = hashPassword(userPassword);

      const column = "name, email, password, phone_number, address";
      const values = `'${userName}', '${userEmail}', '${hashedPassword}', '${userPhoneNumber}', '${userAddress}'`;

      const {
        id,
        name,
        email,
        is_admin: isAdmin,
      } = await UserRepository.create(column, values);

      return sendSuccessResponse(
        res,
        201,
        createToken({
          id,
          name,
          email,
          is_admin: isAdmin,
        })
      );
    } catch (err) {
      return next(err);
    }
  }

  static async signin(req: Request, res: Response, next: NextFunction) {
    try {
      const { email: userEmail, password } = req.body;

      const selectedColumns = "*";
      const condition = `email = '${userEmail}'`;

      const existingUser = await UserRepository.findOne(
        selectedColumns,
        condition
      );

      if (!existingUser) throw new AuthenticationError("Invalid credentials");

      const isPasswordValid = comparePassword(password, existingUser.password);

      if (!isPasswordValid)
        throw new AuthenticationError("Invalid credentials");

      const { id, name, email, is_admin: isAdmin } = existingUser;

      return sendSuccessResponse(
        res,
        201,
        createToken({
          id,
          name,
          email,
          is_admin: isAdmin,
        })
      );
    } catch (err) {
      return next(err);
    }
  }
}

export default AuthController;
