import { celebrate } from "celebrate";
import multer from "multer";
import { errorRes } from "./error";

const validationOptions = {
  abortEarly: true, // abort after the first validation error
  allowUnknown: true, // allow unknown keys that will be ignored
  stripUnknown: { arrays: false, objects: true } // remove unknown keys from objects  but not arrays
};

export const validator = (schema: object) => celebrate(schema, validationOptions);