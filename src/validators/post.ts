import { Joi } from "celebrate";

export const postSchema = {
  create: Joi.object().keys({
    title: Joi.string().required(),
    text: Joi.string().required(),
    media: Joi.string()
  })
};
