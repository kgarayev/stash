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
      "string.empty": "first name is required",
      "string.min": "first name should have a minimum length of 1",
      "string.max": "first name should have a maximum length of 50",
      "string.pattern.base":
        "first name can only contain letters, spaces, hyphens, and apostrophes",
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
      "string.empty": "last name is required",
      "string.min": "last name should have a minimum length of 1",
      "string.max": "last name should have a maximum length of 50",
      "string.pattern.base":
        "last name can only contain letters, spaces, hyphens, and apostrophes",
    }),

  number: joi
    .string()
    .pattern(
      /^(((\+44\d{4}|\(?0\d{4}\)?)\d{3}\d{3})|((\+44\d{3}|\(?0\d{3}\)?)\d{3}\d{4})|((\+44\d{2}|\(?0\d{2}\)?)\d{4}\d{4}))/
    )
    .required()
    .messages({
      "string.empty": "phone number is required",
      "string.pattern.base": "phone number must be a valid UK phone number",
    }),

  email: joi
    .string()
    .required()
    .email({ tlds: { allow: false } })
    .messages({
      "string.empty": "email is required",
      "string.email": "email must be a valid email address",
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
      "string.empty": "date of birth is required",
      "string.pattern.base": "date of birth must be in the format dd/mm/yyyy",
      "any.custom": "age must be at least 18 years old",
    }),

  password: joi
    .string()
    .min(8)
    .max(32)
    .trim()
    .pattern(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).*/)
    .messages({
      "string.empty": "password is required",
      "string.min":
        "password must have a minimum length of {#limit} characters",
      "string.max":
        "password must have a maximum length of {#limit} characters",
      "string.pattern.base":
        "password must contain an uppercase letter, a lowercase letter, and a number",
    }),

  confirmPassword: joi.string().valid(joi.ref("password")).messages({
    "any.only": "passwords do not match",
    "string.empty": "is not allowed to be empty",
  }),
};

export const login = {
  email: joi
    .string()
    .required()
    .email({ tlds: { allow: false } })
    .messages({
      "string.empty": "email is required",
      "string.email": "email must be a valid email address",
    }),

  password: joi.string().min(8).max(20).trim().messages({
    "string.empty": "password is required",
    "string.min": "password must have a minimum length of {#limit} characters",
    "string.max": "password must have a maximum length of {#limit} characters",
  }),
};

export const pay = {
  payeeName: joi
    .string()
    .required()
    .min(1)
    .max(70)
    .pattern(/^[A-Za-z\s'-]+$/)
    .trim()
    .normalize()
    .lowercase()
    .messages({
      "string.empty": "payee name is required",
      "string.min": "payee name should have a minimum length of 1",
      "string.max": "payee n1ame should have a maximum length of 70",
      "string.pattern.base":
        "payee name can only contain letters, spaces, hyphens, and apostrophes",
    }),

  sortCode: joi
    .string()
    .pattern(/^(\d{2}-?)?(\d{2}-?)?\d{2}$/)
    .required()
    .min(6)
    .max(8)
    .messages({
      "string.empty": "sort code is required",
      "string.pattern.base": "sort code must be a valid UK sort code",
    }),

  accountNumber: joi
    .string()
    .pattern(/^\d{8}$/)
    .required()
    .length(8)
    .messages({
      "string.empty": "bank account number is required",
      "string.pattern.base": "bank account number must be 8 digits",
    }),
};
