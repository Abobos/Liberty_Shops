import "dotenv/config";
import jwt from "jsonwebtoken";

import { objectLiteral } from "../interfaces";

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
