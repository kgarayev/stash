import joi from "joi";
import { register, login } from "./schemas";

export const validate = async (payload, type) => {
  console.log(payload);
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

    default:
      break;
  }

  try {
    const results = await option.validateAsync(payload, { aboutEarly: false });
    return null;
  } catch (errors) {
    console.log(payload);
    console.log(errors);

    const errorsModified = {};
    errors.details.forEach((error) => {
      errorsModified[error.context.key] = error.message;
    });

    return errorsModified;
  }
};
