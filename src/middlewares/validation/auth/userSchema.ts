import Joi from "joi";

export const userSchemaValidator = {
  register: Joi.object({
    username: Joi.string().required(),
    phone: Joi.string().required(),
    address: Joi.string().required(),
    LGA: Joi.string().required(),
    password: Joi.string().min(6).required(),
    confirmPassword: Joi.string().required().valid(Joi.ref("password")),
  }),
  login: Joi.object({
    phone: Joi.string().required(),
    password: Joi.string().min(6).required(),
  }),
};
