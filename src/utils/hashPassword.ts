import bcrypt from "bcrypt";

export const hashPassword = (password: string) => bcrypt.hashSync(password, 10);

export const comparePassword = (
  unHashedPassword: string,
  hashedPassword: string
) => bcrypt.compareSync(unHashedPassword, hashedPassword);
