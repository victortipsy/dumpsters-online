import { NextFunction } from "express";
import Joi from "joi";
import { HTTPCODE, appError } from "../../utils/appError";

export const validator = (
  schemaName: Joi.ObjectSchema,
  body: Object,
  next: NextFunction
) => {
  const value = schemaName.validate(body, {
    abortEarly: false,
    allowUnknown: true,
    stripUnknown: true,
  });
  try {
    value.error
      ? next(
          new appError({
            httpCode: HTTPCODE.UNPROCESSABLE_IDENTITY,
            message: value.error.details[0].message,
          })
        )
      : next();
  } catch (error: any) {
    next(
      new appError({
        httpCode: HTTPCODE.BAD_REQUEST,
        message: error.name,
      })
    );
  }
};
