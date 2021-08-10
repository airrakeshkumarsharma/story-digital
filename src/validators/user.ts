import { CONSTANTS, ENUMS, ENUMS_ARRAY } from "@configs";
import { Joi } from "celebrate";

export const userSchema = {
  create: Joi.object().keys({
    name: Joi.string().max(CONSTANTS.USER.MAX_FIRST_NAME_LEN).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(CONSTANTS.USER.MIN_PASSWORD_LEN).required()
  }),

  login: Joi.object().keys({
    email: Joi.string().email().required(),
    password: Joi.string().required()
  })
};
