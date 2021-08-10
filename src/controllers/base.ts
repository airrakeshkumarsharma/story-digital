import { Request, Response } from "express";
import BaseService from "@services/base";

export default class BaseController {
  service: BaseService<any>;
  constructor(service: BaseService<any>) {
    this.service = service;
  }

  post = async (req: Request, res: Response) => {
    const resource = await this.service.create(req.body);
    res.send(resource);
  };

  update = async (req: Request, res: Response) => {
    const resource = await this.service.create(req.body);
    res.send(resource);
  };

  delete = async (req: Request, res: Response) => {
    const { id } = req.params;
    const resource = this.service.delete(id);
    res.send(resource);
  };
}
