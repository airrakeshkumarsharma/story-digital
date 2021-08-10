import { mongoose } from "@configs";

export default class BaseService<T> {
  model: mongoose.Model<any>;
  constructor(model: mongoose.Model<any>) {
    this.model = model;
  }

  create = async (data: T) => {
    const resource = await this.model.create(data);
    return resource;
  };

  exists = async (filters: object) => {
    const resource = (await this.model.exists(filters)) as boolean;
    return resource;
  };

  insertMany = async (data: T[]) => {
    const resource = await this.model.insertMany(data);
    return resource;
  };

  get = async (filters = {}, projection: object): Promise<T[]> => {
    const resource = (await this.model.find(filters, projection)) as T[];
    return resource;
  };

  aggregate = async (pipeline: object[]): Promise<T[]> => {
    const resource = (await this.model.aggregate(pipeline)) as T[];
    return resource;
  };

  getById = async (id: string, projection: object): Promise<T> => {
    const resource = (await this.model.findOne({ _id: mongoose.Types.ObjectId(id) }, projection)) as T;
    return resource;
  };

  getOne = async (filters: object = {}, projection: object): Promise<T> => {
    const resource = (await this.model.findOne(filters, projection)) as T;
    return resource;
  };

  updateOne = async (filters: object = {}, payload: object): Promise<T> => {
    const resource = (await this.model.updateOne(filters, payload)) as T;
    return resource;
  };

  delete = (id: string): void => {
    return this.model.remove({ _id: mongoose.Types.ObjectId(id) });
  };

  deleteOne = async (condition: object): Promise<void> => {
    return await this.model.deleteOne(condition);
  };
}
