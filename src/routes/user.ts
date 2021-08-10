import UserController from "@controllers/user";
import { asyncMiddleware as aM } from "@middlewares/asyncMiddleware";
import { validator } from "@middlewares/validator";
import { userSchema } from "@validators";
import { Router } from "express";

const router = Router();

const userController = new UserController();
// Auth
router.post("/signup", validator({ body: userSchema.create }), aM(userController.post));
router.post("/login", validator({ body: userSchema.login }), aM(userController.login));

export { router as userRouter };
