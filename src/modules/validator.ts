import { objectLiteral } from "../interfaces";

export const emailRegex = /^[A-Za-z0-9.-_]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;

export const passwordRegex = /^[]{8,}/;

export const nameRegex = /^[A-Za-z]+\s([A-Za-z]+\s)?[A-Za-z]+$/;

export const addressRegex = /./;

export const phoneNumberRegex = /[\d]/;

export const magicTrimmer = (payload: objectLiteral): objectLiteral => {
  const data = {};

  Object.keys(payload).forEach(key => {
    const value: any = payload[key];
    Object.assign(data, { [key]: value.trim() });
  });

  return data;
};

export const validateAgainstRegex = (
  value: string,
  regex: RegExp,
  regexType: string
): string | undefined | null => {
  let errorMessage: string = "";

  if (!value) return null;

  switch (regexType) {
    case "password":
      errorMessage =
        "password length should be at least eight characters\n password must contain at least one Uppercase letter, one lowercase letter, and a digit";
      break;

    default:
      errorMessage = `${regexType} is not valid`;
      break;
  }

  if (!regex.test(value)) return errorMessage;

  return undefined;
};

export const errorChecker = (payload: objectLiteral): string[] | null => {
  const result: any = {};

  Object.keys(payload).forEach(key => {
    if (payload[key]) {
      result[key] = payload[key];
    } else if (payload[key] === null) {
      result[key] = `${key} is required`;
    }
  });

  if (Object.keys(result).length) {
    return Object.values(result);
  }

  return null;
};
