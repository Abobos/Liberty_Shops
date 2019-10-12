import Debug from "debug";

export const logger = (namespace: string, message: string): string => {
  return new Debug(`${namespace} ${message}`);
};
