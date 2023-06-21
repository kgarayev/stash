import joi from "joi";

// define schema
export const register = {
  firstName: joi
    .string()
    .required()
    .min(1)
    .max(50)
    .pattern(/^[A-Za-z\s'-]+$/)
    .trim()
    .normalize()
    .lowercase()
    .messages({
      "string.base": "First name must be a string.",
      "string.empty": "First name is required.",
      "string.min": "First name should have a minimum length of 1.",
      "string.max": "First name should have a maximum length of 50.",
      "string.pattern.base":
        "First name can only contain letters, spaces, hyphens, and apostrophes.",
    }),

  lastName: joi
    .string()
    .required()
    .min(1)
    .max(50)
    .pattern(/^[A-Za-z\s'-]+$/)
    .trim()
    .normalize()
    .lowercase()
    .messages({
      "string.empty": "First name is required.",
      "string.min": "First name should have a minimum length of 1.",
      "string.max": "First name should have a maximum length of 50.",
      "string.pattern.base":
        "First name can only contain letters, spaces, hyphens, and apostrophes.",
    }),

  number: joi
    .string()
    .pattern(
      /^(((\+44\d{4}|\(?0\d{4}\)?)\d{3}\d{3})|((\+44\d{3}|\(?0\d{3}\)?)\d{3}\d{4})|((\+44\d{2}|\(?0\d{2}\)?)\d{4}\d{4}))/
    )
    .required()
    .messages({
      "string.empty": "Phone number is required.",
      "string.pattern.base": "Phone number must be a valid UK phone number.",
    }),

  email: joi
    .string()
    .required()
    .email({ tlds: { allow: false } })
    .messages({
      "string.empty": "Email is required.",
      "string.email": "Email must be a valid email address.",
    }),

  dob: joi
    .string()
    .pattern(/^(\d{2})\/(\d{2})\/(\d{4})$/)
    .required()
    .custom((value, helpers) => {
      const currentDate = new Date();
      const birthDate = new Date(value);
      let age = currentDate - birthDate;

      age = Math.floor(age / (1000 * 60 * 60 * 24 * 365.25));

      if (age < 18) {
        return helpers.error("any.custom");
      }

      return value;
    })
    .messages({
      "string.empty": "Date of birth is required.",
      "string.pattern.base": "Date of birth must be in the format dd/mm/yyyy.",
      "any.custom": "Age must be at least 18 years old.",
    }),

  password: joi
    .string()
    .min(8)
    .max(20)
    .trim()
    .pattern(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).*/)
    .messages({
      "string.empty": "Password is required.",
      "string.min":
        "Password must have a minimum length of {#limit} characters.",
      "string.max":
        "Password must have a maximum length of {#limit} characters.",
      "string.pattern.base":
        "Password must contain an uppercase letter, a lowercase letter, and a number.",
    }),

  confirmPassword: joi.string().valid(joi.ref("password")).messages({
    "any.only": "Passwords do not match.",
  }),
};

export const login = {
  email: joi
    .string()
    .required()
    .email({ tlds: { allow: false } })
    .messages({
      "string.empty": "Email is required.",
      "string.email": "Email must be a valid email address.",
    }),

  password: joi.string().min(8).max(20).trim().messages({
    "string.empty": "Password is required.",
    "string.min": "Password must have a minimum length of {#limit} characters.",
    "string.max": "Password must have a maximum length of {#limit} characters.",
  }),
};
