import Debug from "debug";

export const logger = (namespace: string, message: string | undefined) => {
  const log = Debug(`${namespace}`);
  return log(`${message}`);
};
