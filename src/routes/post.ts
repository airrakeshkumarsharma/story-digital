import PostController from "@controllers/post";
import { asyncMiddleware as aM } from "@middlewares/asyncMiddleware";
import { authenticate } from "@middlewares/auth";
import { validator } from "@middlewares/validator";
import { postSchema } from "@validators";
import { Router } from "express";

const router = Router();

const postController = new PostController();

router.post("/", authenticate, validator({ body: postSchema.create }), aM(postController.createPost));

router.get("/:postId", aM(postController.getPost));

router.get("/", aM(postController.getPosts));

router.put("/:postId", authenticate, aM(postController.updatePost));

router.delete("/:postId", authenticate, aM(postController.deletePost));

export { router as postRouter };
