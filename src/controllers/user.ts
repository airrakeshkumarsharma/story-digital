import _ from "lodash";
import { loginToken } from "@helpers/auth/tokenGenerator";
import { createHash } from "@helpers/crypto/hmac-sha-256";
import { errorRes } from "@middlewares/error";
import userService from "@services/user";
import { Request, Response } from "express";
import { userProjection } from "@projection";
import BaseController from "./base";

export default class UserAuthController extends BaseController {
  service;
  constructor() {
    super(userService);
    this.service = userService;
  }

  login = async (req: Request, res: Response) => {
    const { email, password } = req.body;

    // Get hash of email. Since email is not stored in plain text
    const emailHash = createHash(email);

    // Get User info
    const filters = { emailHash };
    const projection = userProjection(["basic", "minimal", "internal"]);
    const userDbData = await this.service.getOne(filters, projection);
    if (!userDbData || !userDbData.validatePassword(password)) {
      throw errorRes.login();
    }

    // Generate login Token
    let data: object = { _id: userDbData._id };
    const token: string = loginToken(data);
    data = { ...data, name: userDbData.name, email: userDbData.email, token };

    // TODO: Send through standard response
    return res.status(200).send({ data });
  };
}
