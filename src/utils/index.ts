import Debug from "debug";
import "dotenv/config";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

import { objectLiteral } from "../interfaces";

export const logger = (namespace: string, message: string | undefined) => {
  const log = Debug(`${namespace}`);
  return log(`${message}`);
};

export const createToken = (payload: objectLiteral) => {
  const token = jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: "24h"
  });
  return token;
};

export const verifyToken = (token: string) => {
  const verifiedToken = jwt.verify(token, process.env.JWT_SECRET, {
    expiresIn: "24h"
  });
  return verifiedToken;
};

export const hashPassword = (password: string) => bcrypt.hashSync(password, 10);

export const comparePassword = (
  unHashedPassword: string,
  hashedPassword: string
) => bcrypt.compareSync(unHashedPassword, hashedPassword);
