import _ from "lodash";
import postService from "@services/post";
import { Request, Response } from "express";
import { postProjection } from "@projection";
import BaseController from "./base";

export default class PostController extends BaseController {
  service;
  constructor() {
    super(postService);
    this.service = postService;
  }

  createPost = async (req: Request, res: Response) => {
    const { body } = req;
    const { _id: userId } = req.user
    
    const preParePost = { userId, ...body }
    await this.service.create(preParePost)

    return res.status(201).json({ data: { message: "Post created" } });
  }

  updatePost = async (req: Request, res: Response) => {
    const { body, params: { postId } } = req;
    const { _id: userId } = req.user
    
    const condition = { userId, _id: postId }
    const payload = { $set: body }
    await this.service.updateOne(condition, payload)

    return res.status(200).json({ data: { message: "Post Updated" } });
  }

  getPosts = async (req: Request, res: Response) => {
    const condition = { }
    const projection = postProjection(["minimal", "basic"]);
    const data = await this.service.get(condition, projection)

    return res.status(200).json({ data });
  }

  getPost = async (req: Request, res: Response) => {
    const { params: { postId } } = req;
    
    const condition = { _id: postId }
    const projection = postProjection(["minimal", "basic"]);
    const data = await this.service.getOne(condition, projection)

    return res.status(200).json({ data });
  }

  deletePost = async (req: Request, res: Response) => {
    const { params: { postId } } = req;
    const { _id: userId } = req.user
    
    const condition = { _id: postId, userId }
    await this.service.deleteOne(condition)

    return res.status(204).json({ data: { message: "Post Deleted" } });
  }
}
