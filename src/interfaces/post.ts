import { mongoose } from "@configs";
import { ObjectId } from "mongoose";

export interface PostSI {
  userId: ObjectId,
  text: string,
  media: string
}

export default interface PostI extends PostSI, mongoose.Document {}