import joi from "joi";
import { register, login, pay, debit, passwordChange } from "./schemas";

// main joi validagtion functions

export const validate = async (payload, type) => {
  let option;

  switch (type) {
    case "register":
      // call joi
      option = joi.object(register);
      break;

    case "login":
      // call joi
      option = joi.object(login);
      break;

    case "pay":
      // call joi
      option = joi.object(pay);
      break;

    case "debit":
      // call joi
      option = joi.object(debit);
      break;

    case "passwordChange":
      // call joi
      option = joi.object(passwordChange);
      break;

    default:
      break;
  }

  try {
    const results = await option.validateAsync(payload, { abortEarly: false });
    return null;
  } catch (errors) {
    const errorsModified = {};
    errors.details.forEach((error) => {
      errorsModified[error.context.key] = error.message;
    });

    return errorsModified;
  }
};
