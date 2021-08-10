import { configs, CONSTANTS } from "@configs";
import * as JWT from "jsonwebtoken";

/**
 * 
 * @param payload Payload of JWT token
 * @param expiresIn Time to expire of any token
 * @param isBearerToken Want to create Bearer token or JWT token
 * @returns Return Token according to our requirement
 */
const createToken = (payload: object, expiresIn: string, isBearerToken = true) => {
  const token = JWT.sign(payload, configs.auth.JWT_SECRET, { expiresIn });
  return isBearerToken ? `Bearer ${token}` : token;
};

export const loginToken = (data: object) => {
  return createToken(data, CONSTANTS.TOKEN_EXPIRE_TIME.LOGIN, false);
};
