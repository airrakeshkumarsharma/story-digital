import UserSI from "@interfaces/user";
import { postModel } from "@models";
import BaseService from "./base";

class PostService extends BaseService<UserSI> {
  constructor() {
    super(postModel);
  }
}

export default new PostService();
