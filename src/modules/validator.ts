// import { objectLiteral } from "../interfaces";

// export const emailRegex = /^[A-Za-z0-9.-_]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
// export const passwordRegex = /[a-ZA-Z0-9]/;
// export const name = /^[A-Za-z]+\s([A-Za-z]+\s)?[A-Za-z]+$/;

// export const magicTrimmer = (payload: objectLiteral) => {
//   const data = {};

//   Object.keys(payload).forEach(key => {
//     const value: any = payload[key];
//     Object.assign(data, { [key]: value.trim() });
//   });

//   return data;
// };

// export const validateAgainstRegex = (
//   value: string,
//   regex: RegExp,
//   regexType: string
// ) => {
//   let errorMessage: string = "";

//   if (!value) return null;

//   switch (regexType) {
//     case "password":
//       errorMessage =
//         "password length should be at least eight characters password must contain at least one Uppercase letter, one lowercase letter, and a digit";
//       break;

//     case "name":
//       errorMessage = "name is not valid";
//       break;

//     case "email":
//       errorMessage = "email is not valid";
//       break;

//     default:
//       break;
//   }

//   if (!regex.test(value)) return errorMessage;

//   return undefined;
// };

// export const errorChecker = (obj: objectLiteral) => {
//   const result: any = {};

//   Object.keys(obj).forEach(key => {
//     if (obj[key]) {
//       result[key] = obj[key];
//     }

//     if (obj[key] === null) {
//       result[key] = `${key} is required`;
//     }
//   });

//   if (Object.keys(result).length) {
//     return Object.values(result);
//   }

//   return null;
// };

const passwordRegex = /[a-zA-Z0-9]+/;

if (passwordRegex.test("home")) console.log("jkjk");
